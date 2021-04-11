$(function(){

	let lis = $('.menu ul li');

	lis.click(function() {
		debugger;
		let offsetTop = $(this)[0].offsetTop - 6;
		$('.activator').offset({top: offsetTop});

		$('.menu ul li.active').removeClass('active');
		$(this).addClass('active');
	});

});