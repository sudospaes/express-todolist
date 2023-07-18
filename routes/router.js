const { Router } = require("express");

const Todo = require("../model/todo");
const controller = require("../controllers/controller");

const router = Router();

router.get("/", controller.getTodos);

router.post("/add-todo", controller.addTodo);

router.post("/remove-todo/:id", controller.removeTodo);

router.post("/remove-all", controller.removeAllTodos);

router.post("/finishing-todo/:id", controller.finishingTodo);

router.post("/finishing-all/", controller.finishAllTodo);

router.use((req, res) => {
  res.render("404", { title: "404 - Not Found" });
});

module.exports = router;
