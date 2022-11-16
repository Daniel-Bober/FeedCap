<template>
  <div class="liked-messages-list-page">

    <ScrollList>
      <ListCompMessage :liked-mode="false"></ListCompMessage>
      <ListCompMessage :liked-mode="false"></ListCompMessage>
      <ListCompMessage :liked-mode="false"></ListCompMessage>
      <ListCompMessage :liked-mode="false"></ListCompMessage>
      <ListCompMessage :liked-mode="false"></ListCompMessage>
    </ScrollList>

  </div>
</template>


<script setup lang='ts'>
import ScrollList from "~/components/ListComp/ScrollList.vue";



definePageMeta({
  middleware: 'auth'
})
</script>


<style lang='scss' scoped>
.liked-messages-list-page {
  height: calc(100vh - 140px);
}
</style>