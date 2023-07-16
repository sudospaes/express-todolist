const express = require("express");

const { staticsSettings } = require("./static/statics");
const mainRoute = require("./routes/main");

const app = express();

// Middlewares
app.use(express.urlencoded({ extended: false }));
// End

// Template engine configuration
app.set("views", "views");
app.set("view engine", "ejs");
// End

// Set statics configuration
staticsSettings(app);
// End

// Set routes
app.use(mainRoute);
//End

app.listen(3000);
