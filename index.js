const addTodoToList = document.getElementById("todo-data");

function addToDo(todo) {
  const addRow = document.createElement("div");
  const addItemList = document.createElement("div");

  const srNo = document.createElement("div");
  const taskTodo = document.createElement("div");
  const status = document.createElement("div");
  const toDoButtonGroup = document.createElement("div");
  const deleteButton = document.createElement("button");
  const finishedButton = document.createElement("button");
  const createhr = document.createElement("hr");

  deleteButton.textContent = "Delete";
  finishedButton.textContent = "finished";
  srNo.textContent = "1";
  taskTodo.textContent = todo;
  status.textContent = "pending";

  addItemList.appendChild(srNo);
  addItemList.appendChild(taskTodo);
  addItemList.appendChild(status);

  toDoButtonGroup.appendChild(deleteButton);
  toDoButtonGroup.appendChild(finishedButton);

  addItemList.appendChild(toDoButtonGroup);

  addRow.appendChild(addItemList);

  addRow.appendChild(createhr);
  addTodoToList.appendChild(addRow);
}
