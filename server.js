const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const port = 8080;


app.use(cors());
app.use(express.json());

//connection
mongoose.connect( 
  "mongodb://0.0.0.0:27017/", 
  { 
    dbName: "library", 
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
  }, 
  (err) => 

    err ? console.log(err) : console.log( 
      "Connected to library database") 
); 

//Routes

const booksRouter = require("./routes/books");
const usersRouter = require("./routes/users");

// Use your routes with correct endpoints
app.use("/api/books", booksRouter);
app.use("/api/users", usersRouter);



app.listen(port, () => {
    console.log("App is running on port " + port);
});