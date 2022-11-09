<template>
  <div class="messages-page">
    <div class="message-body">

      <div class="top-icons-group">
        <NuxtLink class="list-mode-icon" to="/messages/list">
          <svg width="29" height="17" viewBox="0 0 29 17" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M16.1993 15.2657C16.1993 14.6778 15.7222 14.2007 15.1344 14.2007H1.6448C1.05694 14.2007 0.579834 14.6778 0.579834 15.2657C0.579834 15.8535 1.05694 16.3306 1.6448 16.3306H15.1344C15.7222 16.3306 16.1993 15.8535 16.1993 15.2657ZM28.9789 8.1659C28.9789 7.57804 28.5018 7.10093 27.914 7.10093H1.6448C1.05694 7.10093 0.579834 7.57804 0.579834 8.1659C0.579834 8.75376 1.05694 9.23087 1.6448 9.23087H27.914C28.5018 9.23087 28.9789 8.75376 28.9789 8.1659ZM23.2991 1.06613C23.2991 0.478265 22.822 0.00115967 22.2341 0.00115967H1.6448C1.05694 0.00115967 0.579834 0.478265 0.579834 1.06613C0.579834 1.65399 1.05694 2.13109 1.6448 2.13109H22.2341C22.822 2.13109 23.2991 1.65399 23.2991 1.06613Z"/>
          </svg>
        </NuxtLink>

        <span class="messages-count">
          <img src="~/assets/images/icons/message_gray.svg" alt="message icon">
          <span>15</span>
        </span>
      </div>

      <span class="customer-name">Kasia</span>

      <span class="customer-message" role="textbox">Could use more tables with umbrellas outside and i write some shit to zająć more place</span>

      <span class="date">07.09.2022</span>
    </div>

    <div class="buttons-group">
      <button class="delete-button"><img src="~/assets/images/icons/delete.svg" alt="delete icon"></button>
      <button class="like-button"><img src="~/assets/images/icons/heart_pink.svg" alt="heart icon"></button>
    </div>
  </div>
</template>

<script setup lang='ts'>

</script>

<style lang='scss' scoped>
.messages-page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 150px 0 200px 0;
  flex-grow: 1;

  .message-body {
    width: 500px;
    min-height: 150px;
    display: flex;
    flex-direction: column;
    border: 2px solid $gray;
    border-radius: 35px;
    position: relative;

    .top-icons-group {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: absolute;
      top: -70px;

      .list-mode-icon {
        fill: $lightGray;
        margin: 12px 0 0 10px;
        cursor: pointer;
        transition: $time-hover-anim;
      }

      .list-mode-icon:hover {
        fill: $offWhite;
        transform: scale(1.07);
      }

      .list-mode-icon:active {
        transform: scale(1);
        transition: $time-click-anim;
      }

      .messages-count {
        margin-right: 15px;

        img {
          margin: 6px 5px 0 0;
        }

        span {
          font-size: $font-32px;
          color: $gray;
        }
      }
    }

    .customer-name {
      font-size: $font-20px;
      color: $lightGray;
      margin: 30px 0 0 35px;
    }

    .customer-message {
      width: 350px;
      font-size: $font-20px;
      margin: 25px 0 50px 35px;
    }

    .date {
      font-size: $font-14px;
      font-weight: bold;
      color: $gray;
      position: absolute;
      right: 40px;
      bottom: 18px;
    }
  }

  .buttons-group {
    width: 260px;
    margin-top: 110px;
    display: flex;
    justify-content: space-between;

    .delete-button,
    .like-button {
      background: none;
      border: none;
      cursor: pointer;
      transition: $time-hover-anim;
    }

    .delete-button:hover,
    .like-button:hover {
      transform: scale(1.07);
    }

    .delete-button:active,
    .like-button:active {
      transform: scale(1);
      transition: $time-click-anim;
    }
  }
}
</style>