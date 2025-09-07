<!--
	SearchInput Component
	
	A reusable search input with consistent styling and terminal theme.
	Used for search functionality across different pages.
	
	Props:
	- value: Current search value (bindable)
	- placeholder: Input placeholder text
	- label: Optional label for the input
	- id: Input ID for accessibility
	- class: Additional CSS classes
	- size: Input size ('sm' | 'md' | 'lg')
-->

<script lang="ts">
	interface Props {
		value: string;
		placeholder?: string;
		label?: string;
		id?: string;
		class?: string;
		size?: 'sm' | 'md' | 'lg';
	}
	
	let {
		value = $bindable(),
		placeholder = 'Search...',
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
	
	<input
		{id}
		type="text"
		bind:value
		{placeholder}
		class="w-full {sizeClasses[size]} bg-[var(--color-surface-light)] border border-[var(--color-border)] rounded font-mono text-[var(--color-text)] placeholder-[var(--color-text-muted)] focus:border-[var(--color-accent)] focus:outline-none transition-colors"
	/>
</div>
