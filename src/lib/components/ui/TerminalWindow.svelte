<!--
	TerminalWindow Component
	
	A reusable terminal-style window container with optional dots and customizable padding.
	Used throughout the application for consistent terminal aesthetic.
	
	Props:
	- class: Additional CSS classes
	- padding: Padding size ('sm' | 'md' | 'lg')
	- showDots: Whether to show terminal dots (default: true)
	- hoverEffect: Whether to show hover border effect (default: false)
-->

<script lang="ts">
	import type { TerminalWindowProps } from './types.js';
	import type { Snippet } from 'svelte';

	interface Props extends TerminalWindowProps {
		hoverEffect?: boolean;
		children?: Snippet;
	}

	let {
		class: className = '',
		padding = 'md',
		showDots = true,
		hoverEffect = false,
		children
	}: Props = $props();

	const paddingClasses = {
		sm: 'p-3 pt-8',
		md: 'p-4 sm:p-6 pt-10 sm:pt-12',
		lg: 'p-6 sm:p-8 pt-12 sm:pt-16'
	};

	const hoverClass = hoverEffect ? 'hover:border-[var(--color-accent)] transition-colors' : '';
</script>

<div class="terminal-window {paddingClasses[padding]} {hoverClass} {className}">
	{#if showDots}
		<div class="terminal-dots">
			<div class="terminal-dot terminal-dot-red"></div>
			<div class="terminal-dot terminal-dot-yellow"></div>
			<div class="terminal-dot terminal-dot-green"></div>
		</div>
	{/if}

	{@render children?.()}
</div>
