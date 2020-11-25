<template>
  <div class="footer">
    <div class="footer-center">
      <h3>上海松江佘山林荫大道18号天虹大厦北区16F-501 | 版权所有 © 2016</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
  .footer {
    height: 150px;
    width: 100%;
    background-color: var(--color-background-blue);
    border-top: 1px solid var(--color-background);
  }
  .footer-center {
    width: 1200px;
    margin: 0 auto;
    text-align: center;
    color: #fff;
    font-size: 24px;
  }
</style>