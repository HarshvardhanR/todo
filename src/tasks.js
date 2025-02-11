import { showTaskForm } from "./form";

export const tasks = [];

export function Task(title, priority, dueDate, project) {
    this.title = title;
    this.priority = priority;
    this.dueDate = dueDate;
    this.project = project;
}

export function addTask(taskData) {
    const { taskName, priority, dueDate, project } = taskData;
    const newTask = new Task(taskName, priority, dueDate, project);
    tasks.push(newTask);
    return newTask;
}

export function displayTask(task) {
    const rightContentDiv = document.querySelector('.rightContentDiv1');

    const taskDiv = document.createElement("div");
    const taskButton = document.createElement("button");
    taskButton.classList.add('rightContentDivBtn', 'task');

    const span0 = document.createElement('span');
    span0.classList.add("fAwesome");
    span0.innerHTML = '<i class="fa-solid fa-list"></i>';

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
    span4.classList.add("taskProject");
    span4.textContent = task.project;

    taskButton.append(span0, span1, span2, span3, span4);
    taskDiv.appendChild(taskButton);
    rightContentDiv.appendChild(taskDiv);

    const hr = document.createElement('hr');
    hr.classList.add('hr2');
    rightContentDiv.appendChild(hr);
}

document.addEventListener("taskAdded", (event) => {
    const newTask = addTask(event.detail);
    displayTask(newTask);
});

document.querySelector(".rightContentDivBtn").addEventListener("click", () => {
    const defaultProject = "Demo Project";
    showTaskForm(defaultProject);
});