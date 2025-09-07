<!--
	ActivityFeed Component
	
	A reusable activity feed container with terminal window styling.
	Used for displaying lists of activities across different pages.
	
	Props:
	- activities: Array of activity data
	- title: Feed title
	- class: Additional CSS classes
	- maxItems: Maximum number of items to display
	- showEmpty: Whether to show empty state
	- emptyMessage: Custom empty state message
-->

<script lang="ts">
	import TerminalWindow from '../ui/TerminalWindow.svelte';
	import ActivityItem from './ActivityItem.svelte';
	import type { ActivityItemData } from './types.js';

	interface Props {
		activities: ActivityItemData[];
		title?: string;
		class?: string;
		maxItems?: number;
		showEmpty?: boolean;
		emptyMessage?: string;
	}

	let {
		activities,
		title,
		class: className = '',
		maxItems,
		showEmpty = true,
		emptyMessage = 'No recent activity'
	}: Props = $props();

	const displayedActivities = maxItems ? activities.slice(0, maxItems) : activities;
</script>

<TerminalWindow class={className}>
	{#if title}
		<h3 class="mb-4 font-mono text-base font-semibold text-[var(--color-text)] sm:text-lg">
			{title}
		</h3>
	{/if}

	{#if displayedActivities.length > 0}
		<div class="space-y-3">
			{#each displayedActivities as activity (activity.id)}
				<ActivityItem
					title={activity.title}
					description={activity.description}
					timestamp={activity.timestamp}
					status={activity.status}
					user={activity.user}
				/>
			{/each}
		</div>

		{#if maxItems && activities.length > maxItems}
			<div class="mt-4 text-center">
				<span class="font-mono text-xs text-[var(--color-text-muted)]">
					Showing {maxItems} of {activities.length} activities
				</span>
			</div>
		{/if}
	{:else if showEmpty}
		<div class="py-8 text-center">
			<p class="font-mono text-sm text-[var(--color-text-muted)]">
				{emptyMessage}
			</p>
		</div>
	{/if}
</TerminalWindow>
