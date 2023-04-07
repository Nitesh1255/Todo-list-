function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");
    const taskText = taskInput.value;
    if (taskText) {
      const newTask = document.createElement("li");
      newTask.innerHTML = taskText + " <button onclick='removeTask(this)'>Delete</button>";
      taskList.appendChild(newTask);
      taskInput.value = "";
    }
  }

  function removeTask(task) {
    const li = task.parentNode;
    li.parentNode.removeChild(li);
  }