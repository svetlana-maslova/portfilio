$(document).ready(function () {

	// Показать фикс-меню
	window.addEventListener('scroll', function(){
		const fixMenu = document.querySelector('.fix-menu');

		if(this.pageYOffset > 50) {
			fixMenu.classList.add('active');
		} else{
			fixMenu.classList.remove('active');
		}
	});

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
	});

	// фильтрация проектов MixItUp
	let containerEl = document.querySelector('#portfolio-projects');
	let mixer = mixitup(containerEl, {
		classNames: {
			block: ""
		}
	});

	// Placeholder в форме contacts
	const formRows = document.querySelectorAll('.form-row')
	const formRowsInputs = document.querySelectorAll('.form-row__input')

	for (let i = 0; i < formRows.length; i++) {
		formRows[i].addEventListener('click', function(){
			const placeholderElement = this.querySelector('.fake-placeholder')
			placeholderElement.classList.add('active')
		})
	}

	for (let i = 0; i < formRowsInputs.length; i++) {
		formRowsInputs[i].addEventListener('blur', function () {
			const thisParent = this.parentElement;
			if (this.value == '') {
				thisParent.querySelector('span').classList.remove('active');
			}
		})
	}

	// Валидация формы связи form validate
	$('#contacts-form').validate({
		rules:{
			email:{
				required: true,
				email: true
			},
			theme:{
				required: true
			},
			message:{
				required: true
			}
		},
		messages:{
			email: {
				required: 'Введите email',
				email: 'Отсутствует симовл @'
			},
			theme: {
				required: 'Введите тему сообщения'
			},
			message: {
				required: 'Введите текст сообщения'
			}
		},
		submitHandler: function (form) {
			ajaxFormSubmit();
		}

	})

	// Функция AJAX запроса на сервер

	function ajaxFormSubmit() {
		let string = $('#contacts-form').serialize(); // Сохраняем данные введенные в строку формы

		// Формируем ajax запрос
		$.ajax({
			type: "POST", // Тип запроса - POST
			url: "php/mail.php", // Куда отправляем запрос
			data: string, // Какие данные отправляем, в данном случае отправляем переменную string

			// Функция, если все прошло успешно
			success: function (html) {
				$('#contacts-form').slideUp(800);
				$('#answer').html(html);
			}
		});

		// Чтобы по Submit больше ничего не выполнялось - делаем возврат false, чтобы прервать цепочку срабатывания остальных функций
		return false;

	}




})

