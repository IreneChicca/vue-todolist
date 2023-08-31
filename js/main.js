const { createApp } = Vue;

createApp({
  data() {
    return {
      todoList: [
        { text: "Fare la spesa", done: false },
        { text: "Pulire salone", done: false },
        { text: "Ritirare pacco", done: false },
        { text: "Andare in farmacia", done: false },
      ],
    };
  },
}).mount("#app");
