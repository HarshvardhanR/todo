import { showProjectForm } from "./form";
import { showTaskForm } from "./form";
import { tasks, displayTask } from "./tasks";

document.querySelector('.projectDivBtn').addEventListener("click", showProjectForm);

document.addEventListener("projectAdded", (event) => {
    const projectName = event.detail.projectName;
    displayProject(projectName);
});

export function displayProject(projectName) {
    const projectDiv = document.querySelector('.projectNameDiv');

    const projectButton = document.createElement('button');
    projectButton.classList.add("projectNameDivBtn");
    projectButton.textContent = projectName;

    projectButton.addEventListener("click", () => {
        displayTasksForProject(projectName);
    });

    projectDiv.appendChild(projectButton);

    const hr = document.createElement('hr');
    hr.classList.add('hr3');
    projectDiv.appendChild(hr);
}

export function displayTasksForProject(projectName) {
    const filteredTasks = tasks.filter((task) => task.project === projectName);
    const rightContentDiv = document.querySelector('.rightContentDiv1');

    rightContentDiv.innerHTML = `
        <p class="rightContentDiv1Para">${projectName}</p>
        <div>
            <button class="rightContentDivBtn"><i class="fa-solid fa-circle-plus"></i> Add New Task</button>
        </div>
        <hr class="hr2">
    `;

    filteredTasks.forEach((task) => {
        displayTask(task);
    });

    const addTaskButton = rightContentDiv.querySelector('.rightContentDivBtn');
    if (addTaskButton) {
        addTaskButton.addEventListener("click", () => {
            showTaskForm(projectName);
        });
    }
}