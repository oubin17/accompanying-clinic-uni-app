<template>
  <view class="content">
    <navBar name="我是navBar组件" :content="data" @changeDataEmit="changeData">
		<view>我是插槽的内容,可以传数据，也能传结构</view>
		
	</navBar>
  </view>
</template>

<script setup>
import { ref, reactive, computed } from 'vue'
const data = ref('动态数组样例')

const changeData = (val) => {
	data.value = val
	console.log(val)
}
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
