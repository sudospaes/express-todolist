const { Router } = require("express");

const Todo = require("../model/todo");
const controller = require("../controllers/controller");

const router = Router();

router.get("/", (req, res) => {
  Todo.findAll()
    .then((todos) => {
      res.render("index", { title: "Main Page", todos });
    })
    .catch((err) => {
      res.render("404", { title: "404 - Not Found" });
      console.log(err);
    });
});

router.post("/add-todo", controller.addTodo);

router.post("/remove-todo/:id", controller.removeTodo);

router.post("/finishing-todo/:id", controller.finishingTodo);

router.use((req, res) => {
  res.render("404", { title: "404 - Not Found" });
});

module.exports = router;
