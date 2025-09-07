<!--
	StatCard Component
	
	A reusable statistics card with terminal window styling.
	Used for displaying key metrics and statistics across all pages.
	
	Props:
	- value: The main statistic value to display
	- label: The label/description for the statistic
	- color: Optional color override for the value
	- icon: Optional icon/emoji to display
	- class: Additional CSS classes
	- size: Card size ('sm' | 'md' | 'lg')
-->

<script lang="ts">
	import TerminalWindow from './TerminalWindow.svelte';
	import type { StatCardData } from './types.js';

	interface Props extends StatCardData {
		class?: string;
		size?: 'sm' | 'md' | 'lg';
	}

	let {
		value,
		label,
		color = 'var(--color-accent)',
		class: className = '',
		size = 'md'
	}: Props = $props();

	const sizeClasses = {
		sm: 'text-lg',
		md: 'text-xl sm:text-2xl',
		lg: 'text-2xl sm:text-3xl'
	};

	const labelSizeClasses = {
		sm: 'text-xs',
		md: 'text-xs sm:text-sm',
		lg: 'text-sm sm:text-base'
	};
</script>

<TerminalWindow class="text-center {className}" padding="sm">
	<div class="{sizeClasses[size]} mb-1 font-mono font-bold" style="color: {color}">
		{value}
	</div>
	<div class="{labelSizeClasses[size]} font-mono text-[var(--color-text-secondary)]">
		{label}
	</div>
</TerminalWindow>
