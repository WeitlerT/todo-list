import Task from "./task";
import Storage from "./storage";
import Project from "./project";

export default class UI {

    static loadProjects(){
        Storage.fetchProjects();
    }

    static removeTask(){
        const checkbox = document.querySelectorAll(".checkbox");
        checkbox.forEach((item) => {
            item.addEventListener('click', (e) => {
                e.target.parentNode.remove();
                Storage.removeEntry("Key1");
            });
        })
    }

    static openProjectModal(){
        const addBtn = document.querySelector(".addProjBtn");
        const modal = document.querySelector("#projectModalContainer");
        addBtn.addEventListener("click", () => {
            modal.classList.add('show');
            this.handleProjectForm();
        });
    }

    static closeProjectModal(){
        const closeBtn = document.querySelector("#closeProjectModalBtn");
        const modal = document.querySelector("#projectModalContainer");
        closeBtn.addEventListener('click', () => {
            modal.classList.remove('show');
        })
    }

    static openModal(){
        const modal = document.querySelector(".modal-container");
        const addBtn = document.querySelector(".addBtn");
        addBtn.addEventListener("click", () => {
            modal.classList.add('show');
            this.handleForm();
        });
    }

    static closeModal(){
        const modal = document.querySelector(".modal-container");
        const closeBtn = document.querySelector("#closeModalBtn");
        closeBtn.addEventListener('click', () => {
            modal.classList.remove('show');
        })
    }

    static addProject(name){
        const projList = document.querySelector("#projectList")

        const list = document.createElement('li');
        list.textContent = name;

        projList.appendChild(list);
    }

    static handleProjectForm(){
        const form = document.querySelector("#projectForm");

        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const formData = new FormData(form);

            let project = new Project(formData.get("name"));
            
            this.addProject(formData.get("name"));
            Storage.addEntry(formData.get("name"), project);
        })
    }

    static addTask(titleInput,descInput,dateInput){
        const content = document.querySelector("#content")

        const container = document.createElement('div');
        container.classList.add("todo-item");

        const checkbox = document.createElement('input');
        checkbox.classList.add("checkbox");
        checkbox.type = "checkbox"

        const title = document.createElement('p');
        title.classList.add("title");

        const desc = document.createElement('p');
        desc.classList.add("desc");

        const date = document.createElement('p');
        date.classList.add("date");

        title.textContent = titleInput;
        desc.textContent = descInput;
        date.textContent = dateInput;

        container.appendChild(checkbox);
        container.appendChild(title);
        container.appendChild(desc);
        container.appendChild(date);

        content.appendChild(container);
    }

    static handleForm(){
        const form = document.querySelector("#todoForm");

        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const formData = new FormData(form);

            let task = new Task(formData.get("title"), formData.get("desc"), formData.get("date"));
            // console.log(task.getTitle());
            // console.log(task.getDesc());

            let tempArr = [];
            for (let item of formData){
                // console.log(item[0], item[1]);
                // console.log(item[1]);
                tempArr.push(item[1]);
            }
            
            this.addTask(tempArr[0],tempArr[1],tempArr[2]);
            this.removeTask();
            // Storage.addEntry(proj, task);
        })
    }
}