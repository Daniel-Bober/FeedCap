<template>
  <div class="home-page">

    <section class="head-section">

      <div class="logo-section">
        <img class="text-logo" src="assets/images/svg/textLogo.svg" alt="logo">
        <p>Fast and easy way to collect ideas and thoughts from your clients</p>
      </div>

      <img class="devices-image" src="assets/images/png/devices.png" alt="devices image">

    </section>

    <section class="content-section">
     <div class="center-wrapper">
       <p>
         FeedCup is a better way to communicate with your customers, the way your
         customers can share their thoughts and ideas about your business with you
       </p>
     </div>
    </section>


  </div>
</template>

<script lang="ts">
export default {
  name: "index"
}
</script>

<style lang="scss" scoped>
.home-page {

  height: 200vh;
}

.head-section {
  height: 90vh;
  position: relative;

  .logo-section {
    display: inline-block;
    position: absolute;
    left: 200px;
    top: 230px;

    p{
      width: 400px;
      margin-top: 70px;
      margin-left: 200px;
      font-size: $font-24px;
      color: $lightGray;
    }
  }

  .text-logo {
    width: 450px;
  }

  .devices-image {
    width: 950px;
    position: absolute;
    right: 100px;
    bottom: 220px;

  }
}

.content-section {

  .center-wrapper {
    display: flex;
    justify-content: center;

    p {
      width: 550px;
      font-size: $font-24px;
      color: $offWhite;
      text-align: center;
    }
  }

}

</style>