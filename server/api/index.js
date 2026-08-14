const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({
    message: "QuizMaster Backend is Running!"
  });
});

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "OK",
    message: "QuizMaster API is working"
  });
});

module.exports = app;