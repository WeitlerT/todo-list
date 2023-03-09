export default class Storage {
    static addEntry(key, data) {
        // if (!this.exists) return;
        localStorage.setItem(key, JSON.stringify(data));
        console.log("Storage func");
    }

}

// Key -> task[num];
// export {taskArr};