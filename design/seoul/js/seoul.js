$(document).ready(function(){
	//상단 이미지 자동 슬라이드
	setInterval(move,2500); //1.5초 간격으로 호출
	
	function move(){
		$("#slide").animate({left:"-100vw"},1000,function(){
			$("#slide").append($("#slide img:first-child"));
			$("#slide").css("left",0);
		});
	}
	
	
	
	//이미지 호버 부분
	$(".first a").hover(
		function(){
			$(".first a").css("filter","brightness(0.3)");
			$(this).css("filter","brightness(1)");
		},
		function(){
			$(".first a").css("filter","brightness(1)");
		}	
	);
	
});


