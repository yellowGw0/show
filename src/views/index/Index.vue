<template>
  <div class="header">
    <Banner></Banner>
    <Me @getIconList="getIconList"></Me>
    <Professional></Professional>
    <Design></Design>
    <Contact></Contact>
    <!-- footer组件传入输入 -->
    <Footer :bottomIcon="iconList"></Footer>
  </div>
</template>

<script>
import Me from '@views/index/childrenIndex/Me.vue';
import Banner from '@views/index/childrenIndex/Banner.vue';
import Design from '@views/index/childrenIndex/Design.vue';
import Footer  from '@views/index/childrenIndex/Footer.vue';
import Contact from '@views/index/childrenIndex/Contact.vue';
import Professional from '@views/index/childrenIndex/Professional.vue';

export default {
  name: 'Header',
  data() {
    return {
      //ICON数据
      iconList: null  
    }
  },
  components: {
    Me,
    Banner,
    Design,
    Footer,
    Contact,
    Professional,
  },
  methods: {
    // 接收来自Me的ICON数据
    getIconList(data) {
      console.log(data);
      this.iconList = data;
    }
  }
}
</script>

<style scoped>
  
</style>