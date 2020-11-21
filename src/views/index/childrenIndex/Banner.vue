<template>
  <div class="banner">
    <div class="banner-center">
      <banner-content></banner-content>
    </div>
  </div>
</template>

<script>
import BannerContent from '@views/index/childrenIndex/BannerContent.vue'

export default {
  name: 'banner',
  components: {
    BannerContent
  }
}
</script>

<style>
  .banner {
    position: relative;
    width: 100%;
    background-color: var(--color-background-blue);
    height: 980px;
    z-index: 0;
    color: rgb(31, 31, 31);
  }
  .banner-center {
    margin: 0 auto;
    width: var(--center-box);
    height: 980px;
  }
</style>