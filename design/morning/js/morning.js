$(document).ready(function(){
	
		//상단메뉴에서 메인메뉴에 마우스를 대면,
		$("header li>a").on( "mouseenter    click"  ,  function(){
			$("header ul").stop().animate({height: "200px"});
			$("header nav").slideDown();
		});//메뉴 끝.  
		
		//커서가 상단메뉴 영역(ul) 을 벗어나면,
		$("header ul").mouseleave(function(){
			$("header ul").stop().animate({height: "100px"});
			$("header nav").slideUp();
		});//영역(ul)  끝.
		 
		//웹접근성향상 (마지막 항목이 포커스를 잃으면)
		$(".last").blur(function(){
			$("header ul").stop().animate({height: "100px"});
			$("header nav").slideUp();
		});//블러 끝.
		
				
		//왼쪽방향 자동 슬라이드 (2.5초 간격으로 지속적으로 leftMove함수를 호출!)
		const autoSlide = setInterval( leftMove, 2500);
		function leftMove(){
			$("#slide div").stop().animate({left : "-1100px"} , 1000 , function(){
					$(this).append(     $("#slide div a:first-child")     );
					$(this).css("left" , 0 );
			});			
		}//자동슬라이드 끝.
		
		//공지사항 항목클릭하면 '팝업모달' 나타나기
		$("#notice a").click(function(){
				$("#popup").fadeIn();
		});//팝업모달. 끝
		
		//팝업모달 '닫기'
		$("#popup button").click(function(){
			$("#popup").fadeOut();
		});
		
		//esc키를 누르면  팝업창이 닫힌다
		$(document).keydown(function(event){
			//esc키는 27,  enter키는 13
			if( event.keyCode ==27) {
				$("#popup").fadeOut();
			}
		});
		
	
});/////////////////////////end





