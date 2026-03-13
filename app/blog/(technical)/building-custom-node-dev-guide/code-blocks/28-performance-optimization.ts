// Items in Batches verarbeiten
const batchSize = 100;
const batches = this.chunkArray(items, batchSize);

for (const batch of batches) {
  await this.processBatch(batch);
}

// Häufig abgerufene Daten cachen
private cache = new Map<string, any>();

private async getCachedData(key: string): Promise<any> {
  if (this.cache.has(key)) {
    return this.cache.get(key);
  }

  const data = await this.fetchData(key);
  this.cache.set(key, data);
  return data;
}
