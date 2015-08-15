$(document).ready(function(){
	
	var randomX, randomY, speedX, speedY, aX, aY, awidth, aheight, randomcounter, counter, randommem, counter2

	randomX = Math.floor(Math.random() * $(window).width())
	randomY = Math.floor(Math.random() * $(window).height())

	speedX = Math.floor((Math.random() * 8) - 4)
	speedY = Math.floor((Math.random() * 8) - 4)

	setInterval(function(){
		//speedX = Math.floor((Math.random() * 4) - 2) 
		//speedY = Math.floor((Math.random() * 4) - 2)

		if (speedX == 0) {
			speedX = 1
		}

		if (speedY == 0) {
			speedY = 1
		}
	}, 2000)

	counter = 0
	counter2 = 0

	setInterval(function(){

		aX = $("a").offset().left
		awidth = $("a").width()
		aY = $("a").offset().top
		aheight = $("a").height()

		if (counter <= 300){

			if ((randomX + speedX) <= aX + awidth && (randomX + speedX) >= aX && (randomY + speedY) <= aY + aheight && (randomY + speedY) >= aY) {

				if((randomY + speedY) <= aY + aheight && (randomY + speedY) >= aY + (aheight - 5) ){
					speedY *= -1
				}else if ((randomY + speedY) >= aY && (randomY + speedY) <= aY + 5){
					speedY *= -1
				}

				if((randomX + speedX) <= aX + awidth && (randomX + speedX) >= aX + (awidth - 5) ){
					speedX *= -1
				}else if ((randomX + speedX) >= aX && (randomX + speedX) <= aX + 5){
					speedX *= -1
				}
				
			};

			if( (randomX + speedX) <= 0){
				speedX *= -1
			}else if( (randomX + speedX) >= $(window).width() - 20){
				speedX *= -1
			}

			if( (randomY + speedY) <= 0 ){
				speedY *= -1
			}else if( (randomY + speedY) >= $(window).height() - 20){
				speedY *= -1
			}

			randomX += speedX
			randomY += speedY

			$(".cursor").css({
				"top" : randomY + "px",
				"left" : randomX + "px"
			})

			$(".loading").css({
				"display" : "none"
			})

			$("#thinking").css({
				"display" : "none"
			})

			counter++
			randommem = randomcounter

		} else if (counter <= 300 + randommem) {

			$(".loading").css({
				"display" : "block"
			})

			$("#thinking").css({
				"display" : "block"
			})

			counter++
		} else {
			counter = 0
			speedX = Math.floor((Math.random() * 8) - 4)
			speedY = Math.floor((Math.random() * 8) - 4)
			counter2++
		}

		randomcounter = Math.floor(Math.random() * (150 * counter2)) +  150

	},15)
})