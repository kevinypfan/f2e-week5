<template>
  <div class="comic-view">
    <div class="row">
      <div class="col-1 page-icon" @click="$emit('onPreviousNextPage', 'Left')">
        <i class="fas fa-angle-left fa-4x"></i>
      </div>
      <div class="col-10">
        <img :src="imgPath">
      </div>
      <div class="col-1 page-icon" @click="$emit('onPreviousNextPage', 'Right')">
        <i class="fas fa-angle-right fa-4x"></i>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    imgPath: {
      type: String
    }
  }
};
</script>
<style lang="scss" scoped>
.comic-view {
  img {
    width: 100%;
  }
  .page-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    color: rgba(0, 0, 0, 0.1);
    &:hover {
      background: #000;
      color: #50ff44;
    }
  }
}
</style>
