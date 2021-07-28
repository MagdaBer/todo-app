const form = document.querySelector(".addTaskForm");

form.onsubmit = function (event) {
  event.preventDefault();

  const checkedDateInput = document.querySelector(
    ".addTaskForm__radio:checked"
  );
  const textInput = document.querySelector(".addTaskForm__textInput");

  const selectedDate = checkeDateInput.value;
  const taskName = textInput.value;

  console.log(selectedDate, taskName);
};
