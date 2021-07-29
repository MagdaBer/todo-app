const menuButton = document.querySelector(".menuButton");
menuButton.onclick = sendAlert;

function sendAlert() {
  alert("Hello World!");
}

const taskList = document.querySelector(".taskList");
const potentialTask = {
  title: "Get groceries",
  date: "Tomorrow",
  isDone: true,
};

const taskFromObject = createTaskListItem(potentialTask);

taskList.append(taskFromObject);

function createTaskListItem(task) {
  const taskListItem = document.createElement("label");
  taskListItem.className = "taskItem";

  const input = document.createElement("input");
  input.className = "taskItem__checkbox";
  input.type = "checkbox";
  input.setAttribute("name", "tasks");
  input.checked = task.isDone;

  const span = document.createElement("span");
  span.className = "taskItem__labelText";
  span.innerText = task.title;

  taskListItem.append(input, span);

  return taskListItem;
}
