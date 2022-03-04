const express = require("express");
const connectDB = require("./config/db");
const path = require("path");
// const publicPath = path.join(__dirname, "..", "public");

// initialize app config
const app = express();
connectDB();
const port = process.env.PORT || 8080;

// Init Middleware
app.use(express.json({ extended: false }));
app.use(cors());

//Create a middleware.
//When you navigate to the root page, it would use the built react-app
app.use(express.static(path.resolve(__dirname, "./client/build")));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
