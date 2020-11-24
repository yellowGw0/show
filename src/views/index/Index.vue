<template>
  <div class="header">
    <Banner></Banner>
    <Me></Me>
    <Professional></Professional>
    <Design></Design>
    <Contact></Contact>
  </div>
</template>

<script>
import Me from '@views/index/childrenIndex/Me.vue';
import Banner from '@views/index/childrenIndex/Banner.vue';
import Design from '@views/index/childrenIndex/Design.vue';
import Contact from '@views/index/childrenIndex/Contact.vue';
import Professional from '@views/index/childrenIndex/Professional.vue';

export default {
  name: 'Header',
  components: {
    Me,
    Banner,
    Design,
    Contact,
    Professional,
  }
}
</script>

<style scoped>
  
</style>