(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-center-center"],{"50ae":function(t,i,s){"use strict";s.r(i);var a=s("77c6"),n=s.n(a);for(var e in a)"default"!==e&&function(t){s.d(i,t,(function(){return a[t]}))}(e);i["default"]=n.a},"77c6":function(t,i,s){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a={data:function(){return{login:!1,avatarUrl:"../../static/logo.png",uerInfo:{}}},methods:{goLogin:function(){this.login||uni.navigateTo({url:"../login/login"})},goAbout:function(){uni.navigateTo({url:"/platforms/h5/about/about"})}}};i.default=a},a801:function(t,i,s){"use strict";var a,n=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("v-uni-view",{staticClass:"center"},[s("v-uni-view",{staticClass:"logo",attrs:{"hover-class":t.login?"":"logo-hover"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.goLogin.apply(void 0,arguments)}}},[s("v-uni-image",{staticClass:"logo-img",attrs:{src:t.login?t.uerInfo.avatarUrl:t.avatarUrl}}),s("v-uni-view",{staticClass:"logo-title"},[s("v-uni-text",{staticClass:"uer-name"},[t._v("Hi，"+t._s(t.login?t.uerInfo.name:"您未登录"))]),t.login?t._e():s("v-uni-text",{staticClass:"go-login navigat-arrow"},[t._v("")])],1)],1),s("v-uni-view",{staticClass:"center-list"},[s("v-uni-view",{staticClass:"center-list-item border-bottom"},[s("v-uni-text",{staticClass:"list-icon"},[t._v("")]),s("v-uni-text",{staticClass:"list-text"},[t._v("收藏图片")]),s("v-uni-text",{staticClass:"navigat-arrow"},[t._v("")])],1),s("v-uni-view",{staticClass:"center-list-item"},[s("v-uni-text",{staticClass:"list-icon"},[t._v("")]),s("v-uni-text",{staticClass:"list-text"},[t._v("收藏图集")]),s("v-uni-text",{staticClass:"navigat-arrow"},[t._v("")])],1)],1),s("v-uni-view",{staticClass:"center-list"},[s("v-uni-view",{staticClass:"center-list-item border-bottom"},[s("v-uni-text",{staticClass:"list-icon"},[t._v("")]),s("v-uni-text",{staticClass:"list-text"},[t._v("管理图片")]),s("v-uni-text",{staticClass:"navigat-arrow"},[t._v("")])],1),s("v-uni-view",{staticClass:"center-list-item"},[s("v-uni-text",{staticClass:"list-icon"},[t._v("")]),s("v-uni-text",{staticClass:"list-text"},[t._v("上传图片")]),s("v-uni-text",{staticClass:"navigat-arrow"},[t._v("")])],1)],1),s("v-uni-view",{staticClass:"center-list"},[s("v-uni-view",{staticClass:"center-list-item border-bottom",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.goAbout.apply(void 0,arguments)}}},[s("v-uni-text",{staticClass:"list-icon"},[t._v("")]),s("v-uni-text",{staticClass:"list-text"},[t._v("关于")]),s("v-uni-text",{staticClass:"navigat-arrow"},[t._v("")])],1),s("v-uni-view",{staticClass:"center-list-item"},[s("v-uni-text",{staticClass:"list-icon"},[t._v("")]),s("v-uni-text",{staticClass:"list-text"},[t._v("帐号管理")]),s("v-uni-text",{staticClass:"navigat-arrow"},[t._v("")])],1)],1)],1)},e=[];s.d(i,"b",(function(){return n})),s.d(i,"c",(function(){return e})),s.d(i,"a",(function(){return a}))},cf17:function(t,i,s){"use strict";s.r(i);var a=s("a801"),n=s("50ae");for(var e in n)"default"!==e&&function(t){s.d(i,t,(function(){return n[t]}))}(e);var l,v=s("f0c5"),o=Object(v["a"])(n["default"],a["b"],a["c"],!1,null,"3e137399",null,!1,a["a"],l);i["default"]=o.exports}}]);