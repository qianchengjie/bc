
$(function(){
	var sections = $('.scene-group').find('.section');
    $('.scene-group').fullpage({
		verticalCentered : true,
    	afterLoad: function( anchorLink, index){
    		if(index == 1){
    			$('#header-static').show();
    		}
    	},
    	onLeave: function(index, nextIndex, direction){
    		if (index == 1 ) {
    			$('#header-static').hide();
    		}
    		if (direction == 'down') {
	    		$(sections[index-1]).find('img').removeClass('rotateInUpRight').addClass('rotateOutUpRight')
	    		$(sections[nextIndex-1]).find('img').removeClass('rotateOutDownRight').addClass('rotateInUpRight')
    		}else{
    			$(sections[index-1]).find('img').removeClass('rotateInDownRight').addClass('rotateOutDownRight')
    			$(sections[nextIndex-1]).find('img').removeClass('rotateOutUpRight').addClass('rotateInDownRight')
    		}
	    	$(sections[index-1]).find('.scene-intro').removeClass('fadeInUp').hide();
	    	$(sections[nextIndex-1]).find('.scene-intro').show().addClass('fadeInUp')
    	},
    });
});

$(document).ready(function(){



})
