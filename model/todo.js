const fs = require("fs");
const path = require("path");

const { getRootPath } = require("../utils/helper");
const { todos } = require("node:test");

const filePath = path.join(getRootPath(), "..", "storage", "todos.json");

class Todo {
  constructor(id, description, status = false) {
    this.id = id;
    this.description = description;
    this.status = status;
  }

  save() {
    if (fs.existsSync(filePath)) {
      if (fs.readFileSync(filePath).toString() === "") {
        fs.writeFileSync(filePath, "[]");
      }

      let todos = JSON.parse(fs.readFileSync(filePath));
      todos.push(this);

      fs.writeFileSync(filePath, JSON.stringify(todos));
    } else {
      fs.writeFileSync(filePath, `[ ${JSON.stringify(this)} ]`);
    }
  }

  static getTodoList() {
    if (fs.existsSync(filePath)) {
      if (fs.readFileSync(filePath).toString() === "") {
        return [];
      } else {
        return JSON.parse(fs.readFileSync(filePath));
      }
    } else {
      return [];
    }
  }

  static done(id) {
    let todos = JSON.parse(fs.readFileSync(filePath));
    for (let todo of todos) {
      if (todo.id == id) {
        todo.status = true;
      }
    }
    fs.writeFileSync(filePath, JSON.stringify(todos));
  }

  static remove(id) {
    let todos = JSON.parse(fs.readFileSync(filePath));
    todos = todos.filter((todo) => todo.id != id);
    fs.writeFileSync(filePath, JSON.stringify(todos));
  }
}

module.exports = Todo;
