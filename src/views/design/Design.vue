<template>
  <div class="design">
    <nav-bar class="design-nav-bar"></nav-bar>
    
  </div>
</template>

<script>
import NavBar from '@/components/content/NavBar.vue';


export default {
  name: 'Design',
  components: {
    NavBar,
  }
}
</script>

<style scoped>
  .design-nav-bar {
    background-color: var(--color-background-blue);
  }
</style>