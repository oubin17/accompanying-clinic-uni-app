<template>
	<view class="content">
		<navBar :isHome="true" />
		<view style="margin-top: 130rpx;">

		</view>

	</view>
</template>

<script setup>
	import {
		ref,
		reactive,
		computed
	} from 'vue'

	import {
		onLoad
	} from '@dcloudio/uni-app'

	const app = getApp();
	onLoad(() => {
		app.globalData.utils.getUserInfo()
		
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