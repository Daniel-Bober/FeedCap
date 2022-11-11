<template>
  <div class="messages-list-page">

    <ScrollList>
      <ListCompMessage></ListCompMessage>
      <ListCompMessage></ListCompMessage>
      <ListCompMessage></ListCompMessage>
      <ListCompMessage></ListCompMessage>
    </ScrollList>

  </div>
</template>

<script setup lang='ts'>
import ScrollList from "~/components/ListComp/ScrollList.vue";

</script>

<style lang='scss' scoped>
.messages-list-page {
  height: calc(100vh - 140px);
}
</style>