import { showProjectForm } from "./form";

const tasks = [];

function Task(title, priority, dueDate, project){
    this.title = title;
    this.priority = priority;
    this.dueDate = dueDate;
    this.project = project;
}

document.querySelector(".rightContentDivBtn").addEventListener("click", showProjectForm);
