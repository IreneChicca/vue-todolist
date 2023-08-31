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
    };
  },

  methods: {
    // creo metodo che mi permetta di eliminare il task in base al suo indice che individuo dal for
    deleteTask(index) {
      this.todoList.splice(index, 1);
    },
  },
}).mount("#app");
