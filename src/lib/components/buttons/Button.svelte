<!--
	Button Component
	
	A reusable button with consistent styling and multiple variants.
	Used throughout the application for various actions.
	
	Props:
	- variant: Button style variant ('primary' | 'secondary' | 'danger' | 'success' | 'warning')
	- size: Button size ('xs' | 'sm' | 'md' | 'lg')
	- disabled: Whether the button is disabled
	- loading: Whether to show loading state
	- class: Additional CSS classes
	- onclick: Click handler function
	- href: Optional href for link behavior
-->

<script lang="ts">
	import type { ButtonVariant, ButtonSize } from './types.js';
	
	interface Props {
		variant?: ButtonVariant;
		size?: ButtonSize;
		disabled?: boolean;
		loading?: boolean;
		class?: string;
		onclick?: () => void;
		href?: string;
		children?: any;
	}
	
	let {
		variant = 'secondary',
		size = 'md',
		disabled = false,
		loading = false,
		class: className = '',
		onclick,
		href,
		children
	}: Props = $props();
	
	const variantClasses = {
		primary: 'btn-terminal-primary',
		secondary: 'btn-terminal',
		danger: 'btn-terminal text-red-400 hover:text-red-300 hover:border-red-400',
		success: 'btn-terminal text-[var(--color-success)] hover:border-[var(--color-success)]',
		warning: 'btn-terminal text-[var(--color-accent)] hover:border-[var(--color-accent)]'
	};
	
	const sizeClasses = {
		xs: 'px-2 py-1 text-xs',
		sm: 'px-3 py-2 text-xs sm:text-sm',
		md: 'px-4 py-2 sm:py-3 text-sm',
		lg: 'px-6 py-3 sm:py-4 text-base'
	};
	
	const baseClasses = 'font-mono rounded transition-transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100';
	const buttonClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
	
	function handleClick() {
		if (!disabled && !loading && onclick) {
			onclick();
		}
	}
</script>

{#if href}
	<a 
		{href}
		class={buttonClasses}
		class:opacity-50={disabled}
		class:pointer-events-none={disabled}
	>
		{#if loading}
			<span class="inline-block animate-spin mr-2">⏳</span>
		{/if}
		{@render children?.()}
	</a>
{:else}
	<button 
		class={buttonClasses}
		{disabled}
		onclick={handleClick}
	>
		{#if loading}
			<span class="inline-block animate-spin mr-2">⏳</span>
		{/if}
		{@render children?.()}
	</button>
{/if}
