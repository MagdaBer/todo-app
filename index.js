import { parseJSONFromLocalStorage } from "/utils/localStorage.js";

const menuButton = document.querySelector(".menuButton");
menuButton.onclick = sendAlert;

function sendAlert() {
  alert("Hello World!");
}

const taskList = document.querySelector(".taskList");

const tasks = parseJSONFromLocalStorage("tasks", []);

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

const dateFilter = document.querySelectorAll(".taskNav__radio");
dateFilter.forEach(function (selectdate) {
  selectdate.addEventListener("click", function () {
    const day = this.getAttribute("value");
    if (day === "today") {
      const today = tasks.filter((task) => task.date === "today");
      const taskListItemstoday = today.map((task) => createTaskListItem(task));
      while (taskList.hasChildNodes()) {
        taskList.removeChild(taskList.firstChild);
      }
      taskList.append(...taskListItemstoday);
    } else if (day === "tomorrow") {
      const tomorrow = tasks.filter((task) => task.date === "tomorrow");
      const taskListItemstomorrow = tomorrow.map((task) =>
        createTaskListItem(task)
      );
      while (taskList.hasChildNodes()) {
        taskList.removeChild(taskList.firstChild);
      }
      taskList.append(...taskListItemstomorrow);
    }
  });
});
