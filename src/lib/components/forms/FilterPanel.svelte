<!--
	FilterPanel Component
	
	A reusable filter panel with terminal window styling and optional terminal prompt.
	Used to contain search and filter controls across different pages.
	
	Props:
	- class: Additional CSS classes
	- title: Optional panel title
	- promptPath: Optional terminal path for prompt
	- promptCommand: Optional terminal command for prompt
	- showClearButton: Whether to show clear filters button
	- onClear: Function to call when clear button is clicked
-->

<script lang="ts">
	import TerminalWindow from '../ui/TerminalWindow.svelte';
	import TerminalPrompt from '../ui/TerminalPrompt.svelte';
	
	interface Props {
		class?: string;
		title?: string;
		promptPath?: string;
		promptCommand?: string;
		showClearButton?: boolean;
		onClear?: () => void;
		children?: any;
	}
	
	let {
		class: className = '',
		title,
		promptPath,
		promptCommand,
		showClearButton = false,
		onClear,
		children
	}: Props = $props();
</script>

<TerminalWindow class={className}>
	{#if promptPath && promptCommand}
		<div class="mb-4">
			<TerminalPrompt path={promptPath} command={promptCommand} />
		</div>
	{/if}
	
	{#if title}
		<h3 class="text-lg font-mono font-semibold text-[var(--color-text)] mb-4">{title}</h3>
	{/if}
	
	<div class="space-y-4">
		{@render children?.()}
		
		{#if showClearButton && onClear}
			<div class="flex justify-end pt-2">
				<button
					class="btn-terminal px-4 py-2 rounded font-mono text-sm hover:scale-105 transition-transform"
					onclick={onClear}
				>
					Clear All Filters
				</button>
			</div>
		{/if}
	</div>
</TerminalWindow>
