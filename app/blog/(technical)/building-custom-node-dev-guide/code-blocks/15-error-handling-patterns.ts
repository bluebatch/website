try {
  const result = await this.helpers.request(requestOptions);
  return result;
} catch (error) {
  if (error.statusCode === 401) {
    throw new NodeApiError(this.getNode(), error, {
      message: "Authentication failed",
      description:
        "Please check your Dynamics 365 credentials and access token",
    });
  }

  if (error.statusCode === 404) {
    throw new NodeOperationError(
      this.getNode(),
      "Lead not found or you do not have access to this resource",
    );
  }

  if (error.statusCode === 403) {
    throw new NodeApiError(this.getNode(), error, {
      message: "Insufficient permissions",
      description:
        "Your account does not have permission to perform this operation",
    });
  }

  throw new NodeOperationError(this.getNode(), error);
}
