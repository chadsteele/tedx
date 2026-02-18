export function observeInView(element) {
	let visibilityTimeout = null

	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					element.classList.remove("hidden-until-view")

					// Set a timeout to update hash after 3 seconds of visibility
					if (element.id && !visibilityTimeout) {
						visibilityTimeout = setTimeout(() => {
							window.location.hash = element.id
							visibilityTimeout = null
						}, 3000)
					}
				} else {
					// Clear timeout if element leaves view before 3 seconds
					if (visibilityTimeout) {
						clearTimeout(visibilityTimeout)
						visibilityTimeout = null
					}
				}
			})
		},
		{threshold: 0.5},
	)

	observer.observe(element)

	return {
		destroy() {
			if (visibilityTimeout) {
				clearTimeout(visibilityTimeout)
			}
			observer.disconnect()
		},
	}
}
