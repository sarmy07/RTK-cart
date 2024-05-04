const express = require("express");
const cors = require("cors");
require("dotenv").config();
const products = require("./products");

const app = express();

const port = `${process.env.PORT}`;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello, This is our OnlineShop API...");
});

app.get("/products", (req, res) => {
  res.send(products);
});

app.listen(port, () => {
  console.log(`Server is running on PORT: ${port}`);
});
