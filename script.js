document.addEventListener('DOMContentLoaded', function () {
    console.log('Code is Poetry');

    // Select DOM elements and store them in constants
    const addButton = document.getElementById('add-task-btn');  // Add Task button
    const taskInput = document.getElementById('task-input');    // Task input field
    const taskList = document.getElementById('task-list');      // Task list (ul)

    // Function to add a task to the list
    function addTask() {
        // Retrieve and trim the task input value
        const taskText = taskInput.value.trim();

        // Check if the input is not empty
        if (taskText === '') {
            alert('Please enter a task!');  // Alert if input is empty
            return;
        }

        // Create a new <li> element for the task
        const task = document.createElement('li');
        task.textContent = taskText;

        // Create a "Remove" button
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.className = 'remove-btn';

        // Add an event listener to remove the task when the button is clicked
        removeButton.onclick = function () {
            taskList.removeChild(task);  // Remove the <li> element from the task list
        };

        // Append the remove button to the <li> element
        task.appendChild(removeButton);

        // Append the <li> element to the task list
        taskList.appendChild(task);

        // Clear the input field after adding the task
        taskInput.value = '';
    }

    // Event listener for the "Add Task" button
    addButton.addEventListener('click', addTask);

    // Event listener for the "Enter" key press to add the task
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
