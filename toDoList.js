const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");

function addTask() {
    if (taskInput.value === "") {
        alert("Please enter a task.");
    } 
    else {
        const li = document.createElement("li");
        li.textContent = taskInput.value;
        taskList.appendChild(li);
        let span = document.createElement("span");
        span.textContent = "\u00d7";
        li.appendChild(span);
    }
    taskInput.value = "";
    saveTasks();
}

taskList.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveTasks();
    } 
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveTasks();
    }
});

function saveTasks(){
    localStorage.setItem("tasks", taskList.innerHTML);
}
function loadTasks(){
    taskList.innerHTML = localStorage.getItem("tasks");
}
loadTasks(); 
