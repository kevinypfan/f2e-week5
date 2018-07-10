import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    selectChap: 0,
    selectPage: 0,
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
    }
  },
  mutations: {
    setSelectChap(state, payload) {
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
          if (state.selectPage < state.pagesLen - 1) {
            state.selectPage += 1;
          }
          break;
        case 'Next':
          if (state.selectChap < state.chapterLen - 1) {
            state.selectChap += 1;
            state.selectPage = 0;
          }
          break;
        case 'Previous':
          if (state.selectChap > 0) {
            state.selectChap -= 1;
            state.selectPage = state.pagesLen - 1;
          }
          break;
        case 'FullScreen':
          state.fullScreen = !state.fullScreen;
          break;
        default:
      }
    }
  },
  actions: {

  }
});
