$(document).ready(function () {
	// Подключение точек пагинации справа page-nav
	$('#page-nav').onePageNav({
		currentClass: 'active',
		changeHash: false,
		scrollSpeed: 750,
		scrollThreshold: 0.5,
		filter: '',
		easing: 'swing',
		begin: function () {},
		end: function () {},
		scrollChange: function ($currentListItem) {}
	});

	// Мобильное меню header-menu
	const mobileMenuToggle = document.querySelector(".toggle-menu");
	const mobMenu = document.querySelector(".header-menu");
	const overlay = document.querySelector('#overlay')

		console.log(mobileMenuToggle)

	mobileMenuToggle.addEventListener("click", function () {
		mobMenu.classList.toggle("active");
		this.classList.toggle("active");
		overlay.classList.toggle("active");
	});
	window.addEventListener('resize', function(){
			mobMenu.classList.remove('active');
			mobileMenuToggle.classList.remove('active');
			overlay.classList.remove('active');
	});

	// Кнопка прокрутки вверх BACK TOP BUTTON
	$('#backTop').hide();
	$(window).scroll (function(){
		if($(this).scrollTop() > 200) {
			$('#backTop').fadeIn();
		}
		else {
			$('#backTop').fadeOut();
		}
	})

})


