$(document).ready(function(){

	// Efecto del nav
	$(window).width(function(){
		$(window).resize(function(){
			var ancho = $(window).width();
		});
	});



	$("#btn-nav").click(function(){
		$("nav").css({"background-color":"#24334B"});
	});

	$(window).resize(function(){
		var ancho_pantalla = $(window).width();
		if(ancho_pantalla < 751){
			if ($("#cont-nav").is(':visible') == true) {

			}
			$("#btn-nav").click(function(){
				$("nav").css({"background-color":"#24334B"});
			});
		}else if(ancho_pantalla > 750){
			$("nav").css({"background-color":"transparent"});
		}
	});

	$(window).scroll(function(){
		if ($(window).scrollTop() < 10) {
			$("nav").css({"background-color":"transparent"});
		}
		else if ($(window).scrollTop() > 10) {
			$("nav").css({"background-color":"#24334B"});
		}
	});
});
