$(function($){
	$.fn.extend({
	    sidebarToggle: function() {
	       if (!$('body').hasClass('sidebar-open')) {
	       		// open
				$('body').removeClass('sidebar-close')
					.addClass('sidebar-open');
				$('.menu-btn').animate({
					marginLeft: -20
				},100).css({
					backgroundColor:"#000",
					border:"1px solid #000",
					color:"#FFF"
				});
			}else{
				//close
				$('body').removeClass('sidebar-open')
					.addClass('sidebar-close');
				$('.menu-btn').animate({
					marginLeft: -110
				},150).css({
					backgroundColor:"#FFF",
					border:"1px solid #CCC",
					color:"#CCC"
				});
			}
		},
		sidebarOpen: function() {
	       if (!$('body').hasClass('sidebar-open')) {
	       		// open
				$('body').removeClass('sidebar-close')
					.addClass('sidebar-open');
				$('.menu-btn').animate({
					marginLeft: -20
				},100).css({
					backgroundColor:"#000",
					border:"1px solid #000",
					color:"#FFF"
				});
			}
		},
		sidebarClose:function(){
			if ($('body').hasClass('sidebar-open')){
				//close
				$('body').removeClass('sidebar-open')
					.addClass('sidebar-close');
				$('.menu-btn').animate({
					marginLeft: -110
				},150).css({
					backgroundColor:"#FFF",
					border:"1px solid #CCC",
					color:"#CCC"
				});
			}
		}
	})
}),(jQuery);