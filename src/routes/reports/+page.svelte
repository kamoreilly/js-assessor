<script lang="ts">
	import {
		PageLayout,
		PageSection,
		StatsGrid,
		FilterPanel,
		SearchInput,
		FilterSelect,
		DataGrid,
		ReportCard,
		Button
	} from '$lib/components';
	import type { FilterOption } from '$lib/components';

	interface Report {
		id: number;
		name: string;
		type: string;
		status: string;
		generatedDate: string;
		fileSize: string;
		format: string;
		downloadCount: number;
		generatedBy: string;
	}

	// Mock report data for demonstration
	const reports: Report[] = [
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

	// Filter options for components
	const typeOptions: FilterOption[] = [
		{ value: 'All', label: 'All Types' },
		{ value: 'Monthly Compliance', label: 'Monthly Compliance' },
		{ value: 'Risk Assessment', label: 'Risk Assessment' },
		{ value: 'Audit Trail', label: 'Audit Trail' },
		{ value: 'Governance', label: 'Governance' },
		{ value: 'Financial Risk', label: 'Financial Risk' },
		{ value: 'Compliance', label: 'Compliance' },
		{ value: 'Conduct Risk', label: 'Conduct Risk' }
	];

	const statusFilterOptions: FilterOption[] = [
		{ value: 'All', label: 'All Statuses' },
		{ value: 'Generated', label: 'Generated' },
		{ value: 'Processing', label: 'Processing' },
		{ value: 'Failed', label: 'Failed' },
		{ value: 'Scheduled', label: 'Scheduled' }
	];

	const dateRangeOptions: FilterOption[] = [
		{ value: 'All', label: 'All Time' },
		{ value: 'Last 7 days', label: 'Last 7 days' },
		{ value: 'Last 30 days', label: 'Last 30 days' },
		{ value: 'Last 90 days', label: 'Last 90 days' },
		{ value: 'This Year', label: 'This Year' }
	];

	// Helper functions
	function getStatusColor(status: string): string {
		switch (status) {
			case 'Generated':
				return 'var(--color-success)';
			case 'Processing':
				return 'var(--color-primary)';
			case 'Failed':
				return '#ef4444';
			case 'Scheduled':
				return 'var(--color-warning)';
			default:
				return 'var(--color-text-muted)';
		}
	}

	function formatDate(dateString: string): string {
		const date = new Date(dateString);
		return date.toLocaleDateString('en-US', {
			year: 'numeric',
			month: 'short',
			day: 'numeric'
		});
	}

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

	// Statistics for display
	$: dashboardStats = [
		{ value: reportStats.total, label: 'Total Reports', color: 'var(--color-accent)' },
		{ value: reportStats.generated, label: 'Generated', color: 'var(--color-success)' },
		{ value: reportStats.processing, label: 'Processing', color: 'var(--color-primary)' },
		{ value: reportStats.failed, label: 'Failed', color: '#ef4444' },
		{ value: `${reportStats.totalSize} MB`, label: 'Total Size', color: 'var(--color-text-muted)' },
		{ value: reportStats.totalDownloads, label: 'Downloads', color: 'var(--color-accent)' }
	];

	// Clear all filters
	function clearFilters() {
		searchTerm = '';
		selectedType = 'All';
		selectedStatus = 'All';
		selectedDateRange = 'All';
	}

	// Action handlers
	function handleDownload(report: Report) {
		console.log('Download report:', report.id);
	}

	function handleView(report: Report) {
		console.log('View report:', report.id);
	}

	function handleDelete(report: Report) {
		console.log('Delete report:', report.id);
	}

	function handleRegenerate(report: Report) {
		console.log('Regenerate report:', report.id);
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

<PageLayout
	currentPage="reports"
	title="Report Management - Joint Standards Dashboard"
	description="Generate, manage, and download your FSCA compliance reports from one central location"
	footerPromptPath="~/reports"
	footerPromptCommand="status --all-generated"
	footerStatusText="{filteredReports.length} reports available"
>
	<!-- Overview Section -->
	<PageSection
		title="Report <span class='text-[var(--color-accent)]'>Management</span>"
		subtitle="Generate, manage, and download your FSCA compliance reports from one central location."
		promptPath="~/reports"
		promptCommand="generate --compliance"
	>
		<!-- Report Statistics -->
		<StatsGrid stats={dashboardStats} columns={{ sm: 2, md: 3, lg: 6 }} />
	</PageSection>

	<!-- Report Management Section -->
	<PageSection
		title="Report Dashboard"
		promptPath="~/reports"
		promptCommand="manage --interactive"
		background="surface"
	>
		<!-- Actions Bar -->
		<div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
			<div class="flex flex-col sm:flex-row items-start sm:items-center gap-3">
				<Button variant="primary" size="md" onclick={generateNewReport}>
					Generate New Report
				</Button>
				<div class="flex items-center gap-2">
					<Button variant="secondary" size="sm" onclick={() => exportReports('csv')}>
						CSV
					</Button>
					<Button variant="secondary" size="sm" onclick={() => exportReports('excel')}>
						Excel
					</Button>
					<Button variant="secondary" size="sm" onclick={() => exportReports('pdf')}>
						PDF
					</Button>
				</div>
			</div>
			<div class="flex items-center gap-2">
				<Button
					variant={viewMode === 'cards' ? 'primary' : 'secondary'}
					size="sm"
					onclick={() => viewMode = 'cards'}
				>
					Cards
				</Button>
				<Button
					variant={viewMode === 'table' ? 'primary' : 'secondary'}
					size="sm"
					onclick={() => viewMode = 'table'}
				>
					Table
				</Button>
			</div>
		</div>

		<!-- Filters and Search -->
		<FilterPanel>
			<SearchInput
				bind:value={searchTerm}
				placeholder="Search by name or type..."
				label="Search Reports"
			/>
			<FilterSelect
				bind:value={selectedType}
				options={typeOptions}
				label="Report Type"
			/>
			<FilterSelect
				bind:value={selectedStatus}
				options={statusFilterOptions}
				label="Status"
			/>
			<FilterSelect
				bind:value={selectedDateRange}
				options={dateRangeOptions}
				label="Date Range"
			/>

			<Button variant="secondary" size="sm" onclick={clearFilters}>
				Clear All Filters
			</Button>
		</FilterPanel>

		<!-- Reports Display -->
		{#if viewMode === 'cards'}
			<DataGrid items={filteredReports} columns={{ lg: 1 }}>
				{#snippet children(report: Report)}
					<ReportCard
						report={report}
						onDownload={() => handleDownload(report)}
						onView={() => handleView(report)}
						onDelete={() => handleDelete(report)}
						onRegenerate={() => handleRegenerate(report)}
					/>
				{/snippet}
			</DataGrid>
		{:else}
			<!-- Table View -->
			<div class="terminal-window p-4 sm:p-6 pt-10 sm:pt-12 overflow-x-auto">
				<div class="terminal-dots">
					<div class="terminal-dot terminal-dot-red"></div>
					<div class="terminal-dot terminal-dot-yellow"></div>
					<div class="terminal-dot terminal-dot-green"></div>
				</div>
				<table class="w-full min-w-[800px] font-mono text-sm">
					<thead>
						<tr class="border-b border-[var(--color-border)]">
							<th class="text-left py-3 px-2 text-[var(--color-text)] font-semibold">Report Name</th>
							<th class="text-left py-3 px-2 text-[var(--color-text)] font-semibold">Type</th>
							<th class="text-left py-3 px-2 text-[var(--color-text)] font-semibold">Status</th>
							<th class="text-left py-3 px-2 text-[var(--color-text)] font-semibold">Generated</th>
							<th class="text-left py-3 px-2 text-[var(--color-text)] font-semibold">Size</th>
							<th class="text-left py-3 px-2 text-[var(--color-text)] font-semibold">Downloads</th>
							<th class="text-left py-3 px-2 text-[var(--color-text)] font-semibold">Actions</th>
						</tr>
					</thead>
					<tbody>
						{#each filteredReports as report (report.id)}
							<tr class="border-b border-[var(--color-border)] hover:bg-[var(--color-surface-light)] transition-colors">
								<td class="py-3 px-2 text-[var(--color-text)]">{report.name}</td>
								<td class="py-3 px-2 text-[var(--color-text-secondary)]">{report.type}</td>
								<td class="py-3 px-2">
									<span class="px-2 py-1 rounded text-xs font-semibold" style="color: {getStatusColor(report.status)}; background-color: {getStatusColor(report.status)}20;">
										{report.status}
									</span>
								</td>
								<td class="py-3 px-2 text-[var(--color-text-secondary)]">{formatDate(report.generatedDate)}</td>
								<td class="py-3 px-2 text-[var(--color-text-secondary)]">{report.fileSize}</td>
								<td class="py-3 px-2 text-[var(--color-text-secondary)]">{report.downloadCount}</td>
								<td class="py-3 px-2">
									<div class="flex items-center gap-1">
										{#if report.status === 'Generated'}
											<button class="btn-terminal px-2 py-1 rounded text-xs hover:scale-105 transition-transform" title="Download">
												DL
											</button>
											<button class="btn-terminal px-2 py-1 rounded text-xs hover:scale-105 transition-transform" title="View">
												VIEW
											</button>
										{:else if report.status === 'Failed'}
											<button class="btn-terminal px-2 py-1 rounded text-xs hover:scale-105 transition-transform" title="Regenerate">
												REGEN
											</button>
										{/if}
										<button class="btn-terminal px-2 py-1 rounded text-xs hover:scale-105 transition-transform text-red-400" title="Delete">
												DEL
										</button>
									</div>
								</td>
							</tr>
						{/each}
					</tbody>
				</table>
			</div>
		{/if}

		<!-- No Results Message -->
		{#if filteredReports.length === 0}
			<div class="terminal-window p-12 pt-16 text-center">
				<div class="terminal-dots">
					<div class="terminal-dot terminal-dot-red"></div>
					<div class="terminal-dot terminal-dot-yellow"></div>
					<div class="terminal-dot terminal-dot-green"></div>
				</div>
				<div class="text-[var(--color-text-muted)] font-mono">
					<h3 class="text-lg font-semibold mb-2">No reports found</h3>
					<p class="text-sm">Try adjusting your search criteria or generate a new report.</p>
				</div>
			</div>
		{/if}
	</PageSection>
</PageLayout>