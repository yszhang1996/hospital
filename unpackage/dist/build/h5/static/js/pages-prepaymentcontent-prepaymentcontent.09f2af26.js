(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-prepaymentcontent-prepaymentcontent"],{"0ee4":function(e,t,n){"use strict";n.r(t);var i=n("a570"),a=n.n(i);for(var r in i)"default"!==r&&function(e){n.d(t,e,(function(){return i[e]}))}(r);t["default"]=a.a},"154c":function(e,t,n){var i=n("d29a");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var a=n("4f06").default;a("c145c4f4",i,!0,{sourceMap:!1,shadowMode:!1})},"7ad9":function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return i}));var i={uInput:n("02b5").default,uButton:n("850e").default,uSelect:n("336c").default,uModal:n("2044").default},a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"recharge"},[n("v-uni-view",{staticClass:"userinfo"},[n("v-uni-view",{staticClass:"userinfo-list"},[n("v-uni-text",{staticClass:"userinfo-list-left"},[e._v(e._s(e.currentUser.name))]),n("v-uni-text",{staticClass:"userinfo-list-right"},[e._v(e._s(e.currentUser.cardno))])],1),n("v-uni-view",{staticClass:"userinfo-list"},[n("v-uni-text",{staticClass:"userinfo-list-left"},[e._v("余额")]),n("v-uni-text",{staticClass:"userinfo-list-right",staticStyle:{color:"#647aac"}},[e._v("¥"+e._s(e.currentUser.amount))])],1)],1),n("v-uni-view",{staticClass:"money"},[n("v-uni-view",[n("v-uni-text",[e._v("缴纳金额")])],1),n("v-uni-view",{staticClass:"money-number"},[n("v-uni-text",{staticClass:"money-number-left"},[e._v("¥")]),n("u-input",{staticClass:"money-number-right",attrs:{placeholder:"请输入您需要缴纳的金额","placeholder-style":"font-size: 32rpx;","custom-style":{"font-size":"40rpx"},type:"number"},model:{value:e.money,callback:function(t){e.money=t},expression:"money"}})],1),n("v-uni-view",{staticClass:"money-extra"},[n("v-uni-text",{staticClass:"info"},[e._v("或选择缴纳金额")]),n("v-uni-view",{staticClass:"select"},[n("v-uni-view",{staticClass:"select-list",class:{selected:100===e.money},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.money=100}}},[n("v-uni-text",[e._v("100元")])],1),n("v-uni-view",{staticClass:"select-list",class:{selected:300===e.money},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.money=300}}},[n("v-uni-text",[e._v("300元")])],1),n("v-uni-view",{staticClass:"select-list",class:{selected:500===e.money},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.money=500}}},[n("v-uni-text",[e._v("500元")])],1)],1),n("v-uni-text",{staticClass:"info"},[e._v("温馨提示：就诊卡充值金额不能超过100000")])],1),n("u-button",{attrs:{type:"primary"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.pay()}}},[e._v("立即充值")])],1),n("u-select",{attrs:{list:e.list},on:{confirm:function(t){arguments[0]=t=e.$handleEvent(t),e.confirm.apply(void 0,arguments)}},model:{value:e.show,callback:function(t){e.show=t},expression:"show"}}),n("u-modal",{attrs:{content:e.content},on:{confirm:function(t){arguments[0]=t=e.$handleEvent(t),e.confirmModal.apply(void 0,arguments)}},model:{value:e.showModal,callback:function(t){e.showModal=t},expression:"showModal"}})],1)},r=[]},a570:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i={data:function(){return{show:!1,showModal:!1,content:"支付成功",list:[{label:"张三",value:1},{label:"李四",value:2},{label:"王五",value:3}],myCard:null,currentUser:null,money:null,jweixin:null}},onLoad:function(e){e&&(this.currentUser=e)},onReady:function(){this.jweixin=n("ef73");var e=["onMenuShareAppMessage","onMenuShareTimeline","hideOptionMenu","showOptionMenu","chooseWXPay"],t={debug:!1,appId:"wx55cacb92f2202f90",jsApiList:e};this.jweixin.config(t),this.jweixin.ready((function(){}))},methods:{confirm:function(e){console.log(e);var t=e[0].value;this.currentUser=this.myCard[t]},pay:function(){var e=this;this.money>1e5&&uni.showToast({icon:"none",title:"每次充值金额不得大于100000"}),this.$u.post("",{ammount:this.money,cardno:this.currentUser.cardno,name:this.currentUser.name,idno:this.currentUser.idno,med_id:this.currentUser.medid,type:1},{code:"order.create"}).then((function(t){e.jweixin.chooseWXPay({appId:t.data.addId,timestamp:t.data.timeStamp,nonceStr:t.data.nonceStr,package:t.data.packageValue,signType:t.data.signType,paySign:t.data.paySign,success:function(e){"chooseWXPay:ok"==e.errMsg&&uni.redirectTo({url:"/pages/paySuccess/paySuccess"})}.bind(e)})}))},confirmModal:function(){this.money=null}}};t.default=i},ad33:function(e,t,n){"use strict";n.r(t);var i=n("7ad9"),a=n("0ee4");for(var r in a)"default"!==r&&function(e){n.d(t,e,(function(){return a[e]}))}(r);n("c2f6");var s,o=n("f0c5"),c=Object(o["a"])(a["default"],i["b"],i["c"],!1,null,"782bef3c",null,!1,i["a"],s);t["default"]=c.exports},c2f6:function(e,t,n){"use strict";var i=n("154c"),a=n.n(i);a.a},d29a:function(e,t,n){var i=n("24fb");t=i(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 文字尺寸 */\r\n/* 文字尺寸调整 在原尺寸上调大两个rpx */\r\n/* 文字尺寸 原28rpx */\r\n/* 文字尺寸 原26rpx */\r\n/* 文字尺寸 原24rpx */\r\n/* 文字尺寸 原22rpx */\r\n/* 文字尺寸 原20rpx */\r\n/* 文字尺寸 原30rpx */\r\n/* 文字尺寸 原32rpx */\r\n/* 文字尺寸 原34rpx */\r\n/* 文字尺寸 原36rpx */\r\n/* 文字尺寸 原38rpx */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.recharge[data-v-782bef3c]{background-color:#f5f5f5;height:100vh}.recharge .title[data-v-782bef3c]{width:100vw;padding:%?20?% %?40?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center;background-color:#fff;font-size:%?32?%}.recharge .title .username[data-v-782bef3c]{-webkit-box-flex:1;-webkit-flex:1;flex:1}.recharge .userinfo[data-v-782bef3c]{display:-webkit-box;display:-webkit-flex;display:flex;background-color:#fff;margin-top:%?20?%;padding:%?40?%;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.recharge .userinfo-list[data-v-782bef3c]{display:-webkit-box;display:-webkit-flex;display:flex;margin-bottom:%?10?%}.recharge .userinfo-list-left[data-v-782bef3c]{width:%?150?%}.recharge .money[data-v-782bef3c]{margin-top:%?20?%;padding:%?40?%;background-color:#fff}.recharge .money-number[data-v-782bef3c]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin-top:%?20?%;border-bottom:1px solid #ccc}.recharge .money-number-left[data-v-782bef3c]{font-size:%?50?%;margin-right:%?10?%}.recharge .money-number-right[data-v-782bef3c]{height:%?60?%}.recharge .money .money-extra[data-v-782bef3c]{margin-top:%?10?%;margin-bottom:%?50?%}.recharge .money .money-extra .select[data-v-782bef3c]{width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-justify-content:space-around;justify-content:space-around;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin:%?20?% 0}.recharge .money .money-extra .select-list[data-v-782bef3c]{width:calc((100% - %?60?%) / 3);border:1px solid #ccc;font-size:%?36?%;height:%?80?%;-webkit-border-radius:%?10?%;border-radius:%?10?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.recharge .money .money-extra .select .selected[data-v-782bef3c]{border:1px solid #3e86d8;color:#3e86d8}.info[data-v-782bef3c]{color:#7d7d7d;font-size:%?26?%}',""]),e.exports=t}}]);