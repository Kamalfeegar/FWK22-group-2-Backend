require("dotenv").config();
const cors = require("cors");
const express = require("express");
/* const mongoose = require("mongoose") */

const app = express();

//-.env processes
const port = process.env.PORT;

//-midle weare
app.use(express.json());
app.use(cors());

//-Routing
const blogRoutes = require("./routes/blog_route");
app.use("/blogpost", blogRoutes);

/// Conect Mogodb to server
/* mongoose.set("strictQuery", false);
mongoose.connect(process.env.DB_URL);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected to MongoDB successfully");
});
 */
// Link to a port
app.listen(port, (err) => {
  console.log(`Listening on port: http://localhost:${port}/`);
});

module.exports = app;
