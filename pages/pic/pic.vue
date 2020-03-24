<template>
	<view class="pic">
		<scroll-view class="left" scroll-y>
			<view 
				@click="handleClick(index)"
				:class="index === activeIndex ? 'active': ''" 
				v-for="(cate, index) in cates" 
				:key='cate.id'>{{cate.title}}</view>
			
		</scroll-view>
		
		<scroll-view scroll-y="true" class="right">
			<view class="img-item" v-for="(pic, index) in pics" :key="pic.id" @click="handleClickImg(index)">
				<image :src="pic.img" mode="aspectFit"></image>
				<view>{{pic.title}}</view>
			</view>
			<view class="nopic" v-if="nopic">没有图片</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		onLoad() {
			this.getPicCate();
			this.handleClick(0);
		},
		data() {
			return {
				cates: [],
				activeIndex: 0,
				pics: [],
				nopic: false,
			}
		},
		methods: {
			async getPicCate() {
				let res = await this.$http({
					url: '/pic-cate.json',
				});
				
				this.cates = res.data.list;
			},
			async getPic(index) {
				let res = await this.$http({
					url: `/pics-${index}.json`,
				});
				
				this.pics = res.data.list;
			} 
			,
			handleClick(index) {
				this.activeIndex = index;
				if (index === 8 || index === 9) {
					this.getPic(index);
					this.nopic = false;
				} else {
					this.pics = [];
					this.nopic = true;
				}
			},
			handleClickImg(index) {
				let picUrls = this.pics.map(item => item.img);
				uni.previewImage({
					urls: picUrls,
					current: index,
					indicator: 'number',
					loop:true,
				})
			}
		}
	}
</script>

<style lang="scss">
page {
	height: 100%;
	
	.pic {
		height: 100%;
		display: flex;
		
		.left {
			height: 100%;
			width: 200rpx;
			flex-grow: 0;
			
			view {
				height: 60px;
				line-height: 60px;
				text-align: center;
				color: #333333;
				font-size: 32rpx;
				box-sizing: border-box;
				border-right: 1px solid #EEEEEE;
				border-top: 1px solid #EEEEEE;
				
				&.active {
					color: #FFFFFF;
					background-color: #b50e03;
				}
			}
		}

		.right {
			flex-grow: 1;
			padding: 10rpx;
			
			.img-item {
				margin: 10rpx 0;
				padding: 10rpx 0;
				background-color: #EEEEEE;
				border-radius: 6rpx;
				
				image {
					width: 100%;
					height: 460rpx;
				}
				view {
					height: 40rpx;
					line-height: 40rpx;
					font-size: 32rpx;
					text-align: center;
				}
			}
			
			
			
		}
	}

}
</style>
