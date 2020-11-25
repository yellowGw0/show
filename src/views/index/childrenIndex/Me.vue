<template>
  <div class="me">
    <div class="me-bg-color">
      <div class="me-content">
        <!-- 标题 -->
        <div class="me-top">
          <h2 class="me-title">我的简介</h2>
          <p class="me-sub-title">我的基本信息和个人介绍</p>
        </div>
        <!-- 信息 -->  
        <div class="me-info">
          <div class="m-info-head">
            <img src="@a/img/北极光星空夜景.jpg" class="m-info-img">
          </div>
          <div class="me-info-details">
            <p><i class="diamond-blue"></i><span>姓名：言果</span><span class="details-right details-right-1"><i class="diamond-blue"></i><span>年龄：18</span></span></p>
            <p><i class="diamond-blue"></i><span>电话：13xxxxxx</span><span class="details-right"><i class="diamond-blue"></i><span>现居：临沂</span></span></p>
            <p><i class="diamond-blue"></i><span>邮箱：23xxxx.com</span></p>
            <p><i class="diamond-blue"></i><span>专业：计算机</span></p>
          </div>
        </div>
        <!-- 底部二维码以及介绍 -->
        <div class="me-bottom">
          <div class="me-code">
            <!-- icon列表渲染 -->
            <div class="me-relation">
              <img v-for="(item, index) in iconList" :key="index" :src="item.imgUrl" :alt="item.isActive" :class="{isIconActive: item.isActive}" @click="iconActiveClick(index)">
            </div>
            <div class="me-link">
              <img :src="iconUrl">
            </div>
          </div>
          <div class="me-bottom-text">
            <p class="me-bottom-title"><i class="diamond-blue"></i>我是一名<span class="me-text-blue">前端工程师</span></p>
            <p class="me-bottom-text-content">伪/商务英语专业，现在一家出国留学咨询机构从事翻译以及留学申请等工作。
                英语专业4级、大学英语6级以上，能够熟练运用英语进行听说读写。
                日语三级以上，能用日语进行简单的日常对话及阅读。
                在校期间主修了商务英语、还选修了企业管理。
                曾多次获得学校奖学金，勤奋踏实的我愿用所学与公司共同发展！
            </p>
          </div>
        </div>        
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Me',
  data () {
    return {
      iconUrl: require('@a/img/微信二维码.png'),
      iconList: [
        {
          imgUrl: require('@a/img/微信.png'),
          name: '微信',
          isActive: true
        },
        {
          imgUrl: require('@a/img/qq.png'),
          name: 'QQ',
          isActive: false
        },
        {
          imgUrl: require('@a/img/github.png'),
          name: 'GitHub',
          isActive: false
        },
        {
          imgUrl: require('@a/img/博客.png'),
          name: '博客',
          isActive: false
        },
      ]
    }
  },
  methods: {
    iconActiveClick(index) {
      for (var item of this.iconList) {
        item.isActive = false
      }  
      this.iconList[index].isActive = true;
      switch (index) {
        case 0:
          this.iconUrl = require('@a/img/微信二维码.png');
          break;
        case 1:
          this.iconUrl = require('@a/img/qq.png');
          break;
        case 2:
          this.iconUrl = require('@a/img/github.png');
          break;
        case 3:
          this.iconUrl = require('@a/img/博客.png');
          break;
        default:
          this.iconUrl = 'error!'
      }
    }
  },
  mounted () {
    this.$emit('getIconList', this.iconList);
  }
}
</script>

<style scoped>
  .me {
    background-color: var(--color-background);
    height: 980px;
    overflow: hidden;
  }
  .me-bg-color {
    width: 1200px;
    background-color: #fff;
    margin: 0 auto;
    height: 930px;
    margin-top: 25px;
    border-radius: 20px;
  }
  .diamond-blue {
    display: inline-block;
    width: 10px;
    height: 10px;
    background-color: var(--color-background-blue);
    vertical-align: middle;
    margin-right:8px;
 }
 .me-text-blue {
   color: var(--color-background-blue);
 }
 .me-content {
   padding: 30px;
 }
 .me-top {
   display: flex;
 }
 .me-title {
   font-size: 48px;
   border-bottom: 5px solid var(--color-background-blue);
   display: inline-block;
   height: 65px;
 }
 .me-sub-title {
   padding-top: 45px;
   margin-left: 10px;
   font-size: 18px;
 }
 .me-info {
   display: flex;
   justify-content: space-between;
   align-items: center;
   text-align: center;
   height: 350px;
   margin-top: 30px;
 }
 .m-info-head {
   width: 400px;
   height: 100%;
 }
 .m-info-img {
   width: 400px;
   height: 100%;
   border-radius: 20px;
 }
 .me-info-details p {
   font-weight: 500;
   font-size: 22px;
   border-bottom: 3px solid var(--color-background-blue);
   margin-bottom: 40px;
   padding-bottom: 10px;
   margin-top: 20px; 
 }
 .me-info-details {
   width: 700px;
   text-align: left;
 }
 .details-right {
   padding-left: 200px;
 }
 .details-right-1 {
   padding-left: 245px;
 }
 .me-bottom {
   justify-content: space-between;
   display: flex;
   margin-top: 30px;
 }
 .me-code {
   width: 400px;
 }
 .me-bottom-text {
   width: 700px;
   margin-top: 10px;
 }
 .me-bottom-title {
   font-size: 24px;
   text-align: left;
   padding-bottom: 20px;
 }
 .me-bottom-text-content {
   font-size: 18px;
   background-color: var(--color-background-blue);
   border-radius: 20px;
   padding: 10px;
   color: #fff;
   line-height: 72px;
 }
 .me-relation {
   text-align: center;
   margin-bottom: 10px;
 }
 .me-relation img {
   width: 50px;
   height: 50px;
   margin: 0px 15px;
   cursor: pointer;
 }
 .me-link {
   background-color: var(--color-background-blue);
   padding: 20px 0px;
   text-align: center;
   border-radius: 20px;
 }
 .isIconActive {
   border: 4px solid var(--color-background-blue);
   border-radius: 10px;
   width: 100px;
   height: 100px;
 }
</style>