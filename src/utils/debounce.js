export const debounce = (fun, t, immediate) => {
  let timeout;
  //返回真正的scroll事件的事件处理程序
  return (event) => {
    let that = this, 
        arg = arguments;
    let later = () => {
      timeout = null;
      if(!immediate) fun.apply(that,arguments);
    };
    let callNow = immediate && !timeout;//这一句位置很重要
    clearTimeout(timeout);
    timeout = setTimeout(later,t);
    if(callNow) {
      fun.apply(that,arguments);
    }
  }
};