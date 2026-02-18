<script>
	export let id
	export let profileImage
	export let name
	export let subname
	export let title
	export let subtitle
	export let description
	export let link = ""
	export let type = "speaker"

	let cardElement

	id =
		(id || name) &&
		(id || name)
			.split(/\s+/)
			.map(
				(word) =>
					word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(),
			)
			.join("")
</script>

<div
	{id}
	class="card-container"
	class:clickable={link}
	bind:this={cardElement}
	on:click={() => link && window.open(link)}
	on:keydown={(e) => e.key === "Enter" && link && window.open(link)}
	role="button"
	tabindex="0"
	class:hidden-until-view={true}
>
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
			<span class="speaker-label">{title}</span>
			<span class="date-label">{subtitle}</span>
		</div>

		<div class="img-wrapper">
			<img src={profileImage} alt={title} class="profile-img" />
		</div>
	</div>
	<div class="info-overlay">
		<h1 class="title">{name}</h1>
		<h2 class="subtitle">{subname}</h2>
		<hr class="divider" />
		<div class="description">
			{description}
		</div>
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
		padding-top: 70px !important;
		margin: 5em auto;
		position: relative;
		width: 100%;
		max-width: 800px;
		height: auto;
		aspect-ratio: 8 / 5;
		background-color: #f0f0f0;
		font-family: "Helvetica", "Arial", sans-serif;
		display: flex;
		align-items: center;
		justify-content: center;
		overflow: hidden;
		border-radius: 5px;
		box-shadow: 0 5px 20px rgba(0, 0, 0, 0.5);
		opacity: 1;
		transform: translateY(0);
		transition:
			opacity 0.6s ease-out,
			transform 0.3s ease-out;
	}

	.card-container.clickable {
		cursor: pointer;
	}

	.card-container.clickable:hover,
	.card-container.clickable:active {
		transform: scale(1.1);
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
		z-index: 3;
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
		z-index: 2;
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
		overflow: visible;
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
		max-height: 150px;
		overflow-y: auto;
		word-wrap: break-word;
	}

	@media (max-width: 600px) {
		.card-container {
			margin: 3em auto;
			aspect-ratio: auto;
			min-height: auto;
			padding: 1rem;
			width: calc(100% - 2rem);
			flex-direction: column;
			align-items: center;
			gap: 0;
			overflow: hidden;
		}

		.white-box {
			position: relative;
			left: auto;
			top: auto;
			width: 90%;
			height: auto;
			min-height: 250px;
		}

		.img-wrapper {
			position: absolute;
			bottom: 0;
			right: 0;
			left: auto;
			height: 110%;
			z-index: 1;
		}

		.info-overlay {
			position: relative;
			right: auto;
			top: auto;
			width: 90%;
			padding: 5%;
			padding-left: 5%;
			transform: none !important;
			margin-top: -20px;
			z-index: 5;
		}

		.vertical-text {
			left: 20px;
			top: 10px;
		}

		.speaker-label {
			font-size: 2rem;
		}

		.background-decor .circle {
			width: 80px;
			height: 80px;
			border-width: 2rem;
		}
	}
</style>
