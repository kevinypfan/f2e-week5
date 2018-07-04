<template>
  <div class="page-control">
    <div class="row">
      <div class="col-1"></div>
      <div class="col-10">
        <div class="row">
          <div class="col-1 page-place final-left">
            <div class="img-place first-img" :style="bgcImgCssHandler(0)">
              <div class="mask mask-black">
                <i class="fas fa-angle-double-left fa-2x"></i>
              </div>
            </div>
          </div>
          <div class="col-2 page-place">
            <div class="img-place" :style="bgcImgCssHandler(1)">
              <div class="mask" :class="{active: checkSelected(1), 'mask-gray': !checkSelected(1)}"></div>
            </div>
          </div>
          <div class="col-2 page-place">
            <div class="img-place" :style="bgcImgCssHandler(2)">
              <div class="mask" :class="{active: checkSelected(2), 'mask-gray': !checkSelected(2)}"></div>
            </div>
          </div>
          <div class="col-2 page-place">
            <div class="img-place" :style="bgcImgCssHandler(3)">
              <div class="mask" :class="{active: checkSelected(3), 'mask-gray': !checkSelected(3)}"></div>
            </div>
          </div>
          <div class="col-2 page-place">
            <div class="img-place" :style="bgcImgCssHandler(4)">
              <div class="mask" :class="{active: checkSelected(4), 'mask-gray': !checkSelected(4)}"></div>
            </div>
          </div>
          <div class="col-2 page-place">
            <div class="img-place" :style="bgcImgCssHandler(5)">
              <div class="mask" :class="{active: checkSelected(5), 'mask-gray': !checkSelected(5)}"></div>
            </div>
          </div>
          <div class="col-1 page-place final-right">
            <div class="img-place last-img" :style="bgcImgCssHandler(6)">
              <div class="mask mask-black">
                <i class="fas fa-angle-double-right fa-2x"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-1"></div>
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
    },
    selectPage: {
      type: Number
    }
  },
  methods: {
    bgcImgCssHandler(i) {
      if (this.displayPages[i]) {
        return { 'background-image': `url(${this.displayPages[i].path})` };
      }
      return false;
    },
    checkSelected(i) {
      return parseInt(this.displayPages[i].index, 10) === this.selectPage;
    }
  }
};
</script>
<style lang="scss" scoped>
.page-control {
  margin: 16px 0;
  .page-place {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 10px;
    &:first-child {
      padding-left: 0;
    }
    &:last-child {
      padding-right: 0;
    }
    .img-place {
      background-size: cover;
      background-repeat: no-repeat;
      height: 120px;
      width: 100%;
    }
    .first-img {
      background-position: right center;
    }
    .last-img {
      background-position: left center;
    }
    .mask {
      height: 100%;
      width: 100%;
    }
    .mask-gray {
      background-color: rgba(0, 0, 0, 0.2);
    }
    .mask-black {
      background-color: rgba(0, 0, 0, 0.8);
    }
    .active {
      border: 4px solid #000;
      position: relative;
      &:after {
        content: '';
        display: block;
        position: absolute;
        top: 0;
        left: 50%;
        transform: translate(-50%, -100%);
        width: 0;
        height: 0;
        border-width: 0px 15px 15px 15px;
        border-style: solid;
        border-color: transparent transparent #000;
      }
    }
  }
}
</style>
