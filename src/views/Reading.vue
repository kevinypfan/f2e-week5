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
      chapters: {
        1: {
          pages: [
            'https://hexschool.github.io/THE_F2E_Design/week5-comic%20viewer/assets/storyboard-1.png',
            'https://hexschool.github.io/THE_F2E_Design/week5-comic%20viewer/assets/storyboard-2.png',
            'https://hexschool.github.io/THE_F2E_Design/week5-comic%20viewer/assets/storyboard-3.png',
            'https://hexschool.github.io/THE_F2E_Design/week5-comic%20viewer/assets/storyboard-4.png',
            'https://hexschool.github.io/THE_F2E_Design/week5-comic%20viewer/assets/storyboard-5.png',
            'https://hexschool.github.io/THE_F2E_Design/week5-comic%20viewer/assets/storyboard-6.png',
            'https://hexschool.github.io/THE_F2E_Design/week5-comic%20viewer/assets/storyboard-7.png',
            'https://hexschool.github.io/THE_F2E_Design/week5-comic%20viewer/assets/storyboard-8.png',
            'https://hexschool.github.io/THE_F2E_Design/week5-comic%20viewer/assets/storyboard-9.png',
            'https://hexschool.github.io/THE_F2E_Design/week5-comic%20viewer/assets/storyboard-10.png',
            'https://hexschool.github.io/THE_F2E_Design/week5-comic%20viewer/assets/storyboard-11.png',
            'https://hexschool.github.io/THE_F2E_Design/week5-comic%20viewer/assets/storyboard-12.png'
          ]
        },
        2: {
          pages: [
            'https://hexschool.github.io/THE_F2E_Design/week5-comic%20viewer/assets/storyboard-1.png',
            'https://hexschool.github.io/THE_F2E_Design/week5-comic%20viewer/assets/storyboard-2.png',
            'https://hexschool.github.io/THE_F2E_Design/week5-comic%20viewer/assets/storyboard-3.png',
            'https://hexschool.github.io/THE_F2E_Design/week5-comic%20viewer/assets/storyboard-4.png',
            'https://hexschool.github.io/THE_F2E_Design/week5-comic%20viewer/assets/storyboard-5.png',
            'https://hexschool.github.io/THE_F2E_Design/week5-comic%20viewer/assets/storyboard-6.png',
            'https://hexschool.github.io/THE_F2E_Design/week5-comic%20viewer/assets/storyboard-7.png',
            'https://hexschool.github.io/THE_F2E_Design/week5-comic%20viewer/assets/storyboard-8.png',
            'https://hexschool.github.io/THE_F2E_Design/week5-comic%20viewer/assets/storyboard-9.png',
            'https://hexschool.github.io/THE_F2E_Design/week5-comic%20viewer/assets/storyboard-10.png',
            'https://hexschool.github.io/THE_F2E_Design/week5-comic%20viewer/assets/storyboard-11.png',
            'https://hexschool.github.io/THE_F2E_Design/week5-comic%20viewer/assets/storyboard-12.png'
          ]
        }
      },
      selectChap: 0,
      selectPage: 0,
      fullScreen: false
    };
  },
  methods: {
    changedHandler(type, index) {
      switch (type) {
        case 'Chapter':
          this.selectChap = index;
          this.selectPage = 0;
          break;
        case 'Page':
          this.selectPage = index;
          break;
        case 'Left':
          if (this.selectPage !== 0) {
            this.selectPage -= 1;
          }
          break;
        case 'Right':
          if (this.selectPage < this.pagesLen - 1) {
            this.selectPage += 1;
          }
          break;
        case 'Next':
          if (this.selectChap < this.chapterLen - 1) {
            this.selectChap += 1;
            this.selectPage = 0;
          }
          break;
        case 'Previous':
          if (this.selectChap > 0) {
            this.selectChap -= 1;
            this.selectPage = this.pagesLen - 1;
          }
          break;
        case 'FullScreen':
          this.fullScreen = !this.fullScreen;
          break;
        default:
      }
    }
  },
  computed: {
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
.reading {
  margin: 0 24px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
