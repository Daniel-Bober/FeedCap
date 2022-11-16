<template>
<div class="gift-code-page">
  <div class="code-group">

    <span class="reward">20% Off</span>

    <input type="text" placeholder="code">
    <button>Use</button>

    <NuxtLink class="back-button" to="./">
      <svg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="m9.474 5.209s-4.501 4.505-6.254 6.259c-.147.146-.22.338-.22.53s.073.384.22.53c1.752 1.754 6.252 6.257 6.252 6.257.145.145.336.217.527.217.191-.001.383-.074.53-.221.293-.293.294-.766.004-1.057l-4.976-4.976h14.692c.414 0 .75-.336.75-.75s-.336-.75-.75-.75h-14.692l4.978-4.979c.289-.289.287-.761-.006-1.054-.147-.147-.339-.221-.53-.221-.191-.001-.38.071-.525.215z" fill-rule="nonzero"/></svg>
    </NuxtLink>

  </div>

  <div class="customer-group">

    <div class="customer">
      <span>Tomek</span>
      <span class="code">GHJ2L9N5</span>
    </div>

    <p>Could use more tables with umbrellas outside</p>

  </div>


</div>
</template>

<script setup lang='ts'>



definePageMeta({
  middleware: 'auth'
})
</script>

<style lang='scss' scoped>
.gift-code-page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-grow: 1;

  .code-group {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;

    .reward {
      margin-bottom: 50px;
      font-size: $font-48px;
      color: $pink;
    }

    input {
      width: 145px;
      height: 11px;
      margin-bottom: 16px;
      padding: 17px 25px;
      border: 2px solid $gray;
      border-radius: 30px;
      font-size: $font-18px;
      color: $offWhite;
      text-align: center;
    }

    button {
      width: 112px;
      height: 36px;
      border: 2px solid $gray;
      border-radius: 30px;
      font-size: $font-18px;
      color: $green;
      transition: $time-hover-anim;
    }
    button:hover {
      transform: scale(1.05);
    }

    .back-button {
      background: none;
      cursor: pointer;
      fill: $lightGray;
      border: none;
      position: absolute;
      left: -250px;
      bottom: 100px;

      svg {
        width: 41px;
        height: 42px;
        transition: $time-hover-anim;
      }
    }
    .back-button:hover {
      svg {
        fill: $offWhite;
      }
    }
    .back-button:active {
      svg {
        transform: translateX(-3px);
        transition: $time-click-anim;
      }
    }
  }

  .customer-group {
    width: 190px;
    margin-top: 70px;

    .customer {
      width: 100%;
      display: flex;
      justify-content: space-between;

      .code {
        font-size: $font-18px;
      }
    }

    p {
      max-height: 120px;
      font-size: $font-14px;
      color: $lightGray;
      text-align: center;
      overflow: scroll;
    }

    p::-webkit-scrollbar {
      display: none;
    }

    p {
      -ms-overflow-style: none; /* IE and Edge */
      scrollbar-width: none; /* Firefox */
    }
  }


}
</style>