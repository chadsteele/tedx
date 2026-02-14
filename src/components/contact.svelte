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

	let errors = {
		name: "",
		email: "",
		phone: "",
	}

	// Clear errors as user types
	$: if (name.trim() && errors.name) {
		errors.name = ""
	}

	$: if (email.trim() && errors.email) {
		if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
			errors.email = ""
		} else if (errors.email === "Email is required") {
			errors.email = ""
		}
	}

	$: if (phone.trim().length >= 7 && errors.phone) {
		errors.phone = ""
	}

	function validateForm() {
		let isValid = true
		errors = {name: "", email: "", phone: ""}

		if (!name.trim()) {
			errors.name = "Name is required"
			isValid = false
		}

		if (!email.trim()) {
			errors.email = "Email is required"
			isValid = false
		} else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
			errors.email = "Please enter a valid email address"
			isValid = false
		}

		if (!phone.trim()) {
			errors.phone = "Phone is required"
			isValid = false
		} else if (phone.trim().length < 7) {
			errors.phone = "Phone must be at least 7 characters"
			isValid = false
		}

		return isValid
	}

	async function handleSubmit(event) {
		if (!validateForm()) {
			return
		}

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
		data-netlify-honeypot="bot-field"
		novalidate
	>
		<input type="hidden" name="form-name" value="contact" />
		<p class="hidden">
			<label>Don't fill this out: <input name="bot-field" /></label>
		</p>

		{#if error}
			<p class="error-message">{error}</p>
		{/if}

		<div class="form-group" class:has-error={errors.name}>
			<input
				type="text"
				id="name"
				name="name"
				bind:value={name}
				placeholder=" "
				class:input-error={errors.name}
			/>
			<label for="name">Name</label>
			{#if errors.name}
				<span class="field-error">{errors.name}</span>
			{/if}
		</div>

		<div class="form-group" class:has-error={errors.email}>
			<input
				type="email"
				id="email"
				name="email"
				bind:value={email}
				placeholder=" "
				class:input-error={errors.email}
			/>
			<label for="email">Email</label>
			{#if errors.email}
				<span class="field-error">{errors.email}</span>
			{/if}
		</div>

		<div class="form-group" class:has-error={errors.phone}>
			<input
				type="tel"
				id="phone"
				name="phone"
				bind:value={phone}
				placeholder=" "
				class:input-error={errors.phone}
			/>
			<label for="phone">Phone</label>
			{#if errors.phone}
				<span class="field-error">{errors.phone}</span>
			{/if}
		</div>

		<fieldset class="checkbox-group">
			<legend>Select</legend>

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
			<textarea
				id="message"
				name="message"
				bind:value={message}
				rows="5"
				placeholder=" "
			></textarea>
			<label for="message">Message</label>
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

	.field-error {
		display: block;
		color: #ff2b06;
		font-size: 0.8rem;
		margin-top: 0.5rem;
		padding-left: 0.25rem;
	}

	.input-error {
		border-color: #ff2b06 !important;
	}

	.has-error label {
		color: #ff2b06 !important;
	}

	h2 {
		margin-bottom: 1.5rem;
	}

	.form-group {
		position: relative;
		margin-bottom: 1.75rem;
	}

	.form-group label {
		position: absolute;
		left: 1rem;
		top: 1rem;
		font-size: 1rem;
		color: #999;
		pointer-events: none;
		transition: all 0.2s ease;
		background-color: transparent;
		padding: 0;
	}

	.form-group input:focus + label,
	.form-group input:not(:placeholder-shown) + label,
	.form-group textarea:focus + label,
	.form-group textarea:not(:placeholder-shown) + label {
		top: -0.6rem;
		left: 0.75rem;
		font-size: 0.75rem;
		color: #ccc;
		background-color: #000;
		padding: 0 0.35rem;
	}

	input[type="text"],
	input[type="email"],
	input[type="tel"],
	textarea {
		width: 100%;
		padding: 1rem;
		border: 1px solid #444;
		border-radius: 4px;
		font-size: 1rem;
		background-color: transparent;
		color: #fff;
		transition: border-color 0.2s ease;
	}

	/* Override browser autofill styles */
	input:-webkit-autofill,
	input:-webkit-autofill:hover,
	input:-webkit-autofill:focus,
	textarea:-webkit-autofill {
		-webkit-box-shadow: 0 0 0 1000px #000 inset !important;
		-webkit-text-fill-color: #fff !important;
		caret-color: #fff;
	}

	input[type="text"]:focus,
	input[type="email"]:focus,
	input[type="tel"]:focus,
	textarea:focus {
		outline: none;
		border-color: #888;
	}

	textarea {
		resize: vertical;
		min-height: 120px;
	}

	.checkbox-group {
		border: 1px solid #444;
		border-radius: 4px;
		padding: 1.25rem;
		margin-bottom: 1.75rem;
	}

	legend {
		font-weight: 500;
		padding: 0 0.5rem;
		color: #ccc;
	}

	.checkbox-label {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		margin-bottom: 0.75rem;
		font-weight: normal;
		cursor: pointer;
		color: #ddd;
		transition: color 0.2s ease;
	}

	.checkbox-label:hover {
		color: #fff;
	}

	.checkbox-label input[type="checkbox"] {
		width: 1.1rem;
		height: 1.1rem;
		accent-color: #888;
		cursor: pointer;
	}

	button {
		background-color: #fff;
		color: #000;
		padding: 0.875rem 2.5rem;
		border: none;
		border-radius: 4px;
		font-size: 1rem;
		font-weight: 600;
		cursor: pointer;
		transition: all 0.2s ease;
		text-transform: uppercase;
		letter-spacing: 0.05em;
	}

	button:hover {
		background-color: #ddd;
	}
</style>
