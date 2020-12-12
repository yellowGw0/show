<template>
  <div class="login">
    <div class="login-content">
      <span></span>
      <form action="">
        <div class="login-name">
          <i class="login-name-icon login-icon-style"></i>
          <input type="text" class="login-input">
        </div>
        <div class="login-pass">
          <i class="login-pass-icon login-icon-style"></i>
          <input type="text" class="login-input">
        </div>
        <p>忘记密码？</p>
        <p><input type="submit" class="login-submit" value="登录"></p>
      </form>
      <p>
      <span>注册</span>
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
    /* position: relative; */
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
    /* top: 50%; */
    transform: translateX(-50%);
    display: flex;
  }
  .login-pass {
    display: flex;
    position: absolute;
    left: 50%;
    top: 100px;
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
</style>