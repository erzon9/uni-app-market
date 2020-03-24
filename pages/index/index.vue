<template>
	<view class="home">
		<swiper
			indicator-dots='true'
			indicator-active-color="#ffffff"
			autoplay="true"
			circular="true"
		>
			<swiper-item v-for="item in swipers" :key='item.url'>
				<image :src="item.url" mode="aspectFill"></image>
			</swiper-item>
		</swiper>
		
		<view class="nav">
			
			<view class="nav-item" v-for="nav in navList" :key='nav.id' @click="handleClickNav(nav.path)">
				<view :class="nav.font"></view>
				<text>{{nav.title}}</text>
			</view>
			
		</view>
		
		<view class="hot-goods">
			<view class="title">热门推荐</view>
			
			<goods-list :goodsList='goods'></goods-list>
			
			<view class="end">
				没有更多数据了...
			</view>
		</view>
	</view>
</template>

<script>
	import goodsList from '../../components/goods-list.vue';
	export default {
		components: {
			'goods-list': goodsList,
		},
		data() {
			return {
				swipers: [],
				goods: [],
				navList: [
					{
						id: 0,
						title: '二总超市',
						font: 'iconfont icon-chaoshi',
						path: '/pages/market/market'
					}, 
					{
						id: 1,
						title: '联系我们',
						font: 'iconfont icon-lianxiwomen',
						path: '/pages/us/us'
					}, 
					{
						id: 2,
						title: '社区图片',
						font: 'iconfont icon-tupian',
						path: '/pages/pic/pic'
					}, 
					{
						id: 3,
						title: '学习视频',
						font: 'iconfont icon-wei-',
						path: '/pages/vadio/vadio'
					}, 
				]
			}
		},
		onLoad() {
			this.getSwipers();
			this.getGoods();
		},
		methods: {
			// 获取轮播图数据
			async getSwipers() {
				let res = await this.$http({
					url: '/lunbo.json',
				});
				this.swipers = res.data.list;
			},
			
			async getGoods() {
				let res = await this.$http({
					url: '/goods-1.json'
				});
				
				this.goods = res.data.list;
			},
			
			handleClickNav(url) {
				uni.navigateTo({
					url,
				})
			}
		}
	}
</script>

<style lang="scss">
	.home {
		swiper {
			width: 750rpx;
			height: 380rpx;
			
			image {
				height: 100%;
				width: 100%;
			}
		}
		
		.nav {
			display: flex;
			padding: 30rpx 0;
			.nav-item {
				width: 25%;
				text-align: center;
				
				.iconfont {
					color: #FFFFFF;
					font-size: 80rpx;
					height: 120rpx;
					width: 120rpx;
					margin: 0 auto;
					line-height: 120rpx;
					border-radius: 50%;
					background-color: #b50e03;
					margin-bottom: 20rpx;
				}
				
				text {
					font-size: 30rpx;
				}
			}
		}
		
		.hot-goods {
			background-color: #C8C7CC;
			overflow: hidden;
			.title, .end {
				color: #b50e03;
				height: 50px;
				line-height: 50px;
				text-align: center;
				letter-spacing: 10px;
				font-size: 17px;
				margin: 1px 0;
				background-color: #FFFFFF;
			}
			
		}
	}
</style>
