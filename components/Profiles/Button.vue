<template>
  <div class="profile-button">{{props.name}}</div>
</template>

<script setup lang='ts'>
const props = defineProps({
  name: String
})
</script>

<style lang='scss' scoped>
.profile-button {
  display: grid;
  place-items: center;
  height: 60px;
  min-width: 130px;
  padding: 0 60px;
  margin: 0 25px;
  border: 1px solid $gray;
  border-radius: 30px;
  font-size: $font-24px;
  transition: $time-hover-anim;
  cursor: pointer;
  user-select: none;
}

.profile-button:hover {
  transform: scale(1.03);
}

</style>