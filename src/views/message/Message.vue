<template>
  <div class="message" ref="message">
    <nav-bar class="message-nav"></nav-bar>
    <h2 class="message-title">留言</h2>
    <div class="message-content">
      <div class="me-content-left">
        <img src="">
      </div>
      <div class="me-content-right">
        <div>
          <i class="message-name-icon"></i>
          <input type="text" placeholder="请输入姓名" class="message-name">
        </div>
        <div>
          <i class="message-me-icon"></i>
          <textarea rows="30" cols="50" class="message-me" placeholder="请输入留言"></textarea>
        </div>
        <div>
          <i class="me-sub-icon"></i>
          <input type="submit" value="发送" class="me-sub" ref="submit">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/content/NavBar.vue';

export default {
  name: 'Message',
  data () {
    return {
      
    }
  },
  components: {
    NavBar,
    
  },
  mounted () {
    this.$refs.submit.onmouseover = () => {
      this.$refs.message.classList.add("rgb");
    }
    this.$refs.submit.onmouseout = () => {
      this.$refs.message.classList.remove("rgb");
    }
  }
}
</script>

<style spcoed>
  
  @keyframes chengeColor {
    0% {
      background-color: var(--color-background-blue);
    }
    50% {
      background-color: rgb(0, 162, 255);
    }
    100% {
      background-color: var(--color-background-blue);
    }
  }
  .rgb {
    animation: chengeColor 2s infinite;
  }
  .message {
    background-image: url('./../../assets/img/back.png');
    background-color: var(--color-background-blue);
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    width: 100%;
    height: 1000px;
  }
  .message-name-icon {
    display: inline-block;
    width: 50px;
    height: 50px;
    background-image: url('./../../assets/img/name.png');
    vertical-align: middle;
    background-size: contain;
    position: absolute;
    left: -70px;
    top: 4px;
  }
  .message-me-icon {
    display: inline-block;
    width: 45px;
    height: 45px;
    vertical-align: middle;
    width: 50px;
    height: 50px;
    background-image: url('./../../assets/img/text.png');
    background-size: contain;
    position: absolute;
    top: 0px;
    left: -70px;
  }
  .message-title {
    font-size: 48px;
    color: #fff;
  }
  .message-content {
    width: 1500px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }
  .message-name {
    width: 100%;
    height: 60px;
    border-radius: 10px;
    box-shadow: 0px 0px 30px #21618448;
    font-size: 18px;
    padding: 10px
  }
  .message-me {
    width: 100%;
    height: 500px;
    outline: none;
    border: none;
    padding: 10px;
    font-size: 18px;
    border-radius: 20px;
    box-shadow: 0px 0px 30px #21618448;
  }
  .me-content-left {
    width: 700px;
    background-color: #fff;
    height: 700px;
    border-radius: 20px;
    box-shadow: 0px 0px 30px #21618448;
  }
  .message-title {
    text-align: center;
  }
  .me-content-right {
    width: 700px;
    height: 700px;
    border-radius: 20px;
  }
  .me-content-right div:nth-child(1) {
    position: relative;
    width: 100%;
    height: 100px;
    /* background-color: yellow; */
  }
  .me-content-right div:nth-child(2) {
    position: relative;
    width: 100%;
    height: 500px;
    /* background-color: blue; */
  }
  .me-content-right div:nth-child(3) {
    position: relative;
    text-align: center;
    margin-top: 20px;
  }
  .me-sub-icon {
    display: inline-block;
    width: 50px;
    height: 50px;
    vertical-align: middle;
    width: 50px;
    height: 50px;
    background-image: url('./../../assets/img/emit.png');
    background-size: contain;
    position: absolute;
    top: 0px;
    left: 260px;
  }
  .me-sub {
    box-shadow: 0px 0px 30px #21618448;
    border-radius: 10px;
    font-size: 24px;
    width: 180px;
    height: 50px;
    text-align: center;
    background-color: #fff;
    cursor: pointer;
    color: #000;
    font-weight: 800;
    transition: .2s;
  }
  .me-sub:hover {
    color: var(--color-background-blue);
  }
</style>

