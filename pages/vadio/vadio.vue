<template>
	<view class="vd">
		<view class="m-video" v-for="video of videos" :key='video.id'>
			<video :src='video.vadio'></video>
			<!-- <text>{{video.title}}</text> -->
		</view>
		
	</view>
</template>

<script>
	export default {
		onLoad() {
			this.getVideos()
		},
		data() {
			return {
				videos: [],
			}
		},
		methods: {
			async getVideos() {
				let res = await this.$http({
					url: '/vadio.json'
				});
				
				this.videos = res.data.list;
				
			}
		}
	}
</script>

<style lang='scss'>
.vd {
	.m-video {
		height: 440rpx;
		width: 100%;
		padding: 10rpx 0;
		
		video {
			width: 100%;
		}
	}
}
</style>
