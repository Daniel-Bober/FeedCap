<template>
  <div class="profiles-slider">
    <ProfilesButton
        v-for="profile in splitProfilesArray[selectedPageNumber]"
        :name="profile"
    ></ProfilesButton>

    <svg class="left-arrow-icon" @click="previousProfilesPage" v-if="selectedPageNumber > 0" width="18" height="30" viewBox="0 0 12 19"
         xmlns="http://www.w3.org/2000/svg">
      <path
          d="M0.574176 1.91428C2.12636 3.31366 4.59041 5.5352 6.49713 7.25453L7.92545 8.54256L8.2469 8.83248C8.46243 9.02534 8.56946 9.27895 8.56946 9.53257C8.56946 9.78618 8.46243 10.0398 8.2469 10.2327C8.14572 10.3239 8.03908 10.4214 7.92606 10.5233L5.05034 13.1146L0.582055 17.1435C0.204454 17.5277 0.222494 18.1197 0.636177 18.4924C0.851706 18.6865 1.13321 18.7843 1.41326 18.7843C1.6933 18.7856 1.97041 18.6905 2.183 18.5003C2.183 18.5003 8.78231 12.5495 11.3525 10.2327C11.5681 10.0398 11.6751 9.78618 11.6751 9.53257C11.6751 9.27895 11.5681 9.02534 11.3525 8.83248C8.78378 6.51559 2.18594 0.567492 2.18594 0.567492C1.97334 0.375959 1.6933 0.280853 1.41326 0.280853C1.13322 0.282174 0.851708 0.378602 0.636178 0.572777C0.22641 0.941946 0.206167 1.52744 0.574176 1.91428Z"/>
    </svg>

    <svg class="right-arrow-icon" @click="nextProfilesPage" v-if="splitProfilesArray.length > 1 && (selectedPageNumber + 1) < splitProfilesArray.length"
         width="18" height="30" viewBox="0 0 12 19" xmlns="http://www.w3.org/2000/svg">
      <path
          d="M0.574176 1.91428C2.12636 3.31366 4.59041 5.5352 6.49713 7.25453L7.92545 8.54256L8.2469 8.83248C8.46243 9.02534 8.56946 9.27895 8.56946 9.53257C8.56946 9.78618 8.46243 10.0398 8.2469 10.2327C8.14572 10.3239 8.03908 10.4214 7.92606 10.5233L5.05034 13.1146L0.582055 17.1435C0.204454 17.5277 0.222494 18.1197 0.636177 18.4924C0.851706 18.6865 1.13321 18.7843 1.41326 18.7843C1.6933 18.7856 1.97041 18.6905 2.183 18.5003C2.183 18.5003 8.78231 12.5495 11.3525 10.2327C11.5681 10.0398 11.6751 9.78618 11.6751 9.53257C11.6751 9.27895 11.5681 9.02534 11.3525 8.83248C8.78378 6.51559 2.18594 0.567492 2.18594 0.567492C1.97334 0.375959 1.6933 0.280853 1.41326 0.280853C1.13322 0.282174 0.851708 0.378602 0.636178 0.572777C0.22641 0.941946 0.206167 1.52744 0.574176 1.91428Z"/>
    </svg>

  </div>
</template>

<script setup lang='ts'>

const props = defineProps({
  profiles: Array
});

const selectedPageNumber = ref(0);

const splitProfilesArray = computed(() => {
  const slicedArray = [];

  while (props.profiles.length) {
    slicedArray.push(props.profiles.splice(0, 3))
  }
  return slicedArray
});

function nextProfilesPage() {
  selectedPageNumber.value += 1;
}

function previousProfilesPage() {
  selectedPageNumber.value -= 1;
}

</script>

<style lang='scss' scoped>
.profiles-slider {
  min-width: 1000px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;


  //Arrows
  .right-arrow-icon,
  .left-arrow-icon {
    position: absolute;
    right: 400px;
    bottom: -75px;
    fill: $lightGray;
    cursor: pointer;
    transition: $time-hover-anim;
  }

  .left-arrow-icon {
    left: 400px;
    transform: rotate(180deg);
  }

  .right-arrow-icon:hover,
  .left-arrow-icon:hover {
    transform: translateX(2px);
    fill: $offWhite;
  }

  .left-arrow-icon:hover {
    transform: translateX(-2px) rotate(180deg);
  }

  .right-arrow-icon:active,
  .left-arrow-icon:active {
    transition: $time-click-anim;
    transform: translateX(5px);
  }

  .left-arrow-icon:active {
    transform: translateX(-5px) rotate(180deg);
  }
}
</style>