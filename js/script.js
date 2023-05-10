const { createApp } = Vue

createApp({
    data() {
        return {
            newTask: "",
            taskList: [
                { text: "lavorare", done: false},
                { text: "Pagare", done: false},
                { text: "comprare", done: false},
            ]
        }
    },
    methods: {
        addTask() {
            if (this.newTask.length <4) {
                alert("troppo corto")
            }else{
                let newTask = {
                    text: this.newTask,
                    done: false,
                }
                this.taskList.unshift(newTask);
            }
            this.newTask = "";

        },
        rimuoviTask(i) {
            // this.taskList.splice(i, 1);
            this.taskList = ""
        },
        cambiaTask(i) {
            this.taskList[i].done = ! this.taskList[i].done;

        },
    }
}).mount('#app')