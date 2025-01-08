const inputBox = document.getElementById("input-box");
const addBtn = document.getElementById("add-btn");

function addTask() {
  const task = inputBox.value;
  if (task) {
    const taskList = document.getElementById("task-list");
    const taskItem = document.createElement("li");
    taskItem.innerText = task;
    taskList.appendChild(taskItem);
    inputBox.value = "";
  }
}