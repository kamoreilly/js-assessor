<!--
	ButtonGroup Component
	
	A container for grouping multiple buttons with consistent spacing and layout.
	Supports both horizontal and vertical orientations.
	
	Props:
	- buttons: Array of button configurations
	- orientation: Layout orientation ('horizontal' | 'vertical')
	- class: Additional CSS classes
	- gap: Spacing between buttons ('sm' | 'md' | 'lg')
-->

<script lang="ts">
	import Button from './Button.svelte';
	import type { ActionButtonConfig } from './types.js';
	
	interface Props {
		buttons: ActionButtonConfig[];
		orientation?: 'horizontal' | 'vertical';
		class?: string;
		gap?: 'sm' | 'md' | 'lg';
	}
	
	let {
		buttons,
		orientation = 'horizontal',
		class: className = '',
		gap = 'md'
	}: Props = $props();
	
	const orientationClasses = {
		horizontal: 'flex flex-row flex-wrap',
		vertical: 'flex flex-col'
	};
	
	const gapClasses = {
		sm: 'gap-1',
		md: 'gap-2',
		lg: 'gap-3'
	};
	
	const containerClasses = `${orientationClasses[orientation]} ${gapClasses[gap]} ${className}`;
</script>

<div class={containerClasses}>
	{#each buttons as button}
		<Button
			variant={button.variant}
			size={button.size}
			disabled={button.disabled}
			onclick={button.onclick}
			href={button.href}
		>
			{button.label}
		</Button>
	{/each}
</div>
