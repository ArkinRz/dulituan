$(document).ready(function() {
	// topbar  
	$(".topbar-c .topbar-m").hover(function() {
		$(this).prev().animate({
			backgroundPositionY: "-35px"
		}, 300);
		$(this).css("color", "#0085d0");
	}, function() {
		$(this).prev().animate({
			backgroundPositionY: "0px"
		}, 300);
		$(this).css("color", "#5e5e5e");
	})

	$(".topbar-n .topbar-m").hover(function() {
		$(this).prev().animate({
			backgroundPositionY: "-32px"
		}, 300);
		$(this).next(".topbar-n-ewm").fadeIn(500);
		$(this).css("color", "#0085d0");
	}, function() {
		$(this).prev().animate({
			backgroundPositionY: "0px"
		}, 300);
		$(this).next(".topbar-n-ewm").fadeOut(500);
		$(this).css("color", "#5e5e5e");
	})
	$(".topbar-r .trw4").hover(function() {
		$(this).find(".m-icon-l").animate({
			backgroundPositionY: "-39px"
		}, 300);
		$(this).find(".m-icon-r").css({
			background: "url(./images/arrow_hover.png)"
		}, 300);
		$(this).find(".dt").addClass("dtbg");
		$(this).find(".dd").show();
	}, function() {
		$(this).find(".m-icon-l").animate({
			backgroundPositionY: "0px"
		}, 300);
		$(this).find(".m-icon-r").css({
			background: "url(./images/arrow.png)"
		}, 300);
		$(this).find(".dt").removeClass("dtbg");
		$(this).find(".dd").hide();
	})

	// rbar 
	$(".rbar-w .rbar-tab-w").hover(function() {
		$(this).find(".rbar-text").stop().animate({
			right: "40px",
			zIndex: "-1"
		}, 500)
		$(this).find(".icon2").css("background", "url(./images/pc_icon7.png)");
		$(this).css("background", "#e50076");

	}, function() {
		$(this).find(".rbar-text").stop().animate({
			right: "-94px",
		}, 500);
		$(this).find(".icon2").css("background", "url(./images/pc_icon71.png)");
		$(this).css("background", "#666");
	})
	$(window).scroll(function() {
		if ($("body").scrollTop() <= "500") {
			$(".rbar-w .top").fadeOut(500);
		} else {
			$(".rbar-w .top").fadeIn(500);
		}
	})
	$(".rbar-w .top").click(function() {
		$("body").animate({
			scrollTop: 0
		}, 500);
	})
	$(".navbar .nav-item").hover(function() {
			$(this).addClass("nav-item-bg");
			$(this).find(".nav-item-around").fadeIn(500);
			$(this).find(".around-sanjiao").fadeIn(500)
		}, function() {
			$(this).removeClass("nav-item-bg");
			$(this).find(".nav-item-around").fadeOut(500);
			$(this).find(".around-sanjiao").fadeOut(500);
		})
	// 轮播
	var itemLength = $(".ad-item .ad-item-list").length; 
	var _nowIndex = 0; 
	var setInter = null;
	function auto_fun() {
		if (_nowIndex < itemLength) {
			_nowIndex++;
		} else {
			_nowIndex = 0;
		}
		$(".ad-item .ad-item-list ").eq(_nowIndex).show().siblings().hide();
		$(".ad-pot .ad-pot-list ").eq(_nowIndex).css("background", "#0f0").siblings().css("background", "rgba(0,0,0,.5)");
	}
	function auto_play() {
		clearInterval(setInter);
		setInter = setInterval(auto_fun, 1500);
	}
	auto_play();
	$(".ad-pot .ad-pot-list").each(function() {
		$(this).hover(function() {
			var thisIndex = $(this).index();
			$(this).css("background", "#0f0").siblings().css("background", "rgba(0,0,0,.5)");
			$(".ad-item .ad-item-list").eq(thisIndex).show().siblings().hide();
			clearInterval(setInter);
		}, function() {
			_nowIndex = $(this).index();
			auto_play();
		});
	});
	$(".ad-snav .snav-item").hover(function(){
		$(this).css("background","yellow");
	},function(){
		$(this).css("background","#fff");
	});
	$(".hot-container .hot-top").click(function(){
		if($(this).position(".hot-c-l").top<=247){
			$(this).css({bottom:"14px",backgroundPositionY:"-26px"})
			$(".hot-container .hot-l-img").hide();
			$(".hot-container .hot-l-dd").show();
		}else{
			$(this).css({bottom:"247px",backgroundPositionY:"0"})
			$(".hot-container .hot-l-img").show();
			$(".hot-container .hot-l-dd").hide();
		}
	});
	$(".hot-c-r .hot-r-list").hover(function(){
		$(this).stop().animate({width:"407"},500).siblings().stop().animate({width:"194px"},500)
	},function(){
		$(".hot-c-r .hot-r-list").stop().animate({width:"265px"},500);
	});
	$(".sel-l .sel-l-list").mouseover(function(){
		$(this).addClass("sel-l-show").siblings().removeClass("sel-l-show")
	});
	$(".hot-header .hot-more").hover(function(){
		$(this).css("color","#0085d0");
	},function(){
		$(this).css("color","#5e5e5e");
	})
	$(".sel-r figure").hover(function(){
		$(this).find(".sel-buy-w").animate({bottom:"0px"},200);
	},function(){
		$(this).find(".sel-buy-w").animate({bottom:"-30px"},200);
	})
})