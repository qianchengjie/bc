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
	// $('#details-box').on('mousemove','#v1',function(e){
	// 	$('#details-box .stop').show()
	// 	var timer;
	// 	clearTimeout(timer)
	// 	timer = setTimeout(function(){
	// 		$('#details-box .stop').hide()
	// 	},3000)
	// })
	$('#details-box').on('click', '.stop', function(){
		v1Stop();
		oldstreetStop();
		bridgeStop();
		lakeStop();
	})
	function v1Play(){
		new swfobject.embedSWF("http://optpqehds.bkt.clouddn.com/bc/video/%E6%96%87%E5%8C%96%E8%A1%97%E5%8C%BA.swf", "v1", "100%", "100%", "8", "#336699");
	}
	function v1Stop(){
		swfobject.removeSWF('v1');
		$('.a1').html('').append('<img title="点击播放" id="v1" src="img/index/p1.png" />')
	}
	
	function oldstreetPlay(){	
		new swfobject.embedSWF("http://optpqehds.bkt.clouddn.com/bc/video/%E8%80%81%E8%A1%97.swf", "oldstreet", "100%", "100%", "8", "#336699");
		$('.a4').append('<img class="stop" src="img/index/stop.png" />')
	}
	function oldstreetStop(){
		swfobject.removeSWF('oldstreet');
		$('.a4').html('').append('<img title="点击播放" id="oldstreet" src="img/index/p2.png" />')
	}
	
	function lakePlay(){	
		$('.a3').append('<img class="stop" src="img/index/stop.png" />')
		new swfobject.embedSWF("http://optpqehds.bkt.clouddn.com/bc/video/%E6%9F%B3%E6%BA%AA%E6%B1%9F.swf", "lake", "100%", "100%", "8", "#336699");
	}
	function lakeStop(){
		swfobject.removeSWF('lake');
		$('.a3').html('').append('<img title="点击播放" id="lake" src="img/index/p3.png" />')
	}
	
	function bridgePlay(){
		$('.a2').append('<img class="stop" src="img/index/stop.png" />')
		new swfobject.embedSWF("http://optpqehds.bkt.clouddn.com/bc/video/%E6%B2%B3%E6%A1%A5.swf", "bridge", "100%", "100%", "8", "#336699");
	}
	function bridgeStop(){
		swfobject.removeSWF('bridge');
		$('.a2').html('').append('<img title="点击播放" id="bridge" src="img/index/p4.png" />')
	}
});