<script>
	import "./style.css"
	import config from "../config.js"
	import {onMount} from "svelte"
	import Header from "./components/header.svelte"
	import Typewriter from "./components/typewriter.svelte"
	import Logo from "./components/logo.svelte"
	import Footer from "./components/footer.svelte"

	onMount(() => {
		// Update meta tags with config values
		document.title = config.title
		document
			.querySelector('meta[name="description"]')
			.setAttribute("content", config.description)
	})
</script>

<Header />

<main class="ted-body">
	<section id="home" class="ted-content">
		<h1>Welcome to <Logo /></h1>
		<div
			style="margin-top: 20px; font-size: 1.2em; line-height: 1.5; color: gray; height:100px; vertical-align: middle; display:flex; align-items:center; justify-content:center;"
		>
			<Typewriter phrases={config.phrases} speed={100} />
		</div>
		<div class="content">
			{#each config.content as item}
				{#each item.split("\n") as line}
					<p>{@html line}</p>
				{/each}
			{/each}
		</div>
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
</style>
