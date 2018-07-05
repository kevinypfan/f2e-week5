<template>
  <div class="row scroll-bar">
    <div class="col-1"></div>
    <div class="col-10">
      <div class="row">
        <div class="col-1">
          <div class="left-arror" @click="changedPage('Left')">
            <i class="fas fa-caret-left"></i>
          </div>
        </div>
        <div class="col-10">
          <div class="scroll-body">
            <div class="scroll-order" :style="scrollOrderCss"></div>
          </div>
        </div>
        <div class="col-1">
          <div class="right-arror" @click="changedPage('Right')">
            <i class="fas fa-caret-right"></i>
          </div>
        </div>
      </div>
    </div>
    <div class="col-1"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      orderWidth: 0
    };
  },
  props: {
    pagesLen: {
      type: Number
    },
    selectPage: {
      type: Number
    }
  },
  mounted() {
    const scrollBody = document.querySelector('.scroll-body');
    const scrollWidth = scrollBody.clientWidth;
    const orderWidth = scrollWidth / this.pagesLen;
    const scrollOrder = document.querySelector('.scroll-order');
    this.orderWidth = orderWidth;
    scrollOrder.style.width = `${orderWidth}px`;
  },
  computed: {
    scrollOrderCss() {
      return {
        left: `${this.orderWidth * this.selectPage}px`
      };
    }
  },
  methods: {
    changedPage(type) {
      this.$emit('onPreviousNextPage', type);
    }
  }
};
</script>
<style lang="scss" scoped>
.scroll-bar {
  align-items: center;
  padding: 24px 0;
  .left-arror,
  .right-arror {
    height: 20px;
    color: white;
    background-color: #000;
    text-align: center;
  }
  .scroll-body {
    position: relative;
    height: 20px;
    .scroll-order {
      background-color: #000;
      height: 20px;
      width: 100%;
      position: absolute;
      box-sizing: border-box;
      top: 0px;
      transition: 0.3s;
    }
    &:before {
      content: '';
      display: block;
      background-color: #fff;
      border: 4px solid #000;
      box-sizing: border-box;
      height: 20px;
    }
  }
}
</style>
