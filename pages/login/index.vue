<template>
  <div class="login-page">
    <div class="login-section">

      <span class="header">Log in</span>

      <span class="errorMessage" v-if="errorMessage">{{errorMessage}}</span>

      <input :class="emailInputClassName" v-model="email" type="email" placeholder="Email">
      <input :class="passwordInputClassName" v-model="password" type="password" placeholder="Password">

      <div class="login-options">
        <label class="check-box-wrap">
          <input class="check-box" id="check-box" type="checkbox" checked>
          Remember me
        </label>
        <NuxtLink to="/forgot-password">Forgot password</NuxtLink>
      </div>

      <NuxtLink class="login-icon" @click="logIn">
        <img src="~/assets/images/icons/login_icon.svg" alt="login icon">
      </NuxtLink>

      <NuxtLink class="signup-btn" to="/signup">Sign up</NuxtLink>
    </div>
  </div>
</template>

<script setup lang='ts'>
import {useGlobalLoginError} from "~/stores/loginError";
import {ref} from "#imports";


const username = ref();
const email = ref();
const password = ref();

const logIn = async () => {
  await logInUser(email.value, password.value)
};


const globalLoginError = useGlobalLoginError();
const emailError = 'wrong email';
const passwordError = 'wrong password';

const errorMessage = computed(() => {
  if(globalLoginError.error?.endsWith('found')) {
    return emailError
  }
  else if (globalLoginError.error?.endsWith('password')) {
    return passwordError
  }
  else {
    return null
  }
})

const emailInputClassName = computed(() => {
  if(globalLoginError.error?.endsWith('found')) {
    return 'email-input error'
  }
  else {
    return 'email-input'
  }
})

const passwordInputClassName = computed(() => {
  if(globalLoginError.error?.endsWith('password')) {
    return 'password-input error'
  }
  else {
    return 'password-input'
  }
})




definePageMeta({
  middleware: 'notAuth'
})
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

    .errorMessage {
      color: $red;
      position: absolute;
      top: 350px;
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

    .email-input {
      margin-bottom: 45px;
    }

    .email-input:-webkit-autofill,
    .password-input:-webkit-autofill{
      transition: background-color 5000s ease-in-out 0s;
      -webkit-text-fill-color: $offWhite !important;
    }

    .email-input.error,
    .password-input.error {
      border: 2px solid $red;
    }

    .email-input.error:focus,
    .password-input.error:focus {
      outline: none;
      border: 2px solid $red;
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

        input[type='checkbox']:checked::after {
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

    .login-icon:hover img {
      transform: scale(1.07);
    }

    .login-icon:active img {
      transform: scale(1);
      transition: $time-click-anim;
    }

    .signup-btn {
      position: absolute;
      right: 100px;
      bottom: 50px;
      font-size: $font-28px;
      transition: $time-long-hover-anim;
    }

    .signup-btn:hover {
      transform: scale(1.05);
    }
  }


}

</style>