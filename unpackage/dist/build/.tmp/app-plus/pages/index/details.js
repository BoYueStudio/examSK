(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/details"],{"1c81":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n("5bce"));function a(e){return e&&e.__esModule?e:{default:e}}var r="/pages/index/details";function o(e){for(var t=[],n=0,i=e.length;n<i;n++)switch(e[n]){case"weixin":t.push({text:"分享到微信好友",id:"weixin",sort:0}),t.push({text:"分享到微信朋友圈",id:"weixin",sort:1});break;default:break}return t.sort(function(e,t){return e.sort-t.sort}),t}var s={data:function(){return{title:"list-triplex-row",banner:{},htmlNodes:[]}},onLoad:function(t){var n=t.detailDate;try{this.banner=JSON.parse(decodeURIComponent(n))}catch(i){this.banner=JSON.parse(n)}e.setNavigationBarTitle({title:this.banner.title}),this.getDetail()},onShareAppMessage:function(){return{title:this.banner.title,path:r+"?detailDate="+JSON.stringify(this.banner)}},onNavigationBarButtonTap:function(t){var n=this,i=t.index;if(0===i){e.getProvider({service:"share",success:function(t){if(t.provider&&t.provider.length&&~t.provider.indexOf("weixin")){var i=o(t.provider);e.showActionSheet({itemList:i.map(function(e){return e.text}),success:function(t){var i=t.tapIndex;e.share({provider:"weixin",type:0,title:n.banner.title,scene:0===i?"WXSceneSession":"WXSenceTimeline",href:"https://uniapp.dcloud.io/h5"+r+"?detailDate="+JSON.stringify(n.banner),imageUrl:"https://img-cdn-qiniu.dcloud.net.cn/uniapp/app/share-logo@3.png"})}})}else e.showToast({title:"未检测到可用的微信分享服务"})},fail:function(t){e.showToast({title:"获取分享服务失败"})}})}},methods:{getDetail:function(){var t=this,n="https://bird.ioliu.cn/v1/?url=";e.request({url:n+"https://news-at.zhihu.com/api/4/news/"+this.banner.id,success:function(e){if(200==e.statusCode){var n=e.data.body.replace(/\\/g,"").replace(/<img/g,'<img style="display:none;"');t.htmlNodes=(0,i.default)(n)}},fail:function(){console.log("fail"," at pages\\index\\details.vue:136")}})}}};t.default=s}).call(this,n("6e42")["default"])},3897:function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement;e._self._c},a=[];n.d(t,"a",function(){return i}),n.d(t,"b",function(){return a})},"4b4c":function(e,t,n){},"4f9f":function(e,t,n){"use strict";n.r(t);var i=n("1c81"),a=n.n(i);for(var r in i)"default"!==r&&function(e){n.d(t,e,function(){return i[e]})}(r);t["default"]=a.a},ae17:function(e,t,n){"use strict";n.r(t);var i=n("3897"),a=n("4f9f");for(var r in a)"default"!==r&&function(e){n.d(t,e,function(){return a[e]})}(r);n("ae2f");var o=n("2877"),s=Object(o["a"])(a["default"],i["a"],i["b"],!1,null,null,null);t["default"]=s.exports},ae2f:function(e,t,n){"use strict";var i=n("4b4c"),a=n.n(i);a.a}},[["6e62","common/runtime","common/vendor"]]]);