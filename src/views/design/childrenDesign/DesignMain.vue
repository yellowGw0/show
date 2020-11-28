<template>
  <div class="design-main">
    <ul class="design-content-title">
      <li>推荐</li>
      <li>全部</li>
    </ul>
    <div class="design-content">
      <div v-for="(item, index) in designList" :key="index">
        {{item.name}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DesignMain',
  data () {
    return {
      designList: [
        {
          name: '1',
          imgUrl: '',
          link: '123',
          text: '我是'
        },
        {
          name: '2',
          imgUrl: '',
          link: '123',
          text: '我是'
        },
        {
          name: '3',
          imgUrl: '',
          link: '123',
          text: '我是'
        },
        {
          name: '4',
          imgUrl: '',
          link: '123',
          text: '我是'
        },
        {
          name: '5',
          imgUrl: '',
          link: '123',
          text: '我是'
        },
        {
          name: '5',
          imgUrl: '',
          link: '123',
          text: '我是'
        },
        {
          name: '5',
          imgUrl: '',
          link: '123',
          text: '我是'
        },
        {
          name: '5',
          imgUrl: '',
          link: '123',
          text: '我是'
        },
        {
          name: '5',
          imgUrl: '',
          link: '123',
          text: '我是'
        },
        {
          name: '5',
          imgUrl: '',
          link: '123',
          text: '我是'
        }
      ]
    }
  }
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
    height: 1285px;
    border-radius: 20px;
    overflow: hidden;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }
  .design-content-title {
    font-size: 26px;
    color: rgb(121, 121, 121);
    display: flex;
    justify-content: center;
    font-weight: 400;
    border-bottom: 1px solid rgb(121, 121, 121);
  }
  .design-content-title li {
    padding: 20px;
    letter-spacing: 8px;
    cursor: pointer;
  }
  .design-content div{
    border-radius: 20px;
    width: 350px;
    height: 400px;
    margin: 10px;
    background-color: red;
    cursor: pointer;
    color: #fff;
    font-size: 24px;
    line-height: 400px;
    text-align: center;
    transition: .2s;
  }
  .design-content div:hover {
    background-color: rgb(138, 0, 0);
  }
</style>