import "./styles/styles.css";
import {addTask, displayTask } from "./tasks";
import { displayTasksForProject } from "./project";

window.addEventListener("DOMContentLoaded", () => {
    const defaultProject = { projectName: "Demo Project" };
    const projectEvent = new CustomEvent("projectAdded", { detail: defaultProject });
    document.dispatchEvent(projectEvent);

    const defaultTasks = [
        { taskName: "Task 1", priority: "Medium", dueDate: "2023-12-05", project: "Demo Project" },
    ];

    defaultTasks.forEach((task) => {
        const newTask = addTask(task);
        displayTask(newTask);
    });
    displayTasksForProject(defaultProject.projectName);
});