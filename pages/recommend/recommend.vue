<template>
	<view class="body">
		<div class="contents">
            <ul >
                <li v-for="(value,key) in listData" :key="key"  @click="goDetail(value)">
				<image class="imgs" :src="value.thumbnail"></image><br>
				<view class="titles">{{value.username}}</view>
				
				</li>

            </ul>

        </div>
	</view>
</template>

<script>

	export default {
		data() {
			return {
				listData:[],
				uerInfo: {}
			}
		},
		onLoad() {
			this.getList();
		},
		methods: {
			goDetail(e){
				var detail = {
					cover: e.thumbnail,
					id:e.uid,
					username:e.username,
					header:e.header,
					title: e.text,
					published_at: new Date().toLocaleString().split(" ")[0]
				};
				uni.navigateTo({
					url: 'my?detailDate=' + encodeURIComponent(JSON.stringify(detail))
				});
			},
			getList(){
				const API_PROXY = 'https://bird.ioliu.cn/v1/?url='
				var that=this;
				uni.request({
					url: API_PROXY+"https://www.apiopen.top/satinGodApi?type=1&page=1",
					method:"GET",
					success: res => {
						console.log(res);
						that.listData=res.data.data;
					
											 
					},
					fail: (data, code) => {
						console.log('fail' + JSON.stringify(data));
					}
				});
			}
			
			
		}
	}
</script>
<style>
	
	.body{
    width: 100%;
    margin: 0px auto;
	}
	
	.body .contents ul{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between ;
    align-items: center;
	margin: 10rpx 10rpx;
	/* background-color: #007AFF; */
	}
	
   .body .contents ul >li{
    border: 1px solid #ccc;
    width: 330rpx;
    height: 430rpx;
    list-style: none;
    margin-bottom: 20rpx;
    text-align: center;
	align-items: center;
    line-height: 430rpx;
	border-radius: 20rpx;
	/* background-color: #09BB07; */
	position: relative;
	}
	.imgs{
		margin: 0rpx;
		width: 330rpx;
		height: 430rpx;
		border-radius:20rpx ;
	}
	.titles{
		z-index: 100;
		position: absolute;
		top: 20rpx;
		left: 20rpx;
		font-family: "微软雅黑";
		font-size: 17px;
		color: #436EEE;
		font-weight: 600;

	}
	
	
</style>