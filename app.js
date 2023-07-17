const { statics } = require("./static/statics");
const routes = require("./route/routes");

const app = require("express")();

app.use(
  require("body-parser").urlencoded({
    extended: false,
  })
);

app.set("views", __dirname + "/views");
app.engine("esj", require("ejs").renderFile);
app.set("view engine", "ejs");

statics(app);

app.use(routes);
app.listen(3000);
