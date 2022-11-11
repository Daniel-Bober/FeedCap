
<template>
  <div class="default-layout">
    <NavBarDefault v-if="false"></NavBarDefault>

    <NavBarLogged v-else></NavBarLogged>
    <slot></slot>
  </div>
</template>


<script setup lang="ts">

</script>


<style lang="scss" scoped>
.default-layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>