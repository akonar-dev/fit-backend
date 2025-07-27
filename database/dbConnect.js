const mongoose = require("mongoose");

const DB_PASSWORD = process.env.DB_PASSWORD

const URI = `mongodb+srv://akonardev:${DB_PASSWORD}@fitfluencer.qmijv2d.mongodb.net/?retryWrites=true&w=majority&appName=Fitfluencer`;

async function connectToDb() {
  try {
    await mongoose.connect(URI);
    console.log("MongoDB connected successfully");
  } catch (err) {
    console.error("MongoDB connection error:", err.message);
  }
}

module.exports = connectToDb;
