<!--
	LoginForm Component
	
	A terminal-themed login form with validation for the FSCA Compliance Application.
	Features email/username input, password input, remember me checkbox, and login button.
	
	Props:
	- class: Additional CSS classes
	- onLogin: Function to handle login submission
	- loading: Whether the form is in loading state
	- error: Error message to display
	- initialEmail: Initial email value
	- showRememberMe: Whether to show remember me checkbox (default: true)
	- showLinks: Whether to show forgot password and sign up links (default: true)
-->

<script lang="ts">
	import type { LoginFormProps, LoginFormData, FormValidationErrors } from './types.js';
	import Button from '../buttons/Button.svelte';
	import TerminalWindow from '../ui/TerminalWindow.svelte';
	import { createEventDispatcher } from 'svelte';

	interface Props extends LoginFormProps {
		class?: string;
		children?: any;
	}

	let {
		class: className = '',
		onLogin,
		loading = false,
		error = '',
		initialEmail = '',
		showRememberMe = true,
		showLinks = true,
		children
	}: Props = $props();

	const dispatch = createEventDispatcher();

	// Form data
	let formData: LoginFormData = {
		email: initialEmail,
		password: '',
		rememberMe: false
	};

	// Validation errors
	let validationErrors: FormValidationErrors = {
		email: '',
		password: ''
	};

	// Validation state
	let isValid = {
		email: false,
		password: false
	};

	// Focus states for keyboard navigation
	let focusedField = $state('');

	// Email validation regex
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

	// Validation functions
	function validateEmail(email: string): boolean {
		if (!email.trim()) {
			validationErrors.email = 'Email is required';
			return false;
		}
		
		if (!emailRegex.test(email)) {
			validationErrors.email = 'Please enter a valid email address';
			return false;
		}
		
		validationErrors.email = '';
		return true;
	}

	function validatePassword(password: string): boolean {
		if (!password) {
			validationErrors.password = 'Password is required';
			return false;
		}
		
		if (password.length < 8) {
			validationErrors.password = 'Password must be at least 8 characters long';
			return false;
		}
		
		// Basic password strength validation
		const hasUpperCase = /[A-Z]/.test(password);
		const hasLowerCase = /[a-z]/.test(password);
		const hasNumbers = /\d/.test(password);
		const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
		
		if (!hasUpperCase || !hasLowerCase || !hasNumbers || !hasSpecialChar) {
			validationErrors.password = 'Password must contain uppercase, lowercase, numbers, and special characters';
			return false;
		}
		
		validationErrors.password = '';
		return true;
	}

	function validateForm(): boolean {
		const isEmailValid = validateEmail(formData.email);
		const isPasswordValid = validatePassword(formData.password);
		
		return isEmailValid && isPasswordValid;
	}

	// Event handlers
	function handleEmailInput(event: Event) {
		const target = event.target as HTMLInputElement;
		formData.email = target.value;
		isValid.email = validateEmail(formData.email);
	}

	function handlePasswordInput(event: Event) {
		const target = event.target as HTMLInputElement;
		formData.password = target.value;
		isValid.password = validatePassword(formData.password);
	}

	function handleRememberMeChange(event: Event) {
		const target = event.target as HTMLInputElement;
		formData.rememberMe = target.checked;
	}

	async function handleSubmit(event: Event) {
		event.preventDefault();
		
		if (!validateForm()) {
			return;
		}
		
		if (onLogin) {
			await onLogin(formData);
		} else {
			dispatch('login', formData);
		}
	}

	// Keyboard navigation
	function handleKeyDown(event: KeyboardEvent, field: string) {
		if (event.key === 'Enter') {
			if (field === 'email') {
				document.getElementById('password-input')?.focus();
			} else if (field === 'password') {
				handleSubmit(event);
			}
		}
	}

	// Set focus styles
	function setFocus(field: string) {
		focusedField = field;
	}

	function removeFocus(field: string) {
		if (focusedField === field) {
			focusedField = '';
		}
	}
</script>

<TerminalWindow padding="lg" class={className}>
	<div class="login-form-container">
		<div class="login-header">
			<h2 class="login-title">FSCA Compliance Terminal</h2>
			<p class="login-subtitle">Please authenticate to access the system</p>
		</div>

		{#if error}
			<div class="error-message terminal-text">
				ERROR: {error}
			</div>
		{/if}

		<form onsubmit={handleSubmit} class="login-form">
			<div class="form-group">
				<label for="email-input" class="form-label">
					Email Address
				</label>
				<input
					id="email-input"
					type="email"
					bind:value={formData.email}
					oninput={handleEmailInput}
					onfocus={() => setFocus('email')}
					onblur={() => removeFocus('email')}
					onkeydown={(e) => handleKeyDown(e, 'email')}
					class="form-input"
					class:focus={focusedField === 'email'}
					class:error={validationErrors.email}
					placeholder="user@example.com"
					autocomplete="email"
					required
				/>
				{#if validationErrors.email}
					<div class="field-error terminal-text">
						{validationErrors.email}
					</div>
				{/if}
			</div>

			<div class="form-group">
				<label for="password-input" class="form-label">
					Password
				</label>
				<input
					id="password-input"
					type="password"
					bind:value={formData.password}
					oninput={handlePasswordInput}
					onfocus={() => setFocus('password')}
					onblur={() => removeFocus('password')}
					onkeydown={(e) => handleKeyDown(e, 'password')}
					class="form-input"
					class:focus={focusedField === 'password'}
					class:error={validationErrors.password}
					placeholder="••••••••"
					autocomplete="current-password"
					required
				/>
				{#if validationErrors.password}
					<div class="field-error terminal-text">
						{validationErrors.password}
					</div>
				{/if}
			</div>

			{#if showRememberMe}
				<div class="form-group checkbox-group">
					<label class="checkbox-label">
						<input
							type="checkbox"
							bind:checked={formData.rememberMe}
							class="checkbox-input"
						/>
						<span class="checkbox-text">Remember me for 30 days</span>
					</label>
				</div>
			{/if}

			<div class="form-group">
				<Button
					type="submit"
					variant="primary"
					size="lg"
					loading={loading}
					disabled={loading || !isValid.email || !isValid.password}
					class="login-button"
				>
					{#if loading}
						Authenticating...
					{:else}
						Authenticate Access
					{/if}
				</Button>
			</div>
		</form>

		{#if showLinks}
			<div class="form-links">
				<a href="/forgot-password" class="form-link">
					Forgot Password?
				</a>
				<span class="link-separator">|</span>
				<a href="/signup" class="form-link">
					Create Account
				</a>
			</div>
		{/if}

		{@render children?.()}
	</div>
</TerminalWindow>

<style>
	.login-form-container {
		max-width: 400px;
		margin: 0 auto;
	}

	.login-header {
		text-align: center;
		margin-bottom: 2rem;
	}

	.login-title {
		font-family: var(--font-family-mono);
		font-size: 1.5rem;
		font-weight: 600;
		color: var(--color-text);
		margin-bottom: 0.5rem;
		letter-spacing: 0.05em;
	}

	.login-subtitle {
		font-family: var(--font-family-mono);
		font-size: 0.875rem;
		color: var(--color-text-secondary);
		margin: 0;
	}

	.error-message {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		background: rgba(239, 68, 68, 0.1);
		border: 1px solid rgba(239, 68, 68, 0.3);
		border-radius: 4px;
		padding: 0.75rem;
		margin-bottom: 1.5rem;
		color: #f87171;
	}

	.error-icon {
		font-size: 1rem;
	}

	.login-form {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
	}

	.form-group {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	.form-label {
		font-family: var(--font-family-mono);
		font-size: 0.875rem;
		font-weight: 500;
		color: var(--color-text);
		letter-spacing: 0.025em;
	}

	.form-input {
		width: 100%;
		padding: 0.75rem 1rem;
		background: var(--color-surface-light);
		border: 1px solid var(--color-border);
		border-radius: 4px;
		font-family: var(--font-family-mono);
		font-size: 0.875rem;
		color: var(--color-text);
		transition: all 0.2s ease;
		outline: none;
	}

	.form-input:focus {
		border-color: var(--color-accent);
		box-shadow: 0 0 0 2px rgba(251, 191, 36, 0.1);
	}

	.form-input.error {
		border-color: #f87171;
	}

	.form-input.error:focus {
		border-color: #f87171;
		box-shadow: 0 0 0 2px rgba(239, 68, 68, 0.1);
	}

	.form-input::placeholder {
		color: var(--color-text-muted);
	}

	.field-error {
		font-size: 0.75rem;
		color: #f87171;
		margin-top: 0.25rem;
	}

	.checkbox-group {
		flex-direction: row;
		align-items: center;
	}

	.checkbox-label {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		cursor: pointer;
		font-family: var(--font-family-mono);
		font-size: 0.875rem;
		color: var(--color-text);
	}

	.checkbox-input {
		width: 1rem;
		height: 1rem;
		background: var(--color-surface-light);
		border: 1px solid var(--color-border);
		border-radius: 2px;
		cursor: pointer;
		accent-color: var(--color-accent);
	}

	.checkbox-text {
		user-select: none;
	}


	.form-links {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 1rem;
		margin-top: 1.5rem;
		padding-top: 1.5rem;
		border-top: 1px solid var(--color-border);
	}

	.form-link {
		font-family: var(--font-family-mono);
		font-size: 0.875rem;
		color: var(--color-primary);
		text-decoration: none;
		transition: color 0.2s ease;
	}

	.form-link:hover {
		color: var(--color-primary-bright);
		text-decoration: underline;
	}

	.link-separator {
		color: var(--color-text-muted);
	}

	/* Responsive design */
	@media (max-width: 640px) {
		.login-form-container {
			max-width: 100%;
		}

		.login-title {
			font-size: 1.25rem;
		}

		.login-subtitle {
			font-size: 0.75rem;
		}

		.form-input {
			padding: 0.625rem 0.875rem;
			font-size: 0.813rem;
		}

		.form-links {
			flex-direction: column;
			gap: 0.75rem;
		}

		.link-separator {
			display: none;
		}
	}
</style>