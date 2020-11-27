<template>
  <div class="design-main">
    <ul class="design-content-title">
      <li>推荐</li>
      <li>全部</li>
    </ul>
    <div class="design-content">
    </div>
  </div>
</template>

<script>
export default {
  name: 'DesignMain'
}
</script>

<style scoped>
  .design-main {
    width: 1200px;
    margin: 0 auto;
    background-color: var(--color-background);
  }
  .design-content {
    background-color: var(--color-background);
    height: 985px;
    border-radius: 20px;
    overflow: hidden;
  }
  .design-content-title {
    font-size: 26px;
    color: rgb(121, 121, 121);
    display: flex;
    justify-content: center;
    font-weight: 400;
    border-bottom: 1px solid #000;
  }
  .design-content-title li {
    padding: 20px;
    letter-spacing: 8px;
    cursor: pointer;
  }
    
  

</style>