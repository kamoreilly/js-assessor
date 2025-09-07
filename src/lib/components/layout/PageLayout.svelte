<!--
	PageLayout Component
	
	A complete page layout wrapper that includes header, footer, and main content area.
	Provides consistent layout structure across all pages.
	
	Props:
	- currentPage: The current active page for navigation highlighting
	- title: Page title for SEO
	- description: Page description for SEO
	- footerPromptPath: Terminal path for footer
	- footerPromptCommand: Terminal command for footer
	- footerStatusText: Optional footer status text
	- class: Additional CSS classes for main content
-->

<script lang="ts">
	import type { Snippet } from 'svelte';
	import AppHeader from './AppHeader.svelte';
	import AppFooter from './AppFooter.svelte';

	interface Props {
		currentPage?: string;
		title?: string;
		description?: string;
		footerPromptPath: string;
		footerPromptCommand: string;
		footerStatusText?: string;
		class?: string;
		children?: Snippet;
	}

	let {
		currentPage = '',
		title,
		description,
		footerPromptPath,
		footerPromptCommand,
		footerStatusText,
		class: className = '',
		children
	}: Props = $props();
</script>

<!-- SEO Head -->
<svelte:head>
	{#if title}
		<title>{title}</title>
	{/if}
	{#if description}
		<meta name="description" content={description} />
	{/if}
</svelte:head>

<div class="terminal-grid min-h-screen bg-[var(--color-background)]">
	<!-- Header -->
	<AppHeader {currentPage} />

	<!-- Main Content -->
	<main class={className}>
		{@render children?.()}
	</main>

	<!-- Footer -->
	<AppFooter
		promptPath={footerPromptPath}
		promptCommand={footerPromptCommand}
		statusText={footerStatusText}
	/>
</div>
