export default {
  toURL(URL, switchTab) {
  	console.log('common执行跳转，跳转到：' + URL);
  	if (switchTab) {
  		uni.switchTab({
  			url: URL
  		});
  	} else {
  		uni.navigateTo({
  			url: URL
  		});
  	}
  
  },
  // 格式化时间
  formatTime(date) {
    const time = new Date(date);
    return `${time.getFullYear()}-${
      time.getMonth() + 1 > 10 ? time.getMonth() : `0${time.getMonth()}`
    }-${time.getDate() > 10 ? time.getDate() : `0${time.getDate()}`} ${
      time.getHours() > 10 ? time.getHours() : `0${time.getHours()}`
    }:${time.getMinutes() > 10 ? time.getMinutes() : `0${time.getMinutes()}`}`;
  }
};
