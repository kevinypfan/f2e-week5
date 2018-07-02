<template>
  <div id="app">
    <Header />
    <router-view/>
  </div>
</template>
<script>
import Header from './components/Header.vue'
export default {
  components: {
    Header
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,700i,900');
  
  $bootstrap4: 'https://hexschool.github.io/THE_F2E_Design/week5-comic%20viewer/assets/ad-2.png';
  $vue: 'https://hexschool.github.io/THE_F2E_Design/week5-comic%20viewer/assets/ad-1.png';
  $html5: 'https://hexschool.github.io/THE_F2E_Design/week5-comic%20viewer/assets/ad-3.png';

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  .container {
    width: 720px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
  }
  
  .col-6 {
    flex: 0 0 50%;
    max-width: 100%;
  }

  .col-12 {
    flex: 0 0 100%;
    max-width: 100%;
  }

</style>
