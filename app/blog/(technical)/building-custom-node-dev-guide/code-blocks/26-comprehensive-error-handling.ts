// Gut: Umfassende Fehlerbehandlung
try {
  const result = await this.apiCall();
  return result;
} catch (error) {
  if (error.statusCode === 429) {
    throw new NodeApiError(this.getNode(), error, {
      message: "Rate limit exceeded",
      description: "Please try again later",
    });
  }

  throw new NodeOperationError(this.getNode(), error);
}
