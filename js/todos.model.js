class Todo {
  constructor(id, title, text) {
    this.id = id;
    this.title = title;
    this.text = text;
  }
}

class Todos {
  constructor() {
    this.__todos = [];
  }
  
  get todos() {
    return this.__todos;
  }

  addTodo(title, text) {
    if (!title || typeof title !== 'string') return console.log('Передайте title');
    if (!text || typeof text !== 'string') return console.log('Передайте text');
    
    const newTodo = new Todo(Todos.generateId(), title, text);

    this.__todos.push(newTodo);
    
    return Object.assign({}, newTodo);
  }

  deleteTodo(id) {
    this.__todos.forEach(function(item, i, __todos) {
      if (__todos[i].id === id) {
        __todos.splice(i, 1);
      }
    });
  }

  static generateId() {
    return String(Date.now());
  }
}