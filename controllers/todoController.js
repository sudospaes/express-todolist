const { done, remove } = require("../model/todo");
const Todo = require("../model/todo");

addTodo = (req, res) => {
  if (!req.body.todo) {
    res.redirect("/");
  } else {
    const todo = new Todo(Math.floor(Math.random() * 1000), req.body.todo);
    todo.save();
    res.redirect("/");
  }
};

deleteTodo = (req, res) => {
  remove(req.params.id);
  res.redirect("/");
};

doneTodo = (req, res) => {
  done(req.params.id);
  res.redirect("/");
};

module.exports = {
  addTodo,
  deleteTodo,
  doneTodo,
};
