class Utils {

	constructor() {
		this.baseUrl = "http://127.0.0.1:8080/accompanying-clinic/api"
	}

	//获取用户信息
	getUserInfo() {
		//调用登录的api
		uni.login({
			success: res => {
				this.request({
					url: '/user/login',
					data: {
						"loginId": "1",
						"loginType": "1",
						"identifyType": "1",
						"identifyValue": "123456"
					},
					method: "POST",
					success: res => {
						console.log(res, 'res')
					},
					fail: res => {
						console.log(res, 'fail')
					}
				})
			}
		})
	}

	request(option = {
		showLoading: false
	}) {
		//判断url是否存在
		if (!option.url) {
			return false
		}
		if (option.showLoading) {
			this.showLoading()
		}
		uni.request({
			url: this.baseUrl + option.url,
			data: option.data ? option.data : {},
			header: option.header ? option.header : {},
			method: option.method ? option.method : "GET",
			success: (response) => {
				uni.hideLoading()
				//后端返回的数据异常（接口调用成功，但是数据异常）
				if (response.data.success) {
					//将成功的结果返回
					if (option.success && typeof option.success == 'function') {
						option.success(response)
					}
				} else {

					//将失败的结果返回
					if (option.fail && typeof option.fail == 'function') {
						option.fail(response)
					}

				}
			},
			fail: response => {
				uni.hideLoading()
				console.log(response)
			}
		})
	}
	//创建加载的loading效果
	showLoading() {
		const isShowLoading = uni.getStorageSync('isShowLoading')
		if (isShowLoading) {
			uni.hideLoading()
			uni.setStorageSync('isShowLoading', false)
		}
		uni.showLoading({
			title: "加载中...",
			complete: function() {
				uni.setStorageSync('isShowLoading', true)
			},
			fail: () => {
				uni.setStorageSync('isShowLoading', false)
			}
		})
	}
}
export default new Utils()