$(() => {
	// Ширина окна для ресайза
	WW = $(window).width()


	// Прелоадер
	$('.btn__enter').click(function () {
		setTimeout(function () {
			$('.locked').removeClass('locked')
			$('.preloader').addClass("nodisplay")
		}, 1500)
	})


	// Примеры работ
	if ($('.portfolio .swiper').length) {
		new Swiper('.portfolio .swiper', {
			loop: true,
			speed: 1000,
			parallax: true,
			spaceBetween: 20,
			slidesPerView: 'auto',
			freeMode: true
		})
	}
})



$(window).on('resize', () => {
	if (typeof WW !== 'undefined' && WW != $(window).width()) {
		// Моб. версия
		if (!firstResize) {
			$('meta[name=viewport]').attr('content', 'width=device-width, initial-scale=1, maximum-scale=1')
			if ($(window).width() < 375) $('meta[name=viewport]').attr('content', 'width=375, user-scalable=no')

			firstResize = true
		} else {
			firstResize = false
		}


		// Перезапись ширины окна
		WW = $(window).width()
	}
})