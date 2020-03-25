<template>
	<view class="goods-list">
		<view class="goods-item" v-for="goods of goodsList" :key="goods.id" @click="handleClick(goods.id)">
			<image class="img" :src="goods.img" mode="aspectFit"></image>
			<view class="price">
				<text>￥{{goods.price}}</text><text>￥{{goods.old_price}}</text>
			</view>
			<view class="name">
				{{goods.title}}
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			goodsList: {
				type: Array,
				required: true,
			}
		},
		methods: {
			handleClick(id) {
				this.$emit('clickGoodsItem', id);
			}
		}
	}
</script>

<style lang="scss">
	.goods-list {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		padding: 0 6rpx;
		.goods-item {
			width: 365rpx;
			box-sizing: border-box;
			background-color: #FFFFFF;
			padding: 20rpx 0;
			margin-top: 10rpx;
			
			.img {
				width: 340rpx;
				height: 340rpx;
			}
			
			.price {
				margin: 10rpx 0;
				padding: 0 10px;
				text{
					
					&:first-child {
						font-size: 32rpx;
						color: #b50e03;
					}
					
					&:nth-child(2) {
						font-size: 28rpx;
						color: #C8C7CC;
						margin-left: 10rpx;
						text-decoration: line-through;
					}
				}
			}
		
			.name {
				font-size: 36rpx;
				line-height: 40rpx;
				height: 80rpx;
				overflow : hidden;
				text-overflow: ellipsis;
				display: -webkit-box;
				-webkit-line-clamp: 2;
				-webkit-box-orient: vertical;
				padding: 0 10px;
			}
		}
	}
	
</style>
