const express = require("express");

const { setStatics } = require("./static/statics");
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

app.listen(3000);
