import {displayProject} from "./project"
import { showTaskForm } from "./form";
import { displayTask, tasks } from "./tasks";

export function loadInbox() {
    const divToModify = document.querySelector('.rightContentDiv');
    divToModify.innerHTML = `
        <div class="rightContentDiv1">
            <p class="rightContentDiv1Para">Inbox</p>
            <div>
                <button class="rightContentDivBtn"><i class="fa-solid fa-circle-plus"></i>     Add New Task</button>
            </div>
            <hr class="hr2">
        </div>
    `;

    const addNewTaskButton = divToModify.querySelector('.rightContentDivBtn');
    addNewTaskButton.addEventListener("click", () => {
        const defaultProject = "Demo Project"; // Set or retrieve the project name
        showTaskForm(defaultProject); // Show the task form to add a new task
    });

    tasks.forEach((task) =>{
        displayTask(task);
    })
}

export function loadToday(){

    const divToModify = document.querySelector('.rightContentDiv');
    divToModify.innerHTML = `
        <div class="rightContentDiv1">
            <p class="rightContentDiv1Para">Today</p>
        </div>
    `;

    tasks.forEach((task) => {
        const today = new Date();
        const todayStr = today.toISOString().split('T')[0];
    
        console.log(todayStr);
    
        if (task.dueDate.trim() === todayStr) { 
            displayTask(task);
        }
    }); 
}

export function loadWeek(){

    const divToModify = document.querySelector('.rightContentDiv');
    divToModify.innerHTML = `
        <div class="rightContentDiv1">
            <p class="rightContentDiv1Para"> This Week</p>
        </div>
    `;

    tasks.forEach((task) => {
        const today = new Date();
        const taskDate = new Date(task.dueDate);
    
        const startOfWeek = new Date(today);
        startOfWeek.setDate(today.getDate() - today.getDay());
    
        const endOfWeek = new Date(today);
        endOfWeek.setDate(today.getDate() + (6 - today.getDay()));
    
        if (taskDate >= startOfWeek && taskDate <= endOfWeek) {
            displayTask(task);
        }
    });
    
}

export function loadImp(){

    const divToModify = document.querySelector('.rightContentDiv');
    divToModify.innerHTML = `
        <div class="rightContentDiv1">
            <p class="rightContentDiv1Para">Important</p>
        </div>
    `;

    tasks.forEach((task) => {
        if(task.priority==="High"){
            displayTask(task);
        }
    });
    
}

export function loadComp(){
    const divToModify = document.querySelector('.rightContentDiv');
    divToModify.innerHTML = `
        <div class="rightContentDiv1">
            <p class="rightContentDiv1Para">Completed</p>
        </div>
    `;


}