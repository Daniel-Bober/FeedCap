<template>
  <div class="liked-messages-list-page">

    <ScrollList>
      <ListCompMessage
          v-for="(message, index) in likedMessages"
          :key="likedMessagesID[index]"
          :customer-name="message.customerName"
          :customer-message="message.message"
          :date="message.date"
          :liked-mode="false"
      ></ListCompMessage>

    </ScrollList>

  </div>
</template>


<script setup lang='ts'>
import ScrollList from "~/components/ListComp/ScrollList.vue";

const messagesData = ref(await getCustomersMessages(2));// 1-'messages', 2-'likedMessages',
const likedMessages = ref(messagesData.value[0])
const likedMessagesID = ref(messagesData.value[1])

definePageMeta({
  middleware: 'auth'
})
</script>


<style lang='scss' scoped>
.liked-messages-list-page {
  height: calc(100vh - 140px);
}
</style>