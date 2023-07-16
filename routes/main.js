const { Router } = require("express");

const writeController = require("../controllers/write");
const Todo = require("../model/todo");

const router = Router();

router.get("/", (req, res) => {
  res.render("index", { title: "Main Page", todos: Todo.getTodos() });
});

router.post("/add-todo", writeController.addTodo);

router.post("/remove-todo/:id", writeController.removeTodo);

router.post("/finishing-todo/:id", writeController.finishingTodo);

router.use((req, res) => {
  res.render("404", { title: "404 - Not Found" });
});

module.exports = router;
