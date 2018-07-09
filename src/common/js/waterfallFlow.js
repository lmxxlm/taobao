//瀑布流js
import { getByClass } from 'common/js/util'


export function waterFull(parent,children){

    //先获得父元素及其底下所有的class = box的元素
    var oParent = parent;
    var oBoxs =  getByClass(parent,children);

    var oBoxW = oBoxs[0].offsetWidth;
    var cols = Math.round(document.documentElement.clientWidth/oBoxW);
	oParent.style.cssText = `width:${cols}*${oBoxW}px;margin:0 auto;`;
	var arrH = []; //定义数组存放每一列的高度
	
	
	for(var i = 0; i< oBoxs.length; i++){
		var img = oBoxs[i].getElementsByTagName('img')[0];
//		console.log(img.src,img.complete)
		if( img.complete){
			console.log(img.src)
//			console.log(img.src,img.complete)
			
		}else if(img.complete){
			console.log(img.complete)
			if(i < cols){
		        arrH[i] = oBoxs[i].offsetHeight;
		        oBoxs[i].style.top=`0px`;
		        oBoxs[i].style.left=oBoxs[0].offsetWidth*i +'px';
		   }else{
			    var minH = Math.min.apply(null, arrH);  //定义一个变量，存放数组中最小的高度
			    var minIndex = getMinhIndex(arrH,minH);
			    oBoxs[i].style.position = 'absolute';
			    oBoxs[i].style.top = minH + 'px';
			    oBoxs[i].style.left = minIndex * oBoxW + 'px';
			    arrH[minIndex] += oBoxs[i].offsetHeight; 
	        }
		}
    }

}

//获取当前最小值得下标
function getMinhIndex(array,min){

    for(var i in array){

        if(array[i] == min)

            return i;
    }
}


