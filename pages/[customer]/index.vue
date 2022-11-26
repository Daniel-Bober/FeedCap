<template>
  <div class="customer-page">

    <div class="header-section" v-if="mode !== 3">

      <div v-if="mode === 1">
        <div class="profile-name">{{ serviceProfileName }}</div>

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

        <button class="info-button">
          <svg width="19" height="20" viewBox="0 0 19 20" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M9.41333 18.0147C13.8366 18.0147 17.4224 14.4289 17.4224 10.0056C17.4224 5.58232 13.8366 1.99654 9.41333 1.99654C4.99004 1.99654 1.40425 5.58232 1.40425 10.0056C1.40425 14.4289 4.99004 18.0147 9.41333 18.0147ZM9.41333 19.3485C14.5733 19.3485 18.7562 15.1656 18.7562 10.0056C18.7562 4.84568 14.5733 0.66272 9.41333 0.66272C4.25339 0.66272 0.0704346 4.84568 0.0704346 10.0056C0.0704346 15.1656 4.25339 19.3485 9.41333 19.3485Z"/>
            <path
                d="M10.3711 15.3267C10.3711 15.6042 10.2804 15.8389 10.099 16.031C9.91762 16.2124 9.6882 16.3031 9.41077 16.3031C9.13334 16.3031 8.90392 16.2124 8.72252 16.031C8.54112 15.8389 8.45042 15.6042 8.45042 15.3267V8.71634C8.45042 8.43891 8.54112 8.20949 8.72252 8.02809C8.90392 7.83602 9.13334 7.73999 9.41077 7.73999C9.6882 7.73999 9.91762 7.83602 10.099 8.02809C10.2804 8.20949 10.3711 8.43891 10.3711 8.71634V15.3267ZM9.39476 6.69961C9.03197 6.69961 8.77587 6.64092 8.62649 6.52355C8.4771 6.40617 8.4024 6.1981 8.4024 5.89932V5.59521C8.4024 5.28577 8.48243 5.07769 8.64249 4.97099C8.81322 4.85361 9.06931 4.79492 9.41077 4.79492C9.78424 4.79492 10.0457 4.85361 10.1951 4.97099C10.3444 5.08836 10.4191 5.29644 10.4191 5.59521V5.89932C10.4191 6.20877 10.3391 6.42218 10.179 6.53955C10.019 6.64626 9.75756 6.69961 9.39476 6.69961Z"/>
          </svg>
        </button>
      </div>
      <div v-else-if="mode === 2">
        <div class="customer-name">{{ customerName }}</div>
        <div class="customer-email">{{ customerEmail }}</div>
      </div>

    </div>

    <div class="body-section">

      <div class="flex-column" v-if="mode === 1">
        <input class="customer-name" v-model="customerName" type="text" placeholder="Name">
        <input class="customer-email" v-model="customerEmail" type="email" placeholder="Email">

        <button class="next-button" @click="changeModeUp">
          <span>Next</span>
          <svg width="7" height="11" viewBox="0 0 7 11" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M1.07234 1.67443L4.00572 4.62646L4.71311 5.33847L4.87231 5.49874C4.97905 5.60534 5.03206 5.74554 5.03206 5.88574C5.03206 6.02593 4.97905 6.16613 4.87231 6.27274C4.8222 6.32315 4.76938 6.37706 4.71341 6.43338L3.28919 7.86583L1.07624 10.093C0.889235 10.3054 0.89817 10.6326 1.10305 10.8386C1.20979 10.946 1.34921 11 1.4879 11C1.62659 11.0007 1.76383 10.9481 1.86912 10.843C1.86912 10.843 5.13747 7.55349 6.41039 6.27274C6.51714 6.16613 6.57014 6.02593 6.57014 5.88574C6.57014 5.74554 6.51714 5.60534 6.41039 5.49874C5.1382 4.21798 1.87058 0.929935 1.87058 0.929935C1.76529 0.824058 1.6266 0.771484 1.4879 0.771484C1.34921 0.772215 1.20979 0.825519 1.10305 0.932857C0.900109 1.13693 0.890083 1.46058 1.07234 1.67443Z"/>
          </svg>
        </button>
      </div>

      <div v-else-if="mode === 2">
        <span class="textarea-input" @blur="saveCustomerMessage" role="textbox" contenteditable="true" spellcheck="false"></span>

        <div class="buttons-group">
          <button class="back-button" @click="changeModeDown">
            <svg width="6" height="12" viewBox="0 0 6 12" xmlns="http://www.w3.org/2000/svg">
              <path
                  d="M5.77135 10.2311L2.83797 7.27906L2.13058 6.56705L1.97138 6.40678C1.86464 6.30017 1.81163 6.15998 1.81163 6.01978C1.81163 5.87959 1.86464 5.73939 1.97138 5.63278C2.02149 5.58236 2.07431 5.52846 2.13028 5.47214L3.5545 4.03969L5.76745 1.81254C5.95445 1.60015 5.94552 1.27293 5.74064 1.0669C5.6339 0.959565 5.49448 0.905531 5.35579 0.905531C5.2171 0.904801 5.07986 0.957375 4.97457 1.06252C4.97457 1.06252 1.70622 4.35203 0.433295 5.63278C0.326553 5.73939 0.273545 5.87959 0.273545 6.01978C0.273545 6.15998 0.326553 6.30017 0.433295 6.40678C1.70549 7.68753 4.97311 10.9756 4.97311 10.9756C5.0784 11.0815 5.21709 11.134 5.35579 11.134C5.49448 11.1333 5.6339 11.08 5.74064 10.9727C5.94358 10.7686 5.95361 10.4449 5.77135 10.2311Z"/>
            </svg>
            <span>Back</span>
          </button>
          <button :class="sendButtonClassName" @click="sendCustomerMessage">Send</button>
        </div>
      </div>

      <div v-else-if="mode === 3">
        <div class="thanks">Thank you for your feedback</div>
        <div class="sent-status">Your message has been successfully sent</div>
      </div>

    </div>

  </div>
</template>

<script setup lang='ts'>


const route = useRoute()

const sendButtonClassName = ref("send-button")

const linkData = route.path.substring(1).split('-');
const serviceProfileName = linkData[0];
const serviceID = (linkData[1]);

const customerName = ref()
const customerEmail = ref();
let customerMessage = null;

const saveCustomerMessage = (e) => {
   customerMessage = e.target.innerText
}


const sendCustomerMessage = async () => {
  sendButtonClassName.value ='send-button clicked'

  const email = await findServiceEmail(serviceID)

  const date = new Date();
  const dd = String(date.getDate()).padStart(2, '0');
  const mm = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
  const yyyy = date.getFullYear();

  const todaysDate = dd + '.' + mm + '.' + yyyy;
  const dateNow = Date.now().toString();

  await sendMessage(email, serviceProfileName, customerEmail.value, customerName.value, customerMessage, todaysDate, dateNow);
  changeModeUp();
}



const mode = ref(1)

const changeModeUp = () => {
  mode.value += 1
}

const changeModeDown = () => {
  mode.value -= 1
}
</script>

<style lang='scss' scoped>
.customer-page {
  height: calc(100vh - 140px);
  display: flex;
  flex-direction: column;
  align-items: center;

  .header-section {
    margin-top: 170px;
    position: relative;

    .profile-name,
    .customer-name,
    .customer-email {
      font-size: $font-28px;
      text-align: center;
    }

    .stats-icons {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 4px;

      .gifts-stats,
      .messages-stats {
        display: flex;
        align-items: center;

        img {
          width: 18px;

        }

        span {
          font-size: $font-18px;
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

    .info-button {
      position: absolute;
      top: -30px;
      right: -50px;
      fill: $lightGray;
      cursor: pointer;
      transition: $time-hover-anim;
    }

    .info-button:hover {
      fill: $offWhite;
    }

    .customer-email {
      font-size: $font-16px;
      color: $lightGray;
      margin-top: 8px;
    }
  }

  .body-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 130px;
    position: relative;
    max-width: 230px;

    .flex-column {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .customer-name,
    .customer-email {
      width: 200px;
      border: none;
      border-bottom: 1px solid $lightGray;
      font-size: $font-20px;
      color: $offWhite;
      text-align: center;
      margin-bottom: 35px;
    }

    .customer-name {
      margin-top: 50px;
    }

    .customer-name {
      width: 150px;
    }

    .next-button {
      display: flex;
      align-items: center;
      position: absolute;
      right: -60px;
      bottom: -50px;
      cursor: pointer;

      span {
        font-size: $font-18px;
        color: $pink;
      }

      svg {
        width: 9px;
        height: 16px;
        fill: $pink;
        transition: $time-hover-anim;
        margin-left: 6px;
      }
    }

    .next-button:hover {
      svg {
        transform: translateX(2px);
      }
    }

    .back-button:hover {
      svg {
        transform: translateX(-2px);
      }
    }

    .textarea-input {
      width: 280px;
      min-height: 30px;
      margin: 0 auto 0 auto;
      display: block;
      font-size: $font-18px;
      color: $offWhite;
      text-align: center;
      border-bottom: 2px solid $gray;
      outline: none;
      -webkit-user-modify: read-write;
      overflow-wrap: break-word;
      -webkit-line-break: after-white-space;
    }

    .textarea-input[contenteditable]:empty::before {
      content: 'What would you like to tell us';
      color: $lightGray;
      pointer-events: none;
    }

    .textarea-input[contenteditable]:focus::before {
      content: '';
    }

    .buttons-group {
      width: 350px;
      margin-top: 100px;
      display: flex;
      align-items: center;
      justify-content: space-between;

      .back-button {
        display: flex;
        align-items: center;

        span {
          font-size: $font-18px;
          color: $lightGray;
        }

        svg {
          width: 9px;
          height: 16px;
          fill: $lightGray;
          transition: $time-hover-anim;
          margin-right: 6px;
        }
      }

      .send-button {
        padding: 8px 34px;
        font-size: $font-18px;
        color: $pink;
        border: 1px solid $gray;
        border-radius: 45px;
        cursor: pointer;
        transition: $time-hover-anim;
      }

      .send-button:hover {
        transform: scale(1.03);
      }

      .send-button.clicked {
        pointer-events: none;
        opacity: 0.6;
      }
    }
  }

  .thanks {
    width: 350px;
    font-size: $font-48px;
    color: $pink;
    text-align: center;
    margin: 120px 0 50px 0;
  }

  .sent-status {
    font-size: $font-14px;
    color: $green;
    text-align: center;
  }
}
</style>