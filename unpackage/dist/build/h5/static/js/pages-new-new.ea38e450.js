(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-new-new"],{"573d":function(e,t,i){"use strict";i.r(t);var n=i("e9b1"),s=i("9899");for(var a in s)"default"!==a&&function(e){i.d(t,e,(function(){return s[e]}))}(a);var r,o=i("f0c5"),c=Object(o["a"])(s["default"],n["b"],n["c"],!1,null,"6858b865",null,!1,n["a"],r);t["default"]=c.exports},9899:function(e,t,i){"use strict";i.r(t);var n=i("e330"),s=i.n(n);for(var a in n)"default"!==a&&function(e){i.d(t,e,(function(){return n[e]}))}(a);t["default"]=s.a},e330:function(e,t,i){"use strict";i("99af"),i("d81d"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={data:function(){return{refreshing:!1,providerList:[],list:[],fetchPageNum:1}},onLoad:function(){var e=this;this.getData(),uni.getProvider({service:"share",success:function(t){for(var i=[],n=0;n<t.provider.length;n++)switch(t.provider[n]){case"weixin":i.push({name:"分享到微信好友",id:"weixin"}),i.push({name:"分享到微信朋友圈",id:"weixin",type:"WXSenceTimeline"});break;case"qq":i.push({name:"分享到QQ",id:"qq"});break;default:break}e.providerList=i},fail:function(e){console.log("获取登录通道失败",e)}})},onReachBottom:function(){console.log("滑动到页面底部"),this.getData()},onPullDownRefresh:function(){console.log("下拉刷新"),this.refreshing=!0,this.getData()},methods:{getData:function(){var e=this;uni.request({url:this.$serverUrl+"/api/picture/posts.php?page="+(this.refreshing?1:this.fetchPageNum)+"&per_page=5",success:function(t){if(console.log("data",t),200!==t.statusCode)console.log("失败!");else{if(e.refreshing&&t.data[0].id===e.list[0].id)return uni.showToast({title:"已经最新",icon:"none"}),e.refreshing=!1,void uni.stopPullDownRefresh();e.refreshing?(e.refreshing=!1,uni.stopPullDownRefresh(),e.list=t.data,e.fetchPageNum=2):(e.list=e.list.concat(t.data),e.fetchPageNum+=1)}}})},goDetail:function(e){uni.navigateTo({url:"../detail/detail?data="+encodeURIComponent(JSON.stringify(e))})},share:function(e){var t=this;if(0!==this.providerList.length){var i=this.providerList.map((function(e){return e.name}));uni.showActionSheet({itemList:i,success:function(i){uni.share({provider:t.providerList[i.tapIndex].id,scene:t.providerList[i.tapIndex].type&&"WXSenceTimeline"===t.providerList[i.tapIndex].type?"WXSenceTimeline":"WXSceneSession",type:0,title:"uni-app模版",summary:e.title,imageUrl:e.img_src,href:"https://uniapp.dcloud.io",success:function(e){console.log("success:"+JSON.stringify(e))},fail:function(e){uni.showModal({content:e.errMsg,showCancel:!1})}})}})}else uni.showModal({title:"当前环境无分享渠道!",showCancel:!1})}}};t.default=n},e9b1:function(e,t,i){"use strict";var n,s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"index"},[e._l(e.list,(function(t,n){return[i("v-uni-view",{key:n+"_0",staticClass:"card",on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.goDetail(t)}}},[i("v-uni-image",{staticClass:"card-img",attrs:{src:t.img_src,mode:"aspectFill"}}),i("v-uni-text",{staticClass:"card-num-view"},[e._v(e._s(t.img_num)+"P")]),i("v-uni-view",{staticClass:"card-bottm row"},[i("v-uni-view",{staticClass:"car-title-view row"},[i("v-uni-text",{staticClass:"card-title"},[e._v(e._s(t.title))])],1),i("v-uni-view",{staticClass:"card-share-view",on:{click:function(i){i.stopPropagation(),arguments[0]=i=e.$handleEvent(i),e.share(t)}}})],1)],1)]})),i("v-uni-text",{staticClass:"loadMore"},[e._v("加载中...")])],2)},a=[];i.d(t,"b",(function(){return s})),i.d(t,"c",(function(){return a})),i.d(t,"a",(function(){return n}))}}]);