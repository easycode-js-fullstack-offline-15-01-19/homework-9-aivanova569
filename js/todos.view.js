class TodosView {
  constructor() {
    this.__table = uiElements.table;
  }
  addTodo(todo) {
    const template = TodosView._createTemplate(todo);
    this.__table.insertAdjacentHTML('afterbegin', template);
  }
  deleteTodo(id) {
    const target = document.querySelector(`[data-task-id="${id}"]`);
    this.__table.removeChild(target);
  }
  static _createTemplate(todo) {
    return `
        <tr data-task-id="${todo.id}">
            <td>${todo.title}</td>
            <td>${todo.text}</td>
            <td><i class="fas fa-trash remove-task"></i></td>
        </tr>
    `;
  }
}

class AlertView {
  constructor(message) {
    this.__msg = message;
    this.__form = uiElements.form;
  }
  addAlert() { 
    const alert = AlertView._createAlert();
    this.__form.insertAdjacentHTML('beforeend', alert);
  }
  deleteAlert() {
    const alertMsg = document.querySelector('.success');
    this.__form.removeChild(alertMsg);
  }
  static _createAlert() {
    return `
      <div class="success" style="margin-top: 25px">Задача добавлена успешно</div>
    `;
  }
}
