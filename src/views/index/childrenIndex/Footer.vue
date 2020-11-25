<template>
  <div class="footer">
    <div class="footer-center">
      <div class="footer-content">
        <h3 class="footer-title">联系方式</h3>
        <ul class="footer-bottom-icon">
          <li v-for="(item, index) in bottomIcon" :key="index">
            <img :src="item.imgUrl" :alt="item.title">
          </li>
        </ul>
        <h3 class="footer-copyright">山东省临沂市河东区鲁州学院IT部18.1许国友 |<span class="copyright"> 版权所有 © 2020 </span></h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  props: {
    bottomIcon: Array
  }
}
</script>

<style scoped>
  .footer {
    height: 200px;
    width: 100%;
    background-color: var(--color-background-blue);
    border-top: 2px solid var(--color-background);
  }
  .footer-center {
    width: 1200px;
    margin: 0 auto;
    text-align: center;
    color: #fff;
    font-size: 16px;
  }
  .footer-content {
    margin-top: 40px;
  }
  .footer-copyright {
    margin-top: 5px;
    font-weight: 100;
    letter-spacing: 5px;
    color: var(--color-background);
    margin-top: 10px;
  }
  .footer-bottom-icon {
    display: flex;
    justify-content: center;
    margin-top: 5px;
  }
  .footer-bottom-icon li {
    margin: 0px 10px;
    width: 56px;
    height: 56px;
    background-color: #fff;
    border-radius: 50%;
    position: relative;
    cursor: pointer;
  }
  .footer-bottom-icon li img {
    width: 46px;
    height: 46px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    transition: .5s;
    z-index: 2;
    transform-origin:center center;
  }
  .footer-bottom-icon li img:hover{
    transform: translate(-50%, -50%) rotate(360deg);
  }
  .footer-title {
    font-size: 24px;
    font-weight: 400;
  }
  .copyright {
    font-size: 14px;
  }
</style>