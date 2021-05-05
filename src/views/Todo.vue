<template>
  <div class="home">
          <v-text-field
            v-model="newTaskTitle"
            @click:append="addTask"
            @keyup.enter="addTask"
            outlined
            label="Add task"
            append-icon="mdi-plus"
            class="pa-3"
            hide-details
            clearable
          ></v-text-field>
    <v-list
      v-if="$store.state.tasks.length"
      flat
      class="pt-0"
    >
    <div
        v-for="task in $store.state.tasks"
        :key="task.id"
      >
      <v-list-item
        :class="{ 'blue lighten-5': task.done }"
        @click="$store.commit('doneTask', task.id)"
      >
          <template v-slot:default>
            <v-list-item-action>
              <v-checkbox :input-value="task.done"></v-checkbox>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title
                :class="{ 'text-decoration-line-through': task.done }">{{task.title}}</v-list-item-title
              >
            </v-list-item-content>
          <v-list-item-action>
          <v-btn
          @click.stop="$store.commit('deleteTask', task.id)"
            icon
          >
            <v-icon color="primary lighten-1">mdi-delete</v-icon>
          </v-btn>
        </v-list-item-action>
          </template>
        </v-list-item>
        <v-divider></v-divider>
        </div>
    </v-list>
    <div v-else class="no-tasks">
      <div class="text-h5 primary--text">    <v-icon
      size="100"
      color="primary"
    >
      mdi-check
    </v-icon>No Tasks</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Todo',
    data() {
      return {
        newTaskTitle: '',
        // tasks: [
        //   {
        //     id: 1,
        //     title: 'Wake up',
        //     done: false
        //   },
        //   {
        //     id: 2,
        //     title: 'Get bananas',
        //     done: false
        //   },
        //   {
        //     id: 3,
        //     title: 'Eat bananas',
        //     done: false
        //   }
        // ]
      }
    },
    methods: {
      addTask() {
          this.$store.commit('addTask', this.newTaskTitle);
          this.newTaskTitle = '';
      },
      // doneTask(id){
      //   // this.tasks[id - 1].done = !this.tasks[id - 1].done;

      //   // returns array of objects
      //   let task = this.tasks.filter(task => task.id === id)[0];
      //   task.done = !task.done;
      // },
      // deleteTask(id){
      //   // returns array of objects
      //   this.tasks = this.tasks.filter(task => task.id !== id);
      // }
    },
  }
</script>

<style lang="scss">

  .no-tasks {
    position:absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    opacity:0.5;
  }
</style>
