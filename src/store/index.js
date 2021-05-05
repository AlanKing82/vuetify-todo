import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasks: [
      {
        id: 1,
        title: 'Wake up',
        done: false
      },
      {
        id: 2,
        title: 'Get bananas',
        done: false
      },
      {
        id: 3,
        title: 'Eat bananas',
        done: false
      }
    ]
  },
  mutations: {
    addTask(state, newTaskTitle) {
      let newTask = {
        id: Date.now(),
        title: newTaskTitle,
        done: false
      };
      state.tasks.push(newTask);
    },
    doneTask(state, id){
      // this.tasks[id - 1].done = !this.tasks[id - 1].done;

      // returns array of objects
      let task = state.tasks.filter(task => task.id === id)[0];
      task.done = !task.done;
    },
    deleteTask(state, id){
      // returns array of objects
      state.tasks = state.tasks.filter(task => task.id !== id);
    }
  },
  actions: {
  },
  modules: {
  }
})
