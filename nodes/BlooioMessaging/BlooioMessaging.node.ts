import type { INodeType, INodeTypeDescription } from 'n8n-workflow';
import { messageDescription } from './resources/message';

export class BlooioMessaging implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Blooio Messaging',
		name: 'blooioMessaging',
		icon: { light: 'file:../../icons/blooio.svg', dark: 'file:../../icons/blooio.dark.svg' },
		group: ['input'],
		version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: 'Send messages via the Blooio API (v3)',
		defaults: {
			name: 'Blooio Messaging',
		},
		usableAsTool: true,
		inputs: ['main'],
		outputs: ['main'],
		credentials: [
			{
				name: 'blooioApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: 'https://edge.blooio.com',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				noDataExpression: true,
				options: [{ name: 'Message', value: 'message' }],
				default: 'message',
			},
			...messageDescription,
		],
	};
}
