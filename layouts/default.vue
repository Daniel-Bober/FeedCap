
<template>
  <div>
    <NavBarDefault v-if="false"></NavBarDefault>

    <NavBarLogged v-else></NavBarLogged>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>

</style>