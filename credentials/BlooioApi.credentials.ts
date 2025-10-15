import type {
	IAuthenticateGeneric,
	Icon,
	ICredentialTestRequest,
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';

export class BlooioApi implements ICredentialType {
	name = 'blooioApi';

	displayName = 'Blooio API';

	icon: Icon = { light: 'file:../icons/blooio.svg', dark: 'file:../icons/blooio.dark.svg' };

	documentationUrl = 'https://blooio.com/integrations/n8n';

	properties: INodeProperties[] = [
		{
			displayName: 'API Key',
			name: 'apiKey',
			type: 'string',
			typeOptions: { password: true },
			default: '',
			description:
				'Get your API key from <a href="https://blooio.com" target="_blank">Blooio.com</a>',
		},
	];

	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			headers: {
				Authorization: '=Bearer {{$credentials?.apiKey}}',
			},
		},
	};

	test: ICredentialTestRequest = {
		request: {
			baseURL: 'https://edge.blooio.com',
			url: '/v1/api/me',
			method: 'GET',
		},
	};
}
