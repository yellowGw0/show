<template>
  <div class="professional">
    <div class="professional-center">
      <h2 class="professional-title">专业技能</h2>
      <div class="professional-content">
        <div class="pro-content-top">
          <div v-for="(item, index) in proListTop" :key="index">
            <div class="pro-img-hover">
              <img :src="item.imgUrl" :alt="item.imgUrl" >
              <div class="pro-hover-text">
                <p v-for="(subItem, subIndex) in item.texts" :key="subIndex">{{subItem}}</p>
              </div>
            </div>
            <h3 class="pro-img-title">{{item.title}}</h3>
          </div>
        </div>
        <div class="pro-content-bottom">
          <div v-for="(item, index) in proListBottom" :key="index">
            <div class="pro-img-hover">
              <img :src="item.imgUrl" :alt="item.imgUrl" >
              <div class="pro-hover-text">
                <p v-for="(subItem, subIndex) in item.texts" :key="subIndex">{{subItem}}</p>
              </div>
            </div>
            <h3 class="pro-img-title">{{item.title}}</h3>
          </div>
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
          texts: [
            'HTML',
            'CSS',
            'JavaScript'
          ]
        },
        {
          title: '前端框架',
          imgUrl: require('@a/img/zyjn2.jpg'),
          texts: [
            'HTML',
            'CSS',
            'JavaScript'
          ]
          
        },
        {
          title: '对接后台',
          imgUrl: require('@a/img/zyjn3.jpg'),
          texts: [
            'HTML',
          ]
        },       
      ],
      proListBottom: [
        {
          title: '前端三剑客',
          imgUrl: require('@a/img/zyjn4.jpg'),
          texts: [
            'CSS',
            'JavaScript'
          ]
        },
        {
          title: '前端框架',
          imgUrl: require('@a/img/zyjn5.jpg'),
          texts: [
            'HTML',
            'JavaScript'
          ]
          
        },
        {
          title: '对接后台',
          imgUrl: require('@a/img/zyjn6.jpg'),
          texts: [
            'HTML',
          ]
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
    margin-top: 100px;
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
    margin-top: 60px;
    display: flex;
    justify-content: space-between;
    text-align: center;
  }
  .pro-content-top img {
    width: 370px;
    float: left;
  }
  .pro-content-bottom {
    display: flex;
    justify-content: space-between;
    margin-top: 60px;
    text-align: center;
  }
  .pro-content-bottom img{
    width: 370px;
    float: left;
  }
  .pro-img-title {
    font-size: 26px;
    color: #fff;
    letter-spacing: 6px;
    margin-top: 10px;
  }

  /* hover */
  .pro-img-hover {
    overflow: hidden;
    position: relative;
    border-radius: 10px;
    cursor: pointer;
  }
  .pro-hover-text p {
    padding: 20px 10px 0px 10px;
    /* border-bottom: 2px solid #fff; */
    display: block;
    color: #fff;
  }
  .pro-hover-text {
    text-align: center;
    width: 100%;
    height: 100%;
    background-color: rgba(31, 31, 31, 0.7);
    position: absolute;
    top: 20px;
    left: 0px;
    cursor: pointer;
    opacity: 0;
    transition: .2s;
    box-shadow: 20px 0px 5px rgba(31, 31, 31, 1);
    font-size: 24px;
  }
  .pro-hover-text:hover{
    top: 0px;
    opacity: 1;
  }
</style>