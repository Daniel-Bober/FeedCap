<template>
  <div class="liked-messages-list-page">

    <ScrollList>
      <list-comp-message :liked-mode="false"></list-comp-message>
      <list-comp-message :liked-mode="false"></list-comp-message>
      <list-comp-message :liked-mode="false"></list-comp-message>
      <list-comp-message :liked-mode="false"></list-comp-message>
    </ScrollList>

  </div>
</template>


<script setup lang='ts'>
import ScrollList from "~/components/ListComp/ScrollList.vue";

</script>


<style lang='scss' scoped>
.liked-messages-list-page {
  height: calc(100vh - 140px);
}
</style>