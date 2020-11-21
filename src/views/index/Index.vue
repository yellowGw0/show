<template>
  <div class="header">
    <Banner></Banner>
    <!-- <Design></Design> -->
    <Me></Me>
    <Professional></Professional>
  </div>
</template>

<script>
import Banner from '@views/index/childrenIndex/Banner.vue';
// import Design from '@views/index/childrenIndex/Design.vue';
import Me from '@views/index/childrenIndex/Me.vue';
import Professional from '@views/index/childrenIndex/Professional.vue';
export default {
  name: 'Header',
  components: {
    Banner,
    Me,
    Professional
    // Design
  }
}
</script>

<style>
  
</style>