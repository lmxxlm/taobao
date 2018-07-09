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
