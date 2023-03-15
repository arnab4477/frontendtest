<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useMoveListStore } from '@/stores/moves';

const store = useMoveListStore();
const { moves, isMoveListEmpty } = storeToRefs(store);
</script>

<template>
  <div class="sidebar-container">
    <p v-if="isMoveListEmpty" class="sidebar-text">
      Please select squares on the board to add moves here
    </p>
    <p v-else class="sidebar-text">
      {{ moves }}
    </p>
  </div>
</template>

<style scoped>
.sidebar-container {
  height: 90vh;
  width: 375px;
  overflow-x: hidden;
  overflow-y: auto;

  background-color: #333;

  padding: 15px;
  border: 1px solid black;
  border-radius: 20px;
}

.sidebar-container::-webkit-scrollbar {
  width: 4px;
}
.sidebar-container::-webkit-scrollbar-thumb {
  background: rgb(0, 0, 0);
  border-radius: 100vw;
}
.sidebar-container::-webkit-scrollbar-track {
  background: rgb(179, 179, 179);
  border-radius: 100vw;
}

.sidebar-text {
  color: rgb(200, 200, 200);
  font-size: 28px;
}

@media (max-width: 880px) {
  .sidebar-container {
    width: 95%;
    height: 400px;
  }
}
</style>
