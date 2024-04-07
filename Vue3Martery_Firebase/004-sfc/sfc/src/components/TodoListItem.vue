<template>
  <div
    class="bg-white shadow-sm rounded-md text-gray-700 text-xs md:text-sm p-4"
    :class="{ 'opacity-25 line-through': task.done }"
  >
    <div>
      {{ task.description }}
    </div>
    <div class="py-4 bg-white">
      <base-checkbox
        class="mb-2"
        @update:model-value="$emit('update:done', $event)"
        :model-value="done"
      >
        Done
      </base-checkbox>
      <base-checkbox
        @update:model-value="$emit('update:priority', $event)"
        :model-value="priority"
      >
        Prioritized
      </base-checkbox>
    </div>
  </div>
</template>
<script>
import BaseCheckbox from "./BaseCheckbox.vue";
export default {
  components: {
    BaseCheckbox,
  },
  props: {
    task: {
      type: Object,
      required: true,
    },
    done: {
      type: Boolean,
    },
    priority: {
      type: Boolean,
    },
  },
  emits: ["update:done", "update:priority"],
};
</script>
