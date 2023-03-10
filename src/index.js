import UI from "./modules/ui";
// import Task from "./modules/task";
// import Storage from "./modules/storage";

console.log("Hello world");

UI.openModal();
UI.closeModal();
UI.removeTask();
UI.openProjectModal();
UI.closeProjectModal();
UI.loadProjects();

// Storage.addEntry("Key1", "ASIHDKASDHJKL");

// import { taskArr } from "./modules/storage";
// console.log(taskArr);

/* 
    User Input ->
    New Task Object ->
    Fill Task Object ->
    
    UI Pulls From Task Object ->
*/