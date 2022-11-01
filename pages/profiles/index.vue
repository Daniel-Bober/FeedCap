<template>
  <div class="profiles-page">

    <span class="header">Choose profile</span>

    <div class="selection-profiles-area">
      <ProfilesSlider
          :profiles="profiles"
      ></ProfilesSlider>
    </div>

    <NuxtLink class="add-button" to="/profiles/new-profile">New profile</NuxtLink>
  </div>
</template>

<script setup lang='ts'>
const profiles = ['burgir', 'Big Burger Bar', 'tekst', 'tekst2', 'coś', 'jeszcze coś innego', 'ostatnie']

</script>

<style lang='scss' scoped>
.profiles-page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-grow: 1;

  .header {
    font-size: $font-36px;
    user-select: none;
  }

  .selection-profiles-area {
    height: 360px;
    display: flex;
    align-items: center;
  }

  .add-button {
    font-size: $font-18px;
    color: $pink;
    border: 1px solid $gray;
    border-radius: 20px;
    padding: 8px 30px;
    margin-bottom: 100px;
    transition: $time-hover-anim;
    user-select: none;
  }

  .add-button:hover {
    transform: scale(1.05);
  }
}
</style>