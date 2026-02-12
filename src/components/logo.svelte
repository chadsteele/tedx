<script>
	import config from "../../config.js"

	export let href = "/"
</script>

<a {href} class="ted-brand">
	<span class="ted-red">TED<sup>x</sup></span>
	<span class="ted-white">{config.location}</span>
</a>

<style>
	.ted-brand {
		text-decoration: none;
		font-weight: bold;
		letter-spacing: -1px;
		display: inline-flex;
		align-items: center;
		gap: 5px;
		font-family: Helvetica, Arial, sans-serif;
		font-size: 1em;
	}

	:global(.ted-brand .ted-red) {
		color: #ff2b06;
		display: inline;
		line-height: 1;
	}

	:global(.ted-brand .ted-red sup) {
		font-size: 0.65em;
		vertical-align: super;
	}

	:global(.ted-brand .ted-white) {
		color: #ffffff;
	}
</style>
