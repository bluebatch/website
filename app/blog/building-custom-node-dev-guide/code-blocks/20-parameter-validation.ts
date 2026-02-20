const leadId = this.getNodeParameter("leadId", i) as string;
if (!leadId) {
  throw new NodeOperationError(this.getNode(), "Lead ID parameter is required");
}

const email = this.getNodeParameter("emailaddress1", i) as string;
if (email && !this.isValidEmail(email)) {
  throw new NodeOperationError(this.getNode(), "Invalid email address format");
}
