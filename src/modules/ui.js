export default class UI {

    static getModal(){
        const modal = document.querySelector(".modal-container");
        return modal;
    }

    static getContent(){
        const content = document.querySelector("#content");
        return content;
    }

    static openModal(){
        const addBtn = document.querySelector(".addBtn");
        addBtn.addEventListener("click", () => {
            console.log("Clicked!");
            this.getModal().classList.add('show');
            this.handleForm();
        });
    }

    static addTask(titleInput,descInput,dateInput){
        const container = document.createElement('div');
        container.classList.add("todo-item");

        const checkbox = document.createElement('input');
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

        this.getContent().appendChild(container);

    }

    static handleForm(){
        const form = document.querySelector("#myForm");

        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const formData = new FormData(form);

            let tempArr = [];
            for (let item of formData){
                // console.log(item[0], item[1]);
                console.log(item[1]);
                tempArr.push(item[1]);
            }
            // console.log(tempArr);
            this.addTask(tempArr[0],tempArr[1],tempArr[2]);
        })
    }

    static closeForm(){
        const closeBtn = document.querySelector("#closeModalBtn");

        closeBtn.addEventListener('click', () => {
            this.getModal().classList.remove('show');
        })
    }
}