//Selecting DOM elements
const  AddBox = document.getElementById("Add-box");
const taskList = document.getElementById("task-list");
const searchInput = document.getElementById("search");



function addTask(){
    taskInput = document.getElementById("Add-box");
    if(taskInput.value === ""){
        alert("Please enter a task");
    }
    else{ 
        let li = document.createElement("li");
        li.innerHTML = taskInput.value;
        taskList.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "X";
        li.appendChild(span);
         
    }
    AddBox.value = "";
    saveData();
}

taskList.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data", taskList.innerHTML);
}
function showTask(){
    taskList.innerHTML = localStorage.getItem("data");
}
showTask();
