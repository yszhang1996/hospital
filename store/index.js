import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

let themeColor = "";

try{
	// 尝试获取本地是否存在lifeData变量，第一次启动APP时是不存在的
	themeColor = uni.getStorageSync('themeColor');
	console.log("vuex="+themeColor);
}catch(e){
	
}

const store = new Vuex.Store({
	state: {
		// 如果上面从本地获取的lifeData对象下有对应的属性，就赋值给state中对应的变量
		// 加上vuex_前缀，是防止变量名冲突，也让人一目了然
		vuex_themeColor: themeColor ? themeColor : '#27C393',
	},
	mutations: {
		SET_COLOR(state,colors){
			// 主题色
			console.log(colors);
			state.vuex_themeColor = colors
		},
	},
})

export default store
