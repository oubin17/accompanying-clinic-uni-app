<template>
  <view>
    navBar组件
    <view>组件的name属性： {{ props.name }}</view>
    <view>组件的data属性： {{ props.content }}</view>
	<slot></slot>
	<button @click="handleChange">修改content</button>
  </view>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'

const props = defineProps(['name', 'content'])

const emit = defineEmits(['changeDataEmit'])
const handleChange = () => {
	emit('changeDataEmit', '修改后的数据')
}


</script>

<style></style>