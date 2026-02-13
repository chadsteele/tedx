<script>
	export let profileImage
	export let title
	export let subtitle
	export let description
	export let logo
	export let date = "14TH OCTOBER 2017"
</script>

<div class="card-container">
	<div class="background-decor">
		<div
			class="bg-image"
			style="background-image: url({profileImage})"
		></div>
		<div class="circle top-right"></div>
		<div class="circle bottom-left"></div>
	</div>

	<div class="white-box">
		<div class="vertical-text">
			<span class="speaker-label">SPEAKER</span>
			<span class="date-label">{date}</span>
		</div>

		<div class="img-wrapper">
			<img src={profileImage} alt={title} class="profile-img" />
		</div>
	</div>
	<div class="info-overlay">
		<h1 class="title">{title}</h1>
		<h2 class="subtitle">{subtitle}</h2>
		<hr class="divider" />
		<p class="description">{description}</p>
	</div>

	<div class="footer-logo">
		<img src={logo} alt="Event Logo" />
	</div>
</div>

<style>
	@keyframes slideUp {
		from {
			opacity: 0;
			transform: translateY(20px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	@keyframes fadeIn {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}

	@keyframes float {
		0% {
			transform: translateY(0px);
		}
		50% {
			transform: translateY(-10px);
		}
		100% {
			transform: translateY(0px);
		}
	}

	.card-container {
		position: relative;
		width: 100%;
		max-width: 800px;
		aspect-ratio: 8 / 5;
		background-color: #f0f0f0;
		font-family: "Helvetica", "Arial", sans-serif;
		display: flex;
		align-items: center;
		justify-content: center;
		overflow: hidden;
		margin: auto;
		animation: fadeIn 1s ease-out;
		border-radius: 5px;
		box-shadow: 0 5px 20px rgba(0, 0, 0, 0.5);
	}

	.background-decor .circle {
		position: absolute;
		border: 5rem solid #ff2b06;
		border-radius: 50%;
		width: 15vw;
		height: 15vw;
		max-width: 150px;
		max-height: 150px;
		transition: transform 0.5s ease;
	}

	.background-decor .bg-image {
		position: absolute;
		top: -20%;
		right: -20%;
		width: 80%;
		height: 140%;
		background-size: cover;
		background-position: center top;
		opacity: 0.15;
		filter: hue-rotate(200deg) saturate(1.5) brightness(1.1);
		/* transform: scale(1.2); */
		z-index: 0;
	}

	.card-container:hover .top-right {
		transform: scale(1.1) translate(10px, -10px);
	}
	.top-right {
		top: -20%;
		right: -20%;
	}
	.bottom-left {
		bottom: -20%;
		left: -20%;
	}

	.white-box {
		position: absolute;
		left: 5%;
		top: 10%;
		width: 50%;
		height: 80%;
		background: white;
		border-radius: 15px;
		box-shadow: 0 5px 20px rgba(0, 0, 0, 0.5);
		display: flex;
		overflow: visible;
	}

	.vertical-text {
		position: absolute;
		left: 40px;
		top: 20px;
		height: 100%;
		width: 60px;
		display: flex;
		flex-direction: column;
		align-items: flex-end;
		justify-content: flex-end;
		color: #ccc;
		font-weight: bold;
		white-space: nowrap;
		animation: fadeIn 1.5s ease-in;
		writing-mode: vertical-rl;
		transform: rotate(180deg);
	}

	.speaker-label {
		font-size: clamp(2rem, 6vw, 4rem);
		opacity: 0.3;
		letter-spacing: 5px;
	}
	.date-label {
		font-size: 0.7rem;
		letter-spacing: 2px;
		margin-top: 0px;
	}

	.img-wrapper {
		position: absolute;
		bottom: 0;
		right: 0;
		height: 110%;
		z-index: 2;
	}

	.profile-img {
		height: 100%;
		object-fit: cover;
		animation: slideUp 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
	}

	.info-overlay {
		position: absolute;
		right: 30px;
		top: 15%;
		width: 35%;
		background: white;
		padding: 5%;
		padding-left: 25%;
		border-radius: 10px;
		box-shadow: 0 5px 20px rgba(0, 0, 0, 0.5);
		z-index: 1;
		animation: slideUp 0.8s ease-out 0.2s both;
	}

	.title {
		color: #e62b1e;
		font-size: clamp(1.2rem, 4vw, 2.2rem);
		margin: 0;
		text-transform: uppercase;
		letter-spacing: 2px;
		line-height: 1.1;
	}

	.subtitle {
		color: #888;
		font-size: clamp(0.9rem, 2vw, 1.2rem);
		font-weight: normal;
		margin: 0.5rem 0 1.5rem 0;
	}

	.divider {
		border: none;
		border-top: 3px solid #e62b1e;
		width: 60px;
		margin: 0 0 1rem 0;
		transition: width 0.4s ease;
	}

	.info-overlay:hover .divider {
		width: 100px;
	}

	.description {
		color: #666;
		font-size: clamp(0.7rem, 1.5vw, 0.9rem);
		line-height: 1.5;
		margin: 0;
	}

	.footer-logo {
		position: absolute;
		bottom: 3%;
		right: 5%;
		height: 8%;
		animation: fadeIn 2s ease-in;
	}

	.footer-logo img {
		height: 100%;
		width: auto;
	}

	@media (max-width: 600px) {
		.card-container {
			aspect-ratio: auto;
			height: auto;
			padding: 2rem 0;
			flex-direction: column;
		}
		.white-box {
			height: auto;
			flex-direction: column;
			align-items: center;
			padding-bottom: 2rem;
		}
		.img-wrapper {
			position: relative;
			left: 0;
			height: 300px;
			margin-top: -10%;
		}
		.info-overlay {
			position: relative;
			width: 85%;
			right: 0;
			top: 0;
			transform: none !important;
			box-shadow: none;
			padding: 1rem;
		}
		.vertical-text {
			display: none;
		}
	}
</style>
