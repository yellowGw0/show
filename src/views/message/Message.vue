<template>
  <div class="message">
    <h2 class="message-title">留言</h2>
    <div class="message-content">
      <div class="me-content-left">
        <img src="">
      </div>
      <div class="me-content-right">
        <div>
          <i></i>
          <input type="text" placeholder="请输入姓名">
        </div>
        <div>
          <i></i>
          <input type="text" placeholder="请输入留言">
        </div>
        <input type="submit" value="发送">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Message',
  data () {
    return {
      
    }
  }
}
</script>

<style spcoed>
  body {
    background-image: url('./../../assets/img/back.png');
    background-color: var(--color-background-blue);
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    width: 100%;
    height: 100%;
  }
  /* .message {
    background-image: url('./../../assets/img/back.png');
    background-color: var(--color-background-blue);
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    height: 1080px;
    width: 100%;
    overflow: hidden;
  } */
  .message-title {
    font-size: 68px;
    color: #fff;
    margin: 20px 0px;
  }
  .message-content {
    width: 1500px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
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
    /* background-color: #fff; */
    height: 700px;
    border-radius: 20px;
    overflow: hidden;
    /* box-shadow: 0px 0px 30px #2161848f; */
  }
  
</style>

