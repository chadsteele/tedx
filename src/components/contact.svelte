<script>
	let name = ""
	let email = ""
	let phone = ""
	let message = ""

	let volunteer = false
	let advertise = false
	let donate = false
	let nominateSpeaker = false
	let mailingList = false

	let submitted = false
	let error = ""

	async function handleSubmit(event) {
		const form = event.target
		const formData = new FormData(form)

		try {
			const response = await fetch("/", {
				method: "POST",
				headers: {"Content-Type": "application/x-www-form-urlencoded"},
				body: new URLSearchParams(formData).toString(),
			})

			if (response.ok) {
				submitted = true
				error = ""
			} else {
				error = "Something went wrong. Please try again."
			}
		} catch (err) {
			error = "Network error. Please try again."
		}
	}
</script>

{#if submitted}
	<div class="success-message">
		<h2>Thank you!</h2>
		<p>Your message has been sent. We'll be in touch soon.</p>
	</div>
{:else}
	<form
		on:submit|preventDefault={handleSubmit}
		class="contact-form"
		name="contact"
		method="POST"
		data-netlify="true"
		netlify-honeypot="bot-field"
	>
		<input type="hidden" name="form-name" value="contact" />
		<p class="hidden">
			<label>Don't fill this out: <input name="bot-field" /></label>
		</p>

		{#if error}
			<p class="error-message">{error}</p>
		{/if}

		<div class="form-group">
			<label for="name">Name</label>
			<input
				type="text"
				id="name"
				name="name"
				bind:value={name}
				required
			/>
		</div>

		<div class="form-group">
			<label for="email">Email</label>
			<input
				type="email"
				id="email"
				name="email"
				bind:value={email}
				required
			/>
		</div>

		<div class="form-group">
			<label for="phone">Phone</label>
			<input type="tel" id="phone" name="phone" bind:value={phone} />
		</div>

		<fieldset class="checkbox-group">
			<legend>I'm interested in:</legend>

			<label class="checkbox-label">
				<input
					type="checkbox"
					name="volunteer"
					bind:checked={volunteer}
				/>
				I want to volunteer
			</label>

			<label class="checkbox-label">
				<input
					type="checkbox"
					name="advertise"
					bind:checked={advertise}
				/>
				I want to advertise
			</label>

			<label class="checkbox-label">
				<input type="checkbox" name="donate" bind:checked={donate} />
				I want to donate
			</label>

			<label class="checkbox-label">
				<input
					type="checkbox"
					name="nominateSpeaker"
					bind:checked={nominateSpeaker}
				/>
				I want to nominate a speaker
			</label>

			<label class="checkbox-label">
				<input
					type="checkbox"
					name="mailingList"
					bind:checked={mailingList}
				/>
				I want on your list
			</label>
		</fieldset>

		<div class="form-group">
			<label for="message">Message</label>
			<textarea id="message" name="message" bind:value={message} rows="5"
			></textarea>
		</div>

		<button type="submit">Send Message</button>
	</form>
{/if}

<style>
	.contact-form {
		max-width: 500px;
		margin: 0 auto;
		padding: 2rem;
	}

	.hidden {
		display: none;
	}

	.success-message {
		max-width: 500px;
		margin: 0 auto;
		padding: 2rem;
		text-align: center;
	}

	.error-message {
		color: #e62b1e;
		margin-bottom: 1rem;
	}

	h2 {
		margin-bottom: 1.5rem;
	}

	.form-group {
		margin-bottom: 1rem;
	}

	label {
		display: block;
		margin-bottom: 0.5rem;
		font-weight: 500;
	}

	input[type="text"],
	input[type="email"],
	input[type="tel"],
	textarea {
		width: 100%;
		padding: 0.75rem;
		border: 1px solid #666;
		border-radius: 4px;
		font-size: 1rem;
		background-color: #111;
		color: #fff;
	}

	input[type="text"]:focus,
	input[type="email"]:focus,
	input[type="tel"]:focus,
	textarea:focus {
		outline: none;
		border-color: #fff;
	}

	.checkbox-group {
		border: 1px solid #666;
		border-radius: 4px;
		padding: 1rem;
		margin-bottom: 1rem;
	}

	legend {
		font-weight: 500;
		padding: 0 0.5rem;
	}

	.checkbox-label {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		margin-bottom: 0.5rem;
		font-weight: normal;
		cursor: pointer;
	}

	.checkbox-label input[type="checkbox"] {
		width: auto;
		accent-color: #999;
	}

	button {
		background-color: #333;
		color: #fff;
		padding: 0.75rem 2rem;
		border: none;
		border-radius: 4px;
		font-size: 1rem;
		font-weight: 600;
		cursor: pointer;
		transition: background-color 0.2s;
	}

	button:hover {
		background-color: #555;
	}
</style>
