<template>
  <div class="page-control">
    <div class="row">
      <div class="col-1"></div>
      <img :src="displayPages[0]" alt="">
        <div class="mask-black"></div>
      <div class="col-2">
        <img :src="displayPages[1]" alt="">
        <div class="mask-gray"></div>
      </div>
      <div class="col-2">
        <img :src="displayPages[2]" alt="">
        <div class="mask-gray"></div>
      </div>
      <div class="col-2">
        <img :src="displayPages[3]" alt="">

      </div>
      <div class="col-2">
        <img :src="displayPages[4]" alt="">
        <div class="mask-gray"></div>
      </div>
      <div class="col-2">
        <img :src="displayPages[5]" alt="">
        <div class="mask-gray"></div>
      </div>
      <div class="col-1">
        <img :src="displayPages[6]" alt="">
        <div class="mask-black"></div>
      </div>
    </div>
    <div class="row">
      <div class="col-1"></div>
      <div class="col-10"></div>
      <div class="col-1"></div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    displayPages: {
      type: Array
    }
  }
};
</script>
