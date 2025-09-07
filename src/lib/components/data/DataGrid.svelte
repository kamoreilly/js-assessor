<!--
	DataGrid Component
	
	A responsive grid container for displaying data cards or other items.
	Automatically handles responsive layout and consistent spacing.
	
	Props:
	- items: Array of data items to display
	- columns: Number of columns for different screen sizes
	- gap: Spacing between grid items
	- class: Additional CSS classes
	- emptyMessage: Message to show when no items
	- renderItem: Function to render each item (optional, uses slot by default)
-->

<script lang="ts">
	interface Props {
		items: any[];
		columns?: number | { sm?: number; md?: number; lg?: number; xl?: number };
		gap?: 'sm' | 'md' | 'lg';
		class?: string;
		emptyMessage?: string;
		renderItem?: (item: any, index: number) => any;
		children?: (item: any, index: number) => any;
	}
	
	let {
		items,
		columns = { sm: 1, md: 2, lg: 3, xl: 4 },
		gap = 'md',
		class: className = '',
		emptyMessage = 'No items to display',
		renderItem,
		children
	}: Props = $props();
	
	// Handle both number and object column definitions
	const columnConfig = typeof columns === 'number' 
		? { sm: Math.min(columns, 2), md: Math.min(columns, 3), lg: columns, xl: columns }
		: { sm: 1, md: 2, lg: 3, xl: 4, ...columns };
	
	const gapClasses = {
		sm: 'gap-3',
		md: 'gap-4 sm:gap-6',
		lg: 'gap-6 sm:gap-8'
	};
	
	// Build responsive grid classes
	const gridClasses = [
		'grid',
		`grid-cols-${columnConfig.sm}`,
		columnConfig.md ? `md:grid-cols-${columnConfig.md}` : '',
		columnConfig.lg ? `lg:grid-cols-${columnConfig.lg}` : '',
		columnConfig.xl ? `xl:grid-cols-${columnConfig.xl}` : '',
		gapClasses[gap]
	].filter(Boolean).join(' ');
</script>

{#if items.length > 0}
	<div class="{gridClasses} {className}">
		{#each items as item, index}
			{#if renderItem}
				{@html renderItem(item, index)}
			{:else}
				{@render children?.(item, index)}
			{/if}
		{/each}
	</div>
{:else}
	<div class="text-center py-12 {className}">
		<p class="font-mono text-[var(--color-text-muted)] text-sm sm:text-base">
			{emptyMessage}
		</p>
	</div>
{/if}
