<template>
	<view class="news-list">
		<view 
			class="news-item" 
			v-for="news of newsList" 
			:key="news.id"
			@click="handleClick(news.id)">
			<image 
				:src="news.img"
				mode="aspectFill"
			></image>
			<view class="main">
				<view class="title">{{news.title}}</view>
				<view class="marker">
					<text class="time">
						时间：{{news.time}}
					</text><br>
					<text class="read-count">
						阅读量：{{news.count}}
					</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			newsList: {
				type: Array,
				required: true,
			}
		},
		data() {
			return {
				
			};
		},
		methods: {
			handleClick(newsId) {
			
				this.$emit('clickNewsItem', newsId);
			}
		}
	}
</script>

<style lang="scss">
.news-list {
	.news-item {
		width: 100%;
		height: 200rpx;
		padding: 10rpx;
		display: flex;
		justify-content: space-around;
		align-items: center;
		margin: 10rpx 0;
		background-color: #ffffff;;
		image {
			height: 180rpx;
			width: 180rpx;
		}
		
		.main {
			width: 530rpx;
			height: 180rpx;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			
			.title {
				line-height: 42rpx;
				font-size: 36rpx;
				-webkit-line-clamp:2; 
				display: -webkit-box; 	
				-webkit-box-orient:vertical;				
				overflow:hidden; 		
				text-overflow: ellipsis;
			}
			
			.marker {
				font-size: 28rpx;
			}
		}
	}
}
</style>
