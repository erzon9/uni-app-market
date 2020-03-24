<template>
	<view class="us">
		<image src="../../static/us.jpg" ></image>
		<view @click="phoneCall">联系：111-1111-1111 (点击拨打)</view>
		<view>北京市东城区东长安街天安门广场北侧</view>
		<map class="map"></map>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			phoneCall() {
				console.log('拨打电话');
			}
		}
	}
</script>

<style lang='scss'>
.us {
	background-color: #EEEEEE;
	image {
		width: 100%;
		height: 410rpx;
	}
	view {
		&:first-of-type {
			margin-top: -10rpx;
		}
		
		background-color: #FFFFFF;
		height: 80rpx;
		line-height: 80rpx;
		font-size: 36rpx;
		padding: 0 20rpx;
		margin-bottom: 4rpx;
	}
	
	.map {
		height: 750rpx;
		width: 750rpx;
	}
}
</style>
