<template>
  <div class="banner-content">
    <p class="banner-top-text">Always forward!  ————————————————</p>
    <span class="banner-title">welcome!</span>
    <span class="banner-botton">Start</span>
    <i class="banner-next-icon">
      
    </i>
  </div>
</template>

<script>
export default {
  name: 'BannerContent'
}
</script>

<style scoped>
  .banner-content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 500px;
    height: 500px;
    /* background-color: #fff; */
    text-align: center;
  }
  .banner-top-text {
    font-size: 18px;
    margin-top: 100px;

  }
  .banner-title {
    font-family: '阿里巴巴普惠体';
    /* font-weight: 800; */
    font-size: 89px;
    display: block;
    background-color: #000;
    border-radius: 40px;
    color: #fff;
    width: 500px;
  }
  .banner-botton {
    font-size: 38px;
    border: 3px solid #000;
    border-radius: 30px;
    display: block;
    width: 180px;
    margin: 100px  auto;
    cursor: pointer;
    transition: .2s;
  }
  .banner-botton:hover {
    background-color: #000;
    color: #fff;
    border: 3px solid #fff;
  }
  .banner-next-icon {
    background-image: url('../../../assets/img/箭头.png');
    display: inline-block;
    width: 60px;
    height: 60px;
    background-size: cover;
    transform: rotate(90deg);
    margin-top: 50px;
    animation: next-animate .7s infinite;
    cursor: pointer;
    transition: .2s;
}
@keyframes next-animate {
  0% {
    transform: translateY(0px) rotate(90deg);
  }
  50% {
    transform: translateY(3px) rotate(90deg);
  }
  100% {
    transform: translateY(-3px) rotate(90deg);
  }
}
.banner-next-icon:hover {
  background-color: rgba(78, 78, 78, 0.2);
  border-radius: 20px;
}
</style>