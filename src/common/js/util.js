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

//导出公共路径
export const comUrl = 'http://localhost:8080/api/'
