//intersection observer --> fade each .award into view as user scrolls
window.addEventListener("DOMContentLoaded", setup);

function setup() {

	const options = {
		rootMargin: "0px 0px -15% 0px"
	};

	const observer = new IntersectionObserver((entries, observer) => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {

				entry.target.style.animation = "fade-in 0.6s ease-in forwards";

				observer.unobserve(entry.target);

			} else {
				return;
			}
		})
	}, options);

	const things = document.querySelectorAll("section.awards .wrapper .award");
	things.forEach(thing => observer.observe(thing));

}


