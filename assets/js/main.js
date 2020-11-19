(() => {
//Ends and triggers animations when the top of the page is in view. 
	const skipLinkTop = document.querySelector('.skip-link--top');
	const skipLinkBottom = document.querySelector('.skip-link--bottom');
	const config = {
		root: null,
		rootMargin: '125px 0px 0px 0px',
		threshold: 0
	};

	const observer = new IntersectionObserver(entries => {
		entries.forEach(entry => {
			//TODO: remove debug console log
			console.log(`entry.intersectionRatio= ${entry.intersectionRatio}`);
			if (entry.intersectionRatio > 0) {
				//TODO: remove debug console log
				console.log("on screen");
				//TODO: show back to top link
				if (skipLinkBottom.classList.contains('slide-in')) {
					skipLinkBottom.classList.remove('slide-in');
					skipLinkBottom.classList.add('slide-out');
				}
			} else {
				//TODO: remove debug console log
				console.log("off screen");
				//TODO: remove back to top link
				skipLinkBottom.classList.add('slide-in');
				skipLinkBottom.classList.remove('slide-out');
			}
		});
	}, config);

	observer.observe(skipLinkTop);
})();