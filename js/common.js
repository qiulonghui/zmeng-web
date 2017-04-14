//选择服务
$(function(){
	$(".service_cont, .cycle_cont").click(function(){
		$(this).addClass("active")
				.siblings("span").removeClass("active");
	})
})
//圈子评论的显示和隐藏
$(function(){
	$(".pl-bt").click(function(){
		$(this).parent().siblings(".pinglunqu").slideToggle();
	})
})
