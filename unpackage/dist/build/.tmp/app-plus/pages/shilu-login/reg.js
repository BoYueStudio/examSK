(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/shilu-login/reg"],{4013:function(t,n,o){},5796:function(t,n,o){"use strict";o.r(n);var e=o("f5c5"),i=o.n(e);for(var s in e)"default"!==s&&function(t){o.d(n,t,function(){return e[t]})}(s);n["default"]=i.a},b014:function(t,n,o){"use strict";var e=o("4013"),i=o.n(e);i.a},de8c:function(t,n,o){"use strict";o.r(n);var e=o("ebed"),i=o("5796");for(var s in i)"default"!==s&&function(t){o.d(n,t,function(){return i[t]})}(s);o("b014");var a=o("2877"),u=Object(a["a"])(i["default"],e["a"],e["b"],!1,null,null,null);n["default"]=u.exports},ebed:function(t,n,o){"use strict";var e=function(){var t=this,n=t.$createElement;t._self._c},i=[];o.d(n,"a",function(){return e}),o.d(n,"b",function(){return i})},f5c5:function(t,n,o){"use strict";(function(t){var o;Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={onLoad:function(){this},onUnload:function(){clearInterval(o),this.second=0},data:function(){return{phoneno:"",password:"",code:"",invitation:"",xieyi:!0,showPassword:!1,second:0}},computed:{},methods:{display:function(){this.showPassword=!this.showPassword},xieyitong:function(){this.xieyi=!this.xieyi},bindLogin:function(){0!=this.xieyi?this.password.length<6?t.showToast({icon:"none",title:"密码长度不够六位"}):t.request({url:"http://wwboyue.xicp.io/demo/userlog/reg",data:{name:this.phoneno,password:this.password},method:"POST",dataType:"json",success:function(n){200!=n.data.code?t.showToast({title:n.data.msg,icon:"none"}):(t.showToast({title:n.data.msg}),setTimeout(function(){t.showToast({title:"正返回登录界面"}),t.navigateBack()},1500))}}):t.showToast({icon:"none",title:"请先阅读《软件用户协议》"})}}};n.default=e}).call(this,o("6e42")["default"])}},[["9023","common/runtime","common/vendor"]]]);