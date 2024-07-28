const express = require("express");
const fs = require("fs");
const app = express();
const port = 8000;
const mockDataPath = "./data/mock-data.json";

app.get("/api/get-history", (req, res) => {
  try {
    let obj;
    fs.readFile(mockDataPath, "utf-8", function (err, data) {
      if (err) throw err;
      obj = JSON.parse(data);
      const responseArray = obj.data.historic;
      res.send(responseArray);
    });
  } catch (error) {
    res.send("Erro ao ler arquivo mock-data : " + error);
  }
});

app.listen(port, () => {
  console.log("Application running at port " + port);
});
