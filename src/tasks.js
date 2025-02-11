import { showTaskForm } from "./form";

const tasks = [];

function Task(title, priority, dueDate, project) {
    this.title = title;
    this.priority = priority;
    this.dueDate = dueDate;
    this.project = project;
}

document.addEventListener("taskAdded", (event) => {
    const { taskName, priority, dueDate, project } = event.detail;

    const newTask = new Task(taskName, priority, dueDate, project);
    tasks.push(newTask);

    displayTask(newTask);
});

function displayTask(task) {
    const div = document.querySelector('.rightContentDiv1');
    const separator = document.querySelector('.rightContentDiv1Para');
    const task1 = document.createElement("div");
    const task1Btn = document.createElement("button");
    task1Btn.classList.add('rightContentDivBtn', 'task');

    const span0 = document.createElement('span');
    span0.classList.add =  "fAwesome"
    span0.innerHTML = '<i class="fa-solid fa-list"></i>'

    const span1 = document.createElement('span');
    span1.classList.add("taskTitle");
    span1.textContent = task.title;

    const span2 = document.createElement('span');
    span2.classList.add("taskPriority");
    span2.textContent = task.priority;

    const span3 = document.createElement('span');
    span3.classList.add("taskDueDate");
    span3.textContent = task.dueDate;

    const span4 = document.createElement('span');
    span4.classList.add("taskProect");
    span4.textContent = task.project;

    task1Btn.append(span0);
    task1Btn.append(span1);
    task1Btn.append(span2);
    task1Btn.append(span3);
    task1Btn.append(span4);

    task1.appendChild(task1Btn);

    div.insertBefore(task1,separator.nextSibling);

    const horLine = document.createElement('hr');
    horLine.classList.add('hr2');
    div.insertBefore(horLine, task1.nextSibling);
}

document.querySelector(".rightContentDivBtn").addEventListener("click", showTaskForm);