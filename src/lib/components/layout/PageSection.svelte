<!--
	PageSection Component
	
	A reusable page section with consistent spacing and optional terminal prompt.
	Used for organizing content sections across different pages.
	
	Props:
	- title: Section title
	- subtitle: Optional section subtitle
	- promptPath: Optional terminal path for prompt
	- promptCommand: Optional terminal command for prompt
	- background: Background variant ('default' | 'surface')
	- padding: Section padding ('sm' | 'md' | 'lg')
	- class: Additional CSS classes
-->

<script lang="ts">
	import type { Snippet } from 'svelte';
	import TerminalPrompt from '../ui/TerminalPrompt.svelte';

	interface Props {
		title?: string;
		subtitle?: string;
		promptPath?: string;
		promptCommand?: string;
		background?: 'default' | 'surface';
		padding?: 'sm' | 'md' | 'lg';
		class?: string;
		children?: Snippet;
	}

	let {
		title,
		subtitle,
		promptPath,
		promptCommand,
		background = 'default',
		padding = 'md',
		class: className = '',
		children
	}: Props = $props();

	const backgroundClasses = {
		default: 'bg-[var(--color-background)]',
		surface: 'bg-[var(--color-surface)]'
	};

	const paddingClasses = {
		sm: 'px-4 sm:px-6 py-6 sm:py-8',
		md: 'px-4 sm:px-6 py-8 sm:py-12',
		lg: 'px-4 sm:px-6 py-12 sm:py-16'
	};
</script>

<section class="{backgroundClasses[background]} {paddingClasses[padding]} {className}">
	<div class="mx-auto max-w-7xl">
		{#if title || promptPath}
			<div class="mb-8">
				{#if promptPath && promptCommand}
					<div class="mb-4">
						<TerminalPrompt path={promptPath} command={promptCommand} />
					</div>
				{/if}

				{#if title}
					<h2
						class="mb-4 font-mono text-2xl font-bold text-[var(--color-text)] sm:text-3xl md:text-4xl"
					>
						{title}
					</h2>
				{/if}

				{#if subtitle}
					<p class="font-mono text-base text-[var(--color-text-secondary)] sm:text-lg">
						{subtitle}
					</p>
				{/if}
			</div>
		{/if}

		{@render children?.()}
	</div>
</section>
