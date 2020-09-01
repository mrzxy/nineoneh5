<template>
    <view>
        <view class="uni-padding-wrap uni-common-mt">
            <view>
                <video v-if="show" id="myVideo" :src="url" controls></video>
		
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
			}
		},
		onLoad(e) {
			let that = this
			let url = decodeURIComponent(e.data)
			uni.request({
				url: this.$serverUrl + '/video-url?url=' + url,
				success: (ret) => {
					if (ret == 'error') {
						uni.showToast({
							title: "error",
							icon: "none",
						})
					} else {
						
						that.show = true
						that.url = ret.data
		
					}
				}
			});
		}
	}
</script>

<style>
	
</style>
