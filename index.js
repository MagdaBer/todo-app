const menuButton = document.querySelector(".menuButton");
menuButton.onclick = sendAlert;

function sendAlert() {
  alert("Hello World!");
}

const taskList = document.querySelector(".taskList");

const taskOne = createTaskListItem("Kaffe kochen");
const taskTwo = createTaskListItem("JavaScript lernen");

taskList.append(taskOne, taskTwo);

function createTaskListItem(taskName) {
  const taskListItem = document.createElement("label");
  taskListItem.className = "taskItem";

  const input = document.createElement("input");
  input.className = "taskItem__checkbox";
  input.type = "checkbox";
  input.setAttribute("name", "tasks");

  const span = document.createElement("span");
  span.className = "taskItem__labelText";
  span.innerText = taskName;

  taskListItem.append(input, span);

  return taskListItem;
}
