<template>
  <div class="home-page">

    <div class="under-construction">Under construction</div>

    <section class="head-section">

      <div class="logo-section">
        <img class="text-logo" src="~/assets/images/svg/textLogo.svg" alt="logo">
        <p>Fast and easy way to collect ideas and thoughts from your clients</p>
      </div>

      <img class="devices-image" src="~/assets/images/png/devices.png" alt="devices image">

    </section>

    <section class="content-section">

      <div class="content-group">

        <span class="pink-block"></span>

        <div class="text-group">
          <div class="header">People very often have great ideas or insights</div>
          <div class="description ">FeedCap is a simple way to give your customers the opportunity to share these ideas</div>
        </div>


      </div>

      <div class="icons-group">

        <div class="group">
          <img src="assets/images/icons/improve.svg" alt="improve icon">

          <div class="text-group">
            <div class="header">Improve</div>
            <div class="description">Improve your business with the help of your customers</div>
          </div>
        </div>

        <div class="group">
          <img src="assets/images/icons/feather.svg" alt="feather icon">

          <div class="text-group">
            <div class="header">Light</div>
            <div class="description">Light and clean design, only the most important features</div>
          </div>
        </div>

        <div class="group">
          <img src="assets/images/icons/gift_icon.svg" alt="gift icon">

          <div class="text-group">
            <div class="header">Gifts</div>
            <div class="description">Encourage customers to share ideas by rewarding the best ones</div>
          </div>
        </div>

      </div>
    </section>


  </div>
</template>

<script lang="ts">


definePageMeta({
  middleware: 'notAuth'
})
</script>

<style lang="scss" scoped>
.home-page {
  height: 200vh;

  .under-construction {
    position: absolute;
    top: 60px;
    left: 50%;
    transform: translate(-50%, 0);
    font-size: $font-36px;
    color: $lightGray;
    text-align: center;
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
        margin-top: 60px;
        margin-left: 100px;
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

    .content-group {
      display: flex;
      margin-left: 200px;

      .pink-block {
        width: 8px;
        height: 80px;
        background-color: $pink;
        position: relative;
        top: 6px;
        flex-shrink: 0;
      }

      .text-group {
        margin-left: 75px;

        .header {
          width: 475px;
          font-size: $font-36px;
          margin-bottom: 30px;
        }

        .description {
          width: 600px;
          font-size: $font-24px;
          color: $lightGray;
        }
      }


    }

    .icons-group {
      display: flex;
      justify-content: space-between;
      margin: 350px 200px 0 200px;


      .group {
        display: flex;
        align-items: center;
        flex-shrink: 0;

        .text-group {
          margin-left: 25px;

          .header {
            font-size: $font-32px;
            margin-bottom: 20px;
            letter-spacing: 3px;
          }

          .description {
            width: 220px;
            color: $lightGray;
          }
        }
      }
    }
  }
}



</style>