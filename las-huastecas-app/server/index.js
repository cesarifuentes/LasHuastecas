const express = require("express"); // server framework to pass configurations
const bodyParser = require("body-parser");
const cors = require("cors");

const db = require("./db");
const app = express();
const productRouter = require("./routes/productRouter");

// define where api are to be made
var corsOptions = {
  origin: "http://localhost:3000",
};
app.use(cors(corsOptions));

//  parse body that is passed through api
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// check for errors
db.on("error", console.error.bind(console, "MongoDB connection error"));

// main url path for server
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Las Huastecas" });
});

// define ports
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.use("/api/", productRouter); // get routers from other file
