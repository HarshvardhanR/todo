export function showTaskForm(projectName) {
    const modal = document.createElement("div");
    modal.classList.add("modal");

    const formContainer = document.createElement("div");
    formContainer.classList.add("form-container");

    formContainer.innerHTML = `
        <h2 class="form-title">Add New Task</h2>
        <form class="form">
            <label for="taskName" class="form-label">Task Name:</label>
            <input type="text" id="taskName" name="taskName" class="form-input" required>

            <label for="priority" class="form-label">Priority:</label>
            <select id="priority" name="priority" class="form-select" required>
                <option value="High">High</option>
                <option value="Medium" selected>Medium</option>
                <option value="Low">Low</option>
            </select>

            <label for="dueDate" class="form-label">Due Date:</label>
            <input type="date" id="dueDate" name="dueDate" class="form-input" required>

            <label for="project" class="form-label">Project:</label>
            <input type="text" id="project" name="project" class="form-input" value="${projectName}" readonly required>

            <div class="form-actions">
                <button type="submit" class="form-button">Add Task</button>
                <button type="button" class="form-button cancel-button">Cancel</button>
            </div>
        </form>
    `;

    modal.appendChild(formContainer);
    document.body.appendChild(modal);

    const form = modal.querySelector(".form");
    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const taskName = document.getElementById("taskName").value.trim();
        const priority = document.getElementById("priority").value;
        const dueDate = document.getElementById("dueDate").value;
        const project = document.getElementById("project").value.trim();

        if (taskName && dueDate && project) {
            const taskData = { taskName, priority, dueDate, project };
            const taskEvent = new CustomEvent("taskAdded", { detail: taskData });
            document.dispatchEvent(taskEvent);
            modal.remove();
        }
    });

    const cancelButton = modal.querySelector(".cancel-button");
    cancelButton.addEventListener("click", () => {
        modal.remove();
    });
}

export function showProjectForm() {
    const modal = document.createElement("div");
    modal.classList.add("modal");

    const projectContainer = document.createElement("div");
    projectContainer.classList.add("project-container");

    projectContainer.innerHTML = `
        <h2 class="project-title">Add New Project</h2>
        <form class="project">
            <label for="projectName" class="project-label">Project Name:</label>
            <input type="text" id="projectName" name="projectName" class="project-input" required>

            <div class="form-actions">
                <button type="submit" class="form-button">Add</button>
                <button type="button" class="form-button cancel-button">Cancel</button>
            </div>
        </form>
    `;

    modal.appendChild(projectContainer);
    document.body.appendChild(modal);

    const projectForm = modal.querySelector(".project");
    projectForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const projectName = document.getElementById("projectName").value.trim();

        if (projectName) {
            const projectEvent = new CustomEvent("projectAdded", { detail: { projectName } });
            document.dispatchEvent(projectEvent);
            modal.remove();
        }
    });

    const cancelButton = modal.querySelector(".cancel-button");
    cancelButton.addEventListener("click", () => {
        modal.remove();
    });
}