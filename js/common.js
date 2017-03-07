//user-list显示隐藏
$(function(){
	$(".nav-user-con").hover(function(){
		$(".user-list").toggle();
	})
})
//选择服务
$(function(){
	$(".service_cont, .cycle_cont").click(function(){
		$(this).addClass("active")
				.siblings("span").removeClass("active");
	})
})
