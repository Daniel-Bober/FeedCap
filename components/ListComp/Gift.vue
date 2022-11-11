<template>
  <NuxtLink class="gift-body" to="/gifts/code">

    <div class="customer-group">
      <span class="customer-name">Tomek</span>
      <span class="gift-code">GHJ2L9N5</span>
    </div>

    <span class="gift-state">Active</span>


  </NuxtLink>
</template>


<script setup lang='ts'>

</script>


<style lang='scss' scoped>
.gift-body {
  width: 225px;
  height: 92px;
  margin: 15px 10px 15px 10px;
  padding: 24px 17px 27px 28px;
  border: 1px solid $gray;
  border-radius: 22px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: $time-hover-anim;

  .customer-name {
    font-size: $font-16px;
    color: $lightGray;
    display: block;
    margin-bottom: 20px;
  }

  .gift-code {
    font-size: $font-16px;
    color: $offWhite;
  }

  .gift-state {
    font-size: $font-18px;
    color: $green;
  }
}

.gift-body:hover {
  transform: scale(1.05);
}
</style>