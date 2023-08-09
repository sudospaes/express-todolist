const express = require("express");

require("./utils/database");
const router = require("./routes/router");

const app = express();

// Middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// End

// Set routes
app.use(router);
//End

app.listen(3000, () => console.log("Server is running."));
