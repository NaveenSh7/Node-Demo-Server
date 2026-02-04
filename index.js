const express = require("express");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 3000;
const Message =  process.env.MESSAGE ;

app.get("/", (req, res) => {
  res.send("Hello from Node.js on Cloud Run 🚀");
});
console.log(Message)
app.get("/message", (req, res) => {
   res.send(`This is from env : ${Message}`);
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
