//Selecting DOM elements
const taskInput = document.getElementById("task");
const taskList = document.getElementById("task-list");
const searchInput = document.getElementById("search");

//localStorage
const loadTasks = () => JSON.parse(localStorage.getItem("tasks")) || [];
const saveTasks = (tasks) => localStorage.setItem("tasks", JSON.stringify(tasks));

let tasks = loadTasks();

// Rendering tasks list
const renderTasks = (filter = "") => {  
    taskList.innerHTML = "";
    const filteredTasks = tasks.filter((task) => task.toLowerCase().includes(filter.toLowerCase()));
    filteredTasks.forEach((task, index) => {
        const taskItem = document.createElement("li");
        listItem.className = "task-item";

        const textSpan = document.createElement("span");
        textSpan.textContent = task.text;
        textSpan.contentEditable = false;



        taskItem.innerText = task;
        taskList.appendChild(taskItem);
    });
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
}