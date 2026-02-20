const response = await this.helpers.request({
  method: "GET",
  url: "https://api.example.com/data",
  json: true,
});
console.log("API Response:", response);
