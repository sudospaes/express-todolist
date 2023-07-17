const fs = require("fs");
const path = require("path");

const { getRootPath } = require("../utils/helper");

const filePath = path.join(getRootPath(), "..", "data", "todos.json");

class Todo {
  constructor(id, text, finished = false) {
    this.id = id;
    this.text = text;
    this.finished = finished;
  }

  save() {
    if (fs.existsSync(filePath)) {
      if (fs.readFileSync(filePath).toString() === "") {
        fs.writeFileSync(filePath, "[]");
      }
      const todos = JSON.parse(fs.readFileSync(filePath));
      todos.push(this);
      fs.writeFileSync(filePath, JSON.stringify(todos));
    } else {
      fs.writeFileSync(filePath, `[ ${JSON.stringify(this)} ]`);
    }
  }

  static getTodos() {
    if (fs.existsSync(filePath)) {
      if (fs.readFileSync(filePath).toString() === "") return [];
      else return JSON.parse(fs.readFileSync(filePath));
    } else return [];
  }

  static finishing(id) {
    let todos = JSON.parse(fs.readFileSync(filePath));
    for (let todo of todos) {
      if (todo.id == id) {
        todo.finished = true;
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
