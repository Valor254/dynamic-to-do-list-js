// Ensure code runs after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function () {
    console.log('Code is Poetry');

    // Select DOM elements
    const addButton = document.getElementById('addTaskButton');
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    // Function to add a new task
    function addTask() {
        // Get and trim task input value
        const taskText = taskInput.value.trim();

        // Check if task text is not empty
        if (taskText === '') {
            alert('Please enter a task!');
            return;
        }

        // Create a new list item for the task
        const task = document.createElement('li');
        task.textContent = taskText;

        // Create a "Remove" button
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.className = 'remove-btn';

        // Add event listener to remove button
        removeButton.onclick = function () {
            taskList.removeChild(task);
        };

        // Append the remove button to the task item
        task.appendChild(removeButton);

        // Add the task item to the task list
        taskList.appendChild(task);

        // Clear the input field
        taskInput.value = '';
    }

    // Event listener for the "Add Task" button
    addButton.addEventListener('click', addTask);

    // Event listener for the "Enter" key in the input field
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
