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

<footer
	class="border-t border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-6 sm:px-6 sm:py-8 {className}"
>
	<div class="mx-auto max-w-7xl">
		<div class="flex flex-col items-center justify-between gap-4 md:flex-row">
			<!-- Terminal Prompt -->
			<div class="text-center md:text-left">
				<TerminalPrompt path={promptPath} command={promptCommand} />
			</div>

			<!-- Footer Links -->
			<div class="flex items-center gap-4 sm:gap-6">
				{#each footerLinks as link (link.href)}
					<a
						href={link.href}
						data-sveltekit-preload-data="hover"
						class="font-mono text-xs text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-accent)] sm:text-sm"
					>
						{link.label}
					</a>
				{/each}
			</div>

			<!-- Version and Status -->
			<div class="text-center font-mono text-xs text-[var(--color-text-muted)] md:text-right">
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
