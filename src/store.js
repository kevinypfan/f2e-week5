import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    selectChap: 0,
    selectPage: 0,
    darkMode: true,
    chapters: {
      1: {
        title: 'The F2E Challenge Start!',
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
        title: 'Todo List is Going Crazy!',
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
    }
  },
  mutations: {
    setSelect(state, payload) {
      console.log(state.selectChap);
      const pagesLen = state.chapters[`${state.selectChap + 1}`].pages.length;
      const chapterLen = state.chapters[`${state.selectChap + 1}`].pages.length;
      switch (payload.type) {
        case 'Chapter':
          state.selectChap = payload.index;
          state.selectPage = 0;
          break;
        case 'Page':
          state.selectPage = payload.index;
          break;
        case 'Left':
          if (state.selectPage !== 0) {
            state.selectPage -= 1;
          }
          break;
        case 'Right':
          if (state.selectPage < pagesLen - 1) {
            state.selectPage += 1;
          }
          break;
        case 'Next':
          if (state.selectChap < chapterLen - 1) {
            state.selectChap += 1;
            state.selectPage = 0;
          }
          break;
        case 'Previous':
          if (state.selectChap > 0) {
            state.selectChap -= 1;
            state.selectPage = pagesLen - 1;
          }
          break;
        case 'DarkMode':
          state.darkMode = payload.value;
          break;
        default:
      }
    }
  },
  actions: {

  },
  getters: {
    pageControlArray(state) {
      const chapterPages = state.chapters[`${state.selectChap + 1}`].pages.map((path, index) => ({ index, path }));
      const chapterPagesLen = chapterPages.length;
      if (state.selectPage - 3 < 0) {
        return [null, ...chapterPages.slice(0, 6)];
      } else if (state.selectPage + 3 > chapterPagesLen - 1) {
        return [...chapterPages.slice(-6, chapterPagesLen), null];
      }
      return [...chapterPages.slice(state.selectPage - 3, state.selectPage + 4)];
    },
    pagesLen(state) {
      return state.chapters[`${state.selectChap + 1}`].pages.length;
    },
    chapterLen(state) {
      return Object.keys(state.chapters).length;
    }
  }
});

