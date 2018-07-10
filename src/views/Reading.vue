<template>
  <div class="reading">
    <div class="container">
      <ControlBar :chapters="chapters" :dark.sync="dark" :selectChap="selectChap" :selectPage="selectPage" @onDropdownChanged="changedHandler"/>
      <ComicView :imgPath="chapters[`${selectChap+1}`].pages[selectPage]" @onPreviousNextPage="changedHandler" @click="fullScreen = !fullScreen" />
      <PageControl :displayPages="pageControlArray" :selectPage="selectPage" @onPreviousNextPage="changedHandler" :chapterLen="chapterLen" :selectChap="selectChap" />
      <ScrollBar :pagesLen="pagesLen" :selectPage="selectPage" @onPreviousNextPage="changedHandler" />
    </div>
    <transition name="fade">
      <FullScreen v-if="fullScreen" @onPreviousNextPage="changedHandler" :imgPath="chapters[`${selectChap+1}`].pages[selectPage]" />
    </transition>
  </div>
</template>
<script>
import { mapState } from 'vuex';
import ControlBar from '../components/Reading/ControlBar.vue';
import ComicView from '../components/Reading/ComicView.vue';
import PageControl from '../components/Reading/PageControl.vue';
import ScrollBar from '../components/Reading/ScrollBar.vue';
import FullScreen from '../components/Reading/FullScreen.vue';

export default {
  components: {
    ControlBar,
    ComicView,
    PageControl,
    ScrollBar,
    FullScreen
  },
  data() {
    return {
      dark: false,
      fullScreen: false
    };
  },
  methods: {
    changedHandler(type, index) {
      switch (type) {
        case 'FullScreen':
          this.fullScreen = !this.fullScreen;
          break;
        default:
          this.$store.commit('setSelect', { type, index });
      }
    }
  },
  computed: {
    ...mapState(['chapters', 'selectChap', 'selectPage']),
    pageControlArray() {
      const chapterPages = this.chapters[`${this.selectChap + 1}`].pages.map((path, index) => ({ index, path }));
      const chapterPagesLen = chapterPages.length;
      if (this.selectPage - 3 < 0) {
        return [null, ...chapterPages.slice(0, 6)];
      } else if (this.selectPage + 3 > chapterPagesLen - 1) {
        return [...chapterPages.slice(-6, chapterPagesLen), null];
      }
      return [...chapterPages.slice(this.selectPage - 3, this.selectPage + 4)];
    },
    pagesLen() {
      return this.chapters[`${this.selectChap + 1}`].pages.length;
    },
    chapterLen() {
      return Object.keys(this.chapters).length;
    }
  }
};
</script>
<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
