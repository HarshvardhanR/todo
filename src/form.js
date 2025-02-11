export function showProjectForm() {
    if (document.getElementById("projectFormModal")) return;
    const modal = document.createElement("div");
    modal.id = "projectFormModal";
    
    const formContainer = document.createElement("div");
    
    formContainer.innerHTML = `
        <h2>Add New Task</h2>
        <form id="projectForm">
            <label for="projectName">Task Name:</label>
            <input type="text" id="projectName" name="projectName" required>
            <div style="margin-top: 10px; display: flex; gap: 10px;">
                <button type="submit">Add</button>
                <button type="button" id="cancelForm">Cancel</button>
            </div>
        </form>
    `;
    
    modal.appendChild(formContainer);
    document.body.appendChild(modal);

    document.getElementById("projectForm").addEventListener("submit", (event) => {
        event.preventDefault();
        const projectName = document.getElementById("projectName").value.trim();
        if (projectName) {
            console.log("New Project Added:", projectName);
            document.body.removeChild(modal);
        }
    });

    document.getElementById("cancelForm").addEventListener("click", () => {
        document.body.removeChild(modal);
    });
}
