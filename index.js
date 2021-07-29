const menuButton = document.querySelector(".menuButton");
menuButton.onclick = sendAlert;

function sendAlert() {
  alert("Hello World!");
}

const taskList = document.querySelector(".taskList");

const tasks = [
  {
    title: "Get groceries",
    date: "Tomorrow",
    isDone: true,
  },
  {
    title: "Walk the dog",
    date: "Today",
    isDone: false,
  },
  {
    title: "Go to sleep",
    date: "Today",
    isDone: false,
  },
];

const taskListItems = tasks.map((task) => createTaskListItem(task));

taskList.append(...taskListItems);

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
