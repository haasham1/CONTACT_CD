import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 5000;
const MONGO_URL = process.env.MONGO_URL;

// MongoDB connection
mongoose
  .connect(MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Connected!"))
  .catch((err) => console.log("MongoDB Connection Failed:", err));

// Simple test route
app.get("/", (req, res) => {
  res.send("Backend is running successfully!");
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
