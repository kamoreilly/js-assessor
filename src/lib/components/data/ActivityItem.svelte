<!--
	ActivityItem Component
	
	A reusable activity item for displaying activity feed entries.
	Used in activity feeds across different pages.
	
	Props:
	- title: Activity title
	- description: Activity description
	- timestamp: When the activity occurred
	- status: Activity status for color coding
	- user: Optional user who performed the activity
	- icon: Optional icon for the activity
	- class: Additional CSS classes
-->

<script lang="ts">
	interface Props {
		title: string;
		description: string;
		timestamp: string;
		status?: 'success' | 'warning' | 'error' | 'info';
		user?: string;
		icon?: string;
		class?: string;
	}
	
	let {
		title,
		description,
		timestamp,
		status = 'info',
		user,
		class: className = ''
	}: Props = $props();
	
	const statusColors = {
		success: 'var(--color-success)',
		warning: 'var(--color-accent)',
		error: '#ef4444',
		info: 'var(--color-primary)'
	};
	
	const dotColor = statusColors[status];
</script>

<div class="flex items-start gap-3 p-3 bg-[var(--color-surface)] border border-[var(--color-border)] rounded {className}">
	<!-- Status Indicator -->
	<div class="w-2 h-2 rounded-full mt-2 flex-shrink-0" style="background-color: {dotColor}"></div>
	
	<!-- Content -->
	<div class="flex-1 min-w-0">
		<div class="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1 gap-1">
			<span class="font-mono text-xs sm:text-sm text-[var(--color-text)] break-words">
				{title}
			</span>
			<span class="font-mono text-xs text-[var(--color-text-muted)] flex-shrink-0">
				{timestamp}
			</span>
		</div>
		
		<p class="text-[var(--color-text-secondary)] font-mono text-xs break-words">
			{description}
			{#if user}
				<span class="text-[var(--color-text-muted)]"> • {user}</span>
			{/if}
		</p>
	</div>
</div>
