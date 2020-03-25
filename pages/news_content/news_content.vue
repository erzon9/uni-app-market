<template>
	<view class="detail">
		<view class="title">
			{{news.title}}
		</view>
		<view class="marker">
			<text>时间: {{news.time}}</text>
			<text>阅读次数: {{news.count}}</text>
		</view>
		<view class="content">
			<rich-text :nodes="news.content"></rich-text>
		</view>
	</view>
</template>

<script>
	export default {
		onLoad(options) {
			console.log(options);
			this.getNewsContent(options.id);
		},
		data() {
			return {
				news: {}
			};
		},
		methods: {
			async getNewsContent(id) {
				let res = await this.$http({
					url: `/news/news-${id}.json`
				});
				
				this.news = res.data.news;
			}
		}
	}
</script>

<style lang="scss">
.detail {
	padding: 20rpx 10rpx;
	.title {
		line-height: 50rpx;
		font-size: 44rpx;
		font-weight: 700;
	}
	
	.marker {
		display: flex;
		justify-content: space-between;
		margin-top: 30rpx;
		text {
			font-size: 28rpx;
		}
	}
	
	.content {
		margin-top: 30rpx;
	}
}
</style>
