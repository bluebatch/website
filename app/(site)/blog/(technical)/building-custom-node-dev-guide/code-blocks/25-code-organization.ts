// Gut: Separate Methoden für verschiedene Operationen
class MyNode implements INodeType {
  async execute(): Promise<INodeExecutionData[][]> {
    const operation = this.getNodeParameter("operation", 0);

    switch (operation) {
      case "create":
        return await this.create();
      case "update":
        return await this.update();
      case "delete":
        return await this.delete();
    }
  }

  private async create(): Promise<INodeExecutionData[][]> {
    // Create-Logik
  }
}
