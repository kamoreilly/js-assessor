<!--
	DataCard Component
	
	A reusable data card with terminal window styling for displaying structured information.
	Used for assessments, reports, and other data items across the application.
	
	Props:
	- title: Card title
	- subtitle: Optional subtitle
	- status: Status text
	- statusVariant: Status color variant
	- progress: Optional progress value (0-100)
	- metadata: Key-value pairs for additional information
	- actions: Array of action button names
	- class: Additional CSS classes
	- hoverEffect: Whether to show hover border effect
-->

<script lang="ts">
	import type { Snippet } from 'svelte';
	import TerminalWindow from '../ui/TerminalWindow.svelte';
	import StatusBadge from '../ui/StatusBadge.svelte';
	import ProgressBar from '../ui/ProgressBar.svelte';
	import ActionButtons from '../buttons/ActionButtons.svelte';

	interface Props {
		title: string;
		subtitle?: string;
		status?: string;
		statusVariant?: 'success' | 'warning' | 'error' | 'info' | 'default';
		progress?: number;
		metadata?: Record<string, unknown>;
		actions?: string[];
		class?: string;
		hoverEffect?: boolean;
		onEdit?: () => void;
		onView?: () => void;
		onDelete?: () => void;
		onDownload?: () => void;
		onShare?: () => void;
		onExport?: () => void;
	}

	let {
		title,
		subtitle,
		status,
		statusVariant = 'default',
		progress,
		metadata = {},
		actions = [],
		class: className = '',
		hoverEffect = true,
		onEdit,
		onView,
		onDelete,
		onDownload,
		onShare,
		onExport
	}: Props = $props();
</script>

<TerminalWindow class="group {className}" {hoverEffect}>
	<!-- Header -->
	<div class="mb-4">
		<div class="mb-2 flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
			<h3 class="flex-1 break-words font-mono font-semibold text-[var(--color-text)]">
				{title}
			</h3>
			{#if status}
				<StatusBadge {status} variant={statusVariant} showDot />
			{/if}
		</div>

		{#if subtitle}
			<p
				class="inline-block rounded bg-[var(--color-surface-light)] px-2 py-1 font-mono text-xs text-[var(--color-text-secondary)]"
			>
				{subtitle}
			</p>
		{/if}
	</div>

	<!-- Progress Bar -->
	{#if progress !== undefined}
		<div class="mb-4">
			<ProgressBar value={progress} showLabel />
		</div>
	{/if}

	<!-- Metadata -->
	{#if Object.keys(metadata).length > 0}
		<div class="mb-4 space-y-2">
			{#each Object.entries(metadata) as [key, value] (key)}
				<div class="flex items-center justify-between">
					<span class="font-mono text-xs text-[var(--color-text-secondary)]">{key}:</span>
					<span class="break-words text-right font-mono text-xs text-[var(--color-text)]"
						>{value}</span
					>
				</div>
			{/each}
		</div>
	{/if}

	<!-- Actions -->
	{#if actions.length > 0}
		<ActionButtons
			{actions}
			{onEdit}
			{onView}
			{onDelete}
			{onDownload}
			{onShare}
			{onExport}
			layout="grid"
			size="xs"
		/>
	{/if}
</TerminalWindow>
