<template>
  <div class="about">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="control-bar">
            <div class="main">
              <div class="book-name">My Hexschool</div>
              <i class="fas fa-caret-right"></i>
              <div class="dropdown">
                <button class="dropdown-toggle" type="button" @click="chapterShow = !chapterShow">Chapter {{selectChap + 1}}</button>
                <div class="dropdown-menu" :class="{'show': chapterShow}">
                  <ul>
                    <li v-for="(c, i) in chapAry" :key="i">Chapter {{c}}</li>
                  </ul>
                </div>  
              </div>
              <div class="dropdown">
                <button class="dropdown-toggle" type="button" @click="pageShow = !pageShow">Page {{selectPage + 1}}</button>
                <div class="dropdown-menu" :class="{'show': pageShow}">
                  <ul>
                    <li v-for="(page, i) in chapters[`${selectChap+1}`].pages" :key="i">Page {{i+1}}</li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="dark-change">
              <i class="fas fa-sun"></i>
              <div class="checkbox">
                <input id="dark" type="checkbox" :checked="dark" @change="darkChange">
                <label for="dark">1</label>
              </div>
              <i class="far fa-moon"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
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
      selectPage: 0,
      chapterShow: false,
      pageShow: false
    };
  },
  computed: {
    chapAry() {
      return Object.keys(this.chapters);
    },
    displayPage() {
      if (selectPage < 10) {
        return "0" + this.selectPage;
      }
      return this.selectPage;
    }
  },
  methods: {
    darkChange($event) {
      this.dark = $event.target.checked;
    }
  }
};
</script>
<style lang="scss" scoped>
.dropdown-menu {
  display: none;
}

.show {
  display: block;
}

.control-bar {
  display: flex;
  justify-content: space-around;
  margin: 24px;
  .main {
    display: flex;
    font-size: 16px;
    .book-name,
    i {
      font-size: 20px;
      margin-right: 8px;
      line-height: 20px;
    }
    .dropdown {
      button {
        background-color: #fff;
        outline: none;
        font-size: 16px;
        border: 1px solid #000;
        padding: 4px 16px;
      }
    }
  }
  .dark-change {
    display: flex;
    .checkbox {
      #dark {
        display: none;
        &:checked + label {
          &:after {
            left: 20px;
          }
        }
      }
      label {
        display: block;
        position: relative;
        font-size: 0;
        line-height: 20px;
        &:before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 40px;
          height: 20px;
          border: 2px solid #000;
          background-color: #fff;
          transition: 0.3s;
          box-sizing: border-box;
        }
        &:after {
          content: "";
          position: absolute;
          top: 0;
          left: 0px;
          width: 20px;
          height: 20px;
          background-color: #000;
          transition: 0.2s;
          box-sizing: border-box;
        }
      }
    }
  }
}
</style>
