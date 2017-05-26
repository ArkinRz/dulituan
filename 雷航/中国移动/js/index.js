$(document).ready(function(){
	// 头部区域
	$(".yi-header-ul3-li").hover(function(){
		$(".yidong-header-none").slideToggle();
	})

	// 轮播左边栏区域
	$(".yidong-aside-ul").hover(function(){
		$(this).next().show()
		$(this).css("background","rgba(0,0,0,0.2)")
	},function(){
		$(this).css("background","#fff")
	})

	$(".yidong-aside-display").mouseout(function(){
		$(this).hide()
	})

	// flex区域
	$(".yidong-card2").hover(function(){
		$(".yidong-card2-img").attr("src","./images/pc_icon7.png")
	},function(){
		$(".yidong-card2-img").attr("src","./images/pc_icon71.png")
	})


	// 手风琴区域
	$(".yidong-accordion-pic").hover(function(){
		// .stop()鼠标移走时，停止动画
		// .siblings()所有同胞，除开自己
		$(this).stop().animate({width:"405px"},800).siblings(".yidong-accordion-pic").stop().animate({width:"244px"},800);
	},function(){
		$(".yidong-accordion-pic").stop().animate({width:"298px"},800);
		// $(this).stop().animate({width:"300px"},800).siblings().stop().animate({width:"300px"},800);
	})

})

