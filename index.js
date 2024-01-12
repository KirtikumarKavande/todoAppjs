const addTodoToList = document.getElementById("todo-data-list");
const searchBar = document.getElementById("todo-input-bar");
const saveTodoButton = document.getElementById("save-todo");

let toDoCount = 0;
let allTodoItems = [];
searchBar.addEventListener("keyup", (event) => {
  if (!searchBar.value) {
    saveTodoButton.classList.add("disabled");
  } else {
    saveTodoButton.classList.remove("disabled");
  }
});

saveTodoButton.addEventListener("click", () => {
  if (searchBar.value) {
    const toDoObj = {
      status: "In Progress",
      content: searchBar.value,
      buttonText: "finished",
    };
    allTodoItems.push(toDoObj);
    toDoCount = allTodoItems.length;

    addToDo(toDoObj, toDoCount);
    searchBar.value = "";
  }
});
function removeTodo(e) {
  const targetedElement = e.target;
  const indexThatNeedToRemove = targetedElement.getAttribute("idbtn");
  addTodoToList.innerHTML = "";
  allTodoItems.splice(+indexThatNeedToRemove - 1, 1);

  allTodoItems.forEach((item, index) => {
    addToDo(item, index + 1);
  });
}
function finishedTodo(e) {
  const targetElement = e.target;

  const indexOfData = targetElement.getAttribute("idbtn");

  if(allTodoItems[+indexOfData-1].status==="completed"){
    allTodoItems[+indexOfData-1].status="In Progress"
  }else{
    allTodoItems[+indexOfData-1].status="completed"

  }
  console.log("allTodoItems2",allTodoItems)
  addTodoToList.innerHTML = "";

  allTodoItems.forEach((item, index) => {
    addToDo(item, index + 1);
  });

}

function addToDo(todo, toDoCount) {
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
  deleteButton.classList.add("btn", "btn-danger", "deleteBtn");

  deleteButton.setAttribute("idbtn", toDoCount);
  finishedButton.setAttribute("idbtn", toDoCount);

  // adding content to that div
  deleteButton.textContent = "Delete";

  if(todo.status==="completed"){
    finishedButton.textContent = "Undo";

  }else{
    finishedButton.textContent = "Finish";

  }
  srNo.textContent = toDoCount;
  taskTodo.textContent = todo.content;
  status.textContent = todo.status;
  // const getDeleteBtn=document.getElementsByClassName('deleteBtn')

  deleteButton.onclick = removeTodo;
  finishedButton.onclick = finishedTodo;

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
