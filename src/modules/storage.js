export default class Storage {
    static addEntry(key, data) {
        // if (!this.exists) return;
        localStorage.setItem(key, JSON.stringify(data));
        console.log(`Key: ${key} with Data: ${data} has been stored`);
    }

    static removeEntry(key) {
        localStorage.removeItem(key);
        console.log(`Entry with key ${key} has been removed`);
    }

    static fetchProjects(key){
        for (let i = 0; i < localStorage.length; i++)   {
            const key = localStorage.key(i);
            const value = localStorage.getItem(key);
            console.log(`Key:${key} Value:${value}`);
          }
        return localStorage.getItem(key);
    }
}

// Key -> task[num];
// export {taskArr};