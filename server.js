const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

const blogRoutes = require("./routes/blog_route");
app.use("/blogpost", blogRoutes);

module.exports = app;

/// Conect Mogodb to server

/* const mongoose = require("mongoose") */
/* mongoose.set("strictQuery", false);
mongoose.connect(process.env.DB_URL);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected to MongoDB successfully");
});
 */
