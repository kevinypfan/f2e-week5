<template>
  <div class="about">
    <div class="container">
      <ControlBar :chapters="chapters" :dark.sync="dark" :selectChap="selectChap" :selectPage="selectPage" @onDropdownChanged="dropdownChangedHandler"/>
      <ComicView :imgPath="chapters[`${selectChap+1}`].pages[selectPage]" />
      <PageControl />
    </div>
  </div>
</template>
<script>
import ControlBar from "../components/Reading/ControlBar.vue";
import ComicView from "../components/Reading/ComicView.vue";
import PageControl from "../components/Reading/PageControl.vue";

export default {
  components: {
    ControlBar,
    ComicView,
    PageControl
  },
  data() {
    return {
      dark: false,
      chapters: {
        1: {
          pages: [
            "https://hexschool.github.io/THE_F2E_Design/week5-comic%20viewer/assets/storyboard-1.png",
            "https://hexschool.github.io/THE_F2E_Design/week5-comic%20viewer/assets/storyboard-2.png",
            "https://hexschool.github.io/THE_F2E_Design/week5-comic%20viewer/assets/storyboard-3.png",
            "https://hexschool.github.io/THE_F2E_Design/week5-comic%20viewer/assets/storyboard-4.png",
            "https://hexschool.github.io/THE_F2E_Design/week5-comic%20viewer/assets/storyboard-5.png",
            "https://hexschool.github.io/THE_F2E_Design/week5-comic%20viewer/assets/storyboard-6.png",
            "https://hexschool.github.io/THE_F2E_Design/week5-comic%20viewer/assets/storyboard-7.png",
            "https://hexschool.github.io/THE_F2E_Design/week5-comic%20viewer/assets/storyboard-8.png",
            "https://hexschool.github.io/THE_F2E_Design/week5-comic%20viewer/assets/storyboard-9.png",
            "https://hexschool.github.io/THE_F2E_Design/week5-comic%20viewer/assets/storyboard-10.png",
            "https://hexschool.github.io/THE_F2E_Design/week5-comic%20viewer/assets/storyboard-11.png",
            "https://hexschool.github.io/THE_F2E_Design/week5-comic%20viewer/assets/storyboard-12.png"
          ]
        },
        2: {
          pages: [
            "https://hexschool.github.io/THE_F2E_Design/week5-comic%20viewer/assets/storyboard-1.png",
            "https://hexschool.github.io/THE_F2E_Design/week5-comic%20viewer/assets/storyboard-2.png",
            "https://hexschool.github.io/THE_F2E_Design/week5-comic%20viewer/assets/storyboard-3.png",
            "https://hexschool.github.io/THE_F2E_Design/week5-comic%20viewer/assets/storyboard-4.png",
            "https://hexschool.github.io/THE_F2E_Design/week5-comic%20viewer/assets/storyboard-5.png",
            "https://hexschool.github.io/THE_F2E_Design/week5-comic%20viewer/assets/storyboard-6.png",
            "https://hexschool.github.io/THE_F2E_Design/week5-comic%20viewer/assets/storyboard-7.png",
            "https://hexschool.github.io/THE_F2E_Design/week5-comic%20viewer/assets/storyboard-8.png",
            "https://hexschool.github.io/THE_F2E_Design/week5-comic%20viewer/assets/storyboard-9.png",
            "https://hexschool.github.io/THE_F2E_Design/week5-comic%20viewer/assets/storyboard-10.png",
            "https://hexschool.github.io/THE_F2E_Design/week5-comic%20viewer/assets/storyboard-11.png",
            "https://hexschool.github.io/THE_F2E_Design/week5-comic%20viewer/assets/storyboard-12.png"
          ]
        }
      },
      selectChap: 0,
      selectPage: 0
    };
  },
  methods: {
    dropdownChangedHandler(type, index) {
      switch (type) {
        case "Chapter":
          this.selectChap = index;
          this.selectPage = 0;
          break;
        case "Page":
          this.selectPage = index;
          break;
        default:
      }
    }
  },
  computed: {
    pageControlArray() {
      const chapterPages = this.chapters[`${selectChap + 1}`].pages;
      const chapterPagesLen = chapterPages.length;
      const pageArray = [];
      if (this.selectPage - 3 < 0) {
        for (let i = this.selectPage - 3; i < 0; i++) {
          pageArray.push(null);
        }
        return [...pageArray, ...chapterPages.slice(0, this.selectPage + 3)];
      }
      if (this.selectPage + 3 > chapterPagesLen - 1) {
        for (let i = this.selectPage; i < chapterPagesLen; i++) {
          pageArray.push(null);
        }
        return [
          ...chapterPages.slice(this.selectPage, this.selectPage + 3),
          ...pageArray
        ];
      }
    }
  }
};
</script>
<style lang="scss" scoped>
</style>
