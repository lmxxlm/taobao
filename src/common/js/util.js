// clientWidth 处理兼容性
export function getClient() {
    return {
        width: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
        height: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
    }
}

// scrollTop兼容性处理
export function getScrollTop() {
    return window.pageYOffset || document.documentElement.scrollTop;
}


//获取class数组
export function getByClass(parent,classname){
    var wchirld = parent.getElementsByTagName("*");
    var chirldArr = [];
    for(var i = 0; i<wchirld.length; i++){
        if(wchirld[i].className==classname){
            chirldArr.push(wchirld[i]);
        }
    }
    return chirldArr;
}