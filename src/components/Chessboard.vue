<script setup lang="ts">
import { useMoveListStore } from '@/stores/moves';
import BoardArray from '@/BoardArray';

const store = useMoveListStore();
const { addMoves } = store;

function getSquareColor(square: string): 'dark' | 'light' {
  // Convert the file and ranks of the squares to integers
  const fileNum = square[0].charCodeAt(0);
  const rankNum = parseInt(square[1]);

  // If the addition of the file and rank numbers is even
  // then it is a dark square, else it is a light square
  return (fileNum + rankNum) % 2 === 0 ? 'dark' : 'light';
}

function handleSquareClick(e: Event) {
  // Get the clicked square
  const squareEl = e.target as HTMLElement;

  // Check if any other piece is already highlighted, if yes then un-highlight it
  const highlightedPiece = document.querySelector('.highlighted');
  if (highlightedPiece) {
    highlightedPiece.classList.remove('highlighted');
  }

  // Highlight the current clicked square and add it's coordinates to the move list state
  squareEl.classList.add('highlighted');
  addMoves(squareEl.innerText);

  // Un-highlight the square after 5 seconds
  setTimeout(() => {
    squareEl.classList.remove('highlighted');
  }, 5000);
}
</script>

<template>
  <div @click="handleSquareClick" class="board-container">
    <div class="rank" v-for="(rank, i) in BoardArray" :key="i">
      <div
        class="square"
        v-for="square in rank"
        :key="square"
        :class="getSquareColor(square)"
      >
        {{ square }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.board-container {
  width: 48%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  box-shadow: 0 0 25px 10px rgba(14, 14, 14, 0.782);
}

.rank {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 12.5%;
}

.square {
  width: 12.5%;
  height: 100%;
  padding: 4.5%;
  font-size: 16px;
}

.square:hover {
  cursor: pointer;
}
.dark {
  background-color: var(--dark-square-bg-color);
  color: var(--font-color-dark-square);
}
.light {
  background-color: var(--light-square-bg-color);
  color: var(--font-color-light-square);
}

.highlighted {
  background-color: var(--highlighted-square-bg-color);
}

@media (max-width: 880px) {
  .board-container {
    width: 95%;
    margin-top: 20px;
    margin-bottom: 20px;

    box-shadow: 0 0 10px 2.5px rgba(14, 14, 14, 0.782);
  }
  .square {
    font-size: 10px;
  }
}
</style>
