// require('dotenv').config()

// const express = require("express")
// const connectToDb = require("./database/dbConnect")

// const app = express()
// const PORT = process.env.PORT || 3000

// connectToDb();
// app.get("/", (req,res)=>{
//     res.send("Hello")
// })
// app.listen(PORT,()=>{
//     console.log(`Server started at PORT 3000`)
// })

// server.js

require("dotenv").config();
const express = require("express");
const connectToDb = require("./database/dbConnect");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json()); // for JSON parsing

(async () => {
  try {
    await connectToDb(); // Ensure DB is connected before starting server
    app.get("/", (req, res) => {
      res.send("Hello");
    });

    app.listen(PORT, () => {
      console.log(`🚀 Server started on http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error("Failed to start server:", err.message);
  }
})();
