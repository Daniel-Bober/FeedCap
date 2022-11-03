<template>
  <div class="messages-list-page">

    <div class="messages-list">
      <ListCompMessage></ListCompMessage>
      <ListCompMessage></ListCompMessage>
      <ListCompMessage></ListCompMessage>
      <ListCompMessage></ListCompMessage>
    </div>

    <NuxtLink class="back-button" to="./">
      <svg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path
            d="m9.474 5.209s-4.501 4.505-6.254 6.259c-.147.146-.22.338-.22.53s.073.384.22.53c1.752 1.754 6.252 6.257 6.252 6.257.145.145.336.217.527.217.191-.001.383-.074.53-.221.293-.293.294-.766.004-1.057l-4.976-4.976h14.692c.414 0 .75-.336.75-.75s-.336-.75-.75-.75h-14.692l4.978-4.979c.289-.289.287-.761-.006-1.054-.147-.147-.339-.221-.53-.221-.191-.001-.38.071-.525.215z"/>
      </svg>
    </NuxtLink>
  </div>
</template>

<script setup lang='ts'>

</script>

<style lang='scss' scoped>
.messages-list-page {
  height: calc(100vh - 140px);
  display: flex;
  justify-content: center;

  .messages-list {
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: scroll;
    position: relative;
  }

  .messages-list::-webkit-scrollbar {
    display: none;
  }

  .messages-list {
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }

  .back-button {
    width: 42px;
    fill: $lightGray;
    position: absolute;
    left: 20%;
    top: 40%;
    cursor: pointer;
    transition: $time-hover-anim;
  }
  .back-button:hover {
    fill: $offWhite;
  }
  .back-button:active {
    transform: translateX(-3px);
    transition: $time-click-anim;
  }
}
</style>