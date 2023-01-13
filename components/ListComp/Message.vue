<template>
  <div class="message-body">

    <span class="customer-name">{{ customerName }}</span>

    <span class="customer-message" role="textbox">{{ customerMessage }}</span>

    <span class="date">{{ date }}</span>

    <button class="like-gift-button" @click="buttonClicked">
      <img v-if="likedMode" src="@/assets/images/icons/heart_pink.svg" alt="like button">
      <img v-else src="@/assets/images/icons/gift_pink.svg" alt="gift button">
    </button>


    <button class="dots-menu">
      <svg width="6" height="20" viewBox="0 0 6 20" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M3.42725 5.18051C2.04645 5.18051 0.927246 4.10069 0.927246 2.76848C0.927246 1.43626 2.04645 0.356445 3.42725 0.356445C4.80805 0.356445 5.92725 1.43626 5.92725 2.76848C5.92725 4.10069 4.80805 5.18051 3.42725 5.18051ZM3.42725 12.4166C2.04645 12.4166 0.927246 11.3368 0.927246 10.0046C0.927246 8.67236 2.04645 7.59254 3.42725 7.59254C4.80805 7.59254 5.92725 8.67236 5.92725 10.0046C5.92725 11.3368 4.80805 12.4166 3.42725 12.4166ZM3.42725 19.6527C2.04645 19.6527 0.927245 18.5729 0.927245 17.2407C0.927245 15.9085 2.04645 14.8286 3.42725 14.8286C4.80805 14.8286 5.92725 15.9085 5.92725 17.2407C5.92725 18.5729 4.80805 19.6527 3.42725 19.6527Z"/>
      </svg>
    </button>
  </div>
</template>


<script setup lang='ts'>
const emit = defineEmits(['buttonClicked']);

const props = defineProps({
  likedMode: {
    type: Boolean,
    default: true
  },
  customerName: String,
  customerMessage: String,
  date: String,
  messageId: String
});

function buttonClicked() {
  if(props.likedMode) {
    emit('buttonClicked');
  }
  else emit('buttonClicked', props.messageId);


}
</script>


<style lang='scss' scoped>
.message-body {
  width: 460px;
  margin-bottom: 42px;
  border: 2px solid $gray;
  border-radius: 35px;
  display: flex;
  flex-direction: column;
  position: relative;

  .customer-name {
    font-size: $font-20px;
    color: $lightGray;
    margin: 30px 0 0 35px;
  }

  .customer-message {
    width: 300px;
    font-size: $font-20px;
    margin: 25px 0 0 35px;
  }

  .date {
    font-size: $font-14px;
    font-weight: bold;
    color: $gray;
    margin: 10px 0 20px 35px;
  }

  .like-gift-button {
    position: absolute;
    right: 20px;
    bottom: 20px;
    transition: $time-hover-anim;

    img {
      width: 32px;
    }
  }

  .like-gift-button:hover {
    transform: scale(1.07);
  }

  .like-gift-button:active {
    transform: scale(1);
    transition: $time-click-anim;
  }

  .dots-menu {
    position: absolute;
    right: 20px;
    top: 20px;

    svg {
      fill: $lightGray;
      transition: $time-long-hover-anim;
    }
  }

  .dots-menu:hover {
    svg {
      fill: $offWhite;
      transform: scale(1.05);
    }
  }
}
</style>