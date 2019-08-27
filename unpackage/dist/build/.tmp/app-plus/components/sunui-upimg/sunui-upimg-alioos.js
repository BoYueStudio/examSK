(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/sunui-upimg/sunui-upimg-alioos"],{"02a0":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(n("a34a"));function r(e){return e&&e.__esModule?e:{default:e}}function u(e,t,n,i,r,u,a){try{var s=e[u](a),o=s.value}catch(c){return void n(c)}s.done?t(o):Promise.resolve(o).then(i,r)}function a(e){return function(){var t=this,n=arguments;return new Promise(function(i,r){var a=e.apply(t,n);function s(e){u(a,i,r,s,o,"next",e)}function o(e){u(a,i,r,s,o,"throw",e)}s(void 0)})}}var s=n("742e"),o=n("9c0a");n("5405"),n("1855");var c=n("0831"),l={data:function(){return{upload_after_list:[],upload_picture_list:[]}},name:"sunui-upimg",props:{upImgConfig:{type:Object}},methods:{chooseImage:function(e){g(this,parseInt(e),this.upImgConfig)},uploadimage:function(e){_(this,e)},deleteImg:function(e){h(e,this)},previewImg:function(e){v(e,this)},previewImgs:function(e){y(e,this)}}};t.default=l;var p=function(){var e=new Date;e.setHours(e.getHours()+s.timeout);var t=e.toISOString(),n={expiration:t,conditions:[["content-length-range",0,5242880]]},i=o.encode(JSON.stringify(n));return i},f=function(e,t){var n=e.upImgConfig.aliConfig.AccessKeySecret||s.AccessKeySecret,i=c.HMAC(c.SHA1,t,n,{asBytes:!0}),r=c.util.bytesToBase64(i);return r},d=function(){var t=a(i.default.mark(function t(n,r,u,s){var o,c,l,d,_,h,g;return i.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return o={aliyunFileKey:"".concat(r.aliConfig.oosDirectory,"/")+(new Date).getTime()+Math.floor(150*Math.random())+".png",aliyunServerURL:r.aliConfig.url,accessid:r.aliConfig.OSSAccessKeyId,url:r.aliConfig.url||"",oos:r.aliConfig.oos||!1},c=o.aliyunFileKey?o.aliyunFileKey:"",l=o.aliyunServerURL?o.aliyunServerURL:"",d=o.accessid?o.accessid:"",_=p(),h=f(n,_),t.next=8,e.uploadFile({url:o.url,filePath:u[s]["path"],name:"file",formData:{key:c,policy:_,OSSAccessKeyId:d,signature:h,success_action_status:"200"},success:function(){var t=a(i.default.mark(function t(r){var a;return i.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(200!=r.statusCode){t.next=10;break}return a=l+c,console.log("%c 阿里云上传(成功返回地址):".concat(a),"color:#1AAD19"," at components\\sunui-upimg\\sunui-upimg-alioos.vue:132"),u[s]["path_server"]=a,n.upload_picture_list=u,t.next=7,n.$emit("onUpImg",n.upload_picture_list);case 7:e.hideLoading(),t.next=15;break;case 10:e.showLoading({title:"上传失败!"}),setTimeout(function(){e.hideLoading()},2e3),n.upload_picture_list=[],n.upload_after_list=[],console.warn("阿里云上传图片失败,返回状态码:",r.statusCode," at components\\sunui-upimg\\sunui-upimg-alioos.vue:146");case 15:case"end":return t.stop()}},t,this)}));function r(e){return t.apply(this,arguments)}return r}(),fail:function(){var t=a(i.default.mark(function t(n){return i.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:e.showLoading({title:"上传失败!"}),setTimeout(function(){e.hideLoading()},2e3),console.log(n," at components\\sunui-upimg\\sunui-upimg-alioos.vue:156");case 3:case"end":return t.stop()}},t,this)}));function n(e){return t.apply(this,arguments)}return n}()});case 8:g=t.sent,g.onProgressUpdate(function(){var e=a(i.default.mark(function e(t){var r,a;return i.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:r=0,a=n.upload_picture_list.length;case 1:if(!(r<a)){e.next=8;break}return e.next=4,t.progress;case 4:u[r]["upload_percent"]=e.sent;case 5:r++,e.next=1;break;case 8:n.upload_picture_list=u;case 9:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}());case 10:case"end":return t.stop()}},t,this)}));return function(e,n,i,r){return t.apply(this,arguments)}}(),_=function(){var e=a(i.default.mark(function e(t,n){var r,u;return i.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:r=0,u=t.upload_picture_list.length;case 1:if(!(r<u)){e.next=8;break}if(0!=t.upload_picture_list[r]["upload_percent"]){e.next=5;break}return e.next=5,d(t,n,t.upload_picture_list,r);case 5:r++,e.next=1;break;case 8:case"end":return e.stop()}},e,this)}));return function(t,n){return e.apply(this,arguments)}}(),h=function(){var e=a(i.default.mark(function e(t,n){return i.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,n.$emit("onImgDel",{url:t.currentTarget.dataset.url,index:t.currentTarget.dataset.index});case 2:n.upload_picture_list.splice(t.currentTarget.dataset.index,1),n.upload_after_list.splice(t.currentTarget.dataset.index,1),n.upload_picture_list=n.upload_picture_list;case 5:case"end":return e.stop()}},e,this)}));return function(t,n){return e.apply(this,arguments)}}(),g=function(t,n,r){var u={aliConfig:{AccessKeySecret:r.aliConfig.AccessKeySecret,OSSAccessKeyId:r.aliConfig.OSSAccessKeyId,oosDirectory:r.aliConfig.oosDirectory,url:r.aliConfig.url},count:n,tips:r.tips||!1,notli:r.notli,sourceType:r.sourceType,sizeType:r.sizeType};e.chooseImage({count:u.notli?u.count=9:0==t.upload_after_list.length?u.count:u.count-t.upload_after_list.length,sizeType:""==u.sizeType||void 0==u.sizeType||1==u.sizeType?["compressed"]:["original"],sourceType:""==u.sourceType||void 0==u.sourceType?["album","camera"]:"camera"==u.sourceType?["camera"]:"album"==u.sourceType?["album"]:["album","camera"],success:function(){var e=a(i.default.mark(function e(n){var r,a;return i.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:for(r=0,a=n.tempFiles.length;r<a;r++)n.tempFiles[r]["upload_percent"]=0,n.tempFiles[r]["path_server"]="",t.upload_picture_list.push(n.tempFiles[r]),t.upload_picture_list.length>u.count&&(t.upload_picture_list=t.upload_picture_list.slice(0,u.count));return e.next=3,m(t,n,u);case 3:case"end":return e.stop()}},e,this)}));function n(t){return e.apply(this,arguments)}return n}()})},m=function(e,t,n){!n.notli&&n.count==e.upload_picture_list.length&&_(e,n),n.notli&&9==n.count&&_(e,n),e.upload_after_list=e.upload_after_list.concat(t.tempFilePaths).slice(0,n.count),e.upload_picture_list=e.upload_picture_list.slice(0,n.count)},v=function(t,n){e.previewImage({current:n.upload_after_list[t.currentTarget.dataset.index],urls:n.upload_after_list})},y=function(){var t=a(i.default.mark(function t(n,r){var u,a,s;return i.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:for(u=[],a=0,s=r.upload_picture_list.length;a<s;a++)u.push(r.upload_picture_list[a].path);e.previewImage({current:u[n.currentTarget.dataset.idx],urls:u});case 3:case"end":return t.stop()}},t,this)}));return function(e,n){return t.apply(this,arguments)}}()}).call(this,n("6e42")["default"])},"4e13":function(e,t,n){"use strict";var i=n("9cd6"),r=n.n(i);r.a},"5a6c":function(e,t,n){"use strict";n.r(t);var i=n("02a0"),r=n.n(i);for(var u in i)"default"!==u&&function(e){n.d(t,e,function(){return i[e]})}(u);t["default"]=r.a},"60e7":function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement;e._self._c},r=[];n.d(t,"a",function(){return i}),n.d(t,"b",function(){return r})},"9cd6":function(e,t,n){},bf55:function(e,t,n){"use strict";n.r(t);var i=n("60e7"),r=n("5a6c");for(var u in r)"default"!==u&&function(e){n.d(t,e,function(){return r[e]})}(u);n("4e13");var a=n("2877"),s=Object(a["a"])(r["default"],i["a"],i["b"],!1,null,"4afaeb88",null);t["default"]=s.exports}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/sunui-upimg/sunui-upimg-alioos-create-component',
    {
        'components/sunui-upimg/sunui-upimg-alioos-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('6e42')['createComponent'](__webpack_require__("bf55"))
        })
    },
    [['components/sunui-upimg/sunui-upimg-alioos-create-component']]
]);                
