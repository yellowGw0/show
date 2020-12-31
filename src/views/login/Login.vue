<template>
  <div class="login">
    <div class="login-content">
      <i class="login-icon"></i>
      <form action="">
        <div class="login-name">
          <i class="login-name-icon login-icon-style"></i>
          <input type="text" class="login-input" placeholder="请输入用户名">
        </div>
        <div class="login-pass">
          <i class="login-pass-icon login-icon-style"></i>
          <input type="text" class="login-input" placeholder="请输入密码">
        </div>
        <p class="forget"><a href="javascript:;">忘记密码？</a></p>
        <p class="login-button"><input type="submit" class="login-submit" value="登录"></p>
      </form>
      <p>
      <span class="login-register">注册</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {  
  name: 'Login',
  
}

</script>

<style scoped>
  .login {
    position: relative;
    width: 100%;
    height: 1000px;
    background-image: url('./../../assets/img/loginBG.png');
    background-size: contain;
    background-repeat: no-repeat;
    background-attachment: fixed;
  }
  .login-content {
    overflow: hidden;
    width: 600px;
    height: 700px;
    background-color: #fff;
    box-shadow: 0px 0px 15px rgba(95, 95, 95, 0.4);
    position: absolute;
    right: 200px;
    top: 50%;
    transform: translate(0px, -50%);
    border-radius: 20px;
  }
  .login-icon {
    display: inline-block;
    width: 80px;
    height: 80px;
    background-image: url('../../assets/img/login-icon.png');
    background-size: contain;
    position: absolute;
    /* top: 50%; */
    left: 50%;
    transform: translateX(-50%);
    z-index: 1;
    top: 10%;
  }
  .login-icon-style {
    display: inline-block;
    width: 50px;
    height: 50px;
    background-size: cover;
    background-repeat: no-repeat;
    vertical-align: middle;
  }
  .login-name {
    position: absolute;
    left: 50%;
    top: 30%;
    transform: translateX(-50%);
    display: flex;
  }
  .login-pass {
    display: flex;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translateX(-50%);
  }
  .login-name-icon {
    background-image: url('./../../assets/img/name.png');
  }
  .login-pass-icon {
    background-image: url('./../../assets/img/password.png');
  }
  .login-input {
    font-size: 18px;
    width: 400px;
    height: 40px;
    border-bottom: 1px solid #777777;
    border-radius: 0px;
  }
  .forget {
    position: absolute;
    top: 57%;
    right: 12%;
    color: var(--color-background-blue);
  }
  .login-button {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 27%;
  }
  .login-button input {
    width: 150px;
    height: 50px;
    background-color: var(--color-background-blue-unselected);
    color: #fff;
    border-radius: 10px;
    font-size: 22px;
    letter-spacing: 2px;
    cursor: pointer;
    transition: .2s;
    box-shadow: 0px 0px 8px #3d3d3d59;
  }
  .login-button input:hover {
    width: 350px;
    background-color: var(--color-background-blue);
  }
  .login-register {
    position: absolute;
    bottom: 15%;
    left: 50%;
    transform: translateX(-50%);
    border-bottom: 1px solid var(--color-background-blue);
    color: var(--color-background-blue);
    font-size: 16px;
    line-height: 15px;
    cursor: pointer;
    transition: .1s;
  }
  .login-register:hover {
    color: red;
    border-bottom-color: red;
  }
</style>