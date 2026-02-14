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
		<h1>We are ALCHE, Mauritius</h1>
		<div
			style="margin-top: 20px; font-size: 1.2em; line-height: 1.5; color: gray; height:100px; vertical-align: middle; display:flex; align-items:center; justify-content:center;"
		>
			<Typewriter phrases={config.phrases} speed={100} />
		</div>

		<img
			src="/images/backgrounds/tedx-background.jpg"
			alt="TEDx event background"
			class="full-width hero-image"
		/>

		<div class="content">
			{#each config.content as item}
				{#each item.split("\n") as line}
					<p>{@html line}</p>
				{/each}
			{/each}
		</div>

		<script>
		</script>

		<h1 id="speakers" style="padding-top:50px">Speakers</h1>
		<h2>Nominate someone amazing, perhaps that someone is you?!</h2>

		<ProfileCard
			profileImage="/images/speaker.png"
			link="https://www.ted.com/talks/sushruthi_krishna_the_success_story_of_a_girl_from_bangalore"
			title="SPEAKER"
			subtitle="change maker"
			name="SUSHRUTHI KRISHNA"
			subname="Model & Architect"
			description="Too often we underestimate the power of a touch, a smile, a kind word, a listening ear, an honest compliment, the smallest act of caring, all of which have the potential to turn a life around."
		/>

		<h1 id="about" style="padding-top:50px">About us</h1>

		<ProfileCard
			profileImage="/images/team/ishimwe.png"
			link="https://www.linkedin.com/in/ishimweolivier/"
			title="FOUNDER"
			subtitle="CEO"
			name="Olivier ISHIMWE"
			subname="Impact-Driven Entrepreneur"
			description={`Entrepreneurial Leadership student at the African Leadership College of Higher Education, passionate about education, digital innovation, and youth empowerment. Dedicated to fostering a culture of ideas worth spreading and inspiring positive change in the community.`}
		/>

		<ProfileCard
			profileImage="/images/team/patii.png"
			title="DIRECTOR"
			subtitle="Marketing"
			name="Patii"
			subname="Comms & Marketing Specialist"
			description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`}
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
