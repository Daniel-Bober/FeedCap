<template>
  <div class="liked-messages-list-page">

    <ScrollList>
      <ListCompMessage
          v-for="(message, index) in likedMessages"
          :key="likedMessagesID[index]"
          :customer-name="message.customerName"
          :customer-message="message.message"
          :date="message.date"
          :message-id="likedMessagesID[index]"
          :liked-mode="false"
          @buttonClicked="openPopUpWindow"
      ></ListCompMessage>
    </ScrollList>

    <PopUpWindow
    :is-window-open="isWindowOpen"
    @close-window="closePopUpWindow"
    @give-reward="giveReward"
    ></PopUpWindow>

  </div>
</template>


<script setup lang='ts'>
import ScrollList from "@/components/ListComp/ScrollList.vue";
import PopUpWindow from "~/components/popUpWindow.vue";
import ShortUniqueId from "short-unique-id";
import {useMainStore} from "~/stores/mainStore";
import firestoreProfileColNames from "~/enums/firestoreProfileColNames";

const mainStore = useMainStore();

const messagesData = ref(await getCustomersMessages(firestoreProfileColNames.LikedMessages));
const likedMessages = ref(messagesData.value[0]);
const likedMessagesID = ref(messagesData.value[1]);


const profileName = ref("profileName");
const giftCode = ref("rewardCode");
const securityCode = ref("securityCode");
const gift = ref("reward");
const  customerEmail = ref("daniel13bober@interia.pl");
const {$sgMail} = useNuxtApp();
let clickedMessageID = null;

function sendEmail() {
  const msg = {
    from: customerEmail.value,
    template_id: "d-9713cff6c4f6496e8ac64ced4ea9900c",
    personalizations: [{
      to: {email: "daniel.bober01@gmail.com"},
      dynamic_template_data: {
        profileName: profileName.value,
        code: giftCode.value,
        reward: gift.value,
        securityCode: securityCode.value
      }
    }]
  }

  $sgMail.send(msg)
      .then(() => {
        closePopUpWindow()
        console.log("email sent")
      })
      .catch((error) => {
        console.log("error")
        console.error(error)
      })
}


const isWindowOpen = ref(false);
const createUID = new ShortUniqueId({length: 5});
const createSecurityCode = new ShortUniqueId({
  dictionary: ["1", "2", "3", "4", "5", "6", "7", "8", "9",],
  length: 4})

function openPopUpWindow(messageID) {
  isWindowOpen.value = true;
  clickedMessageID = messageID
}

function closePopUpWindow() {
  isWindowOpen.value = false;
}

async function giveReward(rewardValue) {
  const gCode = createUID();
  const sCode = createSecurityCode();
  profileName.value = mainStore.selectedProfile;
  giftCode.value = gCode;
  gift.value = rewardValue;
  securityCode.value = sCode;

  const clickedMessageIndex = likedMessagesID.value.findIndex(el => el === clickedMessageID);

  const giftMessage =  createGiftMessage(clickedMessageIndex);


  await moveMessageToNewCol(firestoreProfileColNames.Gifts, giftMessage)
  likedMessages.value.splice(clickedMessageIndex, 1)
  likedMessagesID.value.splice(clickedMessageIndex, 1)
  await deleteDocFromCollection(firestoreProfileColNames.LikedMessages , clickedMessageID);


  // sendEmail()
  //skip sending email
  closePopUpWindow()
  //TODO^^^Delete later
}

function createGiftMessage(clickedMessageIndex) {
  const giftMessage = likedMessages.value[clickedMessageIndex];
  giftMessage.giftCode = giftCode.value;
  giftMessage.gift = gift.value;
  giftMessage.securityCode = securityCode.value;
  giftMessage.isGiftActive = true;

  return giftMessage;
}



definePageMeta({
  middleware: 'auth'
})
</script>


<style lang='scss' scoped>
.liked-messages-list-page {
  height: calc(100vh - 140px);
}
</style>