$(document).ready(function(){

	$("#pages").fullpage({
		navigation:true,
		navigationTooltips:["page1","page2","page3"],
		verticalCentered:true,

		afterLoad:
		function(anchorLink, index){
				if(index == 1){
					$('.section1').find('.page-left')
					.css('display','block')
					.addClass("fadeIn");
					$('.section1').find('.page-right')
					.css('display','block')
					.addClass("fadeInRight");
				}
				if(index == 2){
					$('.section2').find('.page-left')
					.css('display','block')
					.addClass("bounceInDown");
					$('.section2').find('.page-right')
					.css('display','block')
					.addClass("rotateInUpRight");
				}
				if(index == 3){
					$('.section3').find('.page-left')
					.css('display','block')
					.addClass("rotateInDownLeft");
					$('.section3').find('.page-right')
					.css('display','block')
					.addClass("fadeInRightBig");
				}
			}
	})

	$('.section1').find('.page-left')
	.css('display','block')
	.addClass("fadeIn");
	$('.section1').find('.page-right')
	.css('display','block')
	.addClass("fadeInRight");

})