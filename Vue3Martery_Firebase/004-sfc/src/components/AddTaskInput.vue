<template>
  <input
    ref="input"
    v-model="task"
    type="text"
    placeholder="Enter task and hit enter"
    class="block w-full rounded-md shadow-sm text-lg p-4"
    @keyup.enter="add"
  >
</template>

<script>
export default {
    emits: ['added'],
    data() {
        return {
            task: '',
        }
    },
    mounted() {
        this.$refs.input.focus();
    },
    methods: {
        add() {
            this.$emit('added', this.task);
            this.task = '';
        }
    }
}
</script>