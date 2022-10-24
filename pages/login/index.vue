<template>
  <div class="login-page">

    <div class="login-section">
      <span class="header">Log in</span>
      <input class="email-input" type="email" placeholder="Email">
      <input class="password-input" type="password" placeholder="Password">

      <div class="login-options">
        <label class="check-box-wrap">
          <input class="check-box" id="check-box" type="checkbox" checked>
          Remember me
        </label>
        <NuxtLink to="/forgot-password">Forgot password</NuxtLink>
      </div>

      <NuxtLink to="main-page" class="login-icon">
        <img src="assets/images/icons/login_icon.svg" alt="login icon">
      </NuxtLink>

    </div>
  </div>
</template>

<script setup lang='ts'>

</script>

<style lang='scss' scoped>

.login-page {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;

  .login-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 70px;

    .header {
      font-size: $font-36px;
      margin-bottom: 95px;
    }

    .email-input,
    .password-input {
      width: 230px;
      height: 60px;
      padding: 0 40px;
      font-size: $font-20px;
      color: $offWhite;
      border: 2px solid $gray;
      border-radius: 50px;
      background: $mainDark;
    }

    .email-input:focus,
    .password-input:focus {
      outline: none;
      border: 2px solid $lightGray;
    }

    ::placeholder {
      color: $gray;
    }

    .email-input {
      margin-bottom: 45px;
    }

    .login-options {
      width: 310px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-top: 30px;

      .check-box-wrap {
        display: flex;
        align-items: center;
        cursor: pointer;
        user-select: none;

        input[type='checkbox'] {
          appearance: none;
          -webkit-appearance: none;
          position: relative;
          width: 20px;
          height: 20px;
          margin-right: 8px;
          cursor: pointer;
          background-color: $mainDark;
          border: 2px solid $gray;
          border-radius: 5px;
          outline: none;

        }

        input[type='checkbox']:checked::after{
          content: '\2714';
          font-size: 13px;
          position: absolute;
          top: -1px;
          left: 3px;
          color: $lightGray;
        }
      }



      a {
        color: $pink;
        transition: $time-hover-anim;
      }
    }



    .login-icon {
      margin-top: 85px;
      cursor: pointer;

      img {
        transition: $time-hover-anim;
      }
    }

    .login-icon:hover img{
      transform: scale(1.07);
    }

    .login-icon:active img{
      transform: scale(1);
      transition: $time-click-anim;
    }
  }


}

</style>