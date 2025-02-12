import "./styles/styles.css";
import { loadInbox } from "./menu";
import {loadToday} from "./menu";
import { loadWeek } from "./menu";
import { loadImp } from "./menu";
import {loadComp} from "./menu";


window.addEventListener("DOMContentLoaded", () => {
    const defaultProject = { projectName: "Demo Project" };
    const projectEvent = new CustomEvent("projectAdded", { detail: defaultProject });
    document.dispatchEvent(projectEvent);
    
    const defaultTask = {
        taskName: "Task 1", priority: "Low", dueDate: "2025-02-12", project: "Demo Project" 
    }
    const taskEvent = new CustomEvent("taskAdded", {detail: defaultTask});
    document.dispatchEvent(taskEvent);
    
    loadInbox();
    setActiveButton(document.querySelector('.inboxBtn'))

});

document.querySelector('.inboxBtn').addEventListener("click", ()=>{
    loadInbox();
    setActiveButton(document.querySelector('.inboxBtn'))
})

document.querySelector('.todayBtn').addEventListener("click", ()=>{
    loadToday();
    setActiveButton(document.querySelector('.todayBtn'))
})

document.querySelector('.weekBtn').addEventListener("click", ()=>{
    loadWeek();
    setActiveButton(document.querySelector('.weekBtn'))
})

document.querySelector('.impBtn').addEventListener("click", ()=>{
    loadImp();
    setActiveButton(document.querySelector('.impBtn'))
})

document.querySelector('.compBtn').addEventListener("click", ()=>{
    loadComp();
    setActiveButton(document.querySelector('.compBtn'))
})


function setActiveButton(activeButton) {
    document.querySelectorAll(".optionsDivBtn").forEach(bt => {
        bt.style.backgroundColor = "";
        bt.style.color = ""
    });
    activeButton.style.backgroundColor = "#2e3e4e";
    activeButton.style.color = "white"
    activeButton.style.borderRadius = "2vh"
}
