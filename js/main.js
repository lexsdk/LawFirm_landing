$(function () {

	// подключение слайдеров
	$(".slider__inner").slick({
		prevArrow: '<button type="button" class="slick-btn slick-next"></button>',
		nextArrow: '<button type="button" class="slick-btn slick-prev"></button>',
		infinite: false,

	});

	// маска телефона
	$("#tel").mask("+9(999)999-9999");
	$("#tel-modal").mask("+9(999)999-9999");


});
