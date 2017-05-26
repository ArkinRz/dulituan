// jQuery部分
$(function(){
	// -------------顶部导航栏 的 hover效果 start--------------------------
	$(".Mobile-header-top ul li").hover(function(){
		$(this).css("color","#0085d0");
		$(this).find("a").css("color","#0085d0");
		$(this).find(".left-icon1").css("background-position","0 -31px");
		$(this).find(".left-icon2").css("background-position","0 -34px");
	},function(){
		$(this).css("color","");
		$(this).find("a").css("color","");
		$(this).find(".left-icon1").css("background-position","0 0");
		$(this).find(".left-icon2").css("background-position","0 0");
	});

	$(".top-right-phone").hover(function(){
		$(".top-right-word").removeClass("top-right-normal");
		$(".top-right-word").addClass("top-word-hover");
		$(this).find(".right-icon1").css("background-position","0 -38px");
		$(this).find(".right-icon2").css("background","url('./images/arrow_hover.png') 5px 0 no-repeat");
		$(".top-right-child").show();
	},function(){
		$(".top-right-child").hide();
		$(".top-right-word").removeClass("top-word-hover");
		$(".top-right-word").addClass("top-right-normal");
		$(this).find(".right-icon1").css("background-position","0 0");
		$(this).find(".right-icon2").css("background","url('./images/arrow.png') 5px 0 no-repeat");
	});  


	$(".middle-order").hover(function(){
		$(this).find(".order-favo-child").show();
	},function(){
		$(this).find(".order-favo-child").hide();
	});

	$(".middle-order").find("dd").hover(function(){
		$(this).find("a").css({"color":"#fff"});
		$(this).css({"background":"#f9c"});
	},function(){
		$(this).find("a").css({"color":""});
		$(this).css({"background":""});
	});


	$(".Mobile-header-mainnav").find(".header-mainnav-first").nextAll().hover(function(){
		$(this).css("backgroundColor","#8ec31f");
	},function(){
		$(this).css("backgroundColor","");
	});

	$(".Mobile-header-mainnav").find(".header-mainnav-first").nextAll().click(function(){
		$(this).siblings().removeClass("header-mainnav-selected");
		$(this).addClass("header-mainnav-selected");
	});
// ------顶部导航栏 的 hover效果 end
	

// -------轮播图 aside区域 start--------------------------
		
	 $(".Mobile-ad-aside").css("left",$('.wrap').offset().left);
	 $(window).resize(function() {
	 	 $(".Mobile-ad-aside").css("left",$('.wrap').offset().left);
	 })
	 $(".ad-aside-item").last().css("border","none");

// -------轮播图 aside区域 end
	// alert(404-197)

// 合约机
	$(".concent-aside-down").click(function(){
		if ($(".Mobile-concent-aside ul").height()<400) {
			$(".concent-aside-child").fadeIn(1000);
			$(".Mobile-concent-aside ul").animate({height:"420px"},1000);
			$(this).css("background-position","0 -26px")
		}else{
			$(".concent-aside-child").fadeOut(1000);
			$(".Mobile-concent-aside ul").animate({height:"42%"},1000);
			$(this).css("background-position","0 0")
		}
	
	});









})