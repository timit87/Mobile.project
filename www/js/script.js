$('.b-content__object-star-button').on('click', function() { //кнопка star меняет цвет, появляется сообщение
	if(!$(this).hasClass('m-content__object-star_click')) {
		$('.b-content__object-star').toggleClass('m-content__object-star_click');
		$('.b-content__object-star-message').fadeIn(1000).delay(3000).fadeOut(1000);
		}
		return false;	
});

$('.b-content__object-star-button').on('click', function() { // 
		$('.m-content__object-star-message_click').css('opacity', 1);
		return false;	
});


//$('.b-content__object-star-button').on('click', function() {
	//if(!$(this).hasClass('m-content__object-star_click')) {
		//$('.b-content__object-star').addClass('m-content__object-star_click');
		//$('.b-content__object-star-message').fadeIn(1000).delay(3000).fadeOut(1000);
//	}
	//else {
	//	$('.b-content__object-star').removeClass('m-content__object-star_click');
	//	$('.m-content__object-star-message_2').fadeIn(1000).delay(3000).fadeOut(1000);
	//}
	//return false;
//});

//$('.b-content__object-star-button').on('click', function() {
	//if($(this).hasClass('m-content__object-star_click')) {
		//$('.b-content__object-star').removeClass('m-content__object-star_click');
		//$('.m-content__object-star-message_2').fadeIn(1000).delay(3000).fadeOut(1000);
//	}
	//return false;
//});


$('.b-header__menu-button').on('click', function() { //открывается/закрывается меню
	$('.b-header__menu').toggleClass('m-header__menu-click');
	return false;
});

$(window).on('click',function () { //закрывается меню и поиск при клике на любое место страницы
	if(!$(this).hasClass('m-header__menu-click')) {
		$('.b-header__menu').removeClass('m-header__menu-click');
		$('.b-header__search-input').animate({width:"0px"},500);
		$('.b-header__search-input').hide(0);
	}
	return false;
});

$('.b-header__menu-dropdown-item').on('click', function() { //выделение раздела меню зеленым цветом
	if(!$(this).hasClass('m-header__menu-dropdown-item_active')) {
		$('.b-header__menu-dropdown-item').removeClass('m-header__menu-dropdown-item_active');
		$(this).addClass('m-header__menu-dropdown-item_active');
		}
		return false;	
});

$('.b-header__search').on('click', function() { //открытие окошка поиска
		$('.b-header__search-input').show(0);
		$('.b-header__search-input').animate({width:"150px"},500);
	return false;
});

$('.b-header__search').on('click', function() { //закрытие окошка поиска
	if($(this).hasClass('b-header__search-input')) {
		$('.b-header__search-input').animate({width:"0px"},500);
		$('.b-header__search-input').hide(0);
	}	
	return false;
});

$('.b-header__search-input').blur(function () { //закрытие окошка поиска если оно было выделено
		$('.b-header__search-input').animate({width:"0px"},500);
		$('.b-header__search-input').hide(0);
	return false;
});

$('.b-content__top-button').on('click', function() { //увеличение фото
		$('.b-content__top-img img').unwrap();
		$('.b-content__top-img img').css('height','100px');
		$('.b-content__top-img img').css('width','100px');
		$('.b-content__top-img img').css('z-index','6');
		//$('.b-content__top-img img').css('width', 1000px);
	return false;
});
	
$('.b-content__top-pager-item').on('click', function() {   //переключение табов
	if(!$(this).hasClass('m-content__top-pager-item_active')) { 
		$('.b-content__top-pager-item').removeClass('m-content__top-pager-item_active');
		$(this).addClass('m-content__top-pager-item_active');
		$('.b-content__top-img').css('opacity', 0);	
		$('.b-content__top-img').eq($(this).index()).css('opacity', 1);
		}
		return false;	
});

$('.b-footer__content-connect').on('click', function() { //popup +
	   $('.b-footer_popup').slideDown(1500);
	return false;
});	

$('.b-footer_popup-close').on('click', function() { //popup -
	   $('.b-footer_popup').slideUp(1500);
	return false;
});	