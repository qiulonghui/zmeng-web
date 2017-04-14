//header变换
function headerTran(){
	$(window).scroll(function(){
		if($(window).scrollTop()>=$(".header").height()){
			$(".header").removeClass("transparent")
		}else{
			$(".header").addClass("transparent")
		}
	})
}
function removeTran(){
			$("header").removeClass("transparent")
		}

 var EventUtil = {
  addHandler: function(element, type, handler){
     if (element.addEventListener){
          element.addEventListener(type, handler, false);
      } else if(element.attachEvent){
          element.attachEvent('on'+type, handler);
      } else {
         element['on'+type] = handler;
             }
         },
 
         preventDefault: function(event){
             if(event.preventDefault){
                 event.preventDefault();
             }else{
                 event.returnValue = false;
             }
         }
     };
     var mediaQuery = {
         init:function(){
             var _this = this;
             _this.outputSize();
             EventUtil.addHandler(window,"resize",function(){
         _this.outputSize(); //前面的this要单独保存，否则在这里this指的是window
     });
 },
 outputSize:function(){
     var result1 = window.matchMedia('(min-width:1200px)');
     var result2 = window.matchMedia('(min-width:992px)');
     var result3 = window.matchMedia('(min-width:768px)');
	 //console.log(window.innerWidth);
     //console.log(result.matches);
     if(result1.matches) {
         console.log(">=1200 大型设备 大台式电脑");
         headerTran()
     }else if(result2.matches){
         console.log("992=< <=1200 中型设备 台式电脑");
         headerTran()
     }else if(result3.matches){
         console.log("768<= <=992 小型设备 平板电脑");  
         headerTran()
     }else{
         console.log("<=768 超小设备 手机");
         removeTran();
         }
     }
 };
 window.onload = function(){
     mediaQuery.init();
 };
