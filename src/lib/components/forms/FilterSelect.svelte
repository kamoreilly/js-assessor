<!--
	FilterSelect Component
	
	A reusable select dropdown with consistent styling and terminal theme.
	Used for filter functionality across different pages.
	
	Props:
	- value: Current selected value (bindable)
	- options: Array of option objects with value and label
	- label: Optional label for the select
	- id: Select ID for accessibility
	- class: Additional CSS classes
	- size: Select size ('sm' | 'md' | 'lg')
-->

<script lang="ts">
	import type { FilterOption } from './types.js';
	
	interface Props {
		value: string;
		options: FilterOption[];
		label?: string;
		id?: string;
		class?: string;
		size?: 'sm' | 'md' | 'lg';
	}
	
	let {
		value = $bindable(),
		options,
		label,
		id,
		class: className = '',
		size = 'md'
	}: Props = $props();
	
	const sizeClasses = {
		sm: 'px-2 py-1 text-xs',
		md: 'px-3 py-2 text-sm',
		lg: 'px-4 py-3 text-base'
	};
	
	const labelSizeClasses = {
		sm: 'text-xs',
		md: 'text-sm',
		lg: 'text-base'
	};
</script>

<div class={className}>
	{#if label}
		<label for={id} class="block font-mono {labelSizeClasses[size]} text-[var(--color-text)] mb-2">
			{label}
		</label>
	{/if}
	
	<select
		{id}
		bind:value
		class="w-full {sizeClasses[size]} bg-[var(--color-surface-light)] border border-[var(--color-border)] rounded font-mono text-[var(--color-text)] focus:border-[var(--color-accent)] focus:outline-none transition-colors"
	>
		{#each options as option}
			<option value={option.value}>{option.label}</option>
		{/each}
	</select>
</div>
