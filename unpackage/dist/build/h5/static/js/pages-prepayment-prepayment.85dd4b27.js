(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-prepayment-prepayment"],{"01f6":function(e,t,n){"use strict";n("99af"),n("4160"),n("159b"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={data:function(){return{show:!1,username:null,currentUser:null,myCard:null,hospital:"XXXX医院",medid:"",form:{},list:[{label:"张三",value:1},{label:"李四",value:2},{label:"王五",value:3}]}},onLoad:function(){var e=this;this.myCard=uni.getStorageSync("myCard"),console.log(this.myCard),this.myCard.length>0?(this.list=[],this.myCard.forEach((function(t,n){e.list.push({label:t.name,value:n})})),this.currentUser=this.myCard[0]):(alert("暂未绑定健康卡，请先绑定"),uni.redirectTo({url:"/pages/myCard/addCard/addCard"}))},methods:{selectUser:function(){this.show=!0},confirm:function(e){console.log(e);var t=e[0].value;this.currentUser=this.myCard[t]},submit:function(){var e=this;this.$u.post("",{cardno:this.currentUser.cardno,idno:this.currentUser.idno,name:this.currentUser.name,med_id:this.medid},{code:"card.medid"}).then((function(t){console.log(t),e.common.toURL("/pages/prepaymentcontent/prepaymentcontent?name=".concat(e.currentUser.name,"&medid=").concat(e.medid,"&cardno=").concat(e.currentUser.cardno,"&idno=").concat(e.currentUser.idno,"&amount=").concat(e.currentUser.amount))}))}}};t.default=a},"081d":function(e,t,n){"use strict";n.r(t);var a=n("a023"),i=n.n(a);for(var r in a)"default"!==r&&function(e){n.d(t,e,(function(){return a[e]}))}(r);t["default"]=i.a},"301c":function(e,t,n){var a=n("24fb");t=a(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 文字尺寸 */\r\n/* 文字尺寸调整 在原尺寸上调大两个rpx */\r\n/* 文字尺寸 原28rpx */\r\n/* 文字尺寸 原26rpx */\r\n/* 文字尺寸 原24rpx */\r\n/* 文字尺寸 原22rpx */\r\n/* 文字尺寸 原20rpx */\r\n/* 文字尺寸 原30rpx */\r\n/* 文字尺寸 原32rpx */\r\n/* 文字尺寸 原34rpx */\r\n/* 文字尺寸 原36rpx */\r\n/* 文字尺寸 原38rpx */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.prepayment[data-v-02fc8c4e]{background-color:#f5f5f5;height:100vh}.prepayment .content[data-v-02fc8c4e]{background-color:#fff;padding:0 %?30?%}.prepayment .content .select-icon[data-v-02fc8c4e]{width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.prepayment .extra[data-v-02fc8c4e]{margin:%?30?%}.prepayment .extra .info[data-v-02fc8c4e]{color:#7d7d7d;font-size:%?26?%}.prepayment .submit[data-v-02fc8c4e]{margin:0 %?30?%}',""]),e.exports=t},"336c":function(e,t,n){"use strict";n.r(t);var a=n("e384"),i=n("081d");for(var r in i)"default"!==r&&function(e){n.d(t,e,(function(){return i[e]}))}(r);n("cde8");var l,o=n("f0c5"),s=Object(o["a"])(i["default"],a["b"],a["c"],!1,null,"60cbc1d1",null,!1,a["a"],l);t["default"]=s.exports},3539:function(e,t,n){"use strict";var a=n("d8dd"),i=n.n(a);i.a},4070:function(e,t,n){var a=n("24fb");t=a(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 文字尺寸 */\r\n/* 文字尺寸调整 在原尺寸上调大两个rpx */\r\n/* 文字尺寸 原28rpx */\r\n/* 文字尺寸 原26rpx */\r\n/* 文字尺寸 原24rpx */\r\n/* 文字尺寸 原22rpx */\r\n/* 文字尺寸 原20rpx */\r\n/* 文字尺寸 原30rpx */\r\n/* 文字尺寸 原32rpx */\r\n/* 文字尺寸 原34rpx */\r\n/* 文字尺寸 原36rpx */\r\n/* 文字尺寸 原38rpx */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.u-select__action[data-v-60cbc1d1]{position:relative;line-height:%?70?%;height:%?70?%}.u-select__action__icon[data-v-60cbc1d1]{position:absolute;right:%?20?%;top:50%;-webkit-transition:-webkit-transform .4s;transition:-webkit-transform .4s;transition:transform .4s;transition:transform .4s,-webkit-transform .4s;-webkit-transform:translateY(-50%);transform:translateY(-50%);z-index:1}.u-select__action__icon--reverse[data-v-60cbc1d1]{-webkit-transform:rotate(-180deg) translateY(50%);transform:rotate(-180deg) translateY(50%)}.u-select__hader__title[data-v-60cbc1d1]{color:#606266}.u-select--border[data-v-60cbc1d1]{-webkit-border-radius:%?6?%;border-radius:%?6?%;-webkit-border-radius:4px;border-radius:4px;border:1px solid #dcdfe6}.u-select__header[data-v-60cbc1d1]{\r\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\r\n-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;height:%?80?%;padding:0 %?40?%}.u-select__body[data-v-60cbc1d1]{width:100%;height:%?500?%;overflow:hidden;background-color:#fff}.u-select__body__picker-view[data-v-60cbc1d1]{height:100%;-webkit-box-sizing:border-box;box-sizing:border-box}.u-select__body__picker-view__item[data-v-60cbc1d1]{\r\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\r\n-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;font-size:%?32?%;color:#303133;padding:0 %?8?%}',""]),e.exports=t},5781:function(e,t,n){"use strict";n.r(t);var a=n("83b7"),i=n("e2a9");for(var r in i)"default"!==r&&function(e){n.d(t,e,(function(){return i[e]}))}(r);n("3539");var l,o=n("f0c5"),s=Object(o["a"])(i["default"],a["b"],a["c"],!1,null,"02fc8c4e",null,!1,a["a"],l);t["default"]=s.exports},6061:function(e,t,n){var a=n("4070");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var i=n("4f06").default;i("37862a2e",a,!0,{sourceMap:!1,shadowMode:!1})},"83b7":function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return a}));var a={uForm:n("5dac").default,uFormItem:n("16a9").default,uIcon:n("e3e9").default,uInput:n("02b5").default,uSelect:n("336c").default},i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"prepayment"},[n("v-uni-view",{staticClass:"content"},[n("u-form",{ref:"uForm",attrs:{model:e.form}},[n("u-form-item",{attrs:{"label-position":"left","label-width":"150",label:"就诊人"}},[n("v-uni-view",{staticClass:"select-icon",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.selectUser.apply(void 0,arguments)}}},[n("v-uni-text",[e._v(e._s(e.currentUser.name)+"("+e._s(e.common.formatNo(e.currentUser.idno))+")")]),n("u-icon",{attrs:{name:"arrow-right",color:"#cccccc",size:"28"}})],1)],1),n("u-form-item",{attrs:{"label-position":"left","label-width":"150",label:"姓名"}},[n("v-uni-text",[e._v(e._s(e.currentUser.name))])],1),n("u-form-item",{attrs:{"label-position":"left","label-width":"150",label:"住院号"}},[n("u-input",{attrs:{placeholder:"住院号"},model:{value:e.medid,callback:function(t){e.medid=t},expression:"medid"}})],1)],1)],1),n("v-uni-view",{staticClass:"extra"},[n("v-uni-text",{staticClass:"info"},[e._v("填写需要缴纳预交金的患者住院号")])],1),n("v-uni-button",{staticClass:"submit",attrs:{type:"primary"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.submit.apply(void 0,arguments)}}},[e._v("下一步")]),n("u-select",{attrs:{list:e.list},on:{confirm:function(t){arguments[0]=t=e.$handleEvent(t),e.confirm.apply(void 0,arguments)}},model:{value:e.show,callback:function(t){e.show=t},expression:"show"}})],1)},r=[]},a023:function(e,t,n){"use strict";n("cb29"),n("d81d"),n("a9e3"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={props:{list:{type:Array,default:function(){return[]}},border:{type:Boolean,default:!0},value:{type:Boolean,default:!1},cancelColor:{type:String,default:"#606266"},confirmColor:{type:String,default:"#2979ff"},zIndex:{type:[String,Number],default:0},safeAreaInsetBottom:{type:Boolean,default:!1},maskCloseAble:{type:Boolean,default:!0},defaultValue:{type:Array,default:function(){return[0]}},mode:{type:String,default:"single-column"},valueName:{type:String,default:"value"},labelName:{type:String,default:"label"},childName:{type:String,default:"children"},title:{type:String,default:""},cancelText:{type:String,default:"取消"},confirmText:{type:String,default:"确认"}},data:function(){return{defaultSelector:[0],columnData:[],selectValue:[],lastSelectIndex:[],columnNum:0,moving:!1}},watch:{value:{immediate:!0,handler:function(e){var t=this;e&&setTimeout((function(){return t.init()}),10)}}},computed:{uZIndex:function(){return this.zIndex?this.zIndex:this.$u.zIndex.popup}},methods:{pickstart:function(){},pickend:function(){},init:function(){this.setColumnNum(),this.setDefaultSelector(),this.setColumnData(),this.setSelectValue()},setDefaultSelector:function(){this.defaultSelector=this.defaultValue.length==this.columnNum?this.defaultValue:Array(this.columnNum).fill(0),this.lastSelectIndex=this.$u.deepClone(this.defaultSelector)},setColumnNum:function(){if("single-column"==this.mode)this.columnNum=1;else if("mutil-column"==this.mode)this.columnNum=this.list.length;else if("mutil-column-auto"==this.mode){var e=1,t=this.list;while(t[0][this.childName])t=t[0]?t[0][this.childName]:{},e++;this.columnNum=e}},setColumnData:function(){var e=[];if(this.selectValue=[],"mutil-column-auto"==this.mode)for(var t=this.list[this.defaultSelector.length?this.defaultSelector[0]:0],n=0;n<this.columnNum;n++)0==n?(e[n]=this.list,t=t[this.childName]):(e[n]=t,t=t[this.defaultSelector[n]][this.childName]);else"single-column"==this.mode?e[0]=this.list:e=this.list;this.columnData=e},setSelectValue:function(){for(var e=null,t=0;t<this.columnNum;t++){e=this.columnData[t][this.defaultSelector[t]];var n={value:e?e[this.valueName]:null,label:e?e[this.labelName]:null};e&&e.extra&&(n.extra=e.extra),this.selectValue.push(n)}},columnChange:function(e){var t=this,n=null,a=e.detail.value;if(this.selectValue=[],"mutil-column-auto"==this.mode){this.lastSelectIndex.map((function(e,t){e!=a[t]&&(n=t)})),this.defaultSelector=a;for(var i=n+1;i<this.columnNum;i++)this.columnData[i]=this.columnData[i-1][i-1==n?a[n]:0][this.childName],this.defaultSelector[i]=0;a.map((function(e,n){var i=t.columnData[n][a[n]],r={value:i?i[t.valueName]:null,label:i?i[t.labelName]:null};i&&void 0!==i.extra&&(r.extra=i.extra),t.selectValue.push(r)})),this.lastSelectIndex=a}else if("single-column"==this.mode){var r=this.columnData[0][a[0]],l={value:r?r[this.valueName]:null,label:r?r[this.labelName]:null};r&&void 0!==r.extra&&(l.extra=r.extra),this.selectValue.push(l)}else"mutil-column"==this.mode&&a.map((function(e,n){var i=t.columnData[n][a[n]],r={value:i?i[t.valueName]:null,label:i?i[t.labelName]:null};i&&void 0!==i.extra&&(r.extra=i.extra),t.selectValue.push(r)}))},close:function(){this.$emit("input",!1)},getResult:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;e&&this.$emit(e,this.selectValue),this.close()},selectHandler:function(){this.$emit("click")}}};t.default=a},cb29:function(e,t,n){var a=n("23e7"),i=n("81d5"),r=n("44d2");a({target:"Array",proto:!0},{fill:i}),r("fill")},cde8:function(e,t,n){"use strict";var a=n("6061"),i=n.n(a);i.a},d8dd:function(e,t,n){var a=n("301c");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var i=n("4f06").default;i("7f4ac8d8",a,!0,{sourceMap:!1,shadowMode:!1})},e2a9:function(e,t,n){"use strict";n.r(t);var a=n("01f6"),i=n.n(a);for(var r in a)"default"!==r&&function(e){n.d(t,e,(function(){return a[e]}))}(r);t["default"]=i.a},e384:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return a}));var a={uPopup:n("9f6c").default},i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"u-select"},[n("u-popup",{attrs:{maskCloseAble:e.maskCloseAble,mode:"bottom",popup:!1,length:"auto",safeAreaInsetBottom:e.safeAreaInsetBottom,"z-index":e.uZIndex},on:{close:function(t){arguments[0]=t=e.$handleEvent(t),e.close.apply(void 0,arguments)}},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}},[n("v-uni-view",{staticClass:"u-select"},[n("v-uni-view",{staticClass:"u-select__header",on:{touchmove:function(t){t.stopPropagation(),t.preventDefault(),arguments[0]=t=e.$handleEvent(t)}}},[n("v-uni-view",{staticClass:"u-select__header__cancel u-select__header__btn",style:{color:e.cancelColor},attrs:{"hover-class":"u-hover-class","hover-stay-time":150},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.getResult("cancel")}}},[e._v(e._s(e.cancelText))]),n("v-uni-view",{staticClass:"u-select__header__title"},[e._v(e._s(e.title))]),n("v-uni-view",{staticClass:"u-select__header__confirm u-select__header__btn",style:{color:e.moving?e.cancelColor:e.confirmColor},attrs:{"hover-class":"u-hover-class","hover-stay-time":150},on:{touchmove:function(t){t.stopPropagation(),arguments[0]=t=e.$handleEvent(t)},click:function(t){t.stopPropagation(),arguments[0]=t=e.$handleEvent(t),e.getResult("confirm")}}},[e._v(e._s(e.confirmText))])],1),n("v-uni-view",{staticClass:"u-select__body"},[n("v-uni-picker-view",{staticClass:"u-select__body__picker-view",attrs:{value:e.defaultSelector},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.columnChange.apply(void 0,arguments)},pickstart:function(t){arguments[0]=t=e.$handleEvent(t),e.pickstart.apply(void 0,arguments)},pickend:function(t){arguments[0]=t=e.$handleEvent(t),e.pickend.apply(void 0,arguments)}}},e._l(e.columnData,(function(t,a){return n("v-uni-picker-view-column",{key:a},e._l(t,(function(t,a){return n("v-uni-view",{key:a,staticClass:"u-select__body__picker-view__item"},[n("v-uni-view",{staticClass:"u-line-1"},[e._v(e._s(t[e.labelName]))])],1)})),1)})),1)],1)],1)],1)],1)},r=[]}}]);