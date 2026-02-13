<script>
	import {onMount} from "svelte"

	export let phrases = [
		`Welcome to<span class="ted-red">TEDx</span>ALCHE`,
		"Ideas worth spreading",
	]
	export let speed = 100
	export let deleteSpeed = 50
	export let pauseTime = 2000

	let displayedText = ""
	let visibleCharCount = 0
	let currentPhraseIndex = 0
	let isDeleting = false
	let cursorVisible = true

	function countVisibleChars(html) {
		let count = 0
		let i = 0
		while (i < html.length) {
			if (html[i] === "<") {
				i = html.indexOf(">", i) + 1
			} else {
				count++
				i++
			}
		}
		return count
	}

	function buildPartialHTML(html, visibleCharCount) {
		let result = ""
		let count = 0
		let i = 0
		while (i < html.length && count < visibleCharCount) {
			if (html[i] === "<") {
				const closeIdx = html.indexOf(">", i)
				if (closeIdx !== -1) {
					result += html.substring(i, closeIdx + 1)
					i = closeIdx + 1
				} else {
					result += html[i]
					count++
					i++
				}
			} else {
				result += html[i]
				count++
				i++
			}
		}
		return result
	}

	onMount(() => {
		let timeoutId

		const typeText = () => {
			const currentPhrase = phrases[currentPhraseIndex]
			const totalVisibleChars = countVisibleChars(currentPhrase)

			if (!isDeleting) {
				if (visibleCharCount < totalVisibleChars) {
					visibleCharCount++
					displayedText = buildPartialHTML(
						currentPhrase,
						visibleCharCount,
					)
					timeoutId = setTimeout(typeText, speed)
				} else {
					timeoutId = setTimeout(() => {
						isDeleting = true
						typeText()
					}, pauseTime)
				}
			} else {
				if (visibleCharCount > 0) {
					visibleCharCount--
					displayedText = buildPartialHTML(
						currentPhrase,
						visibleCharCount,
					)
					timeoutId = setTimeout(typeText, deleteSpeed)
				} else {
					currentPhraseIndex =
						(currentPhraseIndex + 1) % phrases.length
					isDeleting = false
					typeText()
				}
			}
		}

		// Start cursor blinking
		const cursorInterval = setInterval(() => {
			cursorVisible = !cursorVisible
		}, 500)

		typeText()

		return () => {
			clearTimeout(timeoutId)
			clearInterval(cursorInterval)
		}
	})
</script>

<div class="typewriter-container">
	<span class="typewriter-text">{@html displayedText}</span>
	<span class="typewriter-cursor" class:visible={cursorVisible}></span>
</div>

<style>
	.typewriter-container {
		display: inline-block;
		font-family: Helvetica, Arial, sans-serif;
		font-size: 32px;
		font-weight: bold;
		color: #ffffff;
		min-height: 40px;
		letter-spacing: -0.5px;
	}

	.typewriter-text {
		white-space: pre-wrap;
		word-break: break-word;
	}

	.typewriter-cursor {
		display: inline-block;
		width: 2px;
		height: 1em;
		background-color: #ff2b06;
		margin-left: 4px;
		animation: none;
		opacity: 0;
	}

	.typewriter-cursor.visible {
		opacity: 1;
	}
</style>
