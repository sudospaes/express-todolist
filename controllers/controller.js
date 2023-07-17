const Todo = require("../model/todo");

const uuid = require("uuid");

exports.addTodo = (req, res) => {
  if (!req.body.todo) {
    res.redirect("/");
  } else {
    const todo = new Todo(uuid.v4(), req.body.todo);
    todo.save();
    res.redirect("/");
  }
};

exports.removeTodo = (req, res) => {
  Todo.remove(req.params.id);
  res.redirect("/");
};

exports.finishingTodo = (req, res) => {
  Todo.finishing(req.params.id);
  res.redirect("/");
};
