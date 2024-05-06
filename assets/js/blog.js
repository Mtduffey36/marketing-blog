function renderTodos() {
  // Clear todoList element and update todoCountSpan
  todoList.innerHTML = '';
  todoCountSpan.textContent = todos.length;

  // Render a new li for each todo
  for (let i = 0; i < todos.length; i++) {
    const todo = todos[i];

    const li = document.createElement('li');
    li.textContent = todo;
    li.setAttribute('data-index', i);

    const button = document.createElement('button');
    button.textContent = 'Complete ✔️';

    li.appendChild(button);
    todoList.appendChild(li);
  }
}

 