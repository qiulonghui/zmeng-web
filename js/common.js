//下拉菜单
$(function() {
	$(".solution").hover(function() {
		$(".solution-menu").toggle()
	})
	$(".avatar-wrap").click(function() {
		$(".use-list").toggle()
	})
})
//header变换
$(function(){
	$(window).scroll(function(){
		if($(window).scrollTop()>=$(".header").height()){
			$(".header").removeClass("transparent")
		}else{
			$(".header").addClass("transparent")
		}
	})
})
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
