$(document).ready(function(){
	
	//왼쪽메뉴 항목을 클릭하면 활성화상태가 유지되도록 하려는 의도임.
	
	$("a").click(function(){
		//클릭한 a의 부모(li)인텍스번호 [ 0 , 1 ,  2 , 3 ]
		const n = $(this).parent().index();
		//콘솔창으로 번호를확인할 수 있다.
		//console.log(n);
		//모든클래스 삭제
		$("a").removeClass();
		//클릭한 메뉴만 클래스 추가 [ "m1" , "m2" , "m3" , "m4" ]
		$(this).addClass("menuOver "+"m"+(n+1));
	});  

	
	// 휠(스크롤)을 올리거나 내리는 행위를 하면 [봄/여름/가을/겨울] 배경이 바뀔것이고
	// 그럴경우에, 왼쪽에 해당 메뉴 항목 활성화 부분이 변경되도록 하려는 의도임.
	
	$(document).scroll(function(){
		//브라우저높이 값을   h1 변수에 저장함
		const h1 = $(window).height();   //920
		//스크롤바의 윗쪽 여백 높이값을  t1 변수에 저장함.
		const t1 = $(document).scrollTop();
		console.log(t1);      //화면 하나당 높이 928
		//계산함_ 스크롤높이를 브라우저높이로 나눈  다음에,  그 값을 정수로 변환함 (floor 소수점미만 버림)
		//정수란,소수점이 없는 숫자를 말함.
		const ht = Math.floor(t1/h1);
		//console.log(ht);
		//모든클래스 삭제
		$("a").removeClass();
		//해당 메뉴만 클래스 추가
		$("li").eq(ht).children().addClass("menuOver "+"m"+(ht+1));
	});

	
});/////////////end












