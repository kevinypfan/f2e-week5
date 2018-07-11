<template>
  <div class="row">
    <div class="col-12">
      <div class="control-bar">
        <div class="main">
          <router-link tag="div" to="/" class="book-name">My Hexschool</router-link>
          <i class="fas fa-caret-right"></i>
          <div class="dropdown">
            <button class="dropdown-toggle" type="button" @click="dropdownItem = 'Chapter'">Chapter {{selectChap + 1}} <i class="fas fa-caret-down"></i> </button>
            <div class="dropdown-menu" :class="{'show': dropdownItem === 'Chapter'}">
              <ul>
                <li v-for="(c, i) in chapAry" :key="i" @click="dropdownHandler('Chapter', i)" :class="{active: i === selectChap}">Chapter {{c}}</li>
              </ul>
            </div>
          </div>
          <div class="dropdown">
            <button class="dropdown-toggle" type="button" @click="dropdownItem = 'Page'">Page {{displayPage(selectPage + 1)}} <i class="fas fa-caret-down"></i> </button>
            <div class="dropdown-menu" :class="{'show': dropdownItem === 'Page'}">
              <ul>
                <li v-for="(page, i) in chapters[`${selectChap+1}`].pages" :key="i" @click="dropdownHandler('Page', i)" :class="{active: i === selectPage}">Page {{displayPage(i+1)}}</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="dark-change">
          <i class="fas fa-sun"></i>
          <div class="checkbox">
            <input id="dark" type="checkbox" :checked="$store.state.darkMode" @change="darkChange">
            <label for="dark">1</label>
          </div>
          <i class="far fa-moon"></i>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    chapters: {
      type: Object
    },
    selectChap: {
      type: Number
    },
    selectPage: {
      type: Number
    }
  },
  data() {
    return {
      dropdownItem: null
    };
  },
  computed: {
    chapAry() {
      return Object.keys(this.chapters);
    }
  },
  methods: {
    darkChange($event) {
      // this.$emit('update:dark', $event.target.checked);
      this.$store.commit('setSelect', {
        type: 'DarkMode',
        value: $event.target.checked
      });
    },
    displayPage(i) {
      if (parseInt(i, 10) < 10) {
        return `0${i}`;
      }
      return i;
    },
    dropdownHandler(type, index) {
      this.$emit('onDropdownChanged', type, index);
    },
    dropdownClose() {
      this.dropdownItem = null;
    }
  },
  mounted() {
    document.addEventListener('mouseup', this.dropdownClose);
  },
  destroyed() {
    document.removeEventListener('mouseup', this.dropdownClose);
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
  align-items: center;
  font-weight: bold;
  .main {
    display: flex;
    font-size: 16px;
    align-items: center;
    .book-name,
    i {
      cursor: pointer;
      font-size: 20px;
      margin-right: 8px;
    }
    .dropdown {
      position: relative;
      word-spacing: 4px;
      cursor: pointer;
      i {
        margin-left: 0px;
      }
      button {
        background-color: #fff;
        outline: none;
        font-size: 16px;
        border: 2px solid #000;
        padding: 4px 4px 4px 16px;
        font-weight: bold;
        word-spacing: 4px;
        cursor: pointer;
      }
      .dropdown-menu {
        position: absolute;
        z-index: 999;
        ul {
          list-style-type: none;
          border: 2px solid #000;
          margin-top: 4px;
          text-align: center;
          background-color: #fff;
          .active {
            background-color: #000;
            color: #50ff44;
          }
          li {
            word-spacing: 4px;
            line-height: 20px;
            padding: 8px 24px;
            &:hover {
              background-color: #000;
              color: #fff;
            }
          }
        }
      }
    }
  }
  .dark-change {
    display: flex;
    width: 100px;
    justify-content: space-between;
    align-items: center;
    i {
      font-size: 20px;
    }
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
        left: -20px;
        &:before {
          content: '';
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
          content: '';
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
