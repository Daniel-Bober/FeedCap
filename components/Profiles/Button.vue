<template>
  <div>
    <button class="profile-button" @click="selectProfile">{{props.name}}</button>
  </div>
</template>

<script setup lang='ts'>
import {useMainStore} from "~/stores/mainStore";

const props = defineProps({
  name: String
})
const mainStore = useMainStore()

const selectProfile = () => {
  mainStore.setProfile(props.name)
  navigateTo('/messages')
}
</script>

<style lang='scss' scoped>
.profile-button {
  height: 60px;
  min-width: 130px;
  padding: 0 60px;
  margin: 0 25px;
  border: 1px solid $gray;
  border-radius: 30px;
  font-size: $font-24px;
  color: $offWhite;
  transition: $time-hover-anim;
}

.profile-button:hover {
  border: 1px solid $lightGray;
  transform: scale(1.03);
}
</style>