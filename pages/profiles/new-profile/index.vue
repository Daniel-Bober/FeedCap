<template>
<div class="new-profile-page">

  <span class="header">New profile</span>

  <div class="input-group">
    <input placeholder="Profile name">

    <NuxtLink class="exit-button" to="./">
      <svg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="m9.474 5.209s-4.501 4.505-6.254 6.259c-.147.146-.22.338-.22.53s.073.384.22.53c1.752 1.754 6.252 6.257 6.252 6.257.145.145.336.217.527.217.191-.001.383-.074.53-.221.293-.293.294-.766.004-1.057l-4.976-4.976h14.692c.414 0 .75-.336.75-.75s-.336-.75-.75-.75h-14.692l4.978-4.979c.289-.289.287-.761-.006-1.054-.147-.147-.339-.221-.53-.221-.191-.001-.38.071-.525.215z" fill-rule="nonzero"/></svg>
    </NuxtLink>
  </div>


  <button class="create-button">Create</button>

</div>
</template>

<script setup lang='ts'>

</script>

<style lang='scss' scoped>
.new-profile-page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-grow: 1;

  .header {
    font-size: $font-36px;
    user-select: none;
    margin-bottom: 100px;
  }

  .input-group {
    position: relative;
    display: grid;
    place-items: center;

    input {
      width: 270px;
      height: 38px;
      padding-bottom: 5px;
      background: none;
      outline: none;
      border: none;
      border-bottom: 2px solid $lightGray;
      font-size: $font-24px;
      color: $offWhite;
      text-align: center;

    }

    .exit-button {
      background: none;
      cursor: pointer;
      fill: $lightGray;
      border: none;
      position: absolute;
      left: -200px;
      top: -75px;

      svg {
        width: 41px;
        height: 42px;
        transition: $time-hover-anim;
      }
    }

    .exit-button:hover {
      svg {
        fill: $offWhite;
      }
    }
    .exit-button:active {
      svg {
        transform: translateX(-3px);
        transition: $time-click-anim;
      }
    }
  }

  .create-button {
    background-color: $mainDark;
    font-size: $font-16px;
    color: $pink;
    border: 1px solid $gray;
    border-radius: 20px;
    padding: 8px 30px;
    margin: 75px 0 150px;
    cursor: pointer;
    transition: $time-hover-anim;
    user-select: none;
  }

  .create-button:hover {
    transform: scale(1.03);
  }

  .create-button:active {
    transform: scale(1);
    transition: $time-click-anim;
  }
}
</style>