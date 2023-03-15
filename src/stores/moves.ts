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

  /**
   * This function takes a move as a parameter and adds it to the moveList
   * array in track the moves
   */
  function addMoves(move: string) {
    // The new move's index should be one more than the list's length
    // This will make sure to track the order of the clicked moves
    const moveListLength = moveList.value.length;
    const newMove = `${moveListLength + 1}. ${move}`;
    moveList.value.push(newMove);
  }

  return { moves, addMoves, isMoveListEmpty };
});
