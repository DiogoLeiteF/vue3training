<template>
  <div class="mb-4">
    <AddTaskInput @added="taskAdded"></AddTaskInput>
    <BaseCheckbox class="mb-4 p-4 text-gray-600 text-sm font-weight-100" v-model="onlyPending">Only pending
      tasks</BaseCheckbox>
  </div>
  <div class="grid grid-cols-1 gap-4 md:grid-cols-3">
    <TodoListItem v-for="task in displayedTasks" :task="task" :key="task.id" v-model:done="task.done"
      v-model:priority="task.priority">
    </TodoListItem>
  </div>
</template>


<script>
let nextTaskId = 100;

import AddTaskInput from './components/AddTaskInput.vue';
import BaseCheckbox from './components/BaseCheckbox.vue';
import TodoListItem from './components/TodoListItem.vue';

export default {
  name: "App",
  components: {
    BaseCheckbox,
    AddTaskInput,
    TodoListItem,
  },
  computed: {
    displayedTasks() {
      return [...this.tasks] // create a copy of the array
        .sort((a, b) => b.priority - a.priority)
        .filter(task => !this.onlyPending || !task.done);
    },
  },
  methods: {
    taskAdded(task) {
      this.tasks.push({
        id: nextTaskId++,
        description: task,
        done: false,
        priority: false,
      });
    },
  },
  data() {
    return {
      onlyPending: false,
      tasks: [{
        id: 1,
        description: 'Buy food for the dog',
        priority: false,
        done: false
      },
      {
        id: 2,
        description: 'Pay the bills',
        priority: true,
        done: false
      },
      {
        id: 3,
        description: 'Buy some computer games',
        priority: false,
        done: false
      },
      {
        id: 4,
        description: 'Go to the gym',
        priority: false,
        done: false,
      }],
    }
  }
}
</script>
