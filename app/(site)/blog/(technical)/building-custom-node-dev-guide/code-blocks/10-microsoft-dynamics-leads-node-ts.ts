import {
  IExecuteFunctions,
  INodeExecutionData,
  INodeType,
  INodeTypeDescription,
  NodeApiError,
  NodeOperationError,
} from "n8n-workflow";

export class MicrosoftDynamicsLeads implements INodeType {
  description: INodeTypeDescription = {
    displayName: "Microsoft Dynamics Leads",
    name: "microsoftDynamicsLeads",
    icon: "file:dynamics365.svg",
    group: ["transform"],
    version: 1,
    description: "Manage leads in Microsoft Dynamics 365 CRM",
    defaults: {
      name: "Dynamics Leads",
    },
    inputs: ["main"],
    outputs: ["main"],
    credentials: [
      {
        name: "microsoftDynamicsApi",
        required: true,
      },
    ],
    properties: [
      // Properties würden hier aus der JSON-Datei geladen
    ],
  };

  async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
    const items = this.getInputData();
    const returnData: INodeExecutionData[] = [];

    for (let i = 0; i < items.length; i++) {
      try {
        const operation = this.getNodeParameter("operation", i) as string;
        const credentials = await this.getCredentials("microsoftDynamicsApi");

        const instanceUrl = credentials.instanceUrl as string;
        const accessToken = credentials.accessToken as string;

        const baseUrl = `${instanceUrl}/api/data/v9.2`;

        let result: any;

        switch (operation) {
          case "create": {
            // Lead erstellen
            const firstname = this.getNodeParameter("firstname", i) as string;
            const lastname = this.getNodeParameter("lastname", i) as string;
            const emailaddress1 = this.getNodeParameter(
              "emailaddress1",
              i,
            ) as string;
            const companyname = this.getNodeParameter(
              "companyname",
              i,
            ) as string;

            const leadData = {
              firstname,
              lastname,
              emailaddress1,
              companyname,
              subject: `Lead: ${firstname} ${lastname}`,
            };

            result = await this.helpers.request({
              method: "POST",
              url: `${baseUrl}/leads`,
              headers: {
                Authorization: `Bearer ${accessToken}`,
                "Content-Type": "application/json",
                "OData-MaxVersion": "4.0",
                "OData-Version": "4.0",
              },
              body: leadData,
              json: true,
            });

            returnData.push({
              json: {
                operation: "create",
                success: true,
                leadId: result.leadid,
                ...leadData,
              },
            });
            break;
          }

          case "read": {
            // Lead abrufen
            const leadId = this.getNodeParameter("leadId", i) as string;

            result = await this.helpers.request({
              method: "GET",
              url: `${baseUrl}/leads(${leadId})`,
              headers: {
                Authorization: `Bearer ${accessToken}`,
                "OData-MaxVersion": "4.0",
                "OData-Version": "4.0",
              },
              json: true,
            });

            returnData.push({
              json: {
                operation: "read",
                success: true,
                lead: result,
              },
            });
            break;
          }

          case "update": {
            // Lead aktualisieren
            const leadId = this.getNodeParameter("leadId", i) as string;
            const firstname = this.getNodeParameter("firstname", i) as string;
            const lastname = this.getNodeParameter("lastname", i) as string;
            const emailaddress1 = this.getNodeParameter(
              "emailaddress1",
              i,
            ) as string;
            const companyname = this.getNodeParameter(
              "companyname",
              i,
            ) as string;

            const updateData = {
              firstname,
              lastname,
              emailaddress1,
              companyname,
            };

            await this.helpers.request({
              method: "PATCH",
              url: `${baseUrl}/leads(${leadId})`,
              headers: {
                Authorization: `Bearer ${accessToken}`,
                "Content-Type": "application/json",
                "OData-MaxVersion": "4.0",
                "OData-Version": "4.0",
              },
              body: updateData,
              json: true,
            });

            returnData.push({
              json: {
                operation: "update",
                success: true,
                leadId,
                ...updateData,
              },
            });
            break;
          }

          default:
            throw new NodeOperationError(
              this.getNode(),
              `Unknown operation: ${operation}`,
            );
        }
      } catch (error) {
        if (this.continueOnFail()) {
          returnData.push({
            json: {
              error: error.message,
              statusCode: error.statusCode,
            },
          });
          continue;
        }

        // Spezifisches Error Handling für Dynamics API
        if (error.statusCode === 401) {
          throw new NodeApiError(this.getNode(), error, {
            message: "Authentication failed",
            description: "Please check your credentials and access token",
          });
        }

        if (error.statusCode === 404) {
          throw new NodeOperationError(
            this.getNode(),
            "Lead not found or you do not have access",
          );
        }

        throw new NodeOperationError(this.getNode(), error);
      }
    }

    return [returnData];
  }
}
