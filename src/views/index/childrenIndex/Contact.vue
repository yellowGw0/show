<template>
  <div class="contact">
    <div class="contact-center">
      <h2 class="contact-title">联系我</h2>
      <form action="http://baidu.com" method="post">
        <div class="contact-content">
          <i class="contact-bg-style"></i>
          <div class="contact-phone">
            <h3>电话:</h3>
            <input type="text" placeholder="请输入你的电话号码" class="contact-input-phone">
          </div>
          <div class="contact-mail">
            <h3>邮箱:</h3>
            <input type="text" placeholder="请输入你的邮箱" class="contact-input-mail">
          </div>
          <div class="contact-leave">
            <h3>留言:</h3>
            <textarea cols="120" placeholder="你的留言" rows="1" maxlength="100" class="contact-input-leave">
            </textarea>
          </div>
          <div class="contact-bottom">
            <div class="contact-bottom-left">
              <input type="submit" value="上传信息" class="contact-submit">
            </div>
            <div class="contact-bottom-right">
              <h3 class="con-right-title">我的联系方式</h3>
              <p><i class="contact-phone-icon contact-icon-style"></i>电话：13xxxxxxxxxx</p>
              <p><i class="contact-mail-icon contact-icon-style"></i>邮箱：23fafasfa@qq.com</p>
            </div>
          </div>
        </div>
      </form>
      <div></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Contact',
}
</script>

<style scoped>
  .contact {
    height: 980px;
    width: 100%;
    background-color: var(--color-background-blue);
  }
  .contact-center {
    width: 1200px;
    margin: 0 auto;
    overflow: hidden;
    position: relative;
  }
  .contact-title {
    font-size: 48px;
    color: #fff;
    margin-top: 20px;
    position: relative;
    padding-bottom: 10px;

  }
  .contact-title::after {
    content: '';
    display: inline-block;
    height: 5px;
    width: 150px;
    position: absolute;
    left: 75px;
    bottom: 5px;
    transform: translate(-50%, -50%);
    background-color: #fff;
  }
  .contact-content {
    display: flex;
    flex-direction: column;
    margin-top: 90px;
  }
  .contact-phone, .contact-mail {
    height: 150px;
    /* background-color: yellow; */
  }
  .contact-bottom {
    height: 150px;
    display: flex;
    justify-content: space-between;
  }
  .contact-phone h3,.contact-mail h3, .contact-leave h3 {
    font-size: 32px;
    color: #fff;
    font-weight: 100;
    padding-bottom: 10px;
  }
  .contact-input-phone {
    color: #ff9c1a;
    width: 700px;
    height: 60px;
    background-color: #fff;
    border-radius: 15px;
    border: none;
    padding: 5px;
    font-size: 18px;
    outline: none;
  }
  .contact-input-mail {
    color: rgb(255, 154, 23);
    width: 800px;
    height: 60px;
    background-color: #fff;
    border-radius: 15px;
    border: none;
    padding: 5px;
    font-size: 18px;
    outline: none;
  }
  .contact-leave {
    height: 300px;
  }
  .contact-input-leave {
    border-radius: 20px;
    border: none;
    padding: 5px;
    font-size: 18px;
    color: rgb(255, 154, 23);
    outline: none;
    resize: none;
    height: 200px;
  }
  .contact-submit {
    width: 150px;
    height: 60px;
    border-radius: 15px;
    background-color: #fff;
    outline: none;
    border: none;
    color: var(--color-background-blue);
    font-size: 26px;
    cursor: pointer;
    font-weight: 600;
    margin-top: 20px;
    transition: .1s;
    margin-left: 10px;
  }
  .contact-submit:hover {
    color:rgb(255, 154, 23);
    transform: scale(1.1,1.1);
  }
  .con-right-title {
    font-size: 26px;
    color: #fff;
    position: relative;
    margin-bottom: 10px;
  }
  .con-right-title::after {
    content: '';
    width: 160px;
    height: 5px;
    background-color: #fff;
    display: inline-block;
    position: absolute;
    left: 0px;
    bottom: 2px;
  }
  .contact-bottom-right p {
    font-size: 20px;
    color: #fff;
    letter-spacing: 5px;
  }
  .contact-bottom-right {
    padding-right: 70px;
  }
  .contact-phone-icon {
    background-image: url('./../../../assets/img/手机号.png');
  }
  .contact-icon-style {
    display: inline-block;
    width: 30px;
    height: 30px;
    background-size: cover;
    vertical-align: middle;
    margin-right: 5px;
  }
  .contact-mail-icon {
    background-image: url('./../../../assets/img/邮箱.png');
  }
  .contact-bg-style {
    display: inline-block;
    width: 300px;
    height: 300px;
    background-size: cover;
    position: absolute;
    right: 100px;
    top: 100px;
    background-image: url('./../../../assets/img/开心.png');
  }
</style>