<template>
  <div class="full-screen">
    <div class="back-mask"></div>
    <div class="container">
      <div class="row comic-view">

        <div class="col-1 page-icon" @click="$emit('onPreviousNextPage', 'Left')">
          <i class="fas fa-angle-left fa-4x"></i>
        </div>
        <div class="col-10 img-block">
          <div class="close-icon" @click="$emit('onPreviousNextPage', 'FullScreen')">
            <i class="far fa-times-circle fa-2x"></i>
          </div>
          <div class="img-view" :style="{ 'background-image': `url(${imgPath})` }">

          </div>
        </div>
        <div class="col-1 page-icon" @click="$emit('onPreviousNextPage', 'Right')">
          <i class="fas fa-angle-right fa-4x"></i>
        </div>
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
.back-mask {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba($color: #000000, $alpha: 0.7);
}

.comic-view {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 92%;
  width: 64%;
  justify-content: center;
  align-items: center;
  .close-icon {
    position: absolute;
    top: 8px;
    right: 8px;
    cursor: pointer;
  }
  .page-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    color: white;
    &:hover {
      background: #50ff44;
      color: black;
    }
  }
  .img-block {
    position: relative;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    .img-view {
      height: 100%;
      width: 100%;
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center center;
    }
  }
}
</style>
