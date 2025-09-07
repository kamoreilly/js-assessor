<!--
	StatusBadge Component
	
	A reusable status badge with consistent styling and color coding.
	Used for displaying status information across the application.
	
	Props:
	- status: The status text to display
	- variant: Color variant ('default' | 'success' | 'warning' | 'error' | 'info')
	- size: Badge size ('sm' | 'md' | 'lg')
	- showDot: Whether to show a colored dot indicator
	- class: Additional CSS classes
-->

<script lang="ts">
	interface Props {
		status: string;
		variant?: 'default' | 'success' | 'warning' | 'error' | 'info';
		size?: 'sm' | 'md' | 'lg';
		showDot?: boolean;
		class?: string;
	}
	
	let {
		status,
		variant = 'default',
		size = 'md',
		showDot = false,
		class: className = ''
	}: Props = $props();
	
	const variantColors = {
		default: 'var(--color-text-secondary)',
		success: 'var(--color-success)',
		warning: 'var(--color-accent)',
		error: '#ef4444',
		info: 'var(--color-primary)'
	};
	
	const sizeClasses = {
		sm: 'text-xs px-2 py-1',
		md: 'text-xs sm:text-sm px-2 sm:px-3 py-1',
		lg: 'text-sm px-3 py-1'
	};
	
	const color = variantColors[variant];
</script>

<span 
	class="font-mono font-semibold rounded inline-flex items-center gap-2 {sizeClasses[size]} {className}"
	style="color: {color}; background-color: {color}20;"
>
	{#if showDot}
		<div class="w-2 h-2 rounded-full" style="background-color: {color}"></div>
	{/if}
	{status}
</span>
