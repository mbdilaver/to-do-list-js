const addButton = document.getElementById('add-button');

addButton.addEventListener("click", (e) => {
    addTask();
});

const input = document.getElementById('task-input');

input.addEventListener("keyup", (e) => {
    if (e.key === "Enter"){
        addTask();
    }
});

var taskCount = 0;

function addTask() {
    const taskText = input.value;
    input.value = "";

    if (taskText) {
        let textNode = document.createTextNode(taskText);

        // Task div
        let taskContent = document.createElement('div');
        taskContent.setAttribute('class', 'col align-self-center task-content');
        taskContent.appendChild(textNode);

        // Button div
        let deleteButton = document.createElement('button');
        deleteButton.setAttribute('type', 'button');
        deleteButton.setAttribute('class', 'btn btn-outline-success btn-sm');

        let closeIcon = document.createElement('i');
        closeIcon.setAttribute('class','fas fa-times');

        deleteButton.appendChild(closeIcon);

        let buttonComp = document.createElement('div');
        buttonComp.setAttribute('class', 'd-inline-flex p-2');
        buttonComp.setAttribute('id','task-button-' + taskCount);

        buttonComp.addEventListener("click", (e) => {
            let a = buttonComp.closest("li");
            a.classList.add("delete");
        });

        buttonComp.appendChild(deleteButton);

        // Main div
        let taskDiv = document.createElement('div');
        taskDiv.setAttribute('class', 'row justify-content-between');
        taskDiv.appendChild(taskContent);
        taskDiv.appendChild(buttonComp);

        // List div
        let listElement = document.createElement("li");
        listElement.setAttribute('class', 'list-group-item list-group-item-secondary');
        listElement.setAttribute('id', 'task-item-' + taskCount);
        listElement.appendChild(taskDiv);

        const taskList = document.getElementById('task-list');
        taskList.appendChild(listElement);
    }

    taskCount++;
};
