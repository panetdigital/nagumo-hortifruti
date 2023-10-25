<template>
  <div>
   <!--  <v-list>
      <v-list-item
        v-for="(task, index) in tasks"
        :key="index"
        :class="{ completed: task.completed }"
      >
        <v-list-item-content>
          <v-list-item-title>{{ task.text }}</v-list-item-title>
        </v-list-item-content>
        <v-list-item-action>
          <v-btn @click="toggleTask(index)">
            <v-icon>{{ task.completed ? 'mdi-checkbox-marked' : 'mdi-checkbox-blank-outline' }}</v-icon>
          </v-btn>
          <v-btn @click="deleteTask(index)">
            <v-icon>mdi-delete</v-icon>
          </v-btn>
        </v-list-item-action>
      </v-list-item>
    </v-list>
    <v-text-field
      v-model="newTask"
      label="Nova Tarefa"
      @keydown.enter="addTask"
    ></v-text-field> -->
    
    <!-- Botão para adicionar tarefa -->
    <v-btn @click="addTask" color="primary">Adicionar Tarefa</v-btn>botao
  </div>
</template>

<script>
export default {
  data() {
    return {
      tasks: [],
      newTask: "",
    };
  },
  methods: {
    addTask() {
      if (this.newTask.trim() !== "") {
        this.tasks.push({
          text: this.newTask,
          completed: false,
        });
        this.newTask = "";
      }
    },
    toggleTask(index) {
      this.tasks[index].completed = !this.tasks[index].completed;
    },
    deleteTask(index) {
      this.tasks.splice(index, 1);
    },
  },
};
</script>

<style scoped>
.completed {
  text-decoration: line-through;
}
</style>
