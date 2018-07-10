<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <div v-if="ad" class="ad-block vue-ad"></div>
      </div>
    </div>
    <div class="main">
      <div class="row">
        <div class="col-6">
          <div class="img-block">
            <img src="https://hexschool.github.io/THE_F2E_Design/week5-comic%20viewer/assets/comic%20cover.png" alt="">
          </div>
        </div>
        <div class="col-6">
          <h3 class="comic-title">MY HEXSCHOOL</h3>
          <div class="comic-detail">
            <div class="detail-group">
              <strong>Genres</strong>
              <span>Fusce/vehicula/dolor</span>
            </div>
            <div class="detail-group">
              <strong>Author</strong>
              <span>Namae Shiranai</span>
            </div>
            <div class="detail-group">
              <strong>Status</strong>
              <span>Ongoing</span>
            </div>
            <div class="detail-group">
              <strong>Rate</strong>
              <span>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="far fa-star"></i>
              </span>
            </div>
            <div class="detail-group">
              <strong>Summary</strong>
              <p>If your banker breaks, you snap; if your apothecary by mistake sends you poison in your pills, you die. </p>
              <p>Therefore, I say, I saw that this situation of mine was the precise situation of every mortal that has this Siamese connexion with a plurality of other mortals.</p>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <div v-if="ad" class="ad-block bootstrap4-ad"></div>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <div class="chapters">
            <div class="chap-title">
              All Chapters
            </div>
            <ul>
              <li v-for="(chapter, index) in chapters" @click="onSelectChap('Chapter', index)" :key="index">Chapter {{index}}: {{chapter.title}} <span class="new-chap" v-if="whoNew(index)">NEW</span></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <div v-if="ad" class="ad-block html5-ad"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  data() {
    return {
      ad: true
    };
  },
  computed: {
    ...mapState(['chapters'])
  },
  methods: {
    whoNew(index) {
      return Object.keys(this.chapters).length === parseInt(index, 10);
    },
    onSelectChap(type, index) {
      this.$store.commit('setSelect', { type, index: index - 1 });
      this.$router.push('/reading');
    }
  }
};
</script>

<style lang="scss" scoped>
$bootstrap4: 'https://hexschool.github.io/THE_F2E_Design/week5-comic%20viewer/assets/ad-2.png';
$vue: 'https://hexschool.github.io/THE_F2E_Design/week5-comic%20viewer/assets/ad-1.png';
$html5: 'https://hexschool.github.io/THE_F2E_Design/week5-comic%20viewer/assets/ad-3.png';

.main {
  margin-top: 8px;
}

.img-block {
  min-width: 300px;
  border: 4px solid #000;
  box-sizing: border-box;
  img {
    height: 100%;
    width: 100%;
  }
}

.comic-title {
  background-color: #000;
  color: #fff;
  font-size: 36px;
  font-weight: bold;
  padding: 8px 24px;
  text-align: center;
}

.comic-detail {
  padding: 24px;
  font-weight: 500;
  .detail-group {
    margin-top: 8px;
    strong {
      font-size: 16px;
      font-weight: 700;
      line-height: 24px;
      display: inline-block;
      width: 30%;
    }
    span {
      display: inline-block;
      width: 70%;
      font-size: 16px;
      line-height: 24px;
      i {
        margin-right: 10px;
      }
    }
    p {
      margin-top: 24px;
    }
  }
}

.chapters {
  margin-top: 8px;
  .chap-title {
    display: inline-block;
    font-size: 24px;
    line-height: 28px;
    background-color: #000;
    color: #fff;
    border: 4px solid #000;
    padding: 8px 24px;
    font-weight: bold;
  }
  ul {
    border: 4px solid #000;
    padding: 16px 0;
    li {
      list-style: none;
      font-size: 16px;
      line-height: 24px;
      font-weight: bold;
      padding: 8px 16px;
      cursor: pointer;
      .new-chap {
        padding: 2px 12px;
        background-color: #50ff44;
        font-size: 14px;
        font-weight: bold;
        line-height: 14px;
        margin-left: 16px;
      }
      &:hover {
        background-color: #000;
        color: white;
        .new-chap {
          color: black;
        }
      }
    }
  }
}

.ad-block {
  width: 100%;
  background-size: cover;
  height: 120px;
  margin: 24px;
}

.bootstrap4-ad {
  background-image: url(#{$bootstrap4});
}

.vue-ad {
  background-image: url(#{$vue});
}

.html5-ad {
  background-image: url(#{$html5});
}
</style>
