<template>
	
	<view>
		<meta name="referrer" content="no-referrer" />
		<view class="banner" @click="goDetail(banner)">
			<image class="banner-img" :src="banner.image"></image>
			<view class="banner-title">{{banner.title }}</view>
		</view>
		<view class="uni-list">
			<view class="uni-list-cell" hover-class="uni-list-cell-hover" v-for="(value, key) in listData" :key="key" @click="goDetail(value)">
				<view class="uni-media-list">
					<image class="uni-media-list-logo" :src="value.images[0]"></image>
					<view class="uni-media-list-body">
						<view class="uni-media-list-text-top">{{ value.title }}</view>
						<view class="uni-media-list-text-bottom">
							<text>{{ value.id }}</text>
							<text>{{newdate}}</text>
						</view>
					</view>
				</view>
			</view>
		</view>
		
		<view class="uni-list">
			<view class="uni-list-cell" hover-class="uni-list-cell-hover" v-for="(value, key) in listData2" :key="key" @click="goDetail(value)">
				<view class="uni-media-list">
					<image class="uni-media-list-logo" :src="value.image"></image>
					<view class="uni-media-list-body">
						<view class="uni-media-list-text-top">{{ value.title }}</view>
						<view class="uni-media-list-text-bottom">
							<text>{{ value.id }}</text>
							<text>{{ newdate }}</text>
						</view>
					</view>
				</view>
			</view>
		</view>
		<uni-load-more :status="status" :content-text="contentText" />
	</view>
</template>

<script>

import uniLoadMore from '@/components/uni-load-more/uni-load-more.vue';
var dateUtils = require('../../common/util.js').dateUtils;

export default {
	components: {
		uniLoadMore
	},
	data() {
		return {
			banner:{},
			listData: [],
			listData2:[],
			last_id: '',
			reload: false,
			status: 'more',
			newdate:"",
			contentText: {
				contentdown: '上拉加载更多',
				contentrefresh: '加载中',
				contentnomore: '没有更多'
			}
		};
	},
	onLoad() {
		this.getList();
		this.getMyDate();
	},
	onPullDownRefresh() {
		this.reload = true;
		this.last_id = '';
		this.getList();
	},
	onReachBottom() {
		this.status = 'more';
	},
	methods: {
		getMyDate() {
			var datetest=new Date();
			this.newdate=datetest.toLocaleString().split(" ")[0];
		},
		getList() {
const API_PROXY = 'https://bird.ioliu.cn/v1/?url='
var that=this;
			// this.$axios.get(API_PROXY+"https://news-at.zhihu.com/api/4/news/latest")
			// // this.$axios.get("http://localhost:8080/demo/userlog/query")
			// 	.then(function (res) {
   //                   console.log(res.data);
   //                   that.listData=res.data.stories;
			// 		 that.listData2=res.data.top_stories;
			// 		 
			// 		 that.banner = {
			// 		 	image: res.data.top_stories[0].image,
			// 		 	id: res.data.top_stories[0].id,				 	
			// 		 	title: res.data.top_stories[0].title
			// 		 };
			// 		 console.log(banner);
			// 		 
   //                  })
   //              .catch(function (err) {
   //                     console.error(err);
   //                  })
   
			uni.request({
				url: API_PROXY+"https://news-at.zhihu.com/api/4/news/latest",
				method:"GET",
				success: res => {
					console.log(res);
					that.listData=res.data.stories;
					that.listData2=res.data.top_stories;			 
					that.banner = {
						image: res.data.top_stories[0].image,
						id: res.data.top_stories[0].id,				 	
						title: res.data.top_stories[0].title
					 };
					// console.log(banner);
										 
				},
				fail: (data, code) => {
					console.log('fail' + JSON.stringify(data));
				}
			});

// this.$http.get("http://news-at.zhihu.com/api/4/news/latest", {
//     params: {},
//     
// }).then((res) => {
//     console.log(res.data); 
// })






 

			
			
			},
		goDetail: function(e) {
			
			var detail = {
				cover: e.image,
				id: e.id,
				title: e.title,
				published_at: new Date().toLocaleString().split(" ")[0]
			};
			if(detail.cover==null){
				detail = {
					cover: e.images[0],
					id: e.id,
					title: e.title,
					published_at: new Date().toLocaleString().split(" ")[0]
				};
			}
			uni.navigateTo({
				url: 'details?detailDate=' + encodeURIComponent(JSON.stringify(detail))
			});
		},
		setTime: function(items) {},
		
	}
};
</script>


<style>
.banner {
	height: 360upx;
	overflow: hidden;
	position: relative;
	background-color: #ccc;
}

.banner-img {
	width: 100%;
	height: 360upx;
}

.banner-title {
	max-height: 84upx;
	overflow: hidden;
	position: absolute;
	left: 30upx;
	bottom: 30upx;
	width: 90%;
	font-size: 32upx;
	font-weight: 400;
	line-height: 42upx;
	color: white;
	z-index: 11;
}

.uni-media-list-logo {
	width: 180upx;
	height: 140upx;
}

.uni-media-list-body {
	height: auto;
	justify-content: space-around;
}

.uni-media-list-text-top {
	height: 74upx;
	font-size: 28upx;
	overflow: hidden;
}

.uni-media-list-text-bottom {
	display: flex;
	flex-direction: row;
	justify-content: space-between;
}
</style>
