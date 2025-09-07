<!--
	AppFooter Component
	
	The main application footer with terminal prompt, links, and version info.
	Used consistently across all pages in the application.
	
	Props:
	- promptPath: The terminal path to display (e.g., "~/dashboard")
	- promptCommand: The terminal command to display
	- statusText: Optional status text to display
	- version: Application version (default: "v2.1.0")
	- uptime: Optional uptime text
	- class: Additional CSS classes
-->

<script lang="ts">
	import TerminalPrompt from '../ui/TerminalPrompt.svelte';
	
	interface Props {
		promptPath: string;
		promptCommand: string;
		statusText?: string;
		version?: string;
		uptime?: string;
		class?: string;
	}
	
	let {
		promptPath,
		promptCommand,
		statusText,
		version = 'v2.1.0',
		uptime,
		class: className = ''
	}: Props = $props();
	
	const footerLinks = [
		{ href: '/help', label: 'Help' },
		{ href: '/docs', label: 'Documentation' },
		{ href: '/support', label: 'Support' }
	];
</script>

<footer class="px-4 sm:px-6 py-6 sm:py-8 bg-[var(--color-surface)] border-t border-[var(--color-border)] {className}">
	<div class="mx-auto max-w-7xl">
		<div class="flex flex-col md:flex-row items-center justify-between gap-4">
			<!-- Terminal Prompt -->
			<div class="text-center md:text-left">
				<TerminalPrompt path={promptPath} command={promptCommand} />
			</div>
			
			<!-- Footer Links -->
			<div class="flex items-center gap-4 sm:gap-6">
				{#each footerLinks as link}
					<a 
						href={link.href} 
						class="font-mono text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors text-xs sm:text-sm"
					>
						{link.label}
					</a>
				{/each}
			</div>
			
			<!-- Version and Status -->
			<div class="text-[var(--color-text-muted)] font-mono text-xs text-center md:text-right">
				{version}
				{#if uptime}
					• Uptime: {uptime}
				{/if}
				{#if statusText}
					<div class="mt-1">{statusText}</div>
				{/if}
			</div>
		</div>
	</div>
</footer>
