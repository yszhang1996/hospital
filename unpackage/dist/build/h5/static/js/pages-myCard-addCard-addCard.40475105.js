(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-myCard-addCard-addCard"],{"07e3":function(e,t,n){var i=n("24fb");t=i(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 文字尺寸 */\r\n/* 文字尺寸调整 在原尺寸上调大两个rpx */\r\n/* 文字尺寸 原28rpx */\r\n/* 文字尺寸 原26rpx */\r\n/* 文字尺寸 原24rpx */\r\n/* 文字尺寸 原22rpx */\r\n/* 文字尺寸 原20rpx */\r\n/* 文字尺寸 原30rpx */\r\n/* 文字尺寸 原32rpx */\r\n/* 文字尺寸 原34rpx */\r\n/* 文字尺寸 原36rpx */\r\n/* 文字尺寸 原38rpx */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.form[data-v-b13486ce]{width:90%;margin:0 auto}.extra-info[data-v-b13486ce]{width:90%;color:#7d7d7d;margin:%?30?% auto;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start;-webkit-box-align:start;-webkit-align-items:flex-start;align-items:flex-start}.extra-info uni-text[data-v-b13486ce]{margin:%?6?% 0}.extra-info .red[data-v-b13486ce]{color:#dd524d}.agreement[data-v-b13486ce]{width:90%;margin:%?20?% auto;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;color:#2b85e4}.bind[data-v-b13486ce]{width:80%}',""]),e.exports=t},1379:function(e,t,n){"use strict";n("a15b"),n("d81d"),n("a9e3"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i={name:"u-checkbox",props:{name:{type:[String,Number],default:""},shape:{type:String,default:""},value:{type:Boolean,default:!1},disabled:{type:[String,Boolean],default:""},labelDisabled:{type:[String,Boolean],default:""},activeColor:{type:String,default:""},iconSize:{type:[String,Number],default:""},labelSize:{type:[String,Number],default:""},size:{type:[String,Number],default:""}},data:function(){return{parentDisabled:!1,newParams:{}}},created:function(){this.parent=this.$u.$parent.call(this,"u-checkbox-group"),this.parent&&this.parent.children.push(this)},computed:{isDisabled:function(){return""!==this.disabled?this.disabled:!!this.parent&&this.parent.disabled},isLabelDisabled:function(){return""!==this.labelDisabled?this.labelDisabled:!!this.parent&&this.parent.labelDisabled},checkboxSize:function(){return this.size?this.size:this.parent?this.parent.size:34},checkboxIconSize:function(){return this.iconSize?this.iconSize:this.parent?this.parent.iconSize:20},elActiveColor:function(){return this.activeColor?this.activeColor:this.parent?this.parent.activeColor:"primary"},elShape:function(){return this.shape?this.shape:this.parent?this.parent.shape:"square"},iconStyle:function(){var e={};return this.elActiveColor&&this.value&&!this.isDisabled&&(e.borderColor=this.elActiveColor,e.backgroundColor=this.elActiveColor),e.width=this.$u.addUnit(this.checkboxSize),e.height=this.$u.addUnit(this.checkboxSize),e},iconColor:function(){return this.value?"#ffffff":"transparent"},iconClass:function(){var e=[];return e.push("u-checkbox__icon-wrap--"+this.elShape),1==this.value&&e.push("u-checkbox__icon-wrap--checked"),this.isDisabled&&e.push("u-checkbox__icon-wrap--disabled"),this.value&&this.isDisabled&&e.push("u-checkbox__icon-wrap--disabled--checked"),e.join(" ")},checkboxStyle:function(){var e={};return this.parent&&this.parent.width&&(e.width=this.parent.width,e.flex="0 0 ".concat(this.parent.width)),this.parent&&this.parent.wrap&&(e.width="100%",e.flex="0 0 100%"),e}},methods:{onClickLabel:function(){this.isLabelDisabled||this.isDisabled||this.setValue()},toggle:function(){this.isDisabled||this.setValue()},emitEvent:function(){var e=this;this.$emit("change",{value:!this.value,name:this.name}),setTimeout((function(){e.parent&&e.parent.emitEvent&&e.parent.emitEvent()}),80)},setValue:function(){var e=0;if(this.parent&&this.parent.children&&this.parent.children.map((function(t){t.value&&e++})),1==this.value)this.emitEvent(),this.$emit("input",!this.value);else{if(this.parent&&e>=this.parent.max)return this.$u.toast("最多可选".concat(this.parent.max,"项"));this.emitEvent(),this.$emit("input",!this.value)}}}};t.default=i},1766:function(e,t,n){"use strict";n.r(t);var i=n("1379"),r=n.n(i);for(var a in i)"default"!==a&&function(e){n.d(t,e,(function(){return i[e]}))}(a);t["default"]=r.a},"1ab9":function(e,t,n){"use strict";var i=n("7d88"),r=n.n(i);r.a},3211:function(e,t,n){"use strict";n.r(t);var i=n("763d"),r=n.n(i);for(var a in i)"default"!==a&&function(e){n.d(t,e,(function(){return i[e]}))}(a);t["default"]=r.a},6327:function(e,t,n){"use strict";n.r(t);var i=n("d520"),r=n("1766");for(var a in r)"default"!==a&&function(e){n.d(t,e,(function(){return r[e]}))}(a);n("7e0c");var o,c=n("f0c5"),s=Object(c["a"])(r["default"],i["b"],i["c"],!1,null,"e356a272",null,!1,i["a"],o);t["default"]=s.exports},"763d":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i={data:function(){return{name:"",idno:"",med_id:"",phone:"",read:!1}},methods:{submit:function(){var e=this;this.name&&this.idno&&this.phone&&this.read?this.$u.post("",{idno:this.idno,med_id:this.med_id,phone:this.phone,name:this.name},{code:"card.bind"}).then((function(t){console.log(t),uni.showToast({icon:"none",title:"绑定成功！"}),setTimeout((function(){e.common.toURL("/pages/myCard/myCard")}),1e3)})):uni.showToast({icon:"none",title:"请先完整的填写您的信息并同意《用户协议》"})}}};t.default=i},"7d88":function(e,t,n){var i=n("07e3");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var r=n("4f06").default;r("461d9b3d",i,!0,{sourceMap:!1,shadowMode:!1})},"7e0c":function(e,t,n){"use strict";var i=n("fd37"),r=n.n(i);r.a},ad3f:function(e,t,n){"use strict";n.r(t);var i=n("cacc"),r=n("3211");for(var a in r)"default"!==a&&function(e){n.d(t,e,(function(){return r[e]}))}(a);n("1ab9");var o,c=n("f0c5"),s=Object(c["a"])(r["default"],i["b"],i["c"],!1,null,"b13486ce",null,!1,i["a"],o);t["default"]=s.exports},bbc6:function(e,t,n){var i=n("24fb");t=i(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 文字尺寸 */\r\n/* 文字尺寸调整 在原尺寸上调大两个rpx */\r\n/* 文字尺寸 原28rpx */\r\n/* 文字尺寸 原26rpx */\r\n/* 文字尺寸 原24rpx */\r\n/* 文字尺寸 原22rpx */\r\n/* 文字尺寸 原20rpx */\r\n/* 文字尺寸 原30rpx */\r\n/* 文字尺寸 原32rpx */\r\n/* 文字尺寸 原34rpx */\r\n/* 文字尺寸 原36rpx */\r\n/* 文字尺寸 原38rpx */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.u-checkbox[data-v-e356a272]{display:-webkit-inline-box;display:-webkit-inline-flex;display:inline-flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;overflow:hidden;-webkit-user-select:none;user-select:none;line-height:1.8}.u-checkbox__icon-wrap[data-v-e356a272]{color:#606266;-webkit-box-flex:0;-webkit-flex:none;flex:none;display:-webkit-flex;\r\ndisplay:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\r\n-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-sizing:border-box;box-sizing:border-box;width:%?42?%;height:%?42?%;color:transparent;text-align:center;-webkit-transition-property:color,border-color,background-color;transition-property:color,border-color,background-color;font-size:20px;border:1px solid #c8c9cc;-webkit-transition-duration:.2s;transition-duration:.2s}.u-checkbox__icon-wrap--circle[data-v-e356a272]{-webkit-border-radius:100%;border-radius:100%}.u-checkbox__icon-wrap--square[data-v-e356a272]{-webkit-border-radius:%?6?%;border-radius:%?6?%}.u-checkbox__icon-wrap--checked[data-v-e356a272]{color:#fff;background-color:#2979ff;border-color:#2979ff}.u-checkbox__icon-wrap--disabled[data-v-e356a272]{background-color:#ebedf0;border-color:#c8c9cc}.u-checkbox__icon-wrap--disabled--checked[data-v-e356a272]{color:#c8c9cc!important}.u-checkbox__label[data-v-e356a272]{word-wrap:break-word;margin-left:%?10?%;margin-right:%?24?%;color:#606266;font-size:%?30?%}.u-checkbox__label--disabled[data-v-e356a272]{color:#c8c9cc}',""]),e.exports=t},cacc:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return i}));var i={uForm:n("5dac").default,uFormItem:n("16a9").default,uInput:n("02b5").default,uCheckbox:n("6327").default},r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",[n("v-uni-view",{staticClass:"form"},[n("u-form",{ref:"uForm"},[n("u-form-item",{attrs:{label:"","left-icon":"account"}},[n("u-input",{attrs:{placeholder:"请输入就诊人姓名"},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}})],1),n("u-form-item",{attrs:{label:"","left-icon":"coupon"}},[n("u-input",{attrs:{placeholder:"请输入【门诊ID号】或【住院号】(非必填)"},model:{value:e.med_id,callback:function(t){e.med_id=t},expression:"med_id"}})],1),n("u-form-item",{attrs:{label:"","left-icon":"order"}},[n("u-input",{attrs:{placeholder:"请输入身份证号"},model:{value:e.idno,callback:function(t){e.idno=t},expression:"idno"}})],1),n("u-form-item",{attrs:{label:"","left-icon":"phone-fill"}},[n("u-input",{attrs:{placeholder:"请输入您的手机号"},model:{value:e.phone,callback:function(t){e.phone=t},expression:"phone"}})],1)],1)],1),n("v-uni-view",{staticClass:"extra-info"},[n("v-uni-text",[e._v("温馨提示：")]),n("v-uni-text",[e._v("(1)【门诊患者】请使用医院办卡的信息，需确认"),n("v-uni-text",{staticClass:"red"},[e._v("姓名、“门诊ID号”(充值小票上的患者ID号)、手机号码")]),e._v("，信息一直获取验证码方可绑定。也可直接到挂号窗口咨询门诊ID号。")],1),n("v-uni-text",[e._v("(2)【住院患者】请根据"),n("v-uni-text",{staticClass:"red"},[e._v("姓名、住院号、手机号码")]),e._v("进行绑定，可以进行预交金充值、费用清单、价差检验报告查询！")],1),n("v-uni-text",[e._v("(3)如果出现信息不一致无法绑定时，请到一楼收费室窗口变更个人信息后再做绑定！")]),n("v-uni-text",[e._v("(4)一个微信号可以绑定五位用户信息。")])],1),n("v-uni-view",{staticClass:"agreement"},[n("u-checkbox",{model:{value:e.read,callback:function(t){e.read=t},expression:"read"}}),n("v-uni-text",[e._v("阅读并同意《用户协议》")])],1),n("v-uni-button",{staticClass:"bind",attrs:{type:"primary"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.submit.apply(void 0,arguments)}}},[e._v("立即绑卡")])],1)},a=[]},d520:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return i}));var i={uIcon:n("e3e9").default},r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"u-checkbox",style:[e.checkboxStyle]},[n("v-uni-view",{staticClass:"u-checkbox__icon-wrap",class:[e.iconClass],style:[e.iconStyle],on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.toggle.apply(void 0,arguments)}}},[n("u-icon",{staticClass:"u-checkbox__icon-wrap__icon",attrs:{name:"checkbox-mark",size:e.checkboxIconSize,color:e.iconColor}})],1),n("v-uni-view",{staticClass:"u-checkbox__label",style:{fontSize:e.$u.addUnit(e.labelSize)},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.onClickLabel.apply(void 0,arguments)}}},[e._t("default")],2)],1)},a=[]},fd37:function(e,t,n){var i=n("bbc6");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var r=n("4f06").default;r("6b6fb369",i,!0,{sourceMap:!1,shadowMode:!1})}}]);