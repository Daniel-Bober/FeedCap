<template>
  <div class="gifts-page">

    <div class="wrapper">
      <span class="header">Gift codes</span>
      <input>
    </div>


    <div class="gifts-list">
      <ListCompGift></ListCompGift>
      <ListCompGift></ListCompGift>
      <ListCompGift></ListCompGift>
      <ListCompGift></ListCompGift>
      <ListCompGift></ListCompGift>
      <ListCompGift></ListCompGift>
      <ListCompGift></ListCompGift>

    </div>

  </div>
</template>

<script setup lang='ts'>

</script>

<style lang='scss' scoped>
.gifts-page {
  height: calc(100vh - 140px);
  display: flex;
  flex-direction: column;
  align-items: center;


  .wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 100px;

    .header {
      font-size: $font-24px;
      color: $lightGray;
      margin-bottom: 25px;
      display: inline-block;
    }

    input {
      width: 165px;
      height: 40px;
      padding: 0 20px 0 45px;
      margin-bottom: 35px;
      border: 1px solid $gray;
      border-radius: 22px;
      font-size: $font-16px;
      color: $offWhite;
      background-image: url("../../assets/images/icons/magnifier.svg");
      background-repeat: no-repeat;
      background-position: 15px;
    }
  }


  .gifts-list {
    height: 100%;
    width: 100%;
    padding-top: 35px;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: scroll;
  }

  .gifts-list::-webkit-scrollbar {
    display: none;
  }

  .gifts-list {
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }
}
</style>