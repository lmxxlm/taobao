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
//获得class
export function getByClass(parent,className){
	var boxArr = new Array(); //用来获取className的数组
	var oElement =  parent.getElementsByTagName('*');
	for(var i in oElement){
		if(oElement[i].className == className){
			boxArr.push(oElement[i]);
		}
	};
	return boxArr;
}
