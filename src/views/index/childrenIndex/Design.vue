<template>
  <div class="design">
    <div class="design-center">
      <h2 class="design-title">作品展示</h2>
      <!-- autoplay 自动播放   loop 循环   height 设置高度   autoplay-speed 延迟时间 -->
      <Carousel class="design-carousel" v-model="value1" loop :height="height" :autoplay-speed="5000">
        <CarouselItem v-for="(item, index) in showImgs" :key="index">
          <div class="design-img-center">
            <div class="design-img-title">{{item.title}}</div>
            <img :src="item.imgUrl" alt="i" class="design-img">
          </div>
        </CarouselItem>
      </Carousel>
    </div>
  </div>
</template>

<script>
import {Carousel, CarouselItem} from 'view-design'

export default {
  name: "Design",
  components: {
    Carousel,
    CarouselItem
  },
  data() {
    return {
      height: 790,
      value1: 0,
      showImgs: [
        {
          // imgUrl: require('@a/img/Music.png'),
          title: '创意海报1',
        },
        {
          // imgUrl: require('@a/img/Music.png'),
          title: '创意海报2',
        },
        {
          // imgUrl: require('@a/img/Music.png'),
          title: '创意海报3',
        },
        {
          // imgUrl: require('@a/img/Music.png'),
          title: '创意海报4',
        },
      ]
    };
  },
};
</script>

<style>
.design {
  height: 980px;
  width: 100%;
  position: relative;
  background-color: var(--color-background);
  overflow: hidden;
}
.design-title {
  margin-top: 20px;
  text-align: center;
  font-size: 48px;
  position: relative;
}
.design-title::after {
  content: '';
  display: inline-block;
  height: 5px;
  width: 200px;
  background-color: var(--color-background-blue);
  position: absolute;
  bottom: 5px;
  left: 50%;
  transform: translate(-50%, -50%);
}
.design-center {
  overflow: hidden;
  width: 1200px;
  height: 940px;
  margin: 20px auto;
  cursor: pointer;
  background-color: #fff;
  border-radius: 20px;
}
.ivu-icon-ios-arrow-back:before {
  content: "\F33A";
  font-size: 48px;
}
.ivu-icon-ios-arrow-forward:before {
  content: "\F344";
  font-size: 48px;
}
.ivu-carousel-arrow {
  margin:0px;
  border: none;
  outline: 0;
  padding: 0;
  width: 80px;
  height: 80px;
  border-radius: 0px;
  cursor: pointer;
  position: absolute;
  z-index: 10;
  transition: .2s;
  background-color: var(--color-background-blue-unselected);
  color: #fff;
  text-align: center;
  font-size: 1em;
  font-family: inherit;
  line-height: inherit;
  border-radius: 20px;
}
.ivu-carousel-arrow:hover {
  background-color: var(--color-background-blue);
}
.ivu-carousel-dots li button {
    border: 0;
    cursor: pointer;
    background: var(--color-background-blue);
    opacity: .3;
    display: block;
    width: 20px;
    height: 7px;
    border-radius: 1px;
    outline: 0;
    font-size: 0;
    color: transparent;
    transition: all .5s;
    border-radius: 5px;
}
.design-img {
  width: 430px;
  height: 580px;
}
.design-img-title {
  font-size: 28px;
}
.design-img-center {
  text-align: center;
  margin-top: 100px;
}
</style>