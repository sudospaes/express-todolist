const Todo = require("../model/todo");

const getTodos = (req, res) => {
  Todo.findAll()
    .then((todos) => {
      res.render("index", { title: "Main Page", todos });
    })
    .catch((err) => {
      res.render("404", { title: "404 - Not Found" });
      console.log(err);
    });
};

const addTodo = (req, res) => {
  if (!req.body.todo) {
    res.redirect("/");
  } else {
    Todo.create({ text: req.body.todo })
      .then(() => {
        res.redirect("/");
      })
      .catch((err) => console.log(err));
  }
};

const removeTodo = (req, res) => {
  Todo.destroy({ where: { id: req.params.id } }).then(() => {
    res.redirect("/");
  });
};

const removeAllTodos = (req, res) => {
  Todo.truncate()
    .then(() => res.redirect("/"))
    .catch((err) => console.log(err));
};

const finishingTodo = (req, res) => {
  Todo.findByPk(req.params.id)
    .then((todo) => {
      todo.finished = true;
      return todo.save();
    })
    .then(() => res.redirect("/"));
};

const finishAllTodo = (req, res) => {
  Todo.update({ finished: true }, { where: { finished: false } })
    .then(() => res.redirect("/"))
    .catch((err) => console.log(err));
};

module.exports = {
  getTodos,
  addTodo,
  removeTodo,
  removeAllTodos,
  finishingTodo,
  finishAllTodo,
};
