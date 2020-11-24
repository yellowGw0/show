<template>
  <div class="contact">
    <div class="contact-center">
      <h2 class="contact-title">联系我</h2>
      <div class="contact-content">
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
          <input type="submit" value="上传信息" class="contact-submit">
        </div>
      </div>
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
    margin-top: 50px;
  }
  .contact-phone, .contact-mail {
    height: 150px;
    /* background-color: yellow; */
  }
  .contact-bottom {
    height: 200px;
  }
  .contact-phone h3,.contact-mail h3, .contact-leave h3 {
    font-size: 32px;
    color: #fff;
    font-weight: 100;
    padding-bottom: 10px;
  }
  .contact-input-phone {
    color: rgb(255, 154, 23);
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
</style>