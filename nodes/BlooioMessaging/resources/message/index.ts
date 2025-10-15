import type { INodeProperties } from 'n8n-workflow';

const showOnlyForMessage = {
	resource: ['message'],
};

export const messageDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: showOnlyForMessage,
		},
		options: [
			{
				name: 'Send',
				value: 'send',
				action: 'Send a message',
				description: 'Send a single text or attachment message',
				routing: {
					request: {
						method: 'POST',
						url: '=/v1/api/messages',
						headers: {
							'Idempotency-Key': '={{$parameter["idempotencyKey"]}}',
						},
					},
				},
			},
		],
		default: 'send',
	},
	{
		displayName: 'To',
		name: 'to',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: { ...showOnlyForMessage, operation: ['send'] },
		},
		description: 'Recipient phone number in E.164 format or email address',
		routing: {
			send: { type: 'body', property: 'to' },
		},
	},
	{
		displayName: 'Text',
		name: 'text',
		type: 'string',
		typeOptions: { rows: 5 },
		default: '',
		displayOptions: {
			show: { ...showOnlyForMessage, operation: ['send'] },
		},
		description: 'Text body of the message',
		routing: {
			send: { type: 'body', property: 'text' },
		},
	},
	{
		displayName: 'Attachments',
		name: 'attachments',
		type: 'collection',
		typeOptions: { multipleValues: true, multipleValueButtonText: 'Add URL' },
		default: { url: '' },
		displayOptions: {
			show: { ...showOnlyForMessage, operation: ['send'] },
		},
		description: 'Public URLs for media attachments',
		options: [{ displayName: 'URL', name: 'url', type: 'string', default: '' }],
		routing: {
			send: {
				type: 'body',
				property: 'attachments',
				value: '={{$value.filter((d) => d.url).map((d) => d.url)}}',
			},
		},
	},
	{
		displayName: 'Metadata',
		name: 'metadata',
		type: 'json',
		default: '{}',
		displayOptions: {
			show: { ...showOnlyForMessage, operation: ['send'] },
		},
		description: 'Arbitrary key/value pairs to associate with the message',
		routing: {
			send: { type: 'body', property: 'metadata' },
		},
	},
	{
		displayName: 'Idempotency Key',
		name: 'idempotencyKey',
		type: 'string',
		default: '',
		displayOptions: {
			show: { ...showOnlyForMessage, operation: ['send'] },
		},
		description: 'Optional: ensures idempotent message creation',
		// Header is set in operation routing.request.headers above
	},
];
