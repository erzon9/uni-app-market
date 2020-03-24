const BASE_URL = "http://localhost:8888";

/**
 * 对 uni.request 的封装
 * options 的内容；
 * url: 
 * data: 
 * method:
 * 
 * */
export const myRequest = function(options) {
	return new Promise((resolve, reject) => {
		uni.request({
			url: BASE_URL + options.url,
			method: options.method || 'GET',
			data: options.data || {},
			success: (res) => {
				if (parseInt(res.data.status) !== 0) {
					return uni.showToast({
						title: '请求发生错误！' + res.data.status,
					});
				}
				resolve(res);
			},
			fail: (err) => {
				uni.showToast({
					title:'请求发生错误！',
				});
				reject(err);
			}
		})
	})
}