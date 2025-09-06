<div class="min-h-screen bg-[var(--color-background)] terminal-grid">
	<!-- Dashboard Header -->
	<header class="border-b border-[var(--color-border)] bg-[var(--color-surface)]">
		<div class="max-w-7xl mx-auto px-6 py-4">
			<div class="flex items-center justify-between">
				<div class="flex items-center gap-3">
					<div class="w-8 h-8 bg-[var(--color-accent)] rounded flex items-center justify-center">
						<span class="text-black font-mono font-bold text-sm">JS</span>
					</div>
					<span class="font-mono text-[var(--color-text)] font-semibold">Joint Standards Dashboard</span>
				</div>
				<nav class="hidden md:flex items-center gap-6">
					<a href="/" class="font-mono text-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors">Dashboard</a>
					<a href="/assessments" class="font-mono text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors">Assessments</a>
					<a href="/reports" class="font-mono text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors">Reports</a>
					<a href="/settings" class="font-mono text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors">Settings</a>
				</nav>
				<div class="flex items-center gap-3">
					<button class="w-8 h-8 bg-[var(--color-surface-light)] border border-[var(--color-border)] rounded flex items-center justify-center hover:border-[var(--color-accent)] transition-colors">
						<span class="text-[var(--color-text-secondary)] text-sm">🔔</span>
					</button>
					<div class="w-8 h-8 bg-[var(--color-primary)] rounded-full flex items-center justify-center">
						<span class="text-white font-mono font-bold text-sm">U</span>
					</div>
				</div>
			</div>
		</div>
	</header>

	<!-- Dashboard Welcome Section -->
	<section class="px-6 py-12 mx-auto max-w-7xl">
		<div class="mb-8">
			<div class="inline-block mb-4">
				<span class="font-mono text-[var(--color-text-muted)] text-sm">~/dashboard $</span>
				<span class="font-mono text-[var(--color-accent)] ml-2">welcome --user=admin</span>
			</div>
			<h1 class="text-3xl md:text-4xl font-mono font-bold text-[var(--color-text)] mb-4">
				Welcome to your <span class="text-[var(--color-accent)]">Compliance Dashboard</span>
			</h1>
			<p class="text-lg text-[var(--color-text-secondary)] mb-6 font-mono">
				Manage your FSCA compliance applications and assessments from one central location.
			</p>
		</div>

		<!-- Quick Stats -->
		<div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
			<div class="terminal-window p-4 pt-8 text-center">
				<div class="terminal-dots">
					<div class="terminal-dot terminal-dot-red"></div>
					<div class="terminal-dot terminal-dot-yellow"></div>
					<div class="terminal-dot terminal-dot-green"></div>
				</div>
				<div class="text-2xl font-mono font-bold text-[var(--color-accent)] mb-1">12</div>
				<div class="text-sm font-mono text-[var(--color-text-secondary)]">Active Assessments</div>
			</div>
			<div class="terminal-window p-4 pt-8 text-center">
				<div class="terminal-dots">
					<div class="terminal-dot terminal-dot-red"></div>
					<div class="terminal-dot terminal-dot-yellow"></div>
					<div class="terminal-dot terminal-dot-green"></div>
				</div>
				<div class="text-2xl font-mono font-bold text-[var(--color-success)] mb-1">8</div>
				<div class="text-sm font-mono text-[var(--color-text-secondary)]">Reports Generated</div>
			</div>
			<div class="terminal-window p-4 pt-8 text-center">
				<div class="terminal-dots">
					<div class="terminal-dot terminal-dot-red"></div>
					<div class="terminal-dot terminal-dot-yellow"></div>
					<div class="terminal-dot terminal-dot-green"></div>
				</div>
				<div class="text-2xl font-mono font-bold text-[var(--color-primary)] mb-1">156</div>
				<div class="text-sm font-mono text-[var(--color-text-secondary)]">Standards Available</div>
			</div>
			<div class="terminal-window p-4 pt-8 text-center">
				<div class="terminal-dots">
					<div class="terminal-dot terminal-dot-red"></div>
					<div class="terminal-dot terminal-dot-yellow"></div>
					<div class="terminal-dot terminal-dot-green"></div>
				</div>
				<div class="text-2xl font-mono font-bold text-[var(--color-accent)] mb-1">3</div>
				<div class="text-sm font-mono text-[var(--color-text-secondary)]">Active Alerts</div>
			</div>
		</div>
	</section>

	<!-- Applications Grid -->
	<section class="px-6 py-16 bg-[var(--color-surface)]">
		<div class="mx-auto max-w-7xl">
			<div class="text-center mb-12">
				<div class="inline-block mb-4">
					<span class="font-mono text-[var(--color-text-muted)] text-sm">~/apps $</span>
					<span class="font-mono text-[var(--color-accent)] ml-2">list --available</span>
				</div>
				<h2 class="text-3xl font-mono font-bold text-[var(--color-text)] mb-4">
					Your Compliance Applications
				</h2>
				<p class="text-lg text-[var(--color-text-secondary)] max-w-2xl mx-auto font-mono">
					Access all your FSCA compliance tools and applications from one central dashboard
				</p>
			</div>

			<div class="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
				<!-- Assessment Builder App -->
				<div class="terminal-window p-6 pt-12 hover:border-[var(--color-accent)] transition-colors cursor-pointer group">
					<div class="terminal-dots">
						<div class="terminal-dot terminal-dot-red"></div>
						<div class="terminal-dot terminal-dot-yellow"></div>
						<div class="terminal-dot terminal-dot-green"></div>
					</div>
					<div class="text-center">
						<div class="w-16 h-16 bg-[var(--color-surface-light)] border border-[var(--color-border-light)] rounded flex items-center justify-center mx-auto mb-4 group-hover:border-[var(--color-accent)] transition-colors">
							<span class="text-[var(--color-accent)] font-mono text-2xl">📋</span>
						</div>
						<h3 class="text-lg font-mono font-semibold text-[var(--color-text)] mb-2">
							Assessment Builder
						</h3>
						<p class="text-[var(--color-text-secondary)] font-mono text-sm mb-3 leading-relaxed">
							Create and manage FSCA compliance assessments
						</p>
						<div class="text-xs font-mono text-[var(--color-accent)] mb-4">
							12 active assessments
						</div>
						<button class="w-full btn-terminal-primary px-4 py-2 rounded text-sm font-mono">
							Open App
						</button>
					</div>
				</div>

				<!-- Report Generator App -->
				<div class="terminal-window p-6 pt-12 hover:border-[var(--color-accent)] transition-colors cursor-pointer group">
					<div class="terminal-dots">
						<div class="terminal-dot terminal-dot-red"></div>
						<div class="terminal-dot terminal-dot-yellow"></div>
						<div class="terminal-dot terminal-dot-green"></div>
					</div>
					<div class="text-center">
						<div class="w-16 h-16 bg-[var(--color-surface-light)] border border-[var(--color-border-light)] rounded flex items-center justify-center mx-auto mb-4 group-hover:border-[var(--color-accent)] transition-colors">
							<span class="text-[var(--color-accent)] font-mono text-2xl">📊</span>
						</div>
						<h3 class="text-lg font-mono font-semibold text-[var(--color-text)] mb-2">
							Report Generator
						</h3>
						<p class="text-[var(--color-text-secondary)] font-mono text-sm mb-3 leading-relaxed">
							Generate comprehensive compliance reports
						</p>
						<div class="text-xs font-mono text-[var(--color-success)] mb-4">
							8 reports this month
						</div>
						<button class="w-full btn-terminal-primary px-4 py-2 rounded text-sm font-mono">
							Open App
						</button>
					</div>
				</div>

				<!-- Standards Library App -->
				<div class="terminal-window p-6 pt-12 hover:border-[var(--color-accent)] transition-colors cursor-pointer group">
					<div class="terminal-dots">
						<div class="terminal-dot terminal-dot-red"></div>
						<div class="terminal-dot terminal-dot-yellow"></div>
						<div class="terminal-dot terminal-dot-green"></div>
					</div>
					<div class="text-center">
						<div class="w-16 h-16 bg-[var(--color-surface-light)] border border-[var(--color-border-light)] rounded flex items-center justify-center mx-auto mb-4 group-hover:border-[var(--color-accent)] transition-colors">
							<span class="text-[var(--color-accent)] font-mono text-2xl">📚</span>
						</div>
						<h3 class="text-lg font-mono font-semibold text-[var(--color-text)] mb-2">
							Standards Library
						</h3>
						<p class="text-[var(--color-text-secondary)] font-mono text-sm mb-3 leading-relaxed">
							Browse FSCA joint standards and regulations
						</p>
						<div class="text-xs font-mono text-[var(--color-primary)] mb-4">
							156 standards available
						</div>
						<button class="w-full btn-terminal-primary px-4 py-2 rounded text-sm font-mono">
							Open App
						</button>
					</div>
				</div>

				<!-- Audit Trail App -->
				<div class="terminal-window p-6 pt-12 hover:border-[var(--color-accent)] transition-colors cursor-pointer group">
					<div class="terminal-dots">
						<div class="terminal-dot terminal-dot-red"></div>
						<div class="terminal-dot terminal-dot-yellow"></div>
						<div class="terminal-dot terminal-dot-green"></div>
					</div>
					<div class="text-center">
						<div class="w-16 h-16 bg-[var(--color-surface-light)] border border-[var(--color-border-light)] rounded flex items-center justify-center mx-auto mb-4 group-hover:border-[var(--color-accent)] transition-colors">
							<span class="text-[var(--color-accent)] font-mono text-2xl">🔍</span>
						</div>
						<h3 class="text-lg font-mono font-semibold text-[var(--color-text)] mb-2">
							Audit Trail
						</h3>
						<p class="text-[var(--color-text-secondary)] font-mono text-sm mb-3 leading-relaxed">
							Track and monitor compliance activities
						</p>
						<div class="text-xs font-mono text-[var(--color-accent)] mb-4">
							24 recent activities
						</div>
						<button class="w-full btn-terminal-primary px-4 py-2 rounded text-sm font-mono">
							Open App
						</button>
					</div>
				</div>

				<!-- Risk Monitor App -->
				<div class="terminal-window p-6 pt-12 hover:border-[var(--color-accent)] transition-colors cursor-pointer group">
					<div class="terminal-dots">
						<div class="terminal-dot terminal-dot-red"></div>
						<div class="terminal-dot terminal-dot-yellow"></div>
						<div class="terminal-dot terminal-dot-green"></div>
					</div>
					<div class="text-center">
						<div class="w-16 h-16 bg-[var(--color-surface-light)] border border-[var(--color-border-light)] rounded flex items-center justify-center mx-auto mb-4 group-hover:border-[var(--color-accent)] transition-colors">
							<span class="text-[var(--color-accent)] font-mono text-2xl">⚠️</span>
						</div>
						<h3 class="text-lg font-mono font-semibold text-[var(--color-text)] mb-2">
							Risk Monitor
						</h3>
						<p class="text-[var(--color-text-secondary)] font-mono text-sm mb-3 leading-relaxed">
							Monitor compliance risks and alerts
						</p>
						<div class="text-xs font-mono text-[var(--color-accent)] mb-4">
							3 active alerts
						</div>
						<button class="w-full btn-terminal-primary px-4 py-2 rounded text-sm font-mono">
							Open App
						</button>
					</div>
				</div>

				<!-- Documentation Hub App -->
				<div class="terminal-window p-6 pt-12 hover:border-[var(--color-accent)] transition-colors cursor-pointer group">
					<div class="terminal-dots">
						<div class="terminal-dot terminal-dot-red"></div>
						<div class="terminal-dot terminal-dot-yellow"></div>
						<div class="terminal-dot terminal-dot-green"></div>
					</div>
					<div class="text-center">
						<div class="w-16 h-16 bg-[var(--color-surface-light)] border border-[var(--color-border-light)] rounded flex items-center justify-center mx-auto mb-4 group-hover:border-[var(--color-accent)] transition-colors">
							<span class="text-[var(--color-accent)] font-mono text-2xl">📖</span>
						</div>
						<h3 class="text-lg font-mono font-semibold text-[var(--color-text)] mb-2">
							Documentation Hub
						</h3>
						<p class="text-[var(--color-text-secondary)] font-mono text-sm mb-3 leading-relaxed">
							Access compliance documentation and guides
						</p>
						<div class="text-xs font-mono text-[var(--color-primary)] mb-4">
							45 documents
						</div>
						<button class="w-full btn-terminal-primary px-4 py-2 rounded text-sm font-mono">
							Open App
						</button>
					</div>
				</div>

				<!-- Settings App -->
				<div class="terminal-window p-6 pt-12 hover:border-[var(--color-accent)] transition-colors cursor-pointer group">
					<div class="terminal-dots">
						<div class="terminal-dot terminal-dot-red"></div>
						<div class="terminal-dot terminal-dot-yellow"></div>
						<div class="terminal-dot terminal-dot-green"></div>
					</div>
					<div class="text-center">
						<div class="w-16 h-16 bg-[var(--color-surface-light)] border border-[var(--color-border-light)] rounded flex items-center justify-center mx-auto mb-4 group-hover:border-[var(--color-accent)] transition-colors">
							<span class="text-[var(--color-accent)] font-mono text-2xl">⚙️</span>
						</div>
						<h3 class="text-lg font-mono font-semibold text-[var(--color-text)] mb-2">
							Settings
						</h3>
						<p class="text-[var(--color-text-secondary)] font-mono text-sm mb-3 leading-relaxed">
							Configure system and user preferences
						</p>
						<div class="text-xs font-mono text-[var(--color-text-muted)] mb-4">
							Last updated 2 days ago
						</div>
						<button class="w-full btn-terminal-primary px-4 py-2 rounded text-sm font-mono">
							Open App
						</button>
					</div>
				</div>

				<!-- Support Center App -->
				<div class="terminal-window p-6 pt-12 hover:border-[var(--color-accent)] transition-colors cursor-pointer group">
					<div class="terminal-dots">
						<div class="terminal-dot terminal-dot-red"></div>
						<div class="terminal-dot terminal-dot-yellow"></div>
						<div class="terminal-dot terminal-dot-green"></div>
					</div>
					<div class="text-center">
						<div class="w-16 h-16 bg-[var(--color-surface-light)] border border-[var(--color-border-light)] rounded flex items-center justify-center mx-auto mb-4 group-hover:border-[var(--color-accent)] transition-colors">
							<span class="text-[var(--color-accent)] font-mono text-2xl">🎧</span>
						</div>
						<h3 class="text-lg font-mono font-semibold text-[var(--color-text)] mb-2">
							Support Center
						</h3>
						<p class="text-[var(--color-text-secondary)] font-mono text-sm mb-3 leading-relaxed">
							Get help and technical support
						</p>
						<div class="text-xs font-mono text-[var(--color-success)] mb-4">
							Response time: 2 hours
						</div>
						<button class="w-full btn-terminal-primary px-4 py-2 rounded text-sm font-mono">
							Open App
						</button>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Recent Activity Section -->
	<section class="px-6 py-16 bg-[var(--color-background)]">
		<div class="mx-auto max-w-7xl">
			<div class="grid lg:grid-cols-2 gap-12">
				<div>
					<div class="mb-6">
						<span class="font-mono text-[var(--color-text-muted)] text-sm">~/activity $</span>
						<span class="font-mono text-[var(--color-accent)] ml-2">tail --recent</span>
					</div>
					<h2 class="text-3xl font-mono font-bold text-[var(--color-text)] mb-6">
						Recent Activity
					</h2>
					<div class="space-y-4">
						<div class="flex items-start gap-3 p-3 bg-[var(--color-surface)] border border-[var(--color-border)] rounded">
							<div class="w-2 h-2 bg-[var(--color-success)] rounded-full mt-2"></div>
							<div class="flex-1">
								<div class="flex items-center justify-between mb-1">
									<span class="font-mono text-sm text-[var(--color-text)]">Assessment completed</span>
									<span class="font-mono text-xs text-[var(--color-text-muted)]">2 min ago</span>
								</div>
								<p class="text-[var(--color-text-secondary)] font-mono text-xs">FSCA Joint Standard 1 assessment finished with 98% compliance</p>
							</div>
						</div>
						<div class="flex items-start gap-3 p-3 bg-[var(--color-surface)] border border-[var(--color-border)] rounded">
							<div class="w-2 h-2 bg-[var(--color-primary)] rounded-full mt-2"></div>
							<div class="flex-1">
								<div class="flex items-center justify-between mb-1">
									<span class="font-mono text-sm text-[var(--color-text)]">Report generated</span>
									<span class="font-mono text-xs text-[var(--color-text-muted)]">15 min ago</span>
								</div>
								<p class="text-[var(--color-text-secondary)] font-mono text-xs">Monthly compliance report exported to PDF</p>
							</div>
						</div>
						<div class="flex items-start gap-3 p-3 bg-[var(--color-surface)] border border-[var(--color-border)] rounded">
							<div class="w-2 h-2 bg-[var(--color-accent)] rounded-full mt-2"></div>
							<div class="flex-1">
								<div class="flex items-center justify-between mb-1">
									<span class="font-mono text-sm text-[var(--color-text)]">New standard added</span>
									<span class="font-mono text-xs text-[var(--color-text-muted)]">1 hour ago</span>
								</div>
								<p class="text-[var(--color-text-secondary)] font-mono text-xs">FSCA Joint Standard 15 v2.1 added to library</p>
							</div>
						</div>
						<div class="flex items-start gap-3 p-3 bg-[var(--color-surface)] border border-[var(--color-border)] rounded">
							<div class="w-2 h-2 bg-[var(--color-accent)] rounded-full mt-2"></div>
							<div class="flex-1">
								<div class="flex items-center justify-between mb-1">
									<span class="font-mono text-sm text-[var(--color-text)]">Risk alert triggered</span>
									<span class="font-mono text-xs text-[var(--color-text-muted)]">3 hours ago</span>
								</div>
								<p class="text-[var(--color-text-secondary)] font-mono text-xs">Medium risk detected in operational procedures</p>
							</div>
						</div>
					</div>
				</div>
				<div class="terminal-window p-8 pt-12">
					<div class="terminal-dots">
						<div class="terminal-dot terminal-dot-red"></div>
						<div class="terminal-dot terminal-dot-yellow"></div>
						<div class="terminal-dot terminal-dot-green"></div>
					</div>
					<div class="text-center">
						<h3 class="text-2xl font-mono font-bold text-[var(--color-text)] mb-4">System Status</h3>
						<div class="space-y-4 text-left">
							<div class="flex items-center justify-between">
								<span class="font-mono text-sm text-[var(--color-text)]">Database</span>
								<span class="font-mono text-xs text-[var(--color-success)]">● Online</span>
							</div>
							<div class="flex items-center justify-between">
								<span class="font-mono text-sm text-[var(--color-text)]">Assessment Engine</span>
								<span class="font-mono text-xs text-[var(--color-success)]">● Running</span>
							</div>
							<div class="flex items-center justify-between">
								<span class="font-mono text-sm text-[var(--color-text)]">Report Service</span>
								<span class="font-mono text-xs text-[var(--color-success)]">● Active</span>
							</div>
							<div class="flex items-center justify-between">
								<span class="font-mono text-sm text-[var(--color-text)]">Backup Status</span>
								<span class="font-mono text-xs text-[var(--color-success)]">● Complete</span>
							</div>
						</div>
						<div class="mt-6 pt-4 border-t border-[var(--color-border)]">
							<p class="text-[var(--color-text-muted)] font-mono text-xs mb-2">
								Last backup: 2 hours ago
							</p>
							<p class="text-[var(--color-text-muted)] font-mono text-xs">
								Next scheduled maintenance: Sunday 2:00 AM
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Dashboard Footer -->
	<footer class="px-6 py-8 bg-[var(--color-surface)] border-t border-[var(--color-border)]">
		<div class="mx-auto max-w-7xl">
			<div class="flex flex-col md:flex-row items-center justify-between">
				<div class="mb-4 md:mb-0">
					<span class="font-mono text-[var(--color-text-muted)] text-sm">~/dashboard $</span>
					<span class="font-mono text-[var(--color-accent)] ml-2">status --all-systems-operational</span>
				</div>
				<div class="flex items-center gap-6">
					<a href="/help" class="font-mono text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors text-sm">Help</a>
					<a href="/docs" class="font-mono text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors text-sm">Documentation</a>
					<a href="/support" class="font-mono text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors text-sm">Support</a>
				</div>
				<div class="text-[var(--color-text-muted)] font-mono text-xs">
					v2.1.0 • Uptime: 99.9%
				</div>
			</div>
		</div>
	</footer>
</div>
