<script>
	export let eventName = "ALCHE"
	export let tagline = `<span class="red-x">x</span> = independently organized TED event`
</script>

<div class="tedx-container">
	<div class="tedx-logo">
		<span class="ted-brand">TED<span class="ted-x">x</span></span>
		<span class="event-name">{eventName}</span>
	</div>
	{#if tagline}
		<div class="tagline">
			{@html tagline}
		</div>
	{/if}
</div>

<style>
	.tedx-container {
		display: inline-block;
		background-color: #000000;
		padding: 40px;
		font-family: Helvetica, Arial, sans-serif;
		color: #ffffff;
	}

	.tedx-logo {
		line-height: 1;
		letter-spacing: -2px;
		margin-bottom: 5px;
		font-size: 2em;
	}

	.ted-brand {
		color: #eb0028;
		font-weight: bold;
	}

	.ted-x {
		text-transform: lowercase;
		font-weight: bold;
	}

	.event-name {
		color: #ffffff;
		font-weight: normal;
	}

	.tagline {
		font-size: 0.75rem;
		font-weight: bold;
		letter-spacing: 0;
	}

	.red-x {
		color: #eb0028;
		text-transform: lowercase;
	}
</style>
