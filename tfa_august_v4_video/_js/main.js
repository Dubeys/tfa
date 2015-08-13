$(document).ready(function(){

	/*var backposition_1 = $("#aboutbgrnd").offset().top*/

	$(function() {
		$('a[href*=#]:not([href=#])').click(function() {
		    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
		      var target = $(this.hash);
		      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
		      if (target.length) {
		        $("html, body").animate({
		          scrollTop: target.offset().top
		        }, 500);
		        return false;
		      }
		    }
		  });
		});

	/*$(window).scroll(function(){
		if( backposition_1 <= $(window).scrollTop()){
			$("#aboutbgrnd").css({
				"position" : "fixed",
				"top" : "0"
			})
		}else{
			$("#aboutbgrnd").css({
				"position" : "absolute",
				"top" : "inherit"
			})
		}
	})*/

	window.onload=function(){
		setTimeout(function(){

			$("#logo_1").css({
				"right" : "100px",
				"box-shadow" : "0 0 0 0 rgba(0,0,0,.5)"
			})

			$("#logo_2").css({
				"left" : "100px",
				"box-shadow" : "0 0 0 0 rgba(0,0,0,.5)"
			})

			$(".intro").css({
				"box-shadow" : "0 0 0px 0 rgba(0,0,0,.5)"
			})

			setTimeout(function(){
				$("#logo_1").css({
					"opacity" : "0"
				})

				$("#logo_2").css({
					"opacity" : "0"
				})

				$(".filter").css({
					"opacity" :"0"
				})

				setTimeout(function(){
					$(".intro").css({
						"z-index" : "-500"
					})

					$(".filter").css({
						"z-index" : "-500"
					})

				},500)

			},1200)

		},100)

	}

});