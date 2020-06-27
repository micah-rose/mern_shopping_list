// const express = require("express"); //back end framework
// const mongoose = require("mongoose"); //ORM to interact with MongoDB
// const bodyParser = require("body-parser"); //take requests and get data from the body - name of POST from POST request

// const items = require("./routes/api/items");

// const app = express();

// //Bodyparser Middleware
// app.use(bodyParser.json());

// //DB Config
// const db = require("./config/keys").mongoURI;

// //Connect to Mongo
// mongoose
//   .connect(db, { useNewUrlParser: true })
//   .then(() => console.log("MongoDB Connected..."))
//   .catch(err => console.log(err));

// //Use Routes
// app.use("/api/items", items);

// const port = process.env.PORT || 5000;

// app.listen(port, () => console.log(`Server started on port ${port}`));
