(() => {
//Ends and triggers animations when the top of the page is in view. 
	const skipLinkTop = document.querySelector('.skip-link.top');
	const skipLinkBottom = document.querySelector('.skip-link.bottom');
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
				//TODO: show back to top link
				if (skipLinkBottom.classList.contains('slide-in')) {
					skipLinkBottom.classList.remove('slide-in');
					skipLinkBottom.classList.add('slide-out');
				}
				//TODO: remove debug console log
				console.log("on screen");
			} else {
				//TODO: remove back to top link
				skipLinkBottom.classList.add('slide-in');
				skipLinkBottom.classList.remove('slide-out');
				//TODO: remove debug console log
				console.log("off screen");
			}
		});
	}, config);

	observer.observe(skipLinkTop);
})();