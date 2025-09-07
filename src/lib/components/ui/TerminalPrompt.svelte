<!--
	TerminalPrompt Component
	
	A reusable terminal-style command prompt display.
	Used throughout the application for consistent terminal command styling.
	
	Props:
	- path: The path to display (e.g., "~/dashboard")
	- command: The command to display (e.g., "welcome --user=admin")
	- class: Additional CSS classes
	- size: Text size ('xs' | 'sm' | 'md')
-->

<script lang="ts">
	interface Props {
		path: string;
		command: string;
		class?: string;
		size?: 'xs' | 'sm' | 'md';
	}

	let { path, command, class: className = '', size = 'sm' }: Props = $props();

	const sizeClasses = {
		xs: 'text-xs',
		sm: 'text-xs sm:text-sm',
		md: 'text-sm sm:text-base'
	};
</script>

<div class="inline-block {className}">
	<span class="font-mono text-[var(--color-text-muted)] {sizeClasses[size]}">{path} $</span>
	<span class="ml-2 font-mono text-[var(--color-accent)] {sizeClasses[size]}">{command}</span>
</div>
