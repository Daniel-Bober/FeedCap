<template>
  <div class="account-page">

    <div class="main-section">
      <span class="account-name">Ubier Bolt</span>

      <div class="email-group">
        <span class="header">Email</span>
        <span class="email">ubier.bolt@email.com</span>
      </div>

      <div class="password-group">
        <span class="header">Password</span>
        <span class="password">●●●●●●●●●●</span>
        <NuxtLink class="change-password-button" to="/account/change-password">Change password</NuxtLink>
      </div>

      <button class="log-out-button" @click="logOut">Log out</button>
    </div>

  </div>
</template>

<script setup lang='ts'>


const logOut = async () => {
  await logOutUser()
}


definePageMeta({
  middleware: 'auth'
})
</script>

<style lang='scss' scoped>
.account-page {
  height: calc(100vh - 140px);
  display: flex;
  justify-content: center;

  .main-section {
    width: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;

    .account-name {
      font-size: $font-36px;
      margin: 100px 0 90px 0;
    }

    .email-group,
    .password-group {
      width: 100%;
      margin-bottom: 28px;

      .header {
        font-size: $font-18px;
        font-weight: bold;
        color: $gray;
        display: block;
        margin-bottom: 4px;
      }

      .email,
      .password {
        font-size: $font-20px;
        display: block;
      }
    }

    .email-group {
      border-top: 1px solid $gray;
      padding-top: 35px;
    }

    .password-group {
      border-bottom: 1px solid $gray;
      padding-bottom: 35px;
      margin: 0;

      .password {
        margin-bottom: 4px;
      }

      .change-password-button {
        font-size: $font-14px;
        color: $pink;
        padding-left: 1px;
        transition: $time-long-hover-anim;
      }
    }

    .log-out-button {
      font-size: $font-28px;
      color: $pink;
      align-self: flex-end;
      margin-top: 10px;
      transition: $time-hover-anim;
    }

    .log-out-button:hover {
      color: $lightGray;
      transform: scale(0.98);
    }
  }
}
</style>