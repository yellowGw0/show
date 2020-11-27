<template>
  <div class="back-top" v-show="isShow">
    <div class="top" @click="backTop()">
      Top
    </div>
  </div>
</template>

<script>
export default {
  name: 'BackTop',
  data () {
    return {
      isShow: false,
      height: 1000
    }
  },
  mounted () {
    document.body.onscroll = () => {
      var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

      this.isShow = scrollTop >= this.height ? true : false 
    }
  },
  methods: {
    backTop() {
      document.documentElement.scrollTop = 0;
    }
  },
  
}
</script>

<style scoped>
  .back-top {
    width: 60px;
    height: 150px;
    border-radius: 20px;
    background-color: var(--color-background-blue);
    position: fixed;
    bottom: 20px;
    right: 130px;
    z-index: 999;
  }   
  .top {
    height: 50px;
    width: 50px;
    border-radius: 50%;
    background-color: #fff;
    text-align: center;
    line-height: 40px;
    margin: 0 auto;
    cursor: pointer;
  }
  .top:hover {
    box-shadow: 0px 0px 5px rgba(26, 102, 153, 0.664);
  }
</style>