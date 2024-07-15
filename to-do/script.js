document.addEventListener('DOMContentLoaded', () => {
    const addTaskBtn = document.getElementById('add-task-btn');
    const newTaskInput = document.getElementById('new-task');
    const taskList = document.getElementById('task-list');

    addTaskBtn.addEventListener('click', () => {
        addTaskFromInput();
    });

    newTaskInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            addTaskFromInput();
        }
    });

    function addTaskFromInput() {
        const taskText = newTaskInput.value.trim();
        if (taskText !== '') {
            addTask(taskText);
            newTaskInput.value = '';
        }
    } function addTask(taskText) {
        const li = document.createElement('li');

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.addEventListener('change', () => {
            li.classList.toggle('done', checkbox.checked);
        });

        const taskSpan = document.createElement('span');
        taskSpan.textContent = taskText;

        const deleteBtn = document.createElement('button');
        deleteBtn.innerHTML = '&#10060;'; 
        deleteBtn.classList.add('delete');
        deleteBtn.addEventListener('click', () => {
            taskList.removeChild(li);
        });

        li.appendChild(checkbox);
        li.appendChild(taskSpan);
        li.appendChild(deleteBtn);
        taskList.appendChild(li);
    }
});
