<template>
  <div class="professional">
    <div class="professional-center">
      <h2 class="professional-title">专业技能</h2>
      <div class="professional-content">
        <div class="pro-content-top">
          <img v-for="(item, index) in proListTop" :key="index" :src="item.imgUrl" alt="">
        </div>
        <div class="pro-content-bottom">
          <img v-for="(item, index) in proListBottom" :key="index" :src="item.imgUrl" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Professional',
  data () {
    return {
      proListTop: [
        {
          title: '前端三剑客',
          imgUrl: require('@a/img/zyjn1.jpg'),
        },
        {
          title: '前端框架',
          imgUrl: require('@a/img/zyjn2.jpg')
          
        },
        {
          title: '对接后台',
          imgUrl: require('@a/img/zyjn3.jpg')
        },       
      ],
      proListBottom: [
        {
          title: '前端三剑客',
          imgUrl: require('@a/img/zyjn4.jpg'),
        },
        {
          title: '前端框架',
          imgUrl: require('@a/img/zyjn5.jpg')
          
        },
        {
          title: '对接后台',
          imgUrl: require('@a/img/zyjn6.jpg')
        },       
      ]
    }
  }
}
</script>

<style scoped>
  .professional {
    background-color: var(--color-background-blue);
    height: 980px;
  }
  .professional-center {
    width: 1200px;
    margin: 0 auto;
    overflow: hidden;
  }
  .professional-title {
    margin-top: 20px;
    text-align: center;
    font-size: 48px;
    color: #fff;
    position: relative;
  }
  .professional-title::after {
    content: '';
    display: inline-block;
    width: 190px;
    background-color: #fff;
    height: 5px;
    position: absolute;
    top: 80%;
    left: 50%;
    transform: translateX(-50%);
  }
  .professional-content {
    display: flex;
    flex-direction: column;
  }
  .pro-content-top {
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
  }
  .pro-content-top img {
    border-radius: 20px;
    width: 370px;
  }
  .pro-content-bottom {
    display: flex;
    justify-content: space-between;
    margin-top: 100px;
  }
  .pro-content-bottom img{
    border-radius: 15px;
    width: 370px;
  }
</style>