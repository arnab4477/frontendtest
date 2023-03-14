import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

export const useMoveListStore = defineStore('counter', () => {
  const moveList = ref<string[]>([]);
  const moves = computed(() => {
    return moveList.value.join(', ');
  });

  const isMoveListEmpty = computed(() => {
    return moveList.value.length === 0;
  });

  function addMoves(move: string) {
    moveList.value.push(move);
  }

  return { moves, addMoves, isMoveListEmpty };
});
