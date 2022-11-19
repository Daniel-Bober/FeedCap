<template>
  <div class="default-layout">
    <NavBarDefault v-if="!store.isLogged"></NavBarDefault>

    <NavBarLogged v-else></NavBarLogged>
    <slot></slot>
  </div>
</template>


<script setup lang="ts">
import {useUserGlobalState} from "~/stores/user";

const store = useUserGlobalState()
</script>


<style lang="scss" scoped>
.default-layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>