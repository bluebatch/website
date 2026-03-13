// Gut: Inputs validieren
private validateParameters(params: any): void {
  if (!params.email || !this.isValidEmail(params.email)) {
    throw new NodeOperationError(this.getNode(), 'Valid email is required');
  }
}
