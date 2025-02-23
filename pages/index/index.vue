<template>
  <view class="content">
    <image class="logo" src="/static/logo.png"></image>
    <view class="text-area">
      <text class="title">{{ title }}</text>
    </view>
    <button @click="handleClick">点我</button>
    <text>总共购买的水果数量：{{ totalNum }}</text>
    <view v-for="item in list" :key="item.name">
      <text>{{ item.name }}</text>
      <text>{{ item.num }}</text>
    </view>
  </view>
  <my-component />
  <navBar></navBar>
</template>

<script setup>
import { ref, reactive, computed } from 'vue'
import { onLoad } from '@dcloudio/uni-app'
const title = ref('Hello1')

const list = reactive([
  { name: 'apple', num: 1 },
  { name: 'orange', num: 2 },
  { name: 'banana', num: 3 },
])
const handleClick = () => {
  list.forEach(element => {
    element.num++
  });
}



onLoad(() => {
  console.log('onLoad生命周期')
})
//计算水果的总数
const totalNum = computed(() => {
  return list.reduce((total, cur) => total + cur.num, 0)
})

</script>

<style>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin-top: 200rpx;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50rpx;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}
</style>
