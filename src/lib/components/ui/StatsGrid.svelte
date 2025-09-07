<!--
	StatsGrid Component
	
	A responsive grid container for displaying multiple statistics cards.
	Automatically handles responsive layout and consistent spacing.
	
	Props:
	- stats: Array of statistics data
	- columns: Number of columns for different screen sizes
	- class: Additional CSS classes
	- cardSize: Size of individual stat cards
-->

<script lang="ts">
	import StatCard from './StatCard.svelte';
	import type { StatCardData } from './types.js';
	
	interface Props {
		stats: StatCardData[];
		columns?: {
			sm?: number;
			md?: number;
			lg?: number;
			xl?: number;
		};
		class?: string;
		cardSize?: 'sm' | 'md' | 'lg';
	}
	
	let {
		stats,
		columns = { sm: 2, md: 3, lg: 4, xl: 6 },
		class: className = '',
		cardSize = 'md'
	}: Props = $props();
	
	// Build responsive grid classes
	const gridClasses = [
		`grid`,
		columns.sm ? `grid-cols-${columns.sm}` : 'grid-cols-2',
		columns.md ? `md:grid-cols-${columns.md}` : 'md:grid-cols-3',
		columns.lg ? `lg:grid-cols-${columns.lg}` : 'lg:grid-cols-4',
		columns.xl ? `xl:grid-cols-${columns.xl}` : 'xl:grid-cols-6',
		'gap-3 sm:gap-4'
	].join(' ');
</script>

<div class="{gridClasses} {className}">
	{#each stats as stat}
		<StatCard
			value={stat.value}
			label={stat.label}
			color={stat.color}
			size={cardSize}
		/>
	{/each}
</div>
