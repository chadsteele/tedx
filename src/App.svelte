<script>
	import "./style.css"
	import config from "../config.js"
	import {onMount} from "svelte"
	import Header from "./components/header.svelte"
	import Typewriter from "./components/typewriter.svelte"
	import Logo from "./components/logo.svelte"
	import Footer from "./components/footer.svelte"
	import ProfileCard from "./components/profilecard.svelte"
	import Slideshow from "./components/slideshow.svelte"
	import Contact from "./components/contact.svelte"

	onMount(() => {
		// Update meta tags with config values
		document.title = config.title
		document
			.querySelector('meta[name="description"]')
			.setAttribute("content", config.description)

		// Scroll to hash helper
		const scrollToHash = () => {
			if (window.location.hash) {
				const target = document.querySelector(window.location.hash)
				if (target) {
					target.scrollIntoView({behavior: "smooth"})
				}
			}
		}

		// Global observer for all elements with IDs
		const observedElements = new Set()
		let currentHashElement = null
		let scrollTimeout = null

		const updateHashForTopmost = () => {
			// Find the topmost visible element
			let topmost = null
			let topmostDistance = Infinity

			observedElements.forEach((el) => {
				const rect = el.getBoundingClientRect()
				// Check if element is visible
				if (rect.top < window.innerHeight && rect.bottom > 0) {
					// Calculate distance from top of viewport
					const distance = Math.max(0, rect.top)
					if (distance < topmostDistance) {
						topmostDistance = distance
						topmost = el
					}
				}
			})

			// Update hash only if topmost element changed
			if (topmost && topmost !== currentHashElement) {
				currentHashElement = topmost
				history.replaceState(null, null, "#" + topmost.id)
			}
		}

		const globalObserver = new IntersectionObserver(
			(entries) => {
				let changed = false
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.remove("hidden-until-view")
						observedElements.add(entry.target)
						changed = true
					} else {
						observedElements.delete(entry.target)
						if (entry.target === currentHashElement) {
							currentHashElement = null
						}
						changed = true
					}
				})
				if (changed) {
					updateHashForTopmost()
				}
			},
			{threshold: 0.5},
		)

		// Observe all elements with IDs
		document.querySelectorAll("[id]").forEach((el) => {
			globalObserver.observe(el)
		})

		// Track user scrolling with debounce
		const handleScroll = () => {
			clearTimeout(scrollTimeout)
			scrollTimeout = setTimeout(() => {
				updateHashForTopmost()
			}, 500)
		}

		window.addEventListener("scroll", handleScroll, {passive: true})

		// Watch for dynamically added elements with IDs
		const mutationObserver = new MutationObserver((mutations) => {
			mutations.forEach((mutation) => {
				mutation.addedNodes.forEach((node) => {
					if (node.nodeType === 1) {
						// Element node
						if (node.id) {
							globalObserver.observe(node)
						}
						// Also check for elements with IDs inside the added node
						node.querySelectorAll?.("[id]").forEach((el) => {
							globalObserver.observe(el)
						})
					}
				})
			})
		})

		mutationObserver.observe(document.querySelector(".ted-content"), {
			childList: true,
			subtree: true,
		})

		// Listen for manual hash changes (user clicks back/forward, types URL, clicks link)
		const handleHashChange = () => {
			scrollToHash()
		}
		window.addEventListener("hashchange", handleHashChange)

		// Scroll immediately on page load/refresh
		scrollToHash()

		// Re-scroll after all images load (fixes layout shift issues)
		const images = document.querySelectorAll("img")
		let loadedCount = 0
		const totalImages = images.length

		if (totalImages > 0) {
			images.forEach((img) => {
				if (img.complete) {
					loadedCount++
					if (loadedCount === totalImages) scrollToHash()
				} else {
					img.addEventListener(
						"load",
						() => {
							loadedCount++
							if (loadedCount === totalImages) scrollToHash()
						},
						{once: true},
					)
					img.addEventListener(
						"error",
						() => {
							loadedCount++
							if (loadedCount === totalImages) scrollToHash()
						},
						{once: true},
					)
				}
			})
		}

		return () => {
			globalObserver.disconnect()
			mutationObserver.disconnect()
			window.removeEventListener("scroll", handleScroll)
			window.removeEventListener("hashchange", handleHashChange)
			clearTimeout(scrollTimeout)
		}
	})
</script>

<Header />

<main class="ted-body">
	<section class="ted-content">
		<h1 id="home" class="hidden-until-view">We are ALCHE, Mauritius</h1>
		<div
			style="margin-top: 20px; font-size: 1.2em; line-height: 1.5; color: gray; min-height: 100px; display: flex; align-items: center; justify-content: center; text-align: center; padding: 1rem 0;"
		>
			<Typewriter phrases={config.phrases} speed={100} />
		</div>

		<div class="content">
			{#each config.content as item}
				{#if typeof item === "string"}
					{#each item.split("\n") as line}
						<p>{@html line}</p>
					{/each}
				{:else if typeof item === "object" && item.type === "profilecard"}
					<ProfileCard {...item} />
				{:else if typeof item === "object" && item.type === "slideshow"}
					<Slideshow {...item} />
				{/if}
			{/each}
		</div>

		<h1 id="contact" style="padding-top:50px" class="hidden-until-view">
			Contact us
		</h1>
		<Contact />
	</section>
</main>

<Footer />

<style global>
	.content {
		margin-top: 20px;
		font-size: 1.2em;
		line-height: 1.5;
		color: gray;
	}
	:global(body) {
		margin: 0;
		padding: 0;
	}
	:global([id]) {
		scroll-margin-top: 100px;
	}
	:global([id].hidden-until-view) {
		opacity: 0;
		pointer-events: none;
	}
	:global([id]:target) {
		outline: none;
	}
</style>
