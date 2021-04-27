$(function(){
	$('.hamburgerMenu1').click(function (event){
	event.stopPropagation();	
	if(!$(this).hasClass('menuAtivo')){
		$(this).addClass('menuAtivo');
		$('nav#menuSm-1 ul').animate({'left':'0px'},300);
	}else {
		$(this).removeClass('menuAtivo');
		$('nav#menuSm-1 ul').animate({'left':'-100%'},300);
	}
	});	
	$('body, .hamburgerMenu2').on('click',function(){
		$('.hamburgerMenu1').removeClass('menuAtivo ');
		$('nav#menuSm-1 ul').animate({'left':'-100%'},300);
	});

});