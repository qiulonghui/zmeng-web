$(function(){
	$(".content .menu .list").click(function(){
		$(this).addClass("active")
			   .siblings("div").removeClass("active");
		var listIndex=$(".content .menu .list").index(this);	   
		$(".cont_right .tab").eq(listIndex).show()
											.siblings(".tab").hide();
	})
})
$(function(){
	$(".content").find(".onload-btn").click(function(){
		$("#avatar-modal").modal();
	})
})
