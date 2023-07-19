const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/todo_db", {})
  .then(() => console.log("Connected to DB."))
  .catch((err) => console.log(err));
