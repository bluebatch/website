// Programmatischer Node verwendet execute-Methode
async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
  const items = this.getInputData();
  const returnData: INodeExecutionData[] = [];

  for (let i = 0; i < items.length; i++) {
    // Benutzerdefinierte Logik hier
    const result = await this.performCustomOperation(items[i]);
    returnData.push({ json: result });
  }

  return [returnData];
}