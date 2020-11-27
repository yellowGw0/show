<template>
  <div class="design-max">
    <nav-bar class="design-nav-bar"></nav-bar>
    <design-banner></design-banner>
    <design-main></design-main>
  </div>
</template>

<script>
import NavBar from '@/components/content/NavBar.vue';

import DesignMain from '@/views/design/childrenDesign/DesignMain.vue';
import DesignBanner from '@/views/design/childrenDesign/DesignBanner.vue';

export default {
  name: 'Design',
  components: {
    NavBar,
    DesignMain,
    DesignBanner
  }
}
</script>

<style scoped>
  .design-nav-bar {
    background-color: var(--color-background-blue);
  }
</style>