const Todo = require("../model/todo");

const getTodos = async (req, res) => {
  try {
    const todos = await Todo.findAll();
    res.render("index", { title: "Main Page", todos });
  } catch (err) {
    console.log(err);
  }
};

const addTodo = async (req, res) => {
  if (!req.body.todo) {
    res.redirect("/");
  } else {
    try {
      await Todo.create({ text: req.body.todo });
      res.redirect("/");
    } catch (err) {
      console.log(err);
    }
  }
};

const removeTodo = async (req, res) => {
  try {
    await Todo.destroy({ where: { id: req.params.id } });
    res.redirect("/");
  } catch (err) {
    console.log(err);
  }
};

const removeAllTodos = async (req, res) => {
  try {
    await Todo.truncate();
    res.redirect("/");
  } catch (err) {
    console.log(err);
  }
};

const finishingTodo = async (req, res) => {
  try {
    const todo = await Todo.findByPk(req.params.id);
    todo.finished = true;
    todo.save();
    res.redirect("/");
  } catch (err) {
    console.log(err);
  }
};

const finishAllTodo = async (req, res) => {
  try {
    await Todo.update({ finished: true }, { where: { finished: false } });
    res.redirect("/");
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  getTodos,
  addTodo,
  removeTodo,
  removeAllTodos,
  finishingTodo,
  finishAllTodo,
};
