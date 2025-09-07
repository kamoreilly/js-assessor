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
<TerminalWindow 
	class="cursor-pointer group {className}" 
	hoverEffect={true}
>
	<div class="text-center">
		<!-- App Title -->
		<h3 class="text-lg font-mono font-semibold text-[var(--color-text)] mb-2">
			{title}
		</h3>
		
		<!-- App Description -->
		<p class="text-[var(--color-text-secondary)] font-mono text-sm mb-3 leading-relaxed">
			{description}
		</p>
		
		<!-- Status Text -->
		{#if statusText}
			<div class="text-xs font-mono mb-4" style="color: {statusColor}">
				{statusText}
			</div>
		{/if}
		
		<!-- Action Button -->
		<Button variant="primary" size="sm" class="w-full">
			Open App
		</Button>
	</div>
</TerminalWindow>
</div>
