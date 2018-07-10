<template>
  <div class="comic-view">
    <div class="row">
      <div class="col-1 page-icon" :class="{disabled: 0 === $store.state.selectPage}" @click="$emit('onPreviousNextPage', 'Left')">
        <i class="fas fa-angle-left fa-4x" v-if="0 !== $store.state.selectPage"></i>
        <i class="fas fa-ban fa-2x" v-if="0 === $store.state.selectPage"></i>
      </div>
      <div class="col-10 img-block">
        <img :src="imgPath">
        <div class="full-screen-icon" @click="$emit('onPreviousNextPage', 'FullScreen')">
          <i class="fas fa-expand fa-2x"></i>
        </div>
      </div>
      <div class="col-1 page-icon" :class="{disabled: $store.getters.pagesLen-1 === $store.state.selectPage}" @click="$emit('onPreviousNextPage', 'Right')">
        <i class="fas fa-angle-right fa-4x" v-if="$store.getters.pagesLen-1 !== $store.state.selectPage"></i>
        <i class="fas fa-ban fa-2x" v-if="$store.getters.pagesLen-1 === $store.state.selectPage"></i>
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
  .img-block {
    position: relative;
    .full-screen-icon {
      position: absolute;
      bottom: 8px;
      right: 8px;
      color: rgba(0, 0, 0, 0.3);
      transform: scale(0.6);
      transition: 0.2s;
      &:hover {
        transform: scale(0.9);
        color: rgba(0, 0, 0, 0.8);
      }
    }
    img {
      width: 100%;
    }
  }
  .disabled {
    cursor: not-allowed;
  }
  .page-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    color: rgba(0, 0, 0, 0.2);
    &:hover {
      background: #000;
      color: #50ff44;
    }
  }
}
</style>
