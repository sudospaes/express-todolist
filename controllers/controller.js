const Todo = require("../model/todo");

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

const finishingTodo = (req, res) => {
  Todo.findByPk(req.params.id)
    .then((todo) => {
      todo.finished = true;
      return todo.save();
    })
    .then(() => res.redirect("/"));
};

module.exports = {
  addTodo,
  removeTodo,
  finishingTodo,
};
