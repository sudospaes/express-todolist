const express = require("express");

const { setStatics } = require("./static/statics");
const sequelize = require("./utils/database");
const router = require("./routes/router");

const app = express();

// Middlewares
app.use(express.urlencoded({ extended: false }));
// End

// Template engine configuration
app.set("views", "views");
app.set("view engine", "ejs");
// End

// Set statics configuration
setStatics(app);
// End

// Set routes
app.use(router);
//End

// Sequelize sync. after that, running server
sequelize
  .sync()
  .then(() => {
    app.listen(3000, () => console.log("Server is running..."));
  })
  .catch((err) => console.log(err));
// End
