<script>
	import config from "../../config.js"

	export let href = "/"
</script>

<a {href} class="ted-brand">
	<span class="ted-red">TED<span class="ted-x">x</span></span>
	<span class="ted-white">{config.location}</span>
</a>

<style>
	.ted-brand {
		text-decoration: none;
		font-weight: 900;
		letter-spacing: -2px;
		display: inline-flex;
		align-items: center;
		gap: 2px;
		font-family: -apple-system, BlinkMacSystemFont, "Segoe UI",
			"Helvetica Neue", sans-serif;
		font-size: 1em;
	}

	:global(.ted-brand .ted-red) {
		color: #ff2b06;
		display: inline-flex;
		align-items: center;
		gap: 0;
		line-height: 1;
		font-weight: 900;
		letter-spacing: -2px;
	}

	:global(.ted-brand .ted-red .ted-x) {
		font-size: 0.6em;
		position: relative;
		top: -0.3em;
		margin-left: 1px;
	}

	:global(.ted-brand .ted-white) {
		color: #ffffff;
		font-weight: 400;
		letter-spacing: normal;
	}

	:global(.ted-brand .ted-red sup) {
		font-size: 0.6em;
		vertical-align: super;
		font-weight: 900;
	}
</style>
