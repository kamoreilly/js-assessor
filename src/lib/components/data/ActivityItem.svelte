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

<div
	class="flex items-start gap-3 rounded border border-[var(--color-border)] bg-[var(--color-surface)] p-3 {className}"
>
	<!-- Status Indicator -->
	<div class="mt-2 h-2 w-2 flex-shrink-0 rounded-full" style="background-color: {dotColor}"></div>

	<!-- Content -->
	<div class="min-w-0 flex-1">
		<div class="mb-1 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
			<span class="break-words font-mono text-xs text-[var(--color-text)] sm:text-sm">
				{title}
			</span>
			<span class="flex-shrink-0 font-mono text-xs text-[var(--color-text-muted)]">
				{timestamp}
			</span>
		</div>

		<p class="break-words font-mono text-xs text-[var(--color-text-secondary)]">
			{description}
			{#if user}
				<span class="text-[var(--color-text-muted)]"> • {user}</span>
			{/if}
		</p>
	</div>
</div>
