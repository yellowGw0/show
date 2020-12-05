<template>
  <div class="nav-bar">
    <div class="nav-center">
      <div class="nav-left">
        <span><i class="nav-icon"></i>YG</span>
        <div @click="linkClick('/design')">作品 <i class="nav-arrows"></i></div>
        <div @click="linkClick('/message')">留言 <i class="nav-arrows"></i></div>
      </div>
      <div class="nav-right">
        <div>关于 <i class="nav-arrows"></i></div>
        <div class="login">Login</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  data () {
    return {
      
    }
  },
  methods: {
    linkClick(link) {
      this.$router.push(link);
    },
  }
}
</script>                             

<style>
  .nav-bar {
    display: flex;
    height: 70px;
    width: 100%;
    justify-content: center;
  }
  .nav-center {
    width: 1200px;
    display: flex;
    justify-content: space-between;
    text-align: center;
    color: var(--color-text);
    font-size: 18px;
    font-weight: 600;
  }
  .nav-center div {
    display: flex;
    align-items: center;
  }
  .nav-left span {
    margin: 0px 34px;
    padding: 0px 10px;
    display: flex;
    animation: icon-animate 5s linear infinite normal;
    border-radius: 20px;
    
  }
  .nav-left div, .nav-right div{
    cursor: pointer;
    border-radius: 12px;
    transition: .1s;
    width: 73px;
    margin: 0px 20px;
  }
  .nav-icon {
    background-image: url('../../assets/img/看见.png');
    width: 38px;
    height: 38px;
    background-size: cover;
  }
  .nav-arrows {
    margin-left: 3px;
    background-image: url('~@a/img/箭头.png');
    display: inline-block;
    width: 18px;
    height: 18px;
    background-size: cover;
    transition: .1s;
  }
  .nav-left div:hover .nav-arrows, .nav-right div:hover .nav-arrows {
    margin-left:7px;
  }
  .login {
    width: 100px;
    height: 30px;
    background-color: var(--color-text);
    border-radius: 50px;
    color: #000;
    text-align: center;
    padding-left: 14px;
  }
  .login:hover {
    animation: login-anime .3s;
  }
  @keyframes login-anime {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(0.7);
    }
    100% {
      transform: scale(1.3);
    }
  }
</style>