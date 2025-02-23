<template>
  <view class='nav'>
    <view :style="'height:' + status + 'rpx;' + containerStyle"></view>

    <view v-if="isHome" class="headNav"
      :style="'height:' + navHeight + 'rpx;line-height:' + navHeight + 'rpx;padding-left:20rpx'">
      <text class="city">中部地区</text>
	  <view style="flex:1">
		  <navigator url="/pages/search/index" :style="'height:' + menu.height * 2 + 'rpx;line-height:' + menu.height * 2  + 'rpx;margin-top:' + (menu.top * 2 - status) + 'rpx; margin-left:32rpx;margin-right:' + (menu.width * 2 + 24) + 'rpx;background: #f4f4f4;border-radius:200rpx;text-align:center'">
			  <text class="search-text">找医院</text>
		  </navigator>
	  </view>
    </view>
    <view v-else class="navbar" :style="'height:' + navHeight + 'rpx;' + containerStyle">
      <view class="back-icon" @click="backOrHome">
        <image v-if="pages > 1" src="/static/resource/navbar/ic_back.png"></image>
        <image v-else src="/static/resource/navbar/ic_home.png"></image>
      </view>
      <view class="nav-title" v-if="titleText">
        <view :style="'height:' + navHeight + 'rpx;line-height:' + navHeight + 'rpx;' + textStyle">{{ titleText }}
        </view>
      </view>

    </view>

  </view>
</template>

<script setup>

import { ref, reactive, onBeforeMount, defineProps } from 'vue';

const props = defineProps({
  background: {
    type: String,
    default: 'rgba(255, 255, 255, 1)'
  },
  color: {
    type: String,
    default: 'rgba(0, 0, 0, 1)'
  },
  fontSize: {
    type: String,
    default: '32'
  },
  iconWidth: {
    type: String,
    default: '116'
  },
  iconHeight: {
    type: String,
    default: '38'
  },
  titleText: {
    type: String,
    default: ''
  },
  isHome: {
    type: Boolean,
    default: false
  }
})

onBeforeMount(() => {
  setNavSize()
  setStyle()
})
// 状态栏高度
const status = ref(0)
//内容高度
const navHeight = ref(0)

//背景颜色
const containerStyle = ref('')
//字体样式
const textStyle = ref('')
//图标样式
const iconStyle = ref('')
//页面栈数量
const pages = ref(getCurrentPages().length)
//获取胶囊的位置
const menu = reactive(uni.getMenuButtonBoundingClientRect())

//计算状态栏高度
const setNavSize = () => {
  const { system, statusBarHeight } = uni.getSystemInfoSync()
  status.value = statusBarHeight * 2
  const isiOS = system.indexOf('iOS') > -1
  if (isiOS) {
    navHeight.value = 96
  } else {
    navHeight.value = 88
  }
}
//样式设置
const setStyle = () => {
  containerStyle.value = ['background:' + props.background].join(';')
  textStyle.value = ['color:' + props.color, 'font-size:' + props.fontSize + 'rpx'].join(';')
  iconStyle.value = ['width:' + props.iconWidth + 'rpx', 'height:' + props.iconHeight + 'rpx'].join(';')
}

//返回或首页
const backOrHome = () => {
  if (pages.value > 1) {
    uni.navigateBack()
  } else {
    uni.switchTab({
      url: '/pages/index/index'
    })
  }
}

</script>

<style lang="less" scoped>
.nav {
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 2;

}

.back-icon {
  display: flex;
  align-items: center;
  width: 64rpx;
  height: 100%;
  margin-left: 20rpx;

  image {
    width: 64rpx;
    height: 64rpx;
  }

}

.navbar {
  position: relative;
}

.nav-title {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%);
}
.headNav {
	display: flex;
}
</style>