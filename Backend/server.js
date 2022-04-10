const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();

require("dotenv").config();

//available port number assign
const PORT = process.env.PORT || 8070;

app.use(cors());
app.use(bodyParser.json());

//connection
const URL = process.env.MONGODB_URL;

mongoose.connect(URL, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  });

  //Open the connection
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB Connection Succesfull");
});

const CourseRouter=require("./routes/courses.js");
app.use("/courses",CourseRouter)

const CategoryRouter=require("./routes/categories.js");
app.use("/categories",CategoryRouter)

//run in port
app.listen(PORT, () => {
    console.log(`Server is up and running on port ${PORT}`);
  });
  