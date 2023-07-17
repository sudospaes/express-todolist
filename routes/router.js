const { Router } = require("express");

const controller = require("../controllers/controller");
const Todo = require("../model/todo");

const router = Router();

router.get("/", (req, res) => {
  res.render("index", { title: "Main Page", todos: Todo.getTodos() });
});

router.post("/add-todo", controller.addTodo);

router.post("/remove-todo/:id", controller.removeTodo);

router.post("/finishing-todo/:id", controller.finishingTodo);

router.use((req, res) => {
  res.render("404", { title: "404 - Not Found" });
});

module.exports = router;
