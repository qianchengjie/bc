$(document).ready(function() {
	$('#details-box').on('click','#v1',function(){
			oldstreetStop();
			bridgeStop();
			lakeStop();
			v1Play();
	})
	$('#details-box').on('click','#bridge',function(){
			v1Stop();
			oldstreetStop();
			lakeStop();
			bridgePlay();
	})
	$('#details-box').on('click','#lake',function(){
			v1Stop();
			oldstreetStop();
			bridgeStop();
			lakePlay();
	})
	$('#details-box').on('click','#oldstreet',function(){
			v1Stop();
			bridgeStop();
			lakeStop();
			oldstreetPlay();
	})
	function v1Play(){
		new swfobject.embedSWF("/swf/v1.swf", "v1", "100%", "100%", "8", "#336699");
	}
	function v1Stop(){
		swfobject.removeSWF('v1');
		$('.a1').html('').append('<div id="v1"> </div>')
	}
	
	function oldstreetPlay(){	
		new swfobject.embedSWF("/swf/oldstreet.swf", "oldstreet", "100%", "100%", "8", "#336699");
		
	}
	function oldstreetStop(){
		swfobject.removeSWF('oldstreet');
		$('.a2').html('').append('<div id="oldstreet"> </div>')
	}
	
	function lakePlay(){	
		new swfobject.embedSWF("/swf/lake.swf", "lake", "100%", "100%", "8", "#336699");
	}
	function lakeStop(){
		swfobject.removeSWF('lake');
		$('.a3').html('').append('<div id="lake"> </div>')
	}
	
	function bridgePlay(){
		new swfobject.embedSWF("/swf/bridge.swf", "bridge", "100%", "100%", "8", "#336699");
	}
	function bridgeStop(){
		swfobject.removeSWF('bridge');
		$('.a4').html('').append('<div id="bridge"> </div>')
	}
});