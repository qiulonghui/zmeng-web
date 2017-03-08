//用户设内容切换
$(function(){
	$(".content .menu .list").click(function(){
		$(this).addClass("active")
			   .siblings("div").removeClass("active");
		var listIndex=$(".content .menu .list").index(this);	   
		$(".cont_right .tab").eq(listIndex).show()
											.siblings(".tab").hide();
	})
})

//模态框
$(function(){
	$(".content").find(".onload-btn").click(function(){
		$("#avatar-modal").modal();
	})
})

//显示上传的图片
$("#file0").change(function(){
	var objUrl = getObjectURL(this.files[0]) ;
	console.log("objUrl = "+objUrl) ;
if (objUrl) {
	$("#img0").attr("src", objUrl) ;
	}
}) ;
//建立一个可存取到该file的url
function getObjectURL(file) {
	var url = null ; 
	if (window.createObjectURL!=undefined) { // basic
	url = window.createObjectURL(file) ;
} else if (window.URL!=undefined) { // mozilla(firefox)
	url = window.URL.createObjectURL(file) ;
} else if (window.webkitURL!=undefined) { // webkit or chrome
		url = window.webkitURL.createObjectURL(file) ;
	}
	return url ;
}
