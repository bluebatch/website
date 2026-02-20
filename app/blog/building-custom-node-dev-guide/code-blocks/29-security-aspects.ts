// Gut: Sicherer Credential-Zugriff
const credentials = await this.getCredentials('myApiCredentials');
const apiKey = credentials.apiKey as string;

// Niemals Credentials loggen
console.log('Making API call...'); // API-Key NICHT loggen

// User-Inputs sanitizen
private sanitizeInput(input: string): string {
  return input.replace(/[<>]/g, '');
}
