<template>
  <div class="home">
    <div class="container">
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
    <div class="col-12">
      <div class="chapters">
        <div class="chap-title">
          All Chapters
        </div>
        <ul>
          <li>Chapter 1: The F2E Challenge Start!</li>
          <li>Chapter 2: Todo List is Going Crazy! <span class="new-chap">NEW</span></li>
        </ul>
      </div>
    </div>
  </div>
  </div>
  
</template>

<script>
export default {
  
}
</script>



<style lang="scss" scoped>

.home {
  margin-top: 24px;
}

.img-block {
  min-width: 300px;
  border: 4px solid #000;
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
}

.comic-detail {
  padding: 24px;
  .detail-group {
    margin-top: 8px;
    strong {
      font-size: 16px;
      font-weight: bold;
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
  margin-top: 28px;
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
    padding: 22px 24px;
    li {
      list-style: none;
      font-size: 16px;
      line-height: 24px;
      font-weight: bold;
      padding: 8px 8px;
      .new-chap {
        padding: 2px 12px;
        background-color: #50FF44;
        font-size: 14px;
        font-weight: bold;
        line-height: 14px;
        margin-left: 16px;
      }
    }
  }
}
   
</style>
