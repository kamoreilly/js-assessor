<!--
	ProgressBar Component
	
	A reusable progress bar with customizable styling and colors.
	Used for displaying progress information across the application.
	
	Props:
	- value: Current progress value
	- max: Maximum value (default: 100)
	- color: Progress bar color (optional)
	- size: Bar size ('sm' | 'md' | 'lg')
	- showLabel: Whether to show percentage label
	- class: Additional CSS classes
-->

<script lang="ts">
	interface Props {
		value: number;
		max?: number;
		color?: string;
		size?: 'sm' | 'md' | 'lg';
		showLabel?: boolean;
		class?: string;
	}

	let {
		value,
		max = 100,
		color,
		size = 'md',
		showLabel = false,
		class: className = ''
	}: Props = $props();

	const percentage = Math.min(Math.max((value / max) * 100, 0), 100);

	// Auto-determine color based on progress if not provided
	const progressColor =
		color ||
		(() => {
			if (percentage >= 90) return 'var(--color-success)';
			if (percentage >= 60) return 'var(--color-primary)';
			if (percentage >= 30) return 'var(--color-accent)';
			return 'var(--color-text-muted)';
		})();

	const sizeClasses = {
		sm: 'h-1',
		md: 'h-2 sm:h-3',
		lg: 'h-3 sm:h-4'
	};
</script>

<div class={className}>
	{#if showLabel}
		<div class="mb-1 flex items-center justify-between">
			<span class="font-mono text-xs text-[var(--color-text-secondary)]">Progress</span>
			<span class="font-mono text-xs text-[var(--color-text)]">{Math.round(percentage)}%</span>
		</div>
	{/if}

	<div
		class="w-full rounded-full border border-[var(--color-border)] bg-[var(--color-surface-light)] {sizeClasses[
			size
		]}"
	>
		<div
			class="{sizeClasses[size]} rounded-full transition-all duration-300"
			style="width: {percentage}%; background-color: {progressColor};"
		></div>
	</div>
</div>
