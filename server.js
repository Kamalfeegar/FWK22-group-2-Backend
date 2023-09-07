require("dotenv").config();
const express = require("express");
const app = express();


const port = process.env.PORT

app.use(express.json());
app.get('/', (req, res) => {
    res.send('Hello, World!');
  });
  

app.listen(port, (err) => {
  console.log(`Listening on port: http://localhost:${port}/`);
});