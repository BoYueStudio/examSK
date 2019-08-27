<template>
	<view class="body">
		<view class="post-left">
			<image class="post_header" :src="banner.header"></image>
		</view>
		<view class="post_right content">
			<text class="post-username">{{banner.username}}</text>
			<view id="paragraph" class="paragraph">{{banner.title}}</view>
						
			 <view class="thumbnails">
				<view class="my-gallery">
					<image class="gallery_img" lazy-load mode="aspectFill" :src="banner.cover" ></image>
				</view>
			</view> 
			

		</view>
		<br><br>
		<form>
			<textarea id="ta"  v-model="advice" placeholder="请写一些评语吧"></textarea>
			<button formType="submit" @click="setText()">提交</button>
			<button form-type="reset" @click="setReset()" style="background-color: #F0AD4E;">重新评价</button>
		</form>
		

				
		
	</view>
</template>

<script>
	import chatInput from '../../components/im-chat/chatinput.vue'; //input框
	import postData from '../../common/index/index.post.data.js';//朋友圈数据
	
	export default{
		data() {
			return {
				banner: {},
				advice:"",
				loadingAdvice:{
					
				}
			}
		},
		onLoad(event) {
			// TODO 后面把参数名替换成 payload
			const payload = event.detailDate;
			// 目前在某些平台参数会被主动 decode，暂时这样处理。
			try {
				this.banner = JSON.parse(decodeURIComponent(payload));
			} catch (error) {
				this.banner = JSON.parse(payload);
			}
			uni.setNavigationBarTitle({
				title: this.banner.username
			});
			
			this.getLoadingAdvice();
			
			
			
		},
		methods:{
			setReset(){
				uni.request({
					
						
						    url: "http://wwboyue.xicp.io/demo/advice/reset",
						    data: {
								advice_id:this.banner.id,
								advice:this.advice
							},
							method: 'POST',
							dataType:'json',
						    success: (res) => {
								if(res.data.code!=200){
									
								}else{
									// console.log(res.data.data);
									// this.advice=res.data.data.advice;
									uni.showToast({
										title:"重新评论成功"
									});
									uni.reLaunch({
										url:"recommend"
									});
									
						
									
									// uni.navigateBack();
								}
						    }
						
					
				})
			},
			
			getLoadingAdvice(){
				uni.request({
					
					    url: "http://wwboyue.xicp.io/demo/advice/again",
					    data: {
							advice_id:this.banner.id,
							// advice:this.advice
						},
						method: 'POST',
						dataType:'json',
					    success: (res) => {
							if(res.data.code!=200){
								
							}else{
								console.log(res.data.data);
								this.advice=res.data.data.advice;
								
					
								
								// uni.navigateBack();
							}
					    }
					
				})
			},
			setText:function(){
				
				console.log("advice:"+this.advice);
				console.log(this.banner.id);
					uni.request({
				    url: "http://wwboyue.xicp.io/demo/advice/add",
				    data: {
						advice_id:this.banner.id,
						advice:this.advice
					},
					method: 'POST',
					dataType:'json',
				    success: (res) => {
						if(res.data.code!=200){
							uni.showToast({title:res.data.msg,icon:'none'});
						}else{
							console.log(res.data.data);
							uni.showToast({
								title:"评论成功！"
							})

							
							// uni.navigateBack();
						}
				    }
				});
			}
			
		}
		
	}
</script>

<style>
	@import url("../../common/index/index.css");
	.body{
		position: relative;
	}
	.content{
		position: relative;
		top: -120upx;
		left: 130upx;
	}
	form{
		position:absolute ;
	}
	textarea{
		/* border: 1px solid #0A98D5; */
		width: 80%;
		height: 230rpx;
		font-size: 24px;
		
	}
	button{
		width: 30%;
		background-color: #007AFF;
	}
</style>
