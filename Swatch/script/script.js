$(document).ready(function(){
	
	//왼쪽 메뉴
	$("nav a").click(function(){
		const i = $(this).parent().index();
		console.log(i); //0,1,2,3 =>  m1,m2,m3,m4		
		$(this).addClass("menuOver m" + (i+1) ).parent().siblings().children().removeClass();
	});
	
	//마우스휠에 따른 왼쪽메뉴 활성화
	$(document).scroll(function(){
		
		const h1 = $(window).height();//브라우저 높이
		console.log(h1); //예_  784
		
		const t1 = $(document).scrollTop();//스크롤을 얼만큼 내렸나
		console.log(t1); //예_  1968
		
		const ht = Math.floor(t1/h1);
		
		
		$("nav a").removeClass();//모든 클레스 삭제
		$("nav li").eq(ht).children().addClass("menuOver m" + (ht+1));
		
	});
	
	
});/////all end






