<template>
  <div class="page-control">
    <div class="row">
      <div class="col-1"></div>
      <div class="col-10">
        <div class="row">
          <div class="col-1 page-place final-left">
            <div class="img-place first-img" :style="bgcImgCssHandler(0)" @click="$emit('onPreviousNextPage', 'Page', displayPages[0].index)">
              <div class="mask mask-black">
                <div class="chapter-change" v-if="dataTextLeftHandler === 'PREVIOUS CHAPTER' || (dataTextLeftHandler === 'CHAPTER START' && !displayPages[0])" :class="{disabled: dataTextLeftHandler === 'CHAPTER START', 'chapter-change': dataTextLeftHandler === 'PREVIOUS CHAPTER' }" :data-text="dataTextLeftHandler" @click="$emit('onPreviousNextPage', 'Previous')">
                  <i class="fas fa-angle-double-left fa-2x" v-if="dataTextLeftHandler === 'PREVIOUS CHAPTER'"></i>
                  <i class="fas fa-ban fa-2x" v-if="dataTextLeftHandler === 'CHAPTER START'"></i>
                </div>
              </div>
            </div>
          </div>
          <div class="col-2 page-place">
            <div class="img-place" :style="bgcImgCssHandler(1)" @click="$emit('onPreviousNextPage', 'Page', displayPages[1].index)">
              <span v-if="!checkSelected(1)">{{ pageFormat(displayPages[1].index + 1) }}</span>
              <div class="mask" :class="{active: checkSelected(1), 'mask-gray': !checkSelected(1)}"></div>
            </div>
          </div>
          <div class="col-2 page-place">
            <div class="img-place" :style="bgcImgCssHandler(2)" @click="$emit('onPreviousNextPage', 'Page', displayPages[2].index)">
              <span v-if="!checkSelected(2)">{{ pageFormat(displayPages[2].index + 1) }}</span>
              <div class="mask" :class="{active: checkSelected(2), 'mask-gray': !checkSelected(2)}"></div>
            </div>
          </div>
          <div class="col-2 page-place">
            <div class="img-place" :style="bgcImgCssHandler(3)" @click="$emit('onPreviousNextPage', 'Page', displayPages[3].index)">
              <span v-if="!checkSelected(3)">{{ pageFormat(displayPages[3].index + 1) }}</span>
              <div class="mask" :class="{active: checkSelected(3), 'mask-gray': !checkSelected(3)}"></div>
            </div>
          </div>
          <div class="col-2 page-place">
            <div class="img-place" :style="bgcImgCssHandler(4)" @click="$emit('onPreviousNextPage', 'Page', displayPages[4].index)">
              <span v-if="!checkSelected(4)">{{ pageFormat(displayPages[4].index + 1) }}</span>
              <div class="mask" :class="{active: checkSelected(4), 'mask-gray': !checkSelected(4)}"></div>
            </div>
          </div>
          <div class="col-2 page-place">
            <div class="img-place" :style="bgcImgCssHandler(5)" @click="$emit('onPreviousNextPage', 'Page', displayPages[5].index)">
              <span v-if="!checkSelected(5)">{{ pageFormat(displayPages[5].index + 1) }}</span>
              <div class="mask" :class="{active: checkSelected(5), 'mask-gray': !checkSelected(5)}"></div>
            </div>
          </div>
          <div class="col-1 page-place final-right">
            <div class="img-place last-img" :style="bgcImgCssHandler(6)" @click="$emit('onPreviousNextPage', 'Page', displayPages[6].index)">
              <div class="mask mask-black">
                <div v-if="dataTextRightHandler === 'NEXT CHAPTER' || (dataTextRightHandler === 'CHAPTER END' && !displayPages[displayPages.length-1])" :class="{disabled: dataTextRightHandler === 'CHAPTER END', 'chapter-change': dataTextRightHandler === 'NEXT CHAPTER' }" :data-text="dataTextRightHandler" @click="$emit('onPreviousNextPage', 'Next')" >
                  <i class="fas fa-angle-double-right fa-2x" v-if="dataTextRightHandler === 'NEXT CHAPTER'"></i>
                  <i class="fas fa-ban fa-2x" v-if="dataTextRightHandler === 'CHAPTER END'"></i>
                </div>
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
    },
    chapterLen: {
      type: Number
    },
    selectChap: {
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
    },
    pageFormat(page) {
      if (page < 10) {
        return `0${page}`;
      }
      return page;
    }
  },
  computed: {
    checkPrevNext() {
      if (!this.displayPages[0]) return 'Previous';
      if (!this.displayPages[this.displayPages.length - 1]) return 'Next';
      return 'Normal';
    },
    dataTextRightHandler() {
      if (
        !this.displayPages[this.displayPages.length - 1] &&
        this.selectChap < this.chapterLen - 1
      ) {
        return 'NEXT CHAPTER';
      } else if (this.selectChap === this.chapterLen - 1) {
        return 'CHAPTER END';
      }
      return 'Normal';
    },
    dataTextLeftHandler() {
      if (!this.displayPages[0] && this.selectChap > 0) {
        return 'PREVIOUS CHAPTER';
      } else if (this.selectChap === 0) {
        return 'CHAPTER START';
      }
      return 'Normal';
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
      position: relative;
      span {
        display: block;
        position: absolute;
        top: -16px;
        left: 50%;
        transform: translateX(-50%);
        font-size: 14px;
        line-height: 16px;
        font-weight: bold;
      }
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
    .chapter-change {
      background-color: #50ff44;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      &:hover {
        &:after {
          content: attr(data-text);
          background-color: #50ff44;
          position: absolute;
          left: 50%;
          top: -48px;
          transform: translateX(-50%);
          font-size: 14px;
          line-height: 16px;
          font-weight: bold;
          padding: 8px 10px;
          display: block;
          white-space: nowrap;
        }
        &:before {
          content: '';
          display: block;
          position: absolute;
          top: -24px;
          border-width: 15px 15px 0px 15px;
          border-style: solid;
          border-color: #50ff44 transparent transparent;
        }
      }
    }
    .disabled {
      background-color: #f24;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      cursor: not-allowed;
      &:hover {
        &:after {
          content: attr(data-text);
          position: absolute;
          left: 50%;
          top: -48px;
          transform: translateX(-50%);
          font-size: 14px;
          line-height: 16px;
          font-weight: bold;
          padding: 8px 10px;
          display: block;
          white-space: nowrap;
          background-color: #f24;
        }
        &:before {
          content: '';
          display: block;
          position: absolute;
          top: -24px;
          border-width: 15px 15px 0px 15px;
          border-style: solid;
          border-color: #f24 transparent transparent;
        }
      }
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
