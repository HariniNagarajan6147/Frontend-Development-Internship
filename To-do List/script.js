function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    const li = document.createElement("li");

    li.innerHTML = `
        <span onclick="markCompleted(this)">
            ${taskText}
        </span>
        <button class="delete-btn" onclick="deleteTask(this)">
            Delete
        </button>
    `;

    
    document.getElementById("taskList").appendChild(li);
    taskInput.value = "";
}


function markCompleted(task) {
    task.classList.toggle("completed");
}


function deleteTask(button) {
    button.parentElement.remove();
}
