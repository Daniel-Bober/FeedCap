<template>
<div :class="popUpWindowClassName">

  <div class="wrapper">

    <div class="pop-up">
      <span>Reward customer</span>
      <input type="text" placeholder="reward type" v-model="reward">
      <button :class="giveButtonClassName" @click="giveReward">Give</button>
    </div>

    <div class="background-button" @click="closePopUpWindow"></div>
  </div>

</div>
</template>

<script setup lang='ts'>


const emit = defineEmits(["closeWindow", "giveReward"])
const props = defineProps({
  isWindowOpen: {
    type: Boolean,
    default: false
  }
})


const isEmailSending = ref(false);
const reward = ref()

const popUpWindowClassName = computed(() => {
  if(props.isWindowOpen) {
    return "pop-up-window"
  }
  else {
    isEmailSending.value = false
    return "pop-up-window hide"
  }
});

const giveButtonClassName = computed(() => {
  if(!isEmailSending.value) {
    return "give-button"
  }
  else return "give-button clicked"
})

function closePopUpWindow() {
  if(!isEmailSending.value) {
    emit("closeWindow");
  }
}

function giveReward() {
  isEmailSending.value = true;
  emit("giveReward", reward.value);
}

</script>

<style lang='scss' scoped>
.pop-up-window {
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(20, 20, 20, 0.4);
  backdrop-filter: blur(10px);
  transition: $time-hover-anim;

  .wrapper {
    width: 100vw;
    height: 100vh;
    display: grid;
    place-items: center;
    position: relative;

    .pop-up {
      width: 450px;
      height: 250px;
      display: flex;
      flex-direction: column;
      align-items: center;
      background-color: $mainDark;
      border: 2px solid $gray;
      border-radius: 30px;
      position: relative;
      z-index: 1;

      span {
        margin: 40px 0 55px 0;
      }

      input {
        width: 150px;
        border: none;
        border-bottom: 1px solid $lightGray;
        font-size: $font-20px;
        color: $pink;
        text-align: center;
      }

      .give-button {
        position: absolute;
        right: 30px;
        bottom: 15px;
        font-size: $font-18px;
        color: $pink;
        border: 1px solid $gray;
        border-radius: 20px;
        padding: 8px 30px;
        transition: $time-hover-anim;
        user-select: none;
      }

      .give-button:hover {
        transform: scale(1.05);
        border: 1px solid $lightGray;
      }

      .give-button.clicked {
        pointer-events: none;
        opacity: 0.6;
      }
    }

    .background-button {
      width: 100vw;
      height: 100vh;
      position: absolute;
      top: 0;
      left: 0;
    }
  }
}

.pop-up-window.hide {
  opacity: 0;
  pointer-events: none;
}
</style>