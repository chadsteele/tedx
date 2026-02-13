<script>
	import config from "../../config.js"

	const socialLinks = [
		{
			icon: "envelope",
			label: "Email",
			href: "mailto:info@TEDxALCHE.com",
		},
		{icon: "facebook", label: "Facebook", href: "#"},
		{icon: "linkedin", label: "LinkedIn", href: "#"},
		{icon: "bluesky", label: "Bluesky", href: "#"},
		{icon: "instagram", label: "Instagram", href: "#"},
	]
</script>

<footer class="ted-footer">
	<div class="ted-footer-container">
		<!-- Social Media Links -->
		<div class="ted-social-links">
			{#each socialLinks as link (link.label)}
				<a
					href={link.href}
					class="ted-social-icon"
					aria-label={link.label}
					title={link.label}
				>
					<i
						class="fab fa-{link.icon === 'envelope'
							? 'envelope'
							: link.icon}"
					></i>
				</a>
			{/each}
		</div>

		<!-- What is<span >TEDx</span> Section -->
		<div class="ted-footer-content">
			<h2>What is <span>TEDx</span>?</h2>
			<p>
				In the spirit of ideas worth spreading,<span>TED</span>
				has created a program called<span>TEDx</span>.<span>TEDx</span>
				is a program of local, self-organized events that bring people together
				to share a<span>TED</span>-like experience. Our event is called
				<span>{config.title}</span>, where x = independently organized<span
					>TED</span
				>
				event. At our
				{config.title} event,<span>TED</span>Talks video and live
				speakers will combine to spark deep discussion and connection in
				a small group. The<span>TED</span>
				Conference provides general guidance for the<span>TEDx</span>
				program, but individual<span>TED</span>x events, including ours,
				are self-organized. Please note our
				<a href="/terms-and-conditions" class="ted-link"
					>Terms and Conditions</a
				>.
			</p>
		</div>

		<!-- Footer Bottom -->
		<div class="ted-footer-bottom">
			<p>
				COPYRIGHT {config.title.toUpperCase()} © {new Date().getFullYear()}.
				ALL RIGHTS RESERVED. THIS INDEPENDENT<span>TEDx</span>
				EVENT IS OPERATED UNDER LICENSE FROM
				<a href="https://www.ted.com" class="ted-link">TED</a>.
			</p>
		</div>
	</div>
</footer>

<style>
	.ted-footer {
		background-color: #000000;
		color: #ffffff;
		border-top: 2px solid #ff2b06;
		padding: 60px 40px;
		font-family: Helvetica, Arial, sans-serif;
		margin-top: 80px;
	}

	.ted-footer-container {
		max-width: 1200px;
		margin: 0 auto;
	}

	.ted-social-links {
		display: flex;
		justify-content: center;
		gap: 20px;
		margin-bottom: 60px;
	}

	.ted-social-icon {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 50px;
		height: 50px;
		border: 2px solid #ffffff;
		border-radius: 50%;
		color: #000000;
		background-color: #ffffff;
		font-size: 20px;
		transition: all 0.3s ease;
		text-decoration: none;
	}

	.ted-social-icon:hover {
		background-color: #ff2b06;
		border-color: #ff2b06;
		color: #ffffff;
		transform: scale(1.1);
	}

	.ted-footer-content {
		max-width: 900px;
		margin: 0 auto 40px;
	}

	.ted-footer-content h2 {
		font-size: 28px;
		margin-bottom: 20px;
		font-weight: bold;
	}

	:global(.ted-footer .ted-red) {
		color: #ff2b06;
	}

	.ted-footer-content p {
		font-size: 16px;
		line-height: 1.6;
		color: #dddddd;
	}

	.ted-link {
		color: #ff2b06;
		text-decoration: none;
		border-bottom: 1px solid #ff2b06;
		transition: color 0.3s ease;
	}

	.ted-link:hover {
		color: #ffffff;
		border-bottom-color: #ffffff;
	}

	.ted-footer-bottom {
		text-align: center;
		padding-top: 40px;
		border-top: 1px solid #333333;
		font-size: 12px;
		color: #cccccc;
	}

	.ted-footer-bottom p {
		margin: 0;
	}

	@media (max-width: 768px) {
		.ted-footer {
			padding: 40px 20px;
			margin-top: 60px;
		}

		.ted-social-links {
			margin-bottom: 40px;
		}

		.ted-footer-content h2 {
			font-size: 24px;
		}

		.ted-footer-content p {
			font-size: 14px;
		}

		.ted-footer-bottom {
			font-size: 11px;
		}

		.ted-social-icon {
			width: 45px;
			height: 45px;
			font-size: 18px;
		}
	}
</style>
