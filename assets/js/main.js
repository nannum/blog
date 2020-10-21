(() => {
//Ends and triggers animations when the top of the page is in view. 
	const skipLink = document.querySelector('.skip-link-top .icon');
	const config = {
		root: null,
		// TODO: remove testing rootMargin, used to see if animation is actually stopped
		// rootMargin: '-150px',
		rootMargin: '125px 0px 0px 0px',
		threshold: 0
	};

	const observer = new IntersectionObserver(entries => {
		entries.forEach(entry => {
			//TODO: remove debug console log
			console.log(`entry.intersectionRatio= ${entry.intersectionRatio}`);
			if (entry.intersectionRatio > 0) {
				entry.target.classList.remove('paused');
				//TODO: show back to top link
				//TODO: remove debug console log
				console.log("on screen");
			} else {
				entry.target.classList.add('paused');
				//TODO: remove back to top link
				//TODO: remove debug console log
				console.log("off screen");
			}
		});
	}, config);

	observer.observe(skipLink);
})();