<template>
  <div class="signup-page">

    <div class="signup-section">

      <span class="header">Sign up</span>

      <div class="inputs-group">
        <input class="username-input" v-model="username" type="text" placeholder="Username" spellcheck="false">
        <input class="email-input" v-model="email" type="email" placeholder="Email">
        <input class="password-input" v-model="password" type="password" placeholder="Password">
        <input class="password-input" type="password" placeholder="Confirm password">
      </div>


      <button class="signup-icon" @click="signUp">
        <img src="@/assets/images/icons/login_icon.svg" alt="sign up icon">
      </button>


      <NuxtLink class="login-btn" to="/login">Log in</NuxtLink>
    </div>

  </div>
</template>

<script setup lang='ts'>

const username = ref()
const email = ref()
const password = ref()

const signUp = async () => {
  await signUpUser(email.value, password.value, username.value);
  navigateTo('/login');

}


definePageMeta({
  middleware: 'notAuth'
})
</script>

<style lang='scss' scoped>
.signup-page {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;

  .signup-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 90px;

    .header {
      font-size: $font-36px;
      margin-bottom: 95px;
    }

    .inputs-group {
      height: 360px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      input {
        width: 230px;
        height: 60px;
        padding: 0 40px;
        font-size: $font-20px;
        color: $offWhite;
        border: 2px solid $gray;
        border-radius: 50px;
        background: $mainDark;
      }

      input:focus {
        outline: none;
        border: 2px solid $lightGray;
      }
    }


    .signup-icon {
      margin-top: 60px;
      cursor: pointer;

      img {
        transition: $time-hover-anim;
      }
    }

    .signup-icon:hover img {
      transform: scale(1.07);
    }

    .signup-icon:active img {
      transform: scale(1);
      transition: $time-click-anim;
    }


    .login-btn {
      position: absolute;
      right: 100px;
      bottom: 50px;
      font-size: $font-28px;
      transition: $time-long-hover-anim;
    }

    .login-btn:hover {
      transform: scale(1.05);
    }
  }
}
</style>