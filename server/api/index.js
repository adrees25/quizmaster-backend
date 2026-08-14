const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dns = require("dns");

dns.setServers(["8.8.8.8", "1.1.1.1"]);

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({
    message: "QuizMaster Backend is Running!",
    status: "success"
  });
});

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "OK",
    message: "QuizMaster API is working"
  });
});

if (process.env.MONGODB_URI) {
  mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log("MongoDB Connected"))
    .catch((err) =>
      console.error("MongoDB Connection Error:", err.message)
    );
} else {
  console.error("MONGODB_URI environment variable is missing");
}

module.exports = app;