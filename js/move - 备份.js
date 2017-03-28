function getStyle(obj,attr){
  if(obj.currentStyle){//IE浏览器
    return obj.currentStyle[attr];
  }else{//firefox浏览器
    return getComputedStyle(obj,false)[attr];
  }
}
function startMove(obj,json,fn){
	var flag=true//假设
	clearInterval(obj.timer);
	obj.timer=setInterval(function(){
		for(var attr in json)
		{
		//1.取得当前值
		var iCur=0;
		if(attr=="opacity"){
			var iCur=parseFloat(getStyle(obj,attr))*100;
			}else{
				var iCur=parseInt(getStyle(obj,attr))
				}
		//2.算速度
		var speed=(json[attr]- iCur)/8;
		speed=speed>0?Math.ceil(speed):Math.floor(speed);
		//3.检测停止
		if(iCur!=json[attr]){
			flag=false}else{flag=true}
			if(attr=="opacity"){
				obj.style.opacity=(iCur+speed)/100;
				}else{
					obj.style[attr]=iCur+speed+"px"
				}
			}
			if (flag==true) {
            clearInterval(obj.timer);
            if (fn) {
                fn();
            }
        }
    },30)
}