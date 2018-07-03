<template>
  <div id="app">
    <Header />
    <router-view/>
  </div>
</template>
<script>
import Header from "./components/Header.vue";

export default {
  components: {
    Header
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,700i,900");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Roboto", sans-serif;
}

#app {
  background: #f2f2f2;
}

.container {
  width: 720px;
  margin: 0 auto;
}

.row {
  display: flex;
  font-weight: wrap;
}

.col-1 {
  flex: 0 0 100% / 12 * 1;
  max-width: 100%;
}

.col-2 {
  flex: 0 0 100% / 12 * 2;
  max-width: 100%;
}

.col-3 {
  flex: 0 0 100% / 12 * 3;
  max-width: 100%;
}

.col-4 {
  flex: 0 0 100% / 12 * 4;
  max-width: 100%;
}

.col-5 {
  flex: 0 0 100% / 12 * 5;
  max-width: 100%;
}

.col-6 {
  flex: 0 0 50%;
  max-width: 100%;
}

.col-7 {
  flex: 0 0 100% / 12 * 7;
  max-width: 100%;
}

.col-8 {
  flex: 0 0 100% / 12 * 8;
  max-width: 100%;
}

.col-9 {
  flex: 0 0 100% / 12 * 9;
  max-width: 100%;
}

.col-10 {
  flex: 0 0 100% / 12 * 10;
  max-width: 100%;
}

.col-11 {
  flex: 0 0 100% / 12 * 11;
  max-width: 100%;
}

.col-12 {
  flex: 0 0 100%;
  max-width: 100%;
}
</style>
