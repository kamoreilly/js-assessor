<!--
	AppHeader Component
	
	The main application header with logo, navigation, and user actions.
	Used consistently across all pages in the application.
	
	Props:
	- currentPage: The current active page for navigation highlighting
	- showMobileNav: Whether to show mobile navigation (default: false)
	- class: Additional CSS classes
-->

<script lang="ts">
	interface Props {
		currentPage?: string;
		class?: string;
	}

	let { currentPage = '', class: className = '' }: Props = $props();

	// Mobile navigation state
	let mobileMenuOpen = $state(false);

	function toggleMobileMenu() {
		mobileMenuOpen = !mobileMenuOpen;
	}

	const navItems = [
		{ href: '/', label: 'Dashboard', key: 'dashboard' },
		{ href: '/assessments', label: 'Assessments', key: 'assessments' },
		{ href: '/reports', label: 'Reports', key: 'reports' },
		{ href: '/settings', label: 'Settings', key: 'settings' }
	];

	function isActive(itemKey: string): boolean {
		return currentPage === itemKey;
	}
</script>

<header class="border-b border-[var(--color-border)] bg-[var(--color-surface)] {className}">
	<div class="mx-auto max-w-7xl px-4 py-4 sm:px-6">
		<div class="flex items-center justify-between">
			<!-- Logo and Brand -->
			<div class="flex items-center gap-3">
				<div class="flex h-8 w-8 items-center justify-center rounded bg-[var(--color-accent)]">
					<span class="font-mono text-sm font-bold text-black">JS</span>
				</div>
				<span class="font-mono text-sm font-semibold text-[var(--color-text)] sm:text-base">
					Joint Standards Dashboard
				</span>
			</div>

			<!-- Desktop Navigation -->
			<nav class="hidden items-center gap-6 md:flex">
				{#each navItems as item (item.key)}
					<a
						href={item.href}
						data-sveltekit-preload-data="hover"
						class="font-mono transition-colors {isActive(item.key)
							? 'text-[var(--color-accent)]'
							: 'text-[var(--color-text-secondary)] hover:text-[var(--color-accent)]'}"
					>
						{item.label}
					</a>
				{/each}
			</nav>

			<!-- Mobile Menu Button -->
			<button
				class="flex h-8 w-8 items-center justify-center rounded border border-[var(--color-border)] bg-[var(--color-surface-light)] transition-colors hover:border-[var(--color-accent)] md:hidden"
				onclick={toggleMobileMenu}
			>
				<span class="font-mono text-sm text-[var(--color-text-secondary)]"
					>{mobileMenuOpen ? 'CLOSE' : 'MENU'}</span
				>
			</button>

			<!-- User Actions -->
			<div class="flex items-center gap-2 sm:gap-3">
				<!-- Notifications -->
				<button
					class="flex h-8 w-8 items-center justify-center rounded border border-[var(--color-border)] bg-[var(--color-surface-light)] transition-colors hover:border-[var(--color-accent)]"
				>
					<span class="font-mono text-xs text-[var(--color-text-secondary)]">NOTIFY</span>
				</button>

				<!-- User Avatar -->
				<div
					class="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--color-primary)]"
				>
					<span class="font-mono text-sm font-bold text-white">U</span>
				</div>
			</div>
		</div>

		<!-- Mobile Navigation -->
		{#if mobileMenuOpen}
			<nav class="mt-4 border-t border-[var(--color-border)] pt-4 md:hidden">
				<div class="flex flex-col gap-2">
					{#each navItems as item (item.key)}
						<a
							href={item.href}
							data-sveltekit-preload-data="hover"
							class="rounded px-3 py-2 font-mono transition-colors {isActive(item.key)
								? 'bg-[var(--color-surface-light)] text-[var(--color-accent)]'
								: 'text-[var(--color-text-secondary)] hover:bg-[var(--color-surface-light)] hover:text-[var(--color-accent)]'}"
							onclick={() => (mobileMenuOpen = false)}
						>
							{item.label}
						</a>
					{/each}
				</div>
			</nav>
		{/if}
	</div>
</header>
