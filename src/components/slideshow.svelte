<script>
	export let path = "/images/slides"
	export let fade = 1000
	export let pause = 3000
	export let kenBurnsTime = 12000
	export let kenBurnsScale = 1.3

	let images = []
	let currentIndex = 0
	let nextIndex = 0
	let showNext = false
	let recentHistory = [] // Track last 3 shown images
	let isPaused = false

	export function setImages(imageList) {
		images = imageList
		currentIndex = 0
		nextIndex = 0
		showNext = false
		recentHistory = []
	}

	function getRandomImageIndex() {
		if (images.length <= 3) {
			// If 3 or fewer images, just pick a random one
			return Math.floor(Math.random() * images.length)
		}

		// Find an image that's not in the recent history
		let randomIndex
		do {
			randomIndex = Math.floor(Math.random() * images.length)
		} while (recentHistory.includes(randomIndex))

		// Update history with new image
		recentHistory.push(randomIndex)
		if (recentHistory.length > 3) {
			recentHistory.shift() // Keep only last 3
		}

		return randomIndex
	}

	function togglePause() {
		isPaused = !isPaused
	}

	function nextImage() {
		if (isPaused) return

		// Pick next image and fade it in over current
		nextIndex = getRandomImageIndex()
		showNext = true

		setTimeout(() => {
			// After fade complete, make next image the current
			currentIndex = nextIndex
			showNext = false
		}, fade)
	}

	import {onMount, onDestroy} from "svelte"

	let interval

	onMount(async () => {
		// Load all images from the slides directory using Vite's glob
		try {
			const imageModules = import.meta.glob(
				"../../public/images/slides/**/*.{png,jpg,jpeg,gif,webp}",
				{
					eager: false,
				},
			)
			const imageFileNames = Object.keys(imageModules)
				.map((path) => path.replace("../../public/", ""))
				.sort()

			console.log("Found slideshow images:", imageFileNames)

			if (imageFileNames.length > 0) {
				setImages(imageFileNames)
				interval = setInterval(nextImage, pause + fade)
			} else {
				console.warn("No images found in slideshow directory")
			}
		} catch (e) {
			console.error("Failed to load slideshow images", e)
		}
	})

	onDestroy(() => {
		if (interval) clearInterval(interval)
	})
</script>

<div
	class="slideshow"
	style="--kenBurnsTime: {kenBurnsTime}ms; --kenBurnsScale: {kenBurnsScale}; --animation-play-state: {isPaused
		? 'paused'
		: 'running'}"
	on:click={togglePause}
	on:keydown={(e) =>
		e.key === "Enter" || e.key === " " ? togglePause() : null}
	role="button"
	tabindex="0"
>
	{#if images.length > 0}
		<!-- Current image (background) -->
		<img
			src="/{images[currentIndex]}"
			alt="Slideshow image {currentIndex + 1}"
			class="bg"
		/>
		<!-- Next image (fading in) -->
		<img
			src="/{images[nextIndex]}"
			alt="Slideshow image {nextIndex + 1}"
			class="fg"
			class:fade-in={showNext}
			style="transition: opacity {fade}ms ease-in-out;"
		/>
	{/if}
</div>

<style>
	@keyframes ken-burns {
		from {
			transform: scale(1);
		}
		to {
			transform: scale(var(--kenBurnsScale));
		}
	}

	.slideshow {
		width: 80%;
		height: 400px;
		border-radius: 15px;
		display: flex;
		align-items: center;
		justify-content: center;
		overflow: hidden;
		background-color: #1a1a1a;
		margin: 2rem auto;
		position: relative;
		cursor: pointer;
	}

	img {
		position: absolute;
		width: 100%;
		height: 100%;
		object-fit: cover;
		animation: ken-burns var(--kenBurnsTime) ease-in-out infinite alternate;
		animation-play-state: var(--animation-play-state);
	}

	img.bg {
		opacity: 1;
		z-index: 1;
	}

	img.fg {
		opacity: 0;
		z-index: 2;
	}

	img.fg.fade-in {
		opacity: 1;
	}

	@media (max-width: 768px) {
		.slideshow {
			width: 100%;
		}
	}
</style>
