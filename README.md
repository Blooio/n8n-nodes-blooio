# n8n-nodes-blooio

This is an n8n community node for [Blooio](https://blooio.com). It lets you send and receive iMessages, RCS, SMS, and more through the Blooio API in your n8n workflows.

[n8n](https://n8n.io/) is a [fair-code licensed](https://docs.n8n.io/sustainable-use-license/) workflow automation platform.

[Installation](#installation)  
[Operations](#operations)  
[Credentials](#credentials)  
[Compatibility](#compatibility)  
[Resources](#resources)

## Installation

Follow the [installation guide](https://docs.n8n.io/integrations/community-nodes/installation/) in the n8n community nodes documentation.

## Operations

### Messages

- **Send Message** - Send text messages and attachments via iMessage/SMS/RCS
- **Get Message** - Retrieve complete message details including delivery status
- **Get Message Status** - Check the delivery status of a message
- **Cancel Message** - Cancel a queued or scheduled message

### Contacts

- **Check Capabilities** - Check if a phone number or email supports iMessage, SMS, or RCS

### Webhooks

- **Get Webhook** - Get the currently configured webhook URL
- **Set Webhook** - Configure webhook URL for receiving inbound messages and delivery notifications

## Credentials

### API Key Authentication

1. Sign up for a Blooio account at [https://blooio.com](https://blooio.com)
2. Navigate to your Dashboard
3. Go to Settings > API Keys
4. Create a new API key or copy an existing one
5. In n8n, create a new Blooio credential:
   - Select "API Key" as the authentication method
   - Paste your API key
   - Save the credential

## Compatibility

Compatible with n8n@1.60.0 or later

## Resources

- [n8n community nodes documentation](https://docs.n8n.io/integrations/#community-nodes)
- [Blooio API Documentation](https://docs.blooio.com)
- [Blooio Dashboard](https://dashboard.blooio.com)
- [Support](mailto:support@blooio.com)
