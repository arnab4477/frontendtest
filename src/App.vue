<script setup lang="ts">
import SideBar from './components/SideBar.vue';
import Chessboard from './components/Chessboard.vue';
</script>

<template>
  <main>
    <h1>Chess.com FrontEnd Test</h1>
    <div class="container">
      <Chessboard />
      <SideBar />
    </div>
  </main>
</template>

<style scoped>
main {
  padding: 20px;
}
h1 {
  text-align: center;
  color: white;
  font-family: sans-serif;
  font-size: 64px;
  font-weight: bold;
}
.container {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;

  overflow: hidden;
}

@media (max-width: 880px) {
  main {
    padding: 10px;
  }
  h1 {
    font-size: 32px;
  }
  .container {
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
  }
}
</style>
