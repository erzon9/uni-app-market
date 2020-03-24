<template>
	<view class="market">
		<goodsList :goodsList='goods'></goodsList>
		<view class="nomore" v-if="nomoreGoods">
			已经到底了
		</view>
	</view>
	
</template>

<script>
	import goodsList from '../../components/goods-list.vue';
	export default {
		components:{
			goodsList
		},
		onLoad() {
			this.getGoods();
		},
		onPullDownRefresh() {
			this.goods = [];
			this.pageIndex = 1;
			this.nomoreGoods = false;
			
			setTimeout(() => {
				this.getGoods(() => {
					uni.stopPullDownRefresh();
				});
			}, 1000);
		
		},
		onReachBottom() {
			if (!this.nomoreGoods) {
				this.getGoods();
			}
			
		},
		data() {
			return {
				pageIndex: 1,
				goods: [],
				nomoreGoods: false,
			}
		},
		methods: {
			async getGoods(callback) {
				let res = await this.$http({
					url: `/goods-${this.pageIndex}.json`
				});
				let list = res.data.list;
				if (list.length > 0) {
					this.goods = [...this.goods, ...res.data.list];
					this.pageIndex ++;
					callback && callback();
				} else {
					this.nomoreGoods =  true;
				}
				
			}
		}
	}
</script>

<style lang="scss">
	.market {
		background-color: #EEEEEE;
		
		.nomore {
			height: 50px;
			margin-top: 10rpx;
			line-height: 50px;
			font-size: 36rpx;
			letter-spacing: 10rpx;
			background-color: #FFFFFF;
			text-align: center;
		}
	}
</style>
