export function setBgImg(obj){
	var url=obj.getAttribute('bgPic');
	obj.style.backgroundImage = "url("+url+")";
    obj.style.backgroundRepeat = "no-repeat";
    obj.style.backgroundSize = "100% 100%";
}
