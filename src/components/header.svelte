<script>
	import config from "../../config.js"
	import Logo from "./logo.svelte"

	let isMenuOpen = false

	function toggleMenu() {
		isMenuOpen = !isMenuOpen
	}

	function closeMenu() {
		isMenuOpen = false
	}

	const navItems = [
		{label: "Home", href: "#home"},
		{label: "Speakers", href: "#speakers"},
		{label: "Dates", href: "#dates"},
		{label: "About", href: "#about"},
		{label: "Contact", href: "#contact"},
	]
</script>

<nav class="ted-nav">
	<div class="ted-nav-container">
		<div class="ted-nav-logo">
			<Logo href="#home" />
		</div>

		<ul class="ted-nav-list" class:open={isMenuOpen}>
			{#each navItems as item (item.label)}
				<li class="ted-nav-item">
					<a href={item.href} on:click={closeMenu}>{item.label}</a>
				</li>
			{/each}
		</ul>

		<div class="ted-nav-actions">
			<button class="ted-nav-share" aria-label="Share">
				<svg
					width="20"
					height="20"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
				>
					<circle cx="18" cy="5" r="3"></circle>
					<circle cx="6" cy="12" r="3"></circle>
					<circle cx="18" cy="19" r="3"></circle>
					<line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
					<line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
				</svg>
			</button>
		</div>

		<button
			class="ted-menu-toggle"
			on:click={toggleMenu}
			aria-label="Toggle menu"
		>
			<span class="hamburger" class:active={isMenuOpen}>
				<span></span>
				<span></span>
				<span></span>
			</span>
		</button>
	</div>
</nav>

<style>
	.ted-nav {
		background-color: #000000;
		border-bottom: 2px solid #ff2b06;
		position: sticky;
		top: 0;
		z-index: 1000;
		font-family: Helvetica, Arial, sans-serif;
	}

	.ted-nav-container {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0 40px;
		max-width: 1200px;
		margin: 0 auto;
	}

	.ted-nav-logo {
		flex-shrink: 0;
	}

	.ted-nav-list {
		display: flex;
		list-style: none;
		margin: 0;
		padding: 0;
		gap: 30px;
	}

	.ted-nav-actions {
		display: flex;
		align-items: center;
		gap: 20px;
		margin-left: 30px;
	}

	.ted-nav-search,
	.ted-nav-share {
		background: none;
		border: none;
		color: #ffffff;
		cursor: pointer;
		padding: 8px;
		display: flex;
		align-items: center;
		justify-content: center;
		transition: color 0.3s ease;
	}

	.ted-nav-search:hover,
	.ted-nav-share:hover {
		color: #ff2b06;
	}

	.ted-nav-item a {
		color: #ffffff;
		text-decoration: none;
		border-bottom: none;
		font-size: 14px;
		font-weight: 500;
		transition: color 0.3s ease;
		padding: 12px 0;
		display: inline-block;
	}

	.ted-nav-item a:hover {
		color: #ff2b06;
		border-bottom: none;
	}

	.ted-menu-toggle {
		display: none;
		background: none;
		border: none;
		cursor: pointer;
		padding: 0;
		flex-direction: column;
	}

	.hamburger {
		display: flex;
		flex-direction: column;
		gap: 6px;
	}

	.hamburger span {
		width: 25px;
		height: 3px;
		background-color: #ff2b06;
		transition: all 0.3s ease;
	}

	.hamburger.active span:nth-child(1) {
		transform: rotate(45deg) translate(10px, 10px);
	}

	.hamburger.active span:nth-child(2) {
		opacity: 0;
	}

	.hamburger.active span:nth-child(3) {
		transform: rotate(-45deg) translate(7px, -7px);
	}

	@media (max-width: 768px) {
		.ted-menu-toggle {
			display: flex;
		}

		.ted-nav-list {
			position: absolute;
			top: 100%;
			left: 0;
			right: 0;
			flex-direction: column;
			gap: 0;
			background-color: #000000;
			max-height: 0;
			overflow: hidden;
			transition: max-height 0.3s ease;
		}

		.ted-nav-list.open {
			max-height: 500px;
		}

		.ted-nav-item {
			border-top: 1px solid #333333;
		}

		.ted-nav-item a {
			display: block;
			padding: 15px 40px;
		}

		.ted-nav-container {
			padding: 0 20px;
		}

		.ted-nav-actions {
			display: none;
		}
	}
</style>
