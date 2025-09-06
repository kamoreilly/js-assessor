<script lang="ts">
	// Mock report data for demonstration
	const reports = [
		{
			id: 1,
			name: "Monthly Compliance Report - December 2024",
			type: "Monthly Compliance",
			status: "Generated",
			generatedDate: "2024-01-15",
			fileSize: "2.4 MB",
			format: "PDF",
			downloadCount: 12,
			generatedBy: "System Auto"
		},
		{
			id: 2,
			name: "Risk Assessment Summary Q4 2024",
			type: "Risk Assessment",
			status: "Processing",
			generatedDate: "2024-01-14",
			fileSize: "1.8 MB",
			format: "Excel",
			downloadCount: 5,
			generatedBy: "John Smith"
		},
		{
			id: 3,
			name: "Audit Trail Report - January 2024",
			type: "Audit Trail",
			status: "Generated",
			generatedDate: "2024-01-13",
			fileSize: "5.2 MB",
			format: "CSV",
			downloadCount: 8,
			generatedBy: "Sarah Johnson"
		},
		{
			id: 4,
			name: "Governance Framework Analysis",
			type: "Governance",
			status: "Failed",
			generatedDate: "2024-01-12",
			fileSize: "0 MB",
			format: "PDF",
			downloadCount: 0,
			generatedBy: "Mike Davis"
		},
		{
			id: 5,
			name: "Capital Adequacy Report Q4 2024",
			type: "Financial Risk",
			status: "Scheduled",
			generatedDate: "2024-01-20",
			fileSize: "3.1 MB",
			format: "PDF",
			downloadCount: 0,
			generatedBy: "System Auto"
		},
		{
			id: 6,
			name: "Customer Due Diligence Summary",
			type: "Compliance",
			status: "Generated",
			generatedDate: "2024-01-10",
			fileSize: "1.2 MB",
			format: "Excel",
			downloadCount: 15,
			generatedBy: "Emma Brown"
		},
		{
			id: 7,
			name: "Market Conduct Assessment Report",
			type: "Conduct Risk",
			status: "Processing",
			generatedDate: "2024-01-09",
			fileSize: "2.8 MB",
			format: "PDF",
			downloadCount: 3,
			generatedBy: "Lisa Chen"
		},
		{
			id: 8,
			name: "Liquidity Risk Analysis December",
			type: "Financial Risk",
			status: "Generated",
			generatedDate: "2024-01-08",
			fileSize: "4.5 MB",
			format: "Excel",
			downloadCount: 7,
			generatedBy: "David Wilson"
		}
	];

	// Filter and search state
	let searchTerm = '';
	let selectedType = 'All';
	let selectedStatus = 'All';
	let selectedDateRange = 'All';
	let viewMode: 'cards' | 'table' = 'cards';

	// Available filter options
	const reportTypes = ['All', 'Monthly Compliance', 'Risk Assessment', 'Audit Trail', 'Governance', 'Financial Risk', 'Compliance', 'Conduct Risk'];
	const statusOptions = ['All', 'Generated', 'Processing', 'Failed', 'Scheduled'];
	const dateRanges = ['All', 'Last 7 days', 'Last 30 days', 'Last 90 days', 'This Year'];

	// Filtered reports
	$: filteredReports = reports.filter(report => {
		const matchesSearch = report.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
							 report.type.toLowerCase().includes(searchTerm.toLowerCase());
		const matchesType = selectedType === 'All' || report.type === selectedType;
		const matchesStatus = selectedStatus === 'All' || report.status === selectedStatus;
		// For demo purposes, we'll just filter by type and status for date range
		return matchesSearch && matchesType && matchesStatus;
	});

	// Report statistics
	$: reportStats = {
		total: reports.length,
		generated: reports.filter(r => r.status === 'Generated').length,
		processing: reports.filter(r => r.status === 'Processing').length,
		failed: reports.filter(r => r.status === 'Failed').length,
		scheduled: reports.filter(r => r.status === 'Scheduled').length,
		totalSize: reports.reduce((sum, r) => sum + parseFloat(r.fileSize.replace(' MB', '')), 0).toFixed(1),
		totalDownloads: reports.reduce((sum, r) => sum + r.downloadCount, 0)
	};

	// Status color mapping
	function getStatusColor(status: string) {
		switch (status) {
			case 'Generated': return 'var(--color-success)';
			case 'Processing': return 'var(--color-primary)';
			case 'Failed': return '#ef4444';
			case 'Scheduled': return 'var(--color-accent)';
			default: return 'var(--color-text-secondary)';
		}
	}

	// Format file size
	function formatFileSize(size: string) {
		return size === '0 MB' ? 'N/A' : size;
	}

	// Format date
	function formatDate(dateString: string) {
		return new Date(dateString).toLocaleDateString('en-US', {
			month: 'short',
			day: 'numeric',
			year: 'numeric'
		});
	}

	// Clear all filters
	function clearFilters() {
		searchTerm = '';
		selectedType = 'All';
		selectedStatus = 'All';
		selectedDateRange = 'All';
	}

	// Export functions
	function exportReports(format: 'csv' | 'excel' | 'pdf') {
		console.log(`Exporting reports as ${format}...`);
	}

	// Generate new report
	function generateNewReport() {
		console.log('Generating new report...');
	}
</script>

<div class="min-h-screen bg-[var(--color-background)] terminal-grid">
	<!-- Header -->
	<header class="border-b border-[var(--color-border)] bg-[var(--color-surface)]">
		<div class="max-w-7xl mx-auto px-4 sm:px-6 py-4">
			<div class="flex items-center justify-between">
				<div class="flex items-center gap-3">
					<div class="w-8 h-8 bg-[var(--color-accent)] rounded flex items-center justify-center">
						<span class="text-black font-mono font-bold text-sm">JS</span>
					</div>
					<span class="font-mono text-[var(--color-text)] font-semibold text-sm sm:text-base">Joint Standards Dashboard</span>
				</div>
				<nav class="hidden md:flex items-center gap-6">
					<a href="/" class="font-mono text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors">Dashboard</a>
					<a href="/assessments" class="font-mono text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors">Assessments</a>
					<a href="/reports" class="font-mono text-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors">Reports</a>
					<a href="/settings" class="font-mono text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors">Settings</a>
				</nav>
				<div class="flex items-center gap-2 sm:gap-3">
					<button class="w-8 h-8 bg-[var(--color-surface-light)] border border-[var(--color-border)] rounded flex items-center justify-center hover:border-[var(--color-accent)] transition-colors">
						<span class="text-[var(--color-text-secondary)] text-sm">🔔</span>
					</button>
					<button class="w-8 h-8 bg-[var(--color-surface-light)] border border-[var(--color-border)] rounded flex items-center justify-center hover:border-[var(--color-accent)] transition-colors">
						<span class="text-[var(--color-text-secondary)] text-sm">👤</span>
					</button>
				</div>
			</div>
		</div>
	</header>

	<!-- Welcome Section -->
	<section class="px-4 sm:px-6 py-8 sm:py-12 mx-auto max-w-7xl">
		<div class="mb-8">
			<div class="inline-block mb-4">
				<span class="font-mono text-[var(--color-text-muted)] text-xs sm:text-sm">~/reports $</span>
				<span class="font-mono text-[var(--color-accent)] ml-2 text-xs sm:text-sm">generate --compliance</span>
			</div>
			<h1 class="text-2xl sm:text-3xl md:text-4xl font-mono font-bold text-[var(--color-text)] mb-4">
				Report <span class="text-[var(--color-accent)]">Management</span>
			</h1>
			<p class="text-base sm:text-lg text-[var(--color-text-secondary)] mb-6 font-mono">
				Generate, manage, and download your FSCA compliance reports from one central location.
			</p>
		</div>

		<!-- Report Statistics -->
		<div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 mb-8">
			<div class="terminal-window p-3 sm:p-4 pt-6 sm:pt-8 text-center">
				<div class="terminal-dots">
					<div class="terminal-dot terminal-dot-red"></div>
					<div class="terminal-dot terminal-dot-yellow"></div>
					<div class="terminal-dot terminal-dot-green"></div>
				</div>
				<div class="text-xl sm:text-2xl font-mono font-bold text-[var(--color-accent)] mb-1">{reportStats.total}</div>
				<div class="text-xs sm:text-sm font-mono text-[var(--color-text-secondary)]">Total Reports</div>
			</div>
			<div class="terminal-window p-3 sm:p-4 pt-6 sm:pt-8 text-center">
				<div class="terminal-dots">
					<div class="terminal-dot terminal-dot-red"></div>
					<div class="terminal-dot terminal-dot-yellow"></div>
					<div class="terminal-dot terminal-dot-green"></div>
				</div>
				<div class="text-xl sm:text-2xl font-mono font-bold text-[var(--color-success)] mb-1">{reportStats.generated}</div>
				<div class="text-xs sm:text-sm font-mono text-[var(--color-text-secondary)]">Generated</div>
			</div>
			<div class="terminal-window p-3 sm:p-4 pt-6 sm:pt-8 text-center">
				<div class="terminal-dots">
					<div class="terminal-dot terminal-dot-red"></div>
					<div class="terminal-dot terminal-dot-yellow"></div>
					<div class="terminal-dot terminal-dot-green"></div>
				</div>
				<div class="text-xl sm:text-2xl font-mono font-bold text-[var(--color-primary)] mb-1">{reportStats.processing}</div>
				<div class="text-xs sm:text-sm font-mono text-[var(--color-text-secondary)]">Processing</div>
			</div>
			<div class="terminal-window p-3 sm:p-4 pt-6 sm:pt-8 text-center">
				<div class="terminal-dots">
					<div class="terminal-dot terminal-dot-red"></div>
					<div class="terminal-dot terminal-dot-yellow"></div>
					<div class="terminal-dot terminal-dot-green"></div>
				</div>
				<div class="text-xl sm:text-2xl font-mono font-bold text-[var(--color-accent)] mb-1">{reportStats.scheduled}</div>
				<div class="text-xs sm:text-sm font-mono text-[var(--color-text-secondary)]">Scheduled</div>
			</div>
			<div class="terminal-window p-3 sm:p-4 pt-6 sm:pt-8 text-center">
				<div class="terminal-dots">
					<div class="terminal-dot terminal-dot-red"></div>
					<div class="terminal-dot terminal-dot-yellow"></div>
					<div class="terminal-dot terminal-dot-green"></div>
				</div>
				<div class="text-xl sm:text-2xl font-mono font-bold text-[var(--color-text)] mb-1">{reportStats.totalSize}MB</div>
				<div class="text-xs sm:text-sm font-mono text-[var(--color-text-secondary)]">Total Size</div>
			</div>
			<div class="terminal-window p-3 sm:p-4 pt-6 sm:pt-8 text-center">
				<div class="terminal-dots">
					<div class="terminal-dot terminal-dot-red"></div>
					<div class="terminal-dot terminal-dot-yellow"></div>
					<div class="terminal-dot terminal-dot-green"></div>
				</div>
				<div class="text-xl sm:text-2xl font-mono font-bold text-[var(--color-primary)] mb-1">{reportStats.totalDownloads}</div>
				<div class="text-xs sm:text-sm font-mono text-[var(--color-text-secondary)]">Downloads</div>
			</div>
		</div>

		<!-- Actions Bar -->
		<div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
			<div class="flex flex-col sm:flex-row items-start sm:items-center gap-3">
				<button 
					on:click={generateNewReport}
					class="btn-terminal-primary px-4 py-2 rounded font-mono text-sm hover:scale-105 transition-transform whitespace-nowrap"
				>
					<span class="hidden sm:inline">📊 Generate New Report</span>
					<span class="sm:hidden">📊 Generate</span>
				</button>
				<div class="flex items-center gap-2">
					<button
						class="btn-terminal px-3 py-2 rounded font-mono text-xs hover:scale-105 transition-transform"
						on:click={() => exportReports('csv')}
					>
						CSV
					</button>
					<button
						class="btn-terminal px-3 py-2 rounded font-mono text-xs hover:scale-105 transition-transform"
						on:click={() => exportReports('excel')}
					>
						Excel
					</button>
					<button
						class="btn-terminal px-3 py-2 rounded font-mono text-xs hover:scale-105 transition-transform"
						on:click={() => exportReports('pdf')}
					>
						PDF
					</button>
				</div>
			</div>
			<div class="flex items-center gap-2">
				<button
					class="btn-terminal px-3 py-2 rounded font-mono text-sm transition-colors {viewMode === 'cards' ? 'bg-[var(--color-accent)] text-black' : ''}"
					on:click={() => viewMode = 'cards'}
				>
					📋 Cards
				</button>
				<button
					class="btn-terminal px-3 py-2 rounded font-mono text-sm transition-colors {viewMode === 'table' ? 'bg-[var(--color-accent)] text-black' : ''}"
					on:click={() => viewMode = 'table'}
				>
					📊 Table
				</button>
			</div>
		</div>

		<!-- Filters and Search -->
		<div class="terminal-window p-4 sm:p-6 pt-10 sm:pt-12 mb-8">
			<div class="terminal-dots">
				<div class="terminal-dot terminal-dot-red"></div>
				<div class="terminal-dot terminal-dot-yellow"></div>
				<div class="terminal-dot terminal-dot-green"></div>
			</div>
			<div class="mb-4">
				<div class="inline-block mb-2">
					<span class="font-mono text-[var(--color-text-muted)] text-xs sm:text-sm">~/filters $</span>
					<span class="font-mono text-[var(--color-accent)] ml-2 text-xs sm:text-sm">apply --search-and-filter</span>
				</div>
			</div>
			<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
				<!-- Search -->
				<div class="sm:col-span-2 lg:col-span-1">
					<label for="search-reports" class="block text-sm font-mono text-[var(--color-text-secondary)] mb-2">Search Reports</label>
					<input
						id="search-reports"
						type="text"
						bind:value={searchTerm}
						placeholder="Search by name or type..."
						class="w-full px-3 py-2 bg-[var(--color-surface-light)] border border-[var(--color-border)] rounded font-mono text-sm text-[var(--color-text)] placeholder-[var(--color-text-muted)] focus:border-[var(--color-accent)] focus:outline-none"
					/>
				</div>

				<!-- Type Filter -->
				<div>
					<label for="filter-type" class="block text-sm font-mono text-[var(--color-text-secondary)] mb-2">Report Type</label>
					<select
						id="filter-type"
						bind:value={selectedType}
						class="w-full px-3 py-2 bg-[var(--color-surface-light)] border border-[var(--color-border)] rounded font-mono text-sm text-[var(--color-text)] focus:border-[var(--color-accent)] focus:outline-none"
					>
						{#each reportTypes as type}
							<option value={type}>{type}</option>
						{/each}
					</select>
				</div>

				<!-- Status Filter -->
				<div>
					<label for="filter-status" class="block text-sm font-mono text-[var(--color-text-secondary)] mb-2">Status</label>
					<select
						id="filter-status"
						bind:value={selectedStatus}
						class="w-full px-3 py-2 bg-[var(--color-surface-light)] border border-[var(--color-border)] rounded font-mono text-sm text-[var(--color-text)] focus:border-[var(--color-accent)] focus:outline-none"
					>
						{#each statusOptions as status}
							<option value={status}>{status}</option>
						{/each}
					</select>
				</div>

				<!-- Date Range Filter -->
				<div>
					<label for="filter-date" class="block text-sm font-mono text-[var(--color-text-secondary)] mb-2">Date Range</label>
					<select
						id="filter-date"
						bind:value={selectedDateRange}
						class="w-full px-3 py-2 bg-[var(--color-surface-light)] border border-[var(--color-border)] rounded font-mono text-sm text-[var(--color-text)] focus:border-[var(--color-accent)] focus:outline-none"
					>
						{#each dateRanges as range}
							<option value={range}>{range}</option>
						{/each}
					</select>
				</div>
			</div>
			<div class="mt-4 flex justify-end">
				<button
					class="btn-terminal px-4 py-2 rounded font-mono text-sm hover:scale-105 transition-transform"
					on:click={clearFilters}
				>
					Clear All Filters
				</button>
			</div>
		</div>
	</section>

	<!-- Reports Section -->
	<section class="px-4 sm:px-6 py-8 sm:py-12">
		<div class="mx-auto max-w-7xl">
			<div class="mb-8">
			<div class="inline-block mb-4">
				<span class="font-mono text-[var(--color-text-muted)] text-xs sm:text-sm">~/reports $</span>
				<span class="font-mono text-[var(--color-accent)] ml-2 text-xs sm:text-sm">display --mode={viewMode}</span>
			</div>
		</div>

		<!-- Cards View -->
		{#if viewMode === 'cards'}
			<div class="space-y-4 sm:space-y-6">
				{#each filteredReports as report (report.id)}
					<div class="terminal-window p-4 sm:p-6 pt-10 sm:pt-12 hover:border-[var(--color-accent)] transition-colors">
						<div class="terminal-dots">
							<div class="terminal-dot terminal-dot-red"></div>
							<div class="terminal-dot terminal-dot-yellow"></div>
							<div class="terminal-dot terminal-dot-green"></div>
						</div>

						<div class="flex flex-col lg:grid lg:grid-cols-3 gap-4 lg:gap-6 items-start">
							<!-- Report Info Column -->
							<div class="lg:col-span-2 w-full min-w-0">
								<!-- Report Header -->
								<div class="mb-4">
									<div class="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3 gap-2">
										<h3 class="text-base sm:text-lg font-mono font-semibold text-[var(--color-text)] leading-tight break-words">
											{report.name}
										</h3>
										<div class="flex items-center gap-2 flex-shrink-0">
											<div
												class="w-3 h-3 rounded-full"
												style="background-color: {getStatusColor(report.status)}"
											></div>
											<span
												class="text-xs sm:text-sm font-mono font-semibold whitespace-nowrap"
												style="color: {getStatusColor(report.status)}"
											>
												{report.status}
											</span>
										</div>
									</div>
									<div class="flex flex-wrap items-center gap-2 mb-3">
										<span class="px-2 sm:px-3 py-1 bg-[var(--color-surface-light)] border border-[var(--color-border)] rounded text-xs sm:text-sm font-mono text-[var(--color-text)]">
											{report.type}
										</span>
										<span class="px-2 sm:px-3 py-1 bg-[var(--color-surface-light)] border border-[var(--color-border)] rounded text-xs sm:text-sm font-mono text-[var(--color-text)]">
											{report.format}
										</span>
									</div>
								</div>

								<!-- Report Details Grid -->
								<div class="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-4">
									<div class="text-center">
										<div class="text-xs sm:text-sm font-mono text-[var(--color-text-secondary)] mb-1">Generated</div>
										<div class="text-xs sm:text-sm font-mono text-[var(--color-text)] break-words">{formatDate(report.generatedDate)}</div>
									</div>
									<div class="text-center">
										<div class="text-xs sm:text-sm font-mono text-[var(--color-text-secondary)] mb-1">Size</div>
										<div class="text-xs sm:text-sm font-mono text-[var(--color-text)]">{formatFileSize(report.fileSize)}</div>
									</div>
									<div class="text-center">
										<div class="text-xs sm:text-sm font-mono text-[var(--color-text-secondary)] mb-1">Downloads</div>
										<div class="text-xs sm:text-sm font-mono text-[var(--color-text)]">{report.downloadCount}</div>
									</div>
									<div class="text-center">
										<div class="text-xs sm:text-sm font-mono text-[var(--color-text-secondary)] mb-1">Generated By</div>
										<div class="text-xs sm:text-sm font-mono text-[var(--color-text)] break-words">{report.generatedBy}</div>
									</div>
								</div>

								<!-- Progress Bar for Processing Reports -->
								{#if report.status === 'Processing'}
									<div class="mb-4">
										<div class="flex justify-between items-center mb-2">
											<span class="text-xs sm:text-sm font-mono text-[var(--color-text-secondary)]">Processing Progress</span>
											<span class="text-xs sm:text-sm font-mono text-[var(--color-primary)] font-semibold">75%</span>
										</div>
										<div class="w-full bg-[var(--color-surface-light)] border border-[var(--color-border)] rounded-full h-2 sm:h-3">
											<div class="bg-[var(--color-primary)] h-2 sm:h-3 rounded-full transition-all duration-300" style="width: 75%"></div>
										</div>
									</div>
								{/if}
							</div>

							<!-- Actions Column -->
							<div class="w-full lg:w-auto">
								<div class="grid grid-cols-2 lg:flex lg:flex-col gap-2 sm:gap-3">
									{#if report.status === 'Generated'}
										<button class="btn-terminal-primary px-3 sm:px-4 py-2 sm:py-3 rounded font-mono text-xs sm:text-sm hover:scale-105 transition-transform">
											<span class="hidden sm:inline">📥 Download Report</span>
											<span class="sm:hidden">📥 Download</span>
										</button>
										<button class="btn-terminal px-3 sm:px-4 py-2 sm:py-3 rounded font-mono text-xs sm:text-sm hover:scale-105 transition-transform">
											<span class="hidden sm:inline">👁️ View Details</span>
											<span class="sm:hidden">👁️ View</span>
										</button>
										<button class="btn-terminal px-3 sm:px-4 py-2 sm:py-3 rounded font-mono text-xs sm:text-sm hover:scale-105 transition-transform">
											<span class="hidden sm:inline">📤 Share Report</span>
											<span class="sm:hidden">📤 Share</span>
										</button>
										<button class="btn-terminal px-3 sm:px-4 py-2 sm:py-3 rounded font-mono text-xs sm:text-sm hover:scale-105 transition-transform text-red-400 hover:text-red-300">
											🗑️ Delete
										</button>
									{:else if report.status === 'Processing'}
										<button class="btn-terminal px-3 sm:px-4 py-2 sm:py-3 rounded font-mono text-xs sm:text-sm opacity-50 cursor-not-allowed col-span-2" disabled>
											⏳ Processing...
										</button>
										<button class="btn-terminal px-3 sm:px-4 py-2 sm:py-3 rounded font-mono text-xs sm:text-sm hover:scale-105 transition-transform">
											<span class="hidden sm:inline">❌ Cancel Process</span>
											<span class="sm:hidden">❌ Cancel</span>
										</button>
										<button class="btn-terminal px-3 sm:px-4 py-2 sm:py-3 rounded font-mono text-xs sm:text-sm hover:scale-105 transition-transform text-red-400 hover:text-red-300">
											🗑️ Delete
										</button>
									{:else if report.status === 'Failed'}
										<button class="btn-terminal-primary px-3 sm:px-4 py-2 sm:py-3 rounded font-mono text-xs sm:text-sm hover:scale-105 transition-transform">
											<span class="hidden sm:inline">🔄 Regenerate Report</span>
											<span class="sm:hidden">🔄 Regenerate</span>
										</button>
										<button class="btn-terminal px-3 sm:px-4 py-2 sm:py-3 rounded font-mono text-xs sm:text-sm hover:scale-105 transition-transform">
											<span class="hidden sm:inline">📋 View Error Log</span>
											<span class="sm:hidden">📋 Error Log</span>
										</button>
										<button class="btn-terminal px-3 sm:px-4 py-2 sm:py-3 rounded font-mono text-xs sm:text-sm hover:scale-105 transition-transform">
											<span class="hidden sm:inline">📤 Share Log</span>
											<span class="sm:hidden">📤 Share</span>
										</button>
										<button class="btn-terminal px-3 sm:px-4 py-2 sm:py-3 rounded font-mono text-xs sm:text-sm hover:scale-105 transition-transform text-red-400 hover:text-red-300">
											🗑️ Delete
										</button>
									{:else if report.status === 'Scheduled'}
										<button class="btn-terminal-primary px-3 sm:px-4 py-2 sm:py-3 rounded font-mono text-xs sm:text-sm hover:scale-105 transition-transform">
											<span class="hidden sm:inline">⏰ Reschedule</span>
											<span class="sm:hidden">⏰ Schedule</span>
										</button>
										<button class="btn-terminal px-3 sm:px-4 py-2 sm:py-3 rounded font-mono text-xs sm:text-sm hover:scale-105 transition-transform">
											<span class="hidden sm:inline">▶️ Run Now</span>
											<span class="sm:hidden">▶️ Run</span>
										</button>
										<button class="btn-terminal px-3 sm:px-4 py-2 sm:py-3 rounded font-mono text-xs sm:text-sm hover:scale-105 transition-transform">
											<span class="hidden sm:inline">❌ Cancel Schedule</span>
											<span class="sm:hidden">❌ Cancel</span>
										</button>
										<button class="btn-terminal px-3 sm:px-4 py-2 sm:py-3 rounded font-mono text-xs sm:text-sm hover:scale-105 transition-transform text-red-400 hover:text-red-300">
											🗑️ Delete
										</button>
									{/if}
								</div>
							</div>
						</div>
					</div>
				{/each}
			</div>
		{:else}
			<!-- Table View -->
			<div class="terminal-window p-4 sm:p-6 pt-10 sm:pt-12">
				<div class="terminal-dots">
					<div class="terminal-dot terminal-dot-red"></div>
					<div class="terminal-dot terminal-dot-yellow"></div>
					<div class="terminal-dot terminal-dot-green"></div>
				</div>
				
				<!-- Mobile Table (Stacked Cards) -->
				<div class="lg:hidden space-y-4">
					{#each filteredReports as report (report.id)}
						<div class="bg-[var(--color-surface)] border border-[var(--color-border)] rounded p-4 space-y-3">
							<div class="flex items-center justify-between">
								<h3 class="font-mono font-semibold text-[var(--color-text)] text-sm break-words flex-1 mr-2">
									{report.name}
								</h3>
								<div class="flex items-center gap-2 flex-shrink-0">
									<div
										class="w-2 h-2 rounded-full"
										style="background-color: {getStatusColor(report.status)}"
									></div>
									<span
										class="text-xs font-mono font-semibold"
										style="color: {getStatusColor(report.status)}"
									>
										{report.status}
									</span>
								</div>
							</div>
							<div class="grid grid-cols-2 gap-2 text-xs">
								<div><span class="text-[var(--color-text-secondary)]">Type:</span> {report.type}</div>
								<div><span class="text-[var(--color-text-secondary)]">Format:</span> {report.format}</div>
								<div><span class="text-[var(--color-text-secondary)]">Size:</span> {formatFileSize(report.fileSize)}</div>
								<div><span class="text-[var(--color-text-secondary)]">Downloads:</span> {report.downloadCount}</div>
								<div><span class="text-[var(--color-text-secondary)]">Date:</span> {formatDate(report.generatedDate)}</div>
								<div><span class="text-[var(--color-text-secondary)]">By:</span> {report.generatedBy}</div>
							</div>
							{#if report.status === 'Processing'}
								<div class="w-full bg-[var(--color-surface-light)] border border-[var(--color-border)] rounded-full h-2">
									<div class="bg-[var(--color-primary)] h-2 rounded-full transition-all duration-300" style="width: 75%"></div>
								</div>
							{/if}
							<div class="flex gap-2 pt-2">
								{#if report.status === 'Generated'}
									<button class="btn-terminal-primary flex-1 px-3 py-2 rounded font-mono text-xs">📥 Download</button>
									<button class="btn-terminal flex-1 px-3 py-2 rounded font-mono text-xs">👁️ View</button>
								{:else if report.status === 'Processing'}
									<button class="btn-terminal flex-1 px-3 py-2 rounded font-mono text-xs opacity-50 cursor-not-allowed" disabled>⏳ Processing</button>
								{:else if report.status === 'Failed'}
									<button class="btn-terminal-primary flex-1 px-3 py-2 rounded font-mono text-xs">🔄 Regenerate</button>
								{:else if report.status === 'Scheduled'}
									<button class="btn-terminal-primary flex-1 px-3 py-2 rounded font-mono text-xs">▶️ Run Now</button>
								{/if}
							</div>
						</div>
					{/each}
				</div>

				<!-- Desktop Table (Horizontal Scroll) -->
				<div class="hidden lg:block overflow-x-auto">
					<table class="w-full font-mono text-sm">
						<thead>
							<tr class="border-b border-[var(--color-border)]">
								<th class="text-left py-3 px-4 font-semibold text-[var(--color-text)] min-w-[200px]">Report Name</th>
								<th class="text-left py-3 px-4 font-semibold text-[var(--color-text)] min-w-[120px]">Type</th>
								<th class="text-left py-3 px-4 font-semibold text-[var(--color-text)] min-w-[100px]">Status</th>
								<th class="text-left py-3 px-4 font-semibold text-[var(--color-text)] min-w-[100px]">Date</th>
								<th class="text-left py-3 px-4 font-semibold text-[var(--color-text)] min-w-[80px]">Size</th>
								<th class="text-left py-3 px-4 font-semibold text-[var(--color-text)] min-w-[80px]">Format</th>
								<th class="text-left py-3 px-4 font-semibold text-[var(--color-text)] min-w-[100px]">Downloads</th>
								<th class="text-left py-3 px-4 font-semibold text-[var(--color-text)] min-w-[120px]">Generated By</th>
								<th class="text-left py-3 px-4 font-semibold text-[var(--color-text)] min-w-[200px]">Actions</th>
							</tr>
						</thead>
						<tbody>
							{#each filteredReports as report (report.id)}
								<tr class="border-b border-[var(--color-border)] hover:bg-[var(--color-surface-light)] transition-colors">
									<td class="py-3 px-4 text-[var(--color-text)] break-words">{report.name}</td>
									<td class="py-3 px-4 text-[var(--color-text-secondary)]">{report.type}</td>
									<td class="py-3 px-4">
										<div class="flex items-center gap-2">
											<div
												class="w-2 h-2 rounded-full"
												style="background-color: {getStatusColor(report.status)}"
											></div>
											<span
												class="text-sm font-semibold"
												style="color: {getStatusColor(report.status)}"
											>
												{report.status}
											</span>
										</div>
									</td>
									<td class="py-3 px-4 text-[var(--color-text-secondary)]">{formatDate(report.generatedDate)}</td>
									<td class="py-3 px-4 text-[var(--color-text-secondary)]">{formatFileSize(report.fileSize)}</td>
									<td class="py-3 px-4 text-[var(--color-text-secondary)]">{report.format}</td>
									<td class="py-3 px-4 text-[var(--color-text-secondary)]">{report.downloadCount}</td>
									<td class="py-3 px-4 text-[var(--color-text-secondary)]">{report.generatedBy}</td>
									<td class="py-3 px-4">
										<div class="flex gap-1">
											{#if report.status === 'Generated'}
												<button class="btn-terminal-primary px-2 py-1 rounded font-mono text-xs hover:scale-105 transition-transform">📥</button>
												<button class="btn-terminal px-2 py-1 rounded font-mono text-xs hover:scale-105 transition-transform">👁️</button>
												<button class="btn-terminal px-2 py-1 rounded font-mono text-xs hover:scale-105 transition-transform">📤</button>
												<button class="btn-terminal px-2 py-1 rounded font-mono text-xs hover:scale-105 transition-transform text-red-400 hover:text-red-300">🗑️</button>
											{:else if report.status === 'Processing'}
												<button class="btn-terminal px-2 py-1 rounded font-mono text-xs opacity-50 cursor-not-allowed" disabled>⏳</button>
												<button class="btn-terminal px-2 py-1 rounded font-mono text-xs hover:scale-105 transition-transform">❌</button>
											{:else if report.status === 'Failed'}
												<button class="btn-terminal-primary px-2 py-1 rounded font-mono text-xs hover:scale-105 transition-transform">🔄</button>
												<button class="btn-terminal px-2 py-1 rounded font-mono text-xs hover:scale-105 transition-transform">📋</button>
											{:else if report.status === 'Scheduled'}
												<button class="btn-terminal-primary px-2 py-1 rounded font-mono text-xs hover:scale-105 transition-transform">▶️</button>
												<button class="btn-terminal px-2 py-1 rounded font-mono text-xs hover:scale-105 transition-transform">❌</button>
											{/if}
										</div>
									</td>
								</tr>
							{/each}
						</tbody>
					</table>
				</div>
			</div>
		{/if}

		<!-- Empty State -->
		{#if filteredReports.length === 0}
			<div class="terminal-window p-8 sm:p-12 pt-12 sm:pt-16 text-center">
				<div class="terminal-dots">
					<div class="terminal-dot terminal-dot-red"></div>
					<div class="terminal-dot terminal-dot-yellow"></div>
					<div class="terminal-dot terminal-dot-green"></div>
				</div>
				<div class="text-4xl sm:text-6xl mb-4">📊</div>
				<h3 class="text-lg sm:text-xl font-mono font-semibold text-[var(--color-text)] mb-2">No Reports Found</h3>
				<p class="text-sm sm:text-base text-[var(--color-text-secondary)] font-mono mb-6">
					No reports match your current filters. Try adjusting your search criteria.
				</p>
				<button
					class="btn-terminal-primary px-4 sm:px-6 py-2 sm:py-3 rounded font-mono text-sm hover:scale-105 transition-transform"
					on:click={clearFilters}
				>
					Clear Filters
				</button>
			</div>
		{/if}
		</div>
	</section>

	<!-- Recent Activity Section -->
	<section class="px-4 sm:px-6 py-12 sm:py-16">
		<div class="mx-auto max-w-7xl">
			<div class="mb-8">
				<div class="inline-block mb-4">
					<span class="font-mono text-[var(--color-text-muted)] text-xs sm:text-sm">~/reports $</span>
					<span class="font-mono text-[var(--color-accent)] ml-2 text-xs sm:text-sm">activity --recent</span>
				</div>
				<h2 class="text-xl sm:text-2xl font-mono font-bold text-[var(--color-text)]">
					Recent Report Activity
				</h2>
			</div>

			<div class="grid lg:grid-cols-2 gap-6 lg:gap-8">
				<!-- Recent Generation Activity -->
				<div class="terminal-window p-4 sm:p-6 pt-10 sm:pt-12">
					<div class="terminal-dots">
						<div class="terminal-dot terminal-dot-red"></div>
						<div class="terminal-dot terminal-dot-yellow"></div>
						<div class="terminal-dot terminal-dot-green"></div>
					</div>
					<h3 class="text-base sm:text-lg font-mono font-semibold text-[var(--color-text)] mb-4">Generation Activity</h3>
					<div class="space-y-3">
						<div class="flex items-start gap-3 p-3 bg-[var(--color-surface)] border border-[var(--color-border)] rounded">
							<div class="w-2 h-2 bg-[var(--color-success)] rounded-full mt-2 flex-shrink-0"></div>
							<div class="flex-1 min-w-0">
								<div class="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1 gap-1">
									<span class="font-mono text-xs sm:text-sm text-[var(--color-text)] break-words">Monthly Compliance Report generated</span>
									<span class="font-mono text-xs text-[var(--color-text-muted)] flex-shrink-0">2 hours ago</span>
								</div>
								<p class="text-[var(--color-text-secondary)] font-mono text-xs break-words">Generated by System Auto • 2.4 MB PDF</p>
							</div>
						</div>
						<div class="flex items-start gap-3 p-3 bg-[var(--color-surface)] border border-[var(--color-border)] rounded">
							<div class="w-2 h-2 bg-[var(--color-primary)] rounded-full mt-2 flex-shrink-0"></div>
							<div class="flex-1 min-w-0">
								<div class="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1 gap-1">
									<span class="font-mono text-xs sm:text-sm text-[var(--color-text)] break-words">Risk Assessment processing started</span>
									<span class="font-mono text-xs text-[var(--color-text-muted)] flex-shrink-0">4 hours ago</span>
								</div>
								<p class="text-[var(--color-text-secondary)] font-mono text-xs break-words">Initiated by John Smith • Expected completion in 1 hour</p>
							</div>
						</div>
						<div class="flex items-start gap-3 p-3 bg-[var(--color-surface)] border border-[var(--color-border)] rounded">
							<div class="w-2 h-2 bg-[var(--color-success)] rounded-full mt-2 flex-shrink-0"></div>
							<div class="flex-1 min-w-0">
								<div class="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1 gap-1">
									<span class="font-mono text-xs sm:text-sm text-[var(--color-text)] break-words">Audit Trail Report completed</span>
									<span class="font-mono text-xs text-[var(--color-text-muted)] flex-shrink-0">6 hours ago</span>
								</div>
								<p class="text-[var(--color-text-secondary)] font-mono text-xs break-words">Generated by Sarah Johnson • 5.2 MB CSV</p>
							</div>
						</div>
						<div class="flex items-start gap-3 p-3 bg-[var(--color-surface)] border border-[var(--color-border)] rounded">
							<div class="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
							<div class="flex-1 min-w-0">
								<div class="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1 gap-1">
									<span class="font-mono text-xs sm:text-sm text-[var(--color-text)] break-words">Governance Framework generation failed</span>
									<span class="font-mono text-xs text-[var(--color-text-muted)] flex-shrink-0">8 hours ago</span>
								</div>
								<p class="text-[var(--color-text-secondary)] font-mono text-xs break-words">Error: Insufficient data • Initiated by Mike Davis</p>
							</div>
						</div>
					</div>
				</div>

				<!-- Download Activity -->
				<div class="terminal-window p-4 sm:p-6 pt-10 sm:pt-12">
					<div class="terminal-dots">
						<div class="terminal-dot terminal-dot-red"></div>
						<div class="terminal-dot terminal-dot-yellow"></div>
						<div class="terminal-dot terminal-dot-green"></div>
					</div>
					<h3 class="text-base sm:text-lg font-mono font-semibold text-[var(--color-text)] mb-4">Download Activity</h3>
					<div class="space-y-3">
						<div class="flex items-start gap-3 p-3 bg-[var(--color-surface)] border border-[var(--color-border)] rounded">
							<div class="w-2 h-2 bg-[var(--color-accent)] rounded-full mt-2 flex-shrink-0"></div>
							<div class="flex-1 min-w-0">
								<div class="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1 gap-1">
									<span class="font-mono text-xs sm:text-sm text-[var(--color-text)] break-words">Customer Due Diligence Summary downloaded</span>
									<span class="font-mono text-xs text-[var(--color-text-muted)] flex-shrink-0">1 hour ago</span>
								</div>
								<p class="text-[var(--color-text-secondary)] font-mono text-xs break-words">Downloaded by Emma Brown • 1.2 MB Excel</p>
							</div>
						</div>
						<div class="flex items-start gap-3 p-3 bg-[var(--color-surface)] border border-[var(--color-border)] rounded">
							<div class="w-2 h-2 bg-[var(--color-accent)] rounded-full mt-2 flex-shrink-0"></div>
							<div class="flex-1 min-w-0">
								<div class="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1 gap-1">
									<span class="font-mono text-xs sm:text-sm text-[var(--color-text)] break-words">Monthly Compliance Report downloaded</span>
									<span class="font-mono text-xs text-[var(--color-text-muted)] flex-shrink-0">3 hours ago</span>
								</div>
								<p class="text-[var(--color-text-secondary)] font-mono text-xs break-words">Downloaded by John Smith • 2.4 MB PDF</p>
							</div>
						</div>
						<div class="flex items-start gap-3 p-3 bg-[var(--color-surface)] border border-[var(--color-border)] rounded">
							<div class="w-2 h-2 bg-[var(--color-accent)] rounded-full mt-2 flex-shrink-0"></div>
							<div class="flex-1 min-w-0">
								<div class="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1 gap-1">
									<span class="font-mono text-xs sm:text-sm text-[var(--color-text)] break-words">Liquidity Risk Analysis downloaded</span>
									<span class="font-mono text-xs text-[var(--color-text-muted)] flex-shrink-0">5 hours ago</span>
								</div>
								<p class="text-[var(--color-text-secondary)] font-mono text-xs break-words">Downloaded by David Wilson • 4.5 MB Excel</p>
							</div>
						</div>
						<div class="flex items-start gap-3 p-3 bg-[var(--color-surface)] border border-[var(--color-border)] rounded">
							<div class="w-2 h-2 bg-[var(--color-accent)] rounded-full mt-2 flex-shrink-0"></div>
							<div class="flex-1 min-w-0">
								<div class="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1 gap-1">
									<span class="font-mono text-xs sm:text-sm text-[var(--color-text)] break-words">Audit Trail Report shared</span>
									<span class="font-mono text-xs text-[var(--color-text-muted)] flex-shrink-0">7 hours ago</span>
								</div>
								<p class="text-[var(--color-text-secondary)] font-mono text-xs break-words">Shared by Sarah Johnson with compliance team</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Footer -->
	<footer class="px-4 sm:px-6 py-6 sm:py-8 bg-[var(--color-surface)] border-t border-[var(--color-border)]">
		<div class="mx-auto max-w-7xl">
			<div class="flex flex-col md:flex-row items-center justify-between gap-4">
				<div class="text-center md:text-left">
					<span class="font-mono text-[var(--color-text-muted)] text-xs sm:text-sm">~/reports $</span>
					<span class="font-mono text-[var(--color-accent)] ml-2 text-xs sm:text-sm">status --all-reports-accessible</span>
				</div>
				<div class="flex items-center gap-4 sm:gap-6">
					<a href="/help" class="font-mono text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors text-xs sm:text-sm">Help</a>
					<a href="/docs" class="font-mono text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors text-xs sm:text-sm">Documentation</a>
					<a href="/support" class="font-mono text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors text-xs sm:text-sm">Support</a>
				</div>
			</div>
		</div>
	</footer>
</div>
