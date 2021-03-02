(() => {
//Hides the bottom content skip link when the page header enters the device's viewpoint 
//Reveals the bottom content skip link when the page header exits the device's viewpoint
	const skipLink = document.querySelector('.skip-link--bottom');
	const config = {
		root: null,
		rootMargin: '125px 0px 0px 0px',
		threshold: 0
	};
	let observedItem = document.querySelector('.header');
	const observer = new IntersectionObserver(entries => {
		entries.forEach(entry => {
			if (entry.intersectionRatio > 0) {
				//Show back to top link
				if (skipLink.classList.contains('slide-in')) {
					skipLink.classList.remove('slide-in');
					skipLink.classList.add('slide-out');
				}
			} else {
				//Hide back to top link
				skipLink.classList.add('slide-in');
				skipLink.classList.remove('slide-out');
			}
		});
	}, config);
	observer.observe(observedItem);
})();