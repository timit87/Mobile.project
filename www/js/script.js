var TIME_OUT = 200;

$('.b-content__object-star-button').on('click', function() { //кнопка star меняет цвет, появляется сообщение
	var $this = $(this);
	var $parentThis = $this.parent();
	if(!$parentThis.hasClass('m-content__object-star_click')) {
		$('.b-content__object-star').addClass('m-content__object-star_click');
		$('.b-content__object-star-message.add').fadeIn(200).delay(4600).fadeOut(200);
		} else {
			$('.b-content__object-star').removeClass('m-content__object-star_click');
			$('.b-content__object-star-message.remove').fadeIn(200).delay(4600).fadeOut(200);
		}
		return false;
});

$('.b-header__menu-button').on('click', function() { //открывается/закрывается меню
	if($('.b-header__search-input').is(':visible')) {
		hideSearch();
	}
	$('.b-header__menu').toggleClass('m-header__menu-click');
	return false;
});

$(document).on('click', function () { //закрывается меню и поиск при клике на любое место страницы
	if($('.b-header__menu').hasClass('m-header__menu-click')) {
		$('.b-header__menu-button').trigger('click');
	}
	if($('.b-header__search-input').is(':visible')) {
		hideSearch();
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
		if($('.b-header__menu').hasClass('m-header__menu-click')) {
			$('.b-header__menu-button').trigger('click');
		}
		if(!$('.b-header__search-input').is(':visible')) {
			$('.b-header__search-input').show(0);
			$('.b-header__search-input').animate({width:"150px"},500);
		} else {
			hideSearch();
		}
		return false;
});

function hideSearch() {
	$('.b-header__search-input').animate({width:"0px"},500);
	$('.b-header__search-input').hide(0);

}

// $('.b-header__search-input').blur(function () { //закрытие окошка поиска если оно было выделено
// 		$('.b-header__search-input').animate({width:"0px"},500);
// 		$('.b-header__search-input').hide(0);
// 	return false;
// });
$('.b-content__top-img').eq(0).addClass('show');

$('.b-content__top-button').on('click', function() { //увеличение фото
		var $currentEl = $('.b-content__top-img.show');
		$('body').addClass('wide');
		// $('.b-content__top-img img').unwrap();
		// $('.b-content__top-img img').css('height','100px');
		// $('.b-content__top-img img').css('width','100px');
		// $('.b-content__top-img img').css('z-index','6');
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