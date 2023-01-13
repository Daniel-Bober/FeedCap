<template>
  <div class="messages-list-page">

    <ScrollList>
      <ListCompMessage
          v-for="(message, index) in likedMessages"
          :key="likedMessagesID[index]"
          :customer-name="message.customerName"
          :customer-message="message.message"
          :date="message.date"
      ></ListCompMessage>
    </ScrollList>

  </div>
</template>

<script setup lang='ts'>
import ScrollList from "~/components/ListComp/ScrollList.vue";
import firestoreProfileColNames from "~/enums/firestoreProfileColNames";

const messagesData = ref(await getCustomersMessages(firestoreProfileColNames.Messages));
const likedMessages = ref(messagesData.value[0])
const likedMessagesID = ref(messagesData.value[1])

definePageMeta({
  middleware: 'auth'
})
</script>

<style lang='scss' scoped>
.messages-list-page {
  height: calc(100vh - 140px);
}
</style>