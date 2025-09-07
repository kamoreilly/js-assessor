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
		showMobileNav?: boolean;
		class?: string;
	}
	
	let {
		currentPage = '',
		showMobileNav = false,
		class: className = ''
	}: Props = $props();
	
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
	<div class="max-w-7xl mx-auto px-4 sm:px-6 py-4">
		<div class="flex items-center justify-between">
			<!-- Logo and Brand -->
			<div class="flex items-center gap-3">
				<div class="w-8 h-8 bg-[var(--color-accent)] rounded flex items-center justify-center">
					<span class="text-black font-mono font-bold text-sm">JS</span>
				</div>
				<span class="font-mono text-[var(--color-text)] font-semibold text-sm sm:text-base">
					Joint Standards Dashboard
				</span>
			</div>
			
			<!-- Desktop Navigation -->
			<nav class="hidden md:flex items-center gap-6">
				{#each navItems as item}
					<a 
						href={item.href}
						data-sveltekit-preload-data="hover"
						class="font-mono transition-colors {isActive(item.key) 
							? 'text-[var(--color-accent)]' 
							: 'text-[var(--color-text-secondary)] hover:text-[var(--color-accent)]'
						}"
					>
						{item.label}
					</a>
				{/each}
			</nav>
			
			<!-- Mobile Menu Button -->
			<button
				class="md:hidden w-8 h-8 bg-[var(--color-surface-light)] border border-[var(--color-border)] rounded flex items-center justify-center hover:border-[var(--color-accent)] transition-colors"
				onclick={toggleMobileMenu}
			>
				<span class="text-[var(--color-text-secondary)] text-sm font-mono">{mobileMenuOpen ? 'CLOSE' : 'MENU'}</span>
			</button>
			
			<!-- User Actions -->
			<div class="flex items-center gap-2 sm:gap-3">
				<!-- Notifications -->
				<button class="w-8 h-8 bg-[var(--color-surface-light)] border border-[var(--color-border)] rounded flex items-center justify-center hover:border-[var(--color-accent)] transition-colors">
					<span class="text-[var(--color-text-secondary)] text-xs font-mono">NOTIFY</span>
				</button>
				
				<!-- User Avatar -->
				<div class="w-8 h-8 bg-[var(--color-primary)] rounded-full flex items-center justify-center">
					<span class="text-white font-mono font-bold text-sm">U</span>
				</div>
			</div>
		</div>
		
		<!-- Mobile Navigation -->
		{#if mobileMenuOpen}
			<nav class="md:hidden mt-4 pt-4 border-t border-[var(--color-border)]">
				<div class="flex flex-col gap-2">
					{#each navItems as item}
						<a
							href={item.href}
							data-sveltekit-preload-data="hover"
							class="font-mono py-2 px-3 rounded transition-colors {isActive(item.key)
								? 'text-[var(--color-accent)] bg-[var(--color-surface-light)]'
								: 'text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] hover:bg-[var(--color-surface-light)]'
							}"
							onclick={() => mobileMenuOpen = false}
						>
							{item.label}
						</a>
					{/each}
				</div>
			</nav>
		{/if}
	</div>
</header>
