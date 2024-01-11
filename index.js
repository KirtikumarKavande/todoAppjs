const addTodoToList = document.getElementById("todo-data");
const searchBar = document.getElementById("todo-input-bar");
const saveTodoButton = document.getElementById("save-todo");

searchBar.addEventListener("keyup", () => {
  if (!searchBar.value) {
    saveTodoButton.classList.add("disabled");
  } else {
    saveTodoButton.classList.remove("disabled");
  }
});

saveTodoButton.addEventListener('click',()=>{
  if(searchBar.value){
    addToDo(searchBar.value)
    searchBar.value=""
  }
})


function addToDo(todo) {
  //creating div element
  const addRow = document.createElement("div");
  const addItemList = document.createElement("div");

  const srNo = document.createElement("div");
  const taskTodo = document.createElement("div");
  const status = document.createElement("div");
  const toDoButtonGroup = document.createElement("div");
  const deleteButton = document.createElement("button");
  const finishedButton = document.createElement("button");
  const createhr = document.createElement("hr");

  //adding style
  addItemList.classList.add(
    "todo-item",
    "d-flex",
    "flex-row",
    "justify-content-between",
    "align-items-center"
  );
  srNo.classList.add("todo-no");
  taskTodo.classList.add("todo-detail", "text-muted");
  status.classList.add("todo-status", "text-muted");
  toDoButtonGroup.classList.add(
    "todo-actions",
    "d-flex",
    "justify-content-start",
    "gap-2"
  );
  finishedButton.classList.add("btn", "btn-success");
  deleteButton.classList.add("btn", "btn-danger");

  // adding content to that div
  deleteButton.textContent = "Delete";
  finishedButton.textContent = "finished";
  srNo.textContent = "1";
  taskTodo.textContent = todo;
  status.textContent = "pending";

  //appending child
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
