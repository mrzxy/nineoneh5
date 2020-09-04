<template>
    <view>
        <view class="uni-padding-wrap uni-common-mt">
            <view class="videoBox">
                <video id="video" autoplay v-if="show" :src="url" controls></video>
				<view class="desc">
					<view>{{title}} {{duration}}</view>
					
				</view>
            </view>
			<view class="btns">
				<button type="default"  @tap="goToAuthor(author)">{{author}} 其他作品</button>		
				<button type="primary"  @tap="play">play</button>
				<button type="default"  @tap="back">back</button>
			</view>
        </view>
    </view>
</template>

<script>
	export default {
		data() {
			return {
				url: "",
				show: false,
				author: "",
				title: "",
				duration:""
			}
		},
		onReady: function (res) {
			this.videoContext = uni.createVideoContext('video')
		},
		onLoad(e) {
			let that = this
			let id = decodeURIComponent(e.data)
			uni.request({
				url: this.$serverUrl + '/video-url?id=' + id,
				success: (ret) => {
					console.log(ret)
					if (ret == 'error') {
						uni.showToast({
							title: "error",
							icon: "none",
						})
					} else {
						// that.url = "http://img.sfzykj.com//2012312/1599208332773438.mp4"
						that.show = true
						that.url = ret.data.url
		
						that.author = ret.data.author
						that.duration = ret.data.duration
						that.title = ret.data.title
						
						setTimeout(() => {
							that.play()
						}, 200)

					}
				}
			});
		},
		methods: {
			play() {
				this.videoContext.play()
			},
			back() {
				uni.navigateBack()
			},
			goToAuthor(author) {
				uni.navigateTo({
					url: "/pages/hot/search?author="+author,		
				})
			
			}
		}
	}
</script>

<style>
	.videoBox {
		flex-direction: column;
		display: felx;
	}
	#video {
		width: 750rpx;
		height: 500rpx;
	}
	.desc {
		display: flex;
		flex-direction: column;
	}
	.btns {
		width: 750rpx;
		position:absolute;
		bottom:0;
		display: flex;
		flex-direction: column;
	}
	.btns button {
		margin-top: 20rpx;
	}
</style>
