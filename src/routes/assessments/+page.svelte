<script lang="ts">
	// Mock assessment data for demonstration
	const assessments = [
		{
			id: 1,
			name: "FSCA Joint Standard 1 Assessment",
			type: "Operational Risk",
			status: "Completed",
			progress: 100,
			lastModified: "2024-01-15",
			dueDate: "2024-01-20",
			assignee: "John Smith"
		},
		{
			id: 2,
			name: "Market Conduct Assessment",
			type: "Conduct Risk",
			status: "In Progress",
			progress: 75,
			lastModified: "2024-01-14",
			dueDate: "2024-01-25",
			assignee: "Sarah Johnson"
		},
		{
			id: 3,
			name: "Capital Adequacy Review",
			type: "Financial Risk",
			status: "Under Review",
			progress: 90,
			lastModified: "2024-01-13",
			dueDate: "2024-01-18",
			assignee: "Mike Davis"
		},
		{
			id: 4,
			name: "Governance Framework Assessment",
			type: "Governance",
			status: "Draft",
			progress: 25,
			lastModified: "2024-01-12",
			dueDate: "2024-02-01",
			assignee: "Lisa Chen"
		},
		{
			id: 5,
			name: "Liquidity Risk Assessment",
			type: "Financial Risk",
			status: "In Progress",
			progress: 60,
			lastModified: "2024-01-11",
			dueDate: "2024-01-30",
			assignee: "David Wilson"
		},
		{
			id: 6,
			name: "Customer Due Diligence Review",
			type: "Compliance",
			status: "Completed",
			progress: 100,
			lastModified: "2024-01-10",
			dueDate: "2024-01-15",
			assignee: "Emma Brown"
		}
	];

	// Filter and search state
	let searchTerm = '';
	let statusFilter = 'all';
	let typeFilter = 'all';

	// Computed filtered assessments
	$: filteredAssessments = assessments.filter(assessment => {
		const matchesSearch = assessment.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
							 assessment.assignee.toLowerCase().includes(searchTerm.toLowerCase());
		const matchesStatus = statusFilter === 'all' || assessment.status === statusFilter;
		const matchesType = typeFilter === 'all' || assessment.type === typeFilter;
		
		return matchesSearch && matchesStatus && matchesType;
	});

	// Status summary calculations
	$: statusSummary = {
		total: assessments.length,
		completed: assessments.filter(a => a.status === 'Completed').length,
		inProgress: assessments.filter(a => a.status === 'In Progress').length,
		draft: assessments.filter(a => a.status === 'Draft').length,
		underReview: assessments.filter(a => a.status === 'Under Review').length
	};

	// Status color mapping
	function getStatusColor(status: string) {
		switch (status) {
			case 'Completed': return 'var(--color-success)';
			case 'In Progress': return 'var(--color-primary)';
			case 'Under Review': return 'var(--color-accent)';
			case 'Draft': return 'var(--color-text-muted)';
			default: return 'var(--color-text-secondary)';
		}
	}

	// Progress bar color
	function getProgressColor(progress: number) {
		if (progress >= 90) return 'var(--color-success)';
		if (progress >= 60) return 'var(--color-primary)';
		if (progress >= 30) return 'var(--color-accent)';
		return 'var(--color-text-muted)';
	}
</script>

<div class="min-h-screen bg-[var(--color-background)] terminal-grid">
	<!-- Header -->
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
					<a href="/" class="font-mono text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors">Dashboard</a>
					<a href="/assessments" class="font-mono text-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors">Assessments</a>
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

	<!-- Welcome Section -->
	<section class="px-6 py-12 mx-auto max-w-7xl">
		<div class="mb-8">
			<div class="inline-block mb-4">
				<span class="font-mono text-[var(--color-text-muted)] text-sm">~/assessments $</span>
				<span class="font-mono text-[var(--color-accent)] ml-2">list --all</span>
			</div>
			<h1 class="text-3xl md:text-4xl font-mono font-bold text-[var(--color-text)] mb-4">
				Assessment <span class="text-[var(--color-accent)]">Management</span>
			</h1>
			<p class="text-lg text-[var(--color-text-secondary)] mb-6 font-mono">
				Create, manage, and track your FSCA compliance assessments from one central location.
			</p>
		</div>

		<!-- Status Summary Cards -->
		<div class="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
			<div class="terminal-window p-4 pt-8 text-center">
				<div class="terminal-dots">
					<div class="terminal-dot terminal-dot-red"></div>
					<div class="terminal-dot terminal-dot-yellow"></div>
					<div class="terminal-dot terminal-dot-green"></div>
				</div>
				<div class="text-2xl font-mono font-bold text-[var(--color-accent)] mb-1">{statusSummary.total}</div>
				<div class="text-sm font-mono text-[var(--color-text-secondary)]">Total Assessments</div>
			</div>
			<div class="terminal-window p-4 pt-8 text-center">
				<div class="terminal-dots">
					<div class="terminal-dot terminal-dot-red"></div>
					<div class="terminal-dot terminal-dot-yellow"></div>
					<div class="terminal-dot terminal-dot-green"></div>
				</div>
				<div class="text-2xl font-mono font-bold text-[var(--color-success)] mb-1">{statusSummary.completed}</div>
				<div class="text-sm font-mono text-[var(--color-text-secondary)]">Completed</div>
			</div>
			<div class="terminal-window p-4 pt-8 text-center">
				<div class="terminal-dots">
					<div class="terminal-dot terminal-dot-red"></div>
					<div class="terminal-dot terminal-dot-yellow"></div>
					<div class="terminal-dot terminal-dot-green"></div>
				</div>
				<div class="text-2xl font-mono font-bold text-[var(--color-primary)] mb-1">{statusSummary.inProgress}</div>
				<div class="text-sm font-mono text-[var(--color-text-secondary)]">In Progress</div>
			</div>
			<div class="terminal-window p-4 pt-8 text-center">
				<div class="terminal-dots">
					<div class="terminal-dot terminal-dot-red"></div>
					<div class="terminal-dot terminal-dot-yellow"></div>
					<div class="terminal-dot terminal-dot-green"></div>
				</div>
				<div class="text-2xl font-mono font-bold text-[var(--color-accent)] mb-1">{statusSummary.underReview}</div>
				<div class="text-sm font-mono text-[var(--color-text-secondary)]">Under Review</div>
			</div>
			<div class="terminal-window p-4 pt-8 text-center">
				<div class="terminal-dots">
					<div class="terminal-dot terminal-dot-red"></div>
					<div class="terminal-dot terminal-dot-yellow"></div>
					<div class="terminal-dot terminal-dot-green"></div>
				</div>
				<div class="text-2xl font-mono font-bold text-[var(--color-text-muted)] mb-1">{statusSummary.draft}</div>
				<div class="text-sm font-mono text-[var(--color-text-secondary)]">Draft</div>
			</div>
		</div>
	</section>

	<!-- Assessment Management Section -->
	<section class="px-6 py-16 bg-[var(--color-surface)]">
		<div class="mx-auto max-w-7xl">
			<!-- Section Header -->
			<div class="mb-8">
				<div class="inline-block mb-4">
					<span class="font-mono text-[var(--color-text-muted)] text-sm">~/assessments $</span>
					<span class="font-mono text-[var(--color-accent)] ml-2">manage --interactive</span>
				</div>
				<div class="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
					<h2 class="text-2xl font-mono font-bold text-[var(--color-text)]">
						Assessment Dashboard
					</h2>
					<button class="btn-terminal-primary px-6 py-3 rounded font-mono text-sm hover:scale-105 transition-transform">
						+ Create New Assessment
					</button>
				</div>
			</div>

			<!-- Filters and Search -->
			<div class="terminal-window p-6 pt-12 mb-8">
				<div class="terminal-dots">
					<div class="terminal-dot terminal-dot-red"></div>
					<div class="terminal-dot terminal-dot-yellow"></div>
					<div class="terminal-dot terminal-dot-green"></div>
				</div>
				<div class="grid md:grid-cols-3 gap-4">
					<div>
						<label for="search-input" class="block font-mono text-sm text-[var(--color-text)] mb-2">Search Assessments</label>
						<input
							id="search-input"
							type="text"
							bind:value={searchTerm}
							placeholder="Search by name or assignee..."
							class="w-full px-3 py-2 bg-[var(--color-surface-light)] border border-[var(--color-border)] rounded font-mono text-sm text-[var(--color-text)] placeholder-[var(--color-text-muted)] focus:border-[var(--color-accent)] focus:outline-none"
						/>
					</div>
					<div>
						<label for="status-filter" class="block font-mono text-sm text-[var(--color-text)] mb-2">Filter by Status</label>
						<select
							id="status-filter"
							bind:value={statusFilter}
							class="w-full px-3 py-2 bg-[var(--color-surface-light)] border border-[var(--color-border)] rounded font-mono text-sm text-[var(--color-text)] focus:border-[var(--color-accent)] focus:outline-none"
						>
							<option value="all">All Statuses</option>
							<option value="Draft">Draft</option>
							<option value="In Progress">In Progress</option>
							<option value="Under Review">Under Review</option>
							<option value="Completed">Completed</option>
						</select>
					</div>
					<div>
						<label for="type-filter" class="block font-mono text-sm text-[var(--color-text)] mb-2">Filter by Type</label>
						<select
							id="type-filter"
							bind:value={typeFilter}
							class="w-full px-3 py-2 bg-[var(--color-surface-light)] border border-[var(--color-border)] rounded font-mono text-sm text-[var(--color-text)] focus:border-[var(--color-accent)] focus:outline-none"
						>
							<option value="all">All Types</option>
							<option value="Operational Risk">Operational Risk</option>
							<option value="Conduct Risk">Conduct Risk</option>
							<option value="Financial Risk">Financial Risk</option>
							<option value="Governance">Governance</option>
							<option value="Compliance">Compliance</option>
						</select>
					</div>
				</div>
			</div>

			<!-- Assessment Grid -->
			<div class="grid lg:grid-cols-2 xl:grid-cols-3 gap-6">
				{#each filteredAssessments as assessment (assessment.id)}
					<div class="terminal-window p-6 pt-12 hover:border-[var(--color-accent)] transition-colors group">
						<div class="terminal-dots">
							<div class="terminal-dot terminal-dot-red"></div>
							<div class="terminal-dot terminal-dot-yellow"></div>
							<div class="terminal-dot terminal-dot-green"></div>
						</div>
						
						<!-- Assessment Header -->
						<div class="mb-4">
							<h3 class="font-mono font-semibold text-[var(--color-text)] mb-2 line-clamp-2">
								{assessment.name}
							</h3>
							<div class="flex items-center justify-between mb-2">
								<span class="font-mono text-xs text-[var(--color-text-secondary)] bg-[var(--color-surface-light)] px-2 py-1 rounded">
									{assessment.type}
								</span>
								<span 
									class="font-mono text-xs px-2 py-1 rounded"
									style="color: {getStatusColor(assessment.status)}; background-color: {getStatusColor(assessment.status)}20;"
								>
									{assessment.status}
								</span>
							</div>
						</div>

						<!-- Progress Bar -->
						<div class="mb-4">
							<div class="flex items-center justify-between mb-1">
								<span class="font-mono text-xs text-[var(--color-text-secondary)]">Progress</span>
								<span class="font-mono text-xs text-[var(--color-text)]">{assessment.progress}%</span>
							</div>
							<div class="w-full bg-[var(--color-surface-light)] rounded-full h-2">
								<div 
									class="h-2 rounded-full transition-all duration-300"
									style="width: {assessment.progress}%; background-color: {getProgressColor(assessment.progress)};"
								></div>
							</div>
						</div>

						<!-- Assessment Details -->
						<div class="space-y-2 mb-4">
							<div class="flex items-center justify-between">
								<span class="font-mono text-xs text-[var(--color-text-secondary)]">Assignee:</span>
								<span class="font-mono text-xs text-[var(--color-text)]">{assessment.assignee}</span>
							</div>
							<div class="flex items-center justify-between">
								<span class="font-mono text-xs text-[var(--color-text-secondary)]">Due Date:</span>
								<span class="font-mono text-xs text-[var(--color-text)]">{assessment.dueDate}</span>
							</div>
							<div class="flex items-center justify-between">
								<span class="font-mono text-xs text-[var(--color-text-secondary)]">Modified:</span>
								<span class="font-mono text-xs text-[var(--color-text)]">{assessment.lastModified}</span>
							</div>
						</div>

						<!-- Action Buttons -->
						<div class="grid grid-cols-2 gap-2">
							<button class="btn-terminal px-3 py-2 rounded text-xs font-mono hover:scale-105 transition-transform">
								Edit
							</button>
							<button class="btn-terminal px-3 py-2 rounded text-xs font-mono hover:scale-105 transition-transform">
								View
							</button>
						</div>
						<div class="grid grid-cols-2 gap-2 mt-2">
							<button class="btn-terminal px-3 py-2 rounded text-xs font-mono hover:scale-105 transition-transform">
								Export
							</button>
							<button class="btn-terminal px-3 py-2 rounded text-xs font-mono hover:scale-105 transition-transform text-red-400 hover:text-red-300">
								Delete
							</button>
						</div>
					</div>
				{/each}
			</div>

			<!-- No Results Message -->
			{#if filteredAssessments.length === 0}
				<div class="terminal-window p-12 pt-16 text-center">
					<div class="terminal-dots">
						<div class="terminal-dot terminal-dot-red"></div>
						<div class="terminal-dot terminal-dot-yellow"></div>
						<div class="terminal-dot terminal-dot-green"></div>
					</div>
					<div class="text-[var(--color-text-muted)] font-mono">
						<div class="text-4xl mb-4">📋</div>
						<h3 class="text-lg font-semibold mb-2">No assessments found</h3>
						<p class="text-sm">Try adjusting your search criteria or create a new assessment.</p>
					</div>
				</div>
			{/if}
		</div>
	</section>

	<!-- Footer -->
	<footer class="px-6 py-8 bg-[var(--color-surface)] border-t border-[var(--color-border)]">
		<div class="mx-auto max-w-7xl">
			<div class="flex flex-col md:flex-row items-center justify-between">
				<div class="mb-4 md:mb-0">
					<span class="font-mono text-[var(--color-text-muted)] text-sm">~/assessments $</span>
					<span class="font-mono text-[var(--color-accent)] ml-2">status --ready-for-compliance</span>
				</div>
				<div class="flex items-center gap-6">
					<a href="/help" class="font-mono text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors text-sm">Help</a>
					<a href="/docs" class="font-mono text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors text-sm">Documentation</a>
					<a href="/support" class="font-mono text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors text-sm">Support</a>
				</div>
				<div class="text-[var(--color-text-muted)] font-mono text-xs">
					v2.1.0 • {filteredAssessments.length} assessments loaded
				</div>
			</div>
		</div>
	</footer>
</div>

<style>
	.line-clamp-2 {
		display: -webkit-box;
		-webkit-line-clamp: 2;
		line-clamp: 2;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}
</style>
