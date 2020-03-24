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
	</view>
</template>

<script>
	export default {
		data() {
			return {
				swipers: []
			}
		},
		onLoad() {
			this.getSwipers();
		},
		methods: {
			// 获取轮播图数据
			async getSwipers() {
				let res = await this.$http({
					url: '/lunbo.json',
				});
				this.swipers = res.data.list;
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
	}
</style>
