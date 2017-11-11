// JavaScript Document
$(document).ready(function(){
	/*banner*/
	$(".banspan span").eq(0).addClass("current");	
	$(".img a").eq(0).show().siblings("a").hide();
	$(".banspan span").mouseover(function(){
		numa=$(this).index();
		$(this).addClass("current").siblings("span").removeClass("current");
		$(".img a").eq(numa).fadeIn().siblings("a").fadeOut();
		});
	setInterval(function(){
		var a=$(".banspan .current").index();
		var b=$(".banspan span:last").index();
		if(a==b){
			$(".banspan span").eq(0).trigger("mouseover");
			}
			$(".banspan span").eq(a+1).trigger("mouseover");
		},5000);