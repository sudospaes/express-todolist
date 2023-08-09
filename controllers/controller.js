const Todo = require("../model/todo");

const getTodos = async (req, res) => {
  try {
    const todos = await Todo.find();
    if (todos) {
      res.status(200).json({ todos });
    } else {
      res.status(404).json({ message: "Not Found" });
    }
  } catch (err) {
    res.status(400).json({ err });
  }
};

const addTodo = async (req, res) => {
  if (!req.body.todo) {
    res.status(400).json({ message: "Please give me todo" });
  } else {
    try {
      await Todo.create({ text: req.body.todo });
      res.status(200).redirect("/");
    } catch (err) {
      res.status(400).json({ err });
    }
  }
};

const removeTodo = async (req, res) => {
  try {
    await Todo.findByIdAndRemove(req.params.id);
    res.redirect("/");
  } catch (err) {
    res.status(400).json({ err });
  }
};

const removeAllTodos = async (req, res) => {
  try {
    await Todo.deleteMany();
    res.redirect("/");
  } catch (err) {
    res.status(400).json({ err });
  }
};

const finishingTodo = async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);
    todo.finished = true;
    todo.save();
    res.redirect("/");
  } catch (err) {
    res.status(400).json({ err });
  }
};

const finishAllTodos = async (req, res) => {
  try {
    await Todo.updateMany({ finished: false }, { $set: { finished: true } });
    res.redirect("/");
  } catch (err) {
    res.status(400).json({ err });
  }
};

module.exports = {
  getTodos,
  addTodo,
  removeTodo,
  removeAllTodos,
  finishingTodo,
  finishAllTodos,
};
