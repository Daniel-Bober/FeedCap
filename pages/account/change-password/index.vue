<template>
<div class="change-password-page">

  <span class="header">Change password</span>

  <input type="password" placeholder="old password">
  <input type="password" placeholder="new password">
  <input type="password" placeholder="confirm password">

  <button class="change-button">Change</button>

</div>
</template>

<script setup lang='ts'>

</script>

<style lang='scss' scoped>
.change-password-page {
  height: calc(100vh - 140px);
  display: flex;
  flex-direction: column;
  align-items: center;

  .header {
    font-size: $font-24px;
    color: $lightGray;
    margin: 150px 0 60px 0;
  }

  input {
    width: 200px;
    height: 50px;
    padding: 0 40px;
    margin-bottom: 25px;
    font-size: $font-20px;
    color: $offWhite;
    border: 2px solid $gray;
    border-radius: 50px;
    background: $mainDark;
  }

  .change-button {
    background-color: $mainDark;
    font-size: $font-16px;
    color: $pink;
    border: 1px solid $gray;
    border-radius: 20px;
    padding: 8px 30px;
    margin-top: 40px;
    cursor: pointer;
    transition: $time-hover-anim;
    user-select: none;
  }

  .change-button:hover {
    transform: scale(1.03);
  }

  .change-button:active {
    transform: scale(1);
    transition: $time-click-anim;
  }
}
</style>