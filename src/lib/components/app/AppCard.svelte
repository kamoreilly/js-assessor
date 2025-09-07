<!--
	AppCard Component
	
	A specialized card component for displaying application tiles on the dashboard.
	Used specifically for the application grid on the main dashboard page.
	
	Props:
	- title: Application title
	- description: Application description
	- icon: Application icon/emoji
	- statusText: Status text to display
	- statusColor: Color for the status text
	- href: Optional link URL
	- onclick: Optional click handler
	- class: Additional CSS classes
-->

<script lang="ts">
	import TerminalWindow from '../ui/TerminalWindow.svelte';
	import Button from '../buttons/Button.svelte';

	interface Props {
		title: string;
		description: string;
		icon: string;
		statusText?: string;
		statusColor?: string;
		href?: string;
		onclick?: () => void;
		class?: string;
	}

	let {
		title,
		description,
		statusText,
		statusColor = 'var(--color-accent)',
		href,
		onclick,
		class: className = ''
	}: Props = $props();

	function handleClick() {
		if (onclick) {
			onclick();
		} else if (href) {
			window.location.href = href;
		}
	}
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<div onclick={handleClick}>
	<TerminalWindow class="group cursor-pointer {className}" hoverEffect={true}>
		<div class="text-center">
			<!-- App Title -->
			<h3 class="mb-2 font-mono text-lg font-semibold text-[var(--color-text)]">
				{title}
			</h3>

			<!-- App Description -->
			<p class="mb-3 font-mono text-sm leading-relaxed text-[var(--color-text-secondary)]">
				{description}
			</p>

			<!-- Status Text -->
			{#if statusText}
				<div class="mb-4 font-mono text-xs" style="color: {statusColor}">
					{statusText}
				</div>
			{/if}

			<!-- Action Button -->
			<Button variant="primary" size="sm" class="w-full">Open App</Button>
		</div>
	</TerminalWindow>
</div>
