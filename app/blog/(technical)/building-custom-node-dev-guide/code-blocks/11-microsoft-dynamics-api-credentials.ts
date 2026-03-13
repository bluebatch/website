import { ICredentialType, INodeProperties } from "n8n-workflow";

export class MicrosoftDynamicsApi implements ICredentialType {
  name = "microsoftDynamicsApi";
  displayName = "Microsoft Dynamics 365 API";
  documentationUrl = "https://learn.microsoft.com/en-us/dynamics365/";
  properties: INodeProperties[] = [
    {
      displayName: "Instance URL",
      name: "instanceUrl",
      type: "string",
      default: "https://yourorg.crm.dynamics.com",
      required: true,
      description: "Your Dynamics 365 instance URL",
      placeholder: "https://yourorg.crm.dynamics.com",
    },
    {
      displayName: "Client ID",
      name: "clientId",
      type: "string",
      default: "",
      required: true,
      description: "OAuth 2.0 Client ID from Azure AD App Registration",
    },
    {
      displayName: "Client Secret",
      name: "clientSecret",
      type: "string",
      typeOptions: {
        password: true,
      },
      default: "",
      required: true,
      description: "OAuth 2.0 Client Secret",
    },
    {
      displayName: "Tenant ID",
      name: "tenantId",
      type: "string",
      default: "",
      required: true,
      description: "Azure AD Tenant ID",
    },
    {
      displayName: "Access Token",
      name: "accessToken",
      type: "string",
      typeOptions: {
        password: true,
      },
      default: "",
      required: true,
      description: "OAuth 2.0 Access Token for API requests",
    },
  ];
}
