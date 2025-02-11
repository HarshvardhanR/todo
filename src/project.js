import { showProjectForm } from "./form";

document.querySelector('.projectDivBtn').addEventListener("click", showProjectForm);

document.addEventListener("projectAdded", (event) => {
    const projectName = event.detail.projectName;
    displayproject(projectName);
});

function displayproject(projectName){
    const projectDiv = document.querySelector('.projectNameDiv');

    const button1 = document.createElement('button');
    button1.classList.add("projectNameDivBtn");
    button1.textContent = projectName;

    projectDiv.appendChild(button1);

    const hL = document.createElement('hr')
    hL.classList.add('hr3');
    projectDiv.appendChild(hL);
};