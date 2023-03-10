export default class Project {
    constructor(name){
        this.name = name;
        this.todos = [];
    }

    setName(name){
        this.name = name;
    }

    getName(){
        return this.name;
    }

    setTodo(todos){
        this.todos = todos; 
    }

    getTodo(){
        return this.todos;
    }
}