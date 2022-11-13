<template>
  <div class="nav-bar">

    <div class="left-group">
      <img class="icon-logo" src="~/assets/images/svg/iconLogo.svg" alt="logo" draggable="false">

      <div class="profile-group">

        <NuxtLink to="/" class="name-group">
          Big Burger Bar
          <svg class="arrow-icon" width="12" height="19" viewBox="0 0 12 19" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.574176 1.91428C2.12636 3.31366 4.59041 5.5352 6.49713 7.25453L7.92545 8.54256L8.2469 8.83248C8.46243 9.02534 8.56946 9.27895 8.56946 9.53257C8.56946 9.78618 8.46243 10.0398 8.2469 10.2327C8.14572 10.3239 8.03908 10.4214 7.92606 10.5233L5.05034 13.1146L0.582055 17.1435C0.204454 17.5277 0.222494 18.1197 0.636177 18.4924C0.851706 18.6865 1.13321 18.7843 1.41326 18.7843C1.6933 18.7856 1.97041 18.6905 2.183 18.5003C2.183 18.5003 8.78231 12.5495 11.3525 10.2327C11.5681 10.0398 11.6751 9.78618 11.6751 9.53257C11.6751 9.27895 11.5681 9.02534 11.3525 8.83248C8.78378 6.51559 2.18594 0.567492 2.18594 0.567492C1.97334 0.375959 1.6933 0.280853 1.41326 0.280853C1.13322 0.282174 0.851708 0.378602 0.636178 0.572777C0.22641 0.941946 0.206167 1.52744 0.574176 1.91428Z"/>
          </svg>
        </NuxtLink>

        <div class="stats-icons">

          <div class="gifts-stats">
            <img src="~/assets/images/icons/gift_yellow.svg" alt="gift icon">
            <span>4</span>
          </div>

          <div class="messages-stats">
            <img src="~/assets/images/icons/message_blue.svg" alt="comment icon">
            <span>37</span>
          </div>

        </div>
      </div>

    </div>


    <div class="right-group">

      <div class="icons-group">
        <NuxtLink to="/messages">
          <svg class="message-icon" width="31" height="28" viewBox="0 0 31 28" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M15.014 2.608c6.893 0 12.5 4.408 12.5 9.827 0 6.034-6.43 9.77-12.387 9.77-2.421 0-4.23-.487-5.492-.79-1.25.752-1.993 1.273-5.34 2.233.669-1.685.902-3.372.751-5.234C4 17.187 2.515 15.47 2.515 12.434c0-5.418 5.607-9.826 12.5-9.826Zm0-2.454C7.092.154.015 5.34.015 12.434c0 2.517.924 4.987 2.559 6.904.068 2.246-1.279 5.469-2.491 7.816 3.252-.577 7.875-1.851 9.972-3.113 1.77.424 3.467.617 5.073.617 8.855 0 14.887-5.936 14.887-12.224-.001-7.132-7.127-12.28-15-12.28Z"
            />
          </svg>
        </NuxtLink>

        <NuxtLink to="/liked">
          <svg class="heart-icon" width="33" height="31" viewBox="0 0 33 31" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M24.0512 3.6644C27.2475 3.6644 30.0722 5.76312 30.0722 9.98741C30.0722 16.6472 21.3123 21.1211 16.6493 26.0029C11.9862 21.1211 3.22762 16.6486 3.22762 9.98875C3.22762 5.88926 5.92214 3.6644 9.2487 3.6644C13.5159 3.6644 15.7515 8.55426 16.6493 10.7925C17.5443 8.55695 19.7799 3.6644 24.0512 3.6644V3.6644ZM24.0512 0.980606C21.1339 0.980606 18.2193 2.4057 16.6493 5.56855C15.0792 2.4057 12.1646 0.980606 9.2487 0.980606C4.68223 0.980606 0.547852 4.18774 0.547852 9.95654C0.547852 19.7121 13.8366 24.6342 16.6493 30.5023C19.4619 24.6342 32.752 19.7121 32.752 9.95654C32.752 3.80261 28.1708 0.980606 24.0512 0.980606Z"/>
          </svg>
        </NuxtLink>

        <NuxtLink to="/gifts">
          <svg class="gift-icon" width="28" height="27" viewBox="0 0 28 27" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M12.8533 26.6596H2.85842V13.333H12.8533V26.6596ZM12.8533 6.66975H0.637329V11.1119H12.8533V6.66975ZM15.0744 26.6596H25.0693V13.333H15.0744V26.6596ZM15.0744 6.66975V11.1119H27.2904V6.66975H15.0744ZM19.9264 0.00648499C16.6536 0.00648499 14.739 3.86785 13.9639 5.55921H19.8997C23.7789 5.55921 23.82 0.00648499 19.9264 0.00648499ZM19.0424 4.02777H16.7735C17.5942 2.78285 18.3716 1.84444 19.3744 1.84444C20.676 1.84444 20.7382 4.02777 19.0424 4.02777ZM8.02801 5.55921H13.9639C13.1887 3.86785 11.2741 0.00648499 8.00135 0.00648499C4.10778 0.00648499 4.14887 5.55921 8.02801 5.55921ZM8.55329 1.84444C9.55611 1.84444 10.3335 2.78285 11.1542 4.02777H8.88535C7.18954 4.02777 7.25173 1.84444 8.55329 1.84444Z"/>
          </svg>
        </NuxtLink>
      </div>

      <NuxtLink to="/account" class="account-group">
        <span class="user-name">Ubier Bolt</span>
        <span class="my-account">My Account</span>
      </NuxtLink>
    </div>

  </div>
</template>


<script setup lang='ts'>

</script>


<style lang='scss' scoped>
.nav-bar {
  @include nav-bar;
}


.left-group {
  display: flex;
  align-items: center;

  .profile-group {
    margin-left: 60px;

    .name-group {
      display: flex;
      align-items: center;
      font-size: $font-24px;
      color: $lightGray;
      margin: 0;
      padding: 0;
      cursor: pointer;
      transition: $time-long-hover-anim;

      .arrow-icon {
        fill: $lightGray;
        margin-left: 15px;
        transition: $time-long-hover-anim;
      }
    }

    .name-group:hover {
      color: $offWhite;

      .arrow-icon {
        fill: $offWhite;
        transform: translateX(3px);
      }
    }


    .stats-icons {
      display: flex;
      align-items: center;

      .gifts-stats,
      .messages-stats {
        display: flex;
        align-items: center;

        img {
          width: 16px;

        }

        span {
          font-size: $font-16px;
          color: $yellow;
          margin-left: 5px;
        }
      }

      .messages-stats {
        margin-left: 25px;

        span {
          color: $blue;
        }
      }

    }
  }
}

.right-group {
  display: flex;
  align-items: center;

  .icons-group {
    width: 250px;
    display: flex;
    justify-content: space-between;

    .message-icon,
    .gift-icon,
    .heart-icon {
      width: 30px;
      height: 30px;
      fill: $lightGray;
      cursor: pointer;
      transition: $time-hover-anim;
    }

    .message-icon:hover,
    .gift-icon:hover,
    .heart-icon:hover {
      fill: $offWhite;
      transform: scale(1.1);
    }

    .message-icon:active,
    .gift-icon:active,
    .heart-icon:active {
      transform: scale(1);
      transition: $time-click-anim;
    }
  }

  .account-group {
    margin-left: 60px;
    display: flex;
    flex-direction: column;
    align-items: end;
    cursor: pointer;
  }

  .account-group .user-name {
    font-size: $font-24px;

  }

  .account-group .my-account {
    font-size: $font-14px;
    color: $pink;
    //transition: $time-long-hover-anim;
  }


  .account-group:hover {

    .my-account {
      transform: scale(1.05);
    }
  }


}
</style>