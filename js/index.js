var cards = document.querySelectorAll("section.testimonials .testimonial-carousel > div.quotecard");

var heights = [];

for (let i = 0; i < cards.length; i ++) {
	console.log(i);
	heights.push(cards[i].offsetHeight);
	cards[i].classList.remove("qc-active");
	console.log(heights);
}

cards[0].classList.add("qc-active");

let maxHeight = heights.reduce((a, b) => { return Math.max(a, b) });

document.querySelectorAll("section.testimonials .testimonial-carousel")[0].style.height = maxHeight + "px";



function wait(){
	console.log("wait");
}

var activeCard = 0;

function homeCarouselMove(direction) {

	document.querySelectorAll("section.testimonials .testimonial-carousel .arrow")[0].onclick = wait;
	document.querySelectorAll("section.testimonials .testimonial-carousel .arrow")[1].onclick = wait;

	var old = activeCard;
	cards[activeCard].classList.remove("qc-active");
	cards[activeCard].classList.add(`go-out-${direction}`);

	setTimeout(function(){
		cards[old].classList.remove(`go-out-${direction}`);
	}, 520);


	activeCard += direction == "right" ? 1 : -1;
	activeCard = activeCard % 12;
	activeCard = activeCard == -1 ? 11 : activeCard;


	cards[activeCard].classList.add(`go-in-${direction}`);

	setTimeout(function(){
		cards[activeCard].classList.remove(`go-in-${direction}`);
		cards[activeCard].classList.add("qc-active");
		document.querySelectorAll("section.testimonials .testimonial-carousel .arrow")[0].onclick = function () {homeCarouselMove('left');};
		document.querySelectorAll("section.testimonials .testimonial-carousel .arrow")[1].onclick = function () {homeCarouselMove('right');};
	}, 520);

}

