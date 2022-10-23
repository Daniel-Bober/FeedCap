
<template>
<div class="nav-bar">
  <img class="icon-logo" src="assets/images/svg/iconLogo.svg" alt="logo" draggable="false">


  <button>
    <NuxtLink class="login-btn" to="/login">Log in</NuxtLink>
  </button>

</div>
</template>

<script setup lang='ts'>

</script>

<style lang='scss' scoped>
.nav-bar {
  @include nav-bar;
}

.login-btn {
  font-size: $font-24px;
  color: $offWhite;
  user-select: none;
  cursor: pointer;
  text-decoration: none;

}

button {
  transition: $time-long-hover-anim;
}

button:hover {
  transform: scale(1.07);
}
</style>