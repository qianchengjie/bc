//scene-intro高度动态适应
$(window).resize(function(){
	$('.scene-intro').height($('.scene-intro + img').height());
	$('.page-body').height($('.scene-intro + img').height());
})


$(document).ready(function(){
	//设置scene-intro高度
	$('.scene-intro').height($('.scene-intro + img').height());

	$('.scene1').waypoint(function(){
		$('.scene1 .scene-intro').slideDown(1000);
		$('.scene1 .scene-intro .intro-text').delay(800).fadeIn(500);
	},{offset:'65%'});
	$('.scene2').waypoint(function(){
		$('.scene2 .scene-intro').slideDown(1000);
		$('.scene2 .scene-intro .intro-text').delay(800).fadeIn(500);
	},{offset:'65%'});
	$('.scene3').waypoint(function(){
		$('.scene3 .scene-intro').slideDown(1000);
		$('.scene3 .scene-intro .intro-text').delay(800).fadeIn(500);
	},{offset:'65%'});

	$('.scene1').waypoint(function(){
		$('.scene1 .scene-intro').css("display","none");
		$('.scene1 .scene-intro .intro-text').css("display","none");
	},{offset:'100%'});
	$('.scene2').waypoint(function(){
		$('.scene2 .scene-intro').css("display","none");
		$('.scene2 .scene-intro .intro-text').css("display","none");
	},{offset:'100%'});
	$('.scene3').waypoint(function(){
		$('.scene3 .scene-intro').css("display","none");
		$('.scene3 .scene-intro .intro-text').css("display","none");
	},{offset:'100%'});

})