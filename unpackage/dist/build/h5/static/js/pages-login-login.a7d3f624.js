(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-login-login"],{4416:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{}},methods:{login:function(t){console.log("得到账号:"+t.detail.value.nameValue+";得到密码:"+t.detail.value.passwordValue)},register:function(){console.log("前往注册页面")}}};e.default=i},5675:function(t,e,n){"use strict";var i,a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-form",{staticClass:"loginView",on:{submit:function(e){arguments[0]=e=t.$handleEvent(e),t.login.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"input-view"},[n("v-uni-view",{staticClass:"label-view"},[n("v-uni-text",{staticClass:"label"},[t._v("账号")])],1),n("v-uni-input",{staticClass:"input",attrs:{type:"text",placeholder:"请输入用户名",name:"nameValue"}})],1),n("v-uni-view",{staticClass:"input-view"},[n("v-uni-view",{staticClass:"label-view"},[n("v-uni-text",{staticClass:"label"},[t._v("密码")])],1),n("v-uni-input",{staticClass:"input",attrs:{type:"password",placeholder:"请输入密码",name:"passwordValue"}})],1),n("v-uni-view",{staticClass:"button-view"},[n("v-uni-button",{staticClass:"login",attrs:{type:"default","hover-class":"hover",formType:"submit"}},[t._v("登录")]),n("v-uni-button",{staticClass:"register",attrs:{type:"default","hover-class":"hover"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.register.apply(void 0,arguments)}}},[t._v("免费注册")])],1)],1)},s=[];n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return s})),n.d(e,"a",(function(){return i}))},8620:function(t,e,n){"use strict";n.r(e);var i=n("5675"),a=n("dccc");for(var s in a)"default"!==s&&function(t){n.d(e,t,(function(){return a[t]}))}(s);var u,l=n("f0c5"),o=Object(l["a"])(a["default"],i["b"],i["c"],!1,null,"c6b9fb2e",null,!1,i["a"],u);e["default"]=o.exports},dccc:function(t,e,n){"use strict";n.r(e);var i=n("4416"),a=n.n(i);for(var s in i)"default"!==s&&function(t){n.d(e,t,(function(){return i[t]}))}(s);e["default"]=a.a}}]);