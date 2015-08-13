$(document).ready(function(){	
	var graphposition = $(".fullgraph").offset().top

	$(".graphitem").removeClass("full")

	$(window).scroll(function(){
		if( graphposition <= ($(window).scrollTop()+($(window).height()*0.25))){
			$(".graphitem").addClass("full")
		}
	})

})