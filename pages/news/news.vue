<template>
	<view class="news">
		<news-list :newsList='newsList' @clickNewsItem='handleClickNewsItem'></news-list>
	</view>
</template>

<script>
	import newsList from '../../components/news-list.vue'; 
	export default {
		components:{
			'news-list': newsList,
		},
		async onLoad() {
			await this.getNewsList();
		},
		data() {
			return {
				newsList: [],
			}
		},
		methods: {
			async getNewsList() {
				let res = await this.$http({
					url: '/news.json'
				});
				
				this.newsList = res.data.list;
			},
			handleClickNewsItem(id) {
				uni.navigateTo({
					url: `/pages/news_content/news_content?id=${id}`
				});
			}
		}
	}
</script>

<style lang="scss">
.news {
	background-color: #fafafa;
}
</style>
