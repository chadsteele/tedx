<script>
	import "./style.css"
	import config from "../config.js"
	import {onMount} from "svelte"
	import Header from "./components/header.svelte"
	import Typewriter from "./components/typewriter.svelte"
	import Logo from "./components/logo.svelte"
	import Footer from "./components/footer.svelte"
	import ProfileCard from "./components/profilecard.svelte"

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

		<script>
		</script>

		<ProfileCard
			profileImage="/images/speaker.png"
			title="SUSHRUTHI KRISHNA"
			subtitle="Model & Architect"
			description="Too often we underestimate the power of a touch, a smile, a kind word, a listening ear, an honest compliment, the smallest act of caring, all of which have the potential to turn a life around."
			logo=""
			date="14TH OCTOBER 2017"
		/>
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
