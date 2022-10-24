
<template>
<div class="nav-bar">
  <img class="icon-logo" src="assets/images/svg/iconLogo.svg" alt="logo" draggable="false">


  <NuxtLink class="login-btn" to="/login">Log in</NuxtLink>

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
  user-select: none;
  cursor: pointer;
  text-decoration: none;
  transition: $time-long-hover-anim;
}

.login-btn:hover {
  transform: scale(1.07);
}
</style>