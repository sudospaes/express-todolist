const { Router } = require("express");
const { addTodo, deleteTodo, doneTodo } = require("../controllers/todoController");
const Todo = require("../model/todo");

const router = Router();

router.get("/", (req, res, next) => {
  res.render("index", { title: "Todo List", todos: Todo.getTodoList() });
});

router.post("/add-todo", addTodo);

router.post("/delete-todo/:id", deleteTodo);

router.post("/done-todo/:id", doneTodo);

router.use((req, res, next) => {
  res.status(404).render("404", { title: "404" });
});

module.exports = router;
