<template>
  <div id="app" class="p-8 w-3/4 mx-auto">
    <div class="mb-4">
      <add-task-input @added="taskAdded"></add-task-input>
      <base-checkbox
        class="mb-4 p-4 text-gray-600 text-sm font-weight-100"
        v-model="onlyPending"
      >
        Only pending tasks
      </base-checkbox>
    </div>
    <div class="grid grid-cols-1 gap-4 md:grid-cols-3">
      <todo-list-item
        v-for="task in displayedTasks"
        :task="task"
        :key="task.id"
        v-model:done="task.done"
        v-model:priority="task.priority"
      >
      </todo-list-item>
    </div>
  </div>
</template>

<script>
import AddTaskInput from "./components/AddTaskInput.vue";
import BaseCheckbox from "./components/BaseCheckbox.vue";
import TodoListItem from "./components/TodoListItem.vue";

let nextTaskId = 100;
export default {
  name: "App",
  components: { AddTaskInput, BaseCheckbox, TodoListItem },
  data() {
    return {
      onlyPending: false,
      tasks: [
        {
          id: 1,
          description: "Buy food for the dog",
          priority: false,
          done: false,
        },
        {
          id: 2,
          description: "Pay the bills",
          priority: true,
          done: false,
        },
        {
          id: 3,
          description: "Buy some computer games",
          priority: false,
          done: true,
        },
        {
          id: 4,
          description: "Go to the gym",
          priority: false,
          done: false,
        },
      ],
    };
  },
  computed: {
    displayedTasks() {
      return [...this.tasks]
        .sort((a, b) => Number(b.priority) - Number(a.priority))
        .filter((task) => !this.onlyPending || !task.done);
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
};
</script>
