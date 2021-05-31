$(document).ready(function(){



	
	$(window).on("scroll", function(){
		
		let navbar = $(".navbar");
	
		if($(this).scrollTop() >= navbar.innerHeight()){
			
			if(!navbar.hasClass("scrolled")){
				
				navbar.addClass("scrolled")
			}
		}else {
			navbar.removeClass("scrolled");
		}
	
	});
	
	$(".tab-number > li").on("click",function(){
	
		$(this).addClass("active").siblings().removeClass("active");
		$(".tabs-content > div").hide();
		$("." + $(this).data("tab")).fadeIn();
	
	});










































});