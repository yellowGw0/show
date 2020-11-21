<template>
  <div>
    <nav-bar class="app-nav"></nav-bar>
    <router-view></router-view>
    <!-- <bottom-bar></bottom-bar> -->
  </div>
</template>

<script>
import NavBar from '@/components/content/NavBar.vue';
// import BottomBar from '@/components/content/BottomBar.vue';

export default {
  name: 'App',
  components: {
    NavBar,
    // BottomBar
  }
}
</script>

<style>
  @import url('./assets/css/base.css');
  .app-nav {
    position: absolute;
    z-index: 1;
  }
</style>