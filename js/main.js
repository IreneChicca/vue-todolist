const { createApp } = Vue;

createApp({
  data() {
    return {
      todoList: [
        { text: "Fare la spesa", done: false },
        { text: "Pulire salone", done: false },
        { text: "Ritirare pacco", done: true },
        { text: "Andare in farmacia", done: false },
      ],

      newTask: "",
    };
  },

  methods: {
    // creo metodo che mi permetta di eliminare il task in base al suo indice che individuo dal for
    deleteTask(index) {
      this.todoList.splice(index, 1);
    },

    // creo metodo che deve prendere il testo all'interno dell'input e pusharlo nell'array esistente
    addTask() {
      if (this.newTask.length > 2) {
        //inserisco in una variabile la creazione del nuovo oggetto
        const taskToAdd = { text: this.newTask, done: false };
        // inserisco all'inizio dell'array l'oggetto creato
        this.todoList.unshift(taskToAdd);
        // svuoto il placeholder una volta cliccato il tasto add
        this.newTask = "";
      } else {
        alert("Inserisci un task valido");
        this.newTask = "";
      }
    },

    toggleClass(index) {
      this.todoList[index].done = !this.todoList[index].done;
    },
  },
}).mount("#app");
