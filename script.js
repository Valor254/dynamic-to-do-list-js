document.addEventListener('DOMContentLoaded', function () {
    console.log('Code is Poetry');

    // Select DOM elements and store them in constants
    const addButton = document.getElementById('add-task-btn');  // Add Task button
    const taskInput = document.getElementById('task-input');    // Task input field
    const taskList = document.getElementById('task-list');      // Task list (ul)

    // Load tasks from Local Storage
    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.forEach(taskText => addTask(taskText, false)); // 'false' means not to save it again
    }

    // Function to add a task to the list
    function addTask(taskText, save = true) {
        // Check if taskText is valid
        if (taskText.trim() === '') {
            alert('Please enter a task!');
            return;
        }

        // Create a new <li> element for the task
        const task = document.createElement('li');
        task.textContent = taskText;

        // Create a "Remove" button
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.classList.add('remove-btn');  // Add class 'remove-btn'

        // Add event listener for removing the task
        removeButton.onclick = function () {
            taskList.removeChild(task);  // Remove the task from the DOM

            // Remove from Local Storage
            let tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
            tasks = tasks.filter(t => t !== taskText);  // Remove task from array
            localStorage.setItem('tasks', JSON.stringify(tasks));  // Update Local Storage
        };

        // Append the remove button to the task
        task.appendChild(removeButton);

        // Append the task to the task list
        taskList.appendChild(task);

        // If save is true, update Local Storage with the new task
        if (save) {
            const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
            storedTasks.push(taskText);
            localStorage.setItem('tasks', JSON.stringify(storedTasks));
        }

        // Clear the input field
        taskInput.value = '';
    }

    // Event listener for the "Add Task" button
    addButton.addEventListener('click', function () {
        const taskText = taskInput.value.trim();
        addTask(taskText);  // Add task and save it
    });

    // Event listener for pressing "Enter" key to add task
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            const taskText = taskInput.value.trim();
            addTask(taskText);  // Add task and save it
        }
    });

    // Load tasks from Local Storage when the page loads
    loadTasks();
});
