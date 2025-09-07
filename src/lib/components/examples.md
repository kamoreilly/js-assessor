# Component Usage Examples

This file provides practical examples of how to use the component library in your SvelteKit pages.

## Complete Page Example

Here's how to structure a complete page using the component library:

```svelte
<script lang="ts">
	import {
		PageLayout,
		PageSection,
		StatsGrid,
		SearchInput,
		FilterSelect,
		FilterPanel,
		DataGrid,
		AppCard,
		ActivityFeed,
		Button,
		ButtonGroup
	} from '$lib/components';
	import type { Application, ActivityItem, StatCardData } from '$lib/components/types';

	// Page data
	let searchTerm = '';
	let statusFilter = 'all';

	const applications: Application[] = [
		{
			id: '1',
			title: 'Risk Assessment',
			description: 'Comprehensive risk evaluation tools',
			icon: '⚠️',
			status: 'Active',
			statusColor: 'var(--color-success)',
			href: '/risk-assessment'
		}
	];

	const stats: StatCardData[] = [
		{ value: 42, label: 'Total Applications', color: 'var(--color-primary)' },
		{ value: 38, label: 'Active', color: 'var(--color-success)' },
		{ value: 4, label: 'Maintenance', color: 'var(--color-warning)' }
	];

	const activities: ActivityItem[] = [
		{
			id: '1',
			title: 'Risk Assessment Updated',
			description: 'New compliance rules added',
			timestamp: '2 hours ago',
			type: 'success',
			user: 'John Smith'
		}
	];

	// Filter options
	const statusOptions = [
		{ value: 'all', label: 'All Statuses' },
		{ value: 'active', label: 'Active' },
		{ value: 'maintenance', label: 'Maintenance' }
	];

	// Computed values
	$: filteredApplications = applications.filter((app) => {
		const matchesSearch = app.title.toLowerCase().includes(searchTerm.toLowerCase());
		const matchesStatus = statusFilter === 'all' || app.status.toLowerCase() === statusFilter;
		return matchesSearch && matchesStatus;
	});

	// Event handlers
	function handleNewApplication() {
		console.log('Creating new application...');
	}

	function clearFilters() {
		searchTerm = '';
		statusFilter = 'all';
	}
</script>

<PageLayout
	currentPage="dashboard"
	title="Dashboard - Joint Standards"
	description="Main dashboard for compliance management"
	footerPromptPath="~/dashboard"
	footerPromptCommand="status --all-systems-operational"
	footerStatusText="{applications.length} applications loaded"
>
	<!-- Welcome Section -->
	<PageSection
		title="Dashboard <span class='text-[var(--color-accent)]'>Overview</span>"
		subtitle="Monitor your compliance applications and system status"
		promptPath="~/dashboard"
		promptCommand="overview --status"
	>
		<StatsGrid {stats} columns={{ sm: 1, md: 3, lg: 3 }} />
	</PageSection>

	<!-- Applications Section -->
	<PageSection
		title="Applications"
		promptPath="~/dashboard"
		promptCommand="list --applications"
		background="surface"
	>
		<!-- Filters -->
		<FilterPanel>
			<SearchInput bind:value={searchTerm} placeholder="Search applications..." label="Search" />
			<FilterSelect bind:value={statusFilter} options={statusOptions} label="Status" />
			<ButtonGroup>
				<Button variant="secondary" onclick={clearFilters}>Clear Filters</Button>
				<Button variant="primary" onclick={handleNewApplication}>New Application</Button>
			</ButtonGroup>
		</FilterPanel>

		<!-- Applications Grid -->
		<DataGrid items={filteredApplications} columns={{ md: 2, lg: 3 }}>
			{#snippet children(app)}
				<AppCard
					title={app.title}
					description={app.description}
					icon={app.icon}
					statusText={app.status}
					statusColor={app.statusColor}
					href={app.href}
				/>
			{/snippet}
		</DataGrid>

		<!-- No Results -->
		{#if filteredApplications.length === 0}
			<div class="terminal-window p-12 pt-16 text-center">
				<div class="terminal-dots">
					<div class="terminal-dot terminal-dot-red"></div>
					<div class="terminal-dot terminal-dot-yellow"></div>
					<div class="terminal-dot terminal-dot-green"></div>
				</div>
				<div class="font-mono text-[var(--color-text-muted)]">
					<div class="mb-4 text-4xl">🔍</div>
					<h3 class="mb-2 text-lg font-semibold">No applications found</h3>
					<p class="text-sm">Try adjusting your search criteria.</p>
				</div>
			</div>
		{/if}
	</PageSection>

	<!-- Activity Section -->
	<PageSection title="Recent Activity" promptPath="~/dashboard" promptCommand="activity --recent">
		<div class="grid gap-8 lg:grid-cols-2">
			<ActivityFeed {activities} title="System Activity" />
			<ActivityFeed activities={activities.slice(0, 3)} title="User Activity" />
		</div>
	</PageSection>
</PageLayout>
```

## Form Example

Here's how to create a comprehensive form using the form components:

```svelte
<script lang="ts">
	import {
		PageLayout,
		PageSection,
		SearchInput,
		FilterSelect,
		FilterPanel,
		Button,
		ButtonGroup
	} from '$lib/components';

	let formData = {
		name: '',
		type: '',
		priority: 'medium',
		assignee: '',
		description: ''
	};

	const typeOptions = [
		{ value: '', label: 'Select Type' },
		{ value: 'compliance', label: 'Compliance Assessment' },
		{ value: 'risk', label: 'Risk Assessment' },
		{ value: 'audit', label: 'Audit Review' }
	];

	const priorityOptions = [
		{ value: 'low', label: 'Low Priority' },
		{ value: 'medium', label: 'Medium Priority' },
		{ value: 'high', label: 'High Priority' }
	];

	function handleSubmit() {
		console.log('Submitting form:', formData);
	}

	function handleCancel() {
		// Reset form or navigate away
		formData = {
			name: '',
			type: '',
			priority: 'medium',
			assignee: '',
			description: ''
		};
	}
</script>

<PageLayout
	currentPage="assessments"
	title="New Assessment - Joint Standards"
	description="Create a new compliance assessment"
	footerPromptPath="~/assessments"
	footerPromptCommand="create --new-assessment"
>
	<PageSection
		title="Create New Assessment"
		subtitle="Fill out the form below to create a new assessment"
		promptPath="~/assessments"
		promptCommand="new --form"
	>
		<form on:submit|preventDefault={handleSubmit} class="space-y-6">
			<FilterPanel>
				<SearchInput
					bind:value={formData.name}
					placeholder="Enter assessment name..."
					label="Assessment Name"
				/>

				<FilterSelect bind:value={formData.type} options={typeOptions} label="Assessment Type" />

				<FilterSelect
					bind:value={formData.priority}
					options={priorityOptions}
					label="Priority Level"
				/>

				<SearchInput
					bind:value={formData.assignee}
					placeholder="Enter assignee name..."
					label="Assigned To"
				/>
			</FilterPanel>

			<div class="terminal-window p-6 pt-12">
				<div class="terminal-dots">
					<div class="terminal-dot terminal-dot-red"></div>
					<div class="terminal-dot terminal-dot-yellow"></div>
					<div class="terminal-dot terminal-dot-green"></div>
				</div>
				<label class="mb-2 block font-mono text-sm text-[var(--color-text)]"> Description </label>
				<textarea
					bind:value={formData.description}
					placeholder="Enter assessment description..."
					class="h-32 w-full resize-none rounded border border-[var(--color-border)] bg-[var(--color-background)] px-3 py-2 font-mono text-sm text-[var(--color-text)] placeholder-[var(--color-text-muted)] focus:border-[var(--color-accent)] focus:outline-none"
				></textarea>
			</div>

			<ButtonGroup>
				<Button type="submit" variant="primary">Create Assessment</Button>
				<Button type="button" variant="secondary" onclick={handleCancel}>Cancel</Button>
			</ButtonGroup>
		</form>
	</PageSection>
</PageLayout>
```

## Data Display Example

Here's how to display data using the data components:

```svelte
<script lang="ts">
	import {
		PageLayout,
		PageSection,
		DataGrid,
		ReportCard,
		StatsGrid,
		TerminalWindow
	} from '$lib/components';
	import type { Report, StatCardData } from '$lib/components/types';

	const reports: Report[] = [
		{
			id: '1',
			name: 'Monthly Compliance Report',
			type: 'Compliance',
			status: 'Generated',
			generatedDate: '2024-01-15',
			fileSize: '2.4 MB',
			format: 'PDF',
			downloadCount: 15,
			generatedBy: 'System Auto'
		}
	];

	const reportStats: StatCardData[] = [
		{ value: reports.length, label: 'Total Reports', color: 'var(--color-primary)' },
		{
			value: reports.filter((r) => r.status === 'Generated').length,
			label: 'Generated',
			color: 'var(--color-success)'
		},
		{
			value: reports.filter((r) => r.status === 'Processing').length,
			label: 'Processing',
			color: 'var(--color-warning)'
		}
	];

	function handleDownload(report: Report) {
		console.log('Downloading:', report.name);
	}

	function handleView(report: Report) {
		console.log('Viewing:', report.name);
	}

	function handleDelete(report: Report) {
		console.log('Deleting:', report.name);
	}
</script>

<PageLayout
	currentPage="reports"
	title="Reports - Joint Standards"
	description="View and manage compliance reports"
	footerPromptPath="~/reports"
	footerPromptCommand="status --all-reports-accessible"
>
	<!-- Statistics -->
	<PageSection title="Report Statistics" promptPath="~/reports" promptCommand="stats --overview">
		<StatsGrid stats={reportStats} columns={{ sm: 1, md: 3, lg: 3 }} />
	</PageSection>

	<!-- Reports Grid -->
	<PageSection
		title="Available Reports"
		promptPath="~/reports"
		promptCommand="list --all"
		background="surface"
	>
		<DataGrid items={reports} columns={{ md: 2, lg: 3 }}>
			{#snippet children(report)}
				<ReportCard
					name={report.name}
					type={report.type}
					status={report.status}
					generatedDate={report.generatedDate}
					fileSize={report.fileSize}
					format={report.format}
					downloadCount={report.downloadCount}
					generatedBy={report.generatedBy}
					onDownload={() => handleDownload(report)}
					onView={() => handleView(report)}
					onDelete={() => handleDelete(report)}
				/>
			{/snippet}
		</DataGrid>
	</PageSection>

	<!-- Custom Terminal Window -->
	<PageSection
		title="Report Generation Log"
		promptPath="~/reports"
		promptCommand="tail --generation-log"
	>
		<TerminalWindow padding="p-6 pt-12">
			{#snippet children()}
				<div class="space-y-2 font-mono text-sm">
					<div class="text-[var(--color-success)]">
						[2024-01-15 10:30:15] Report generation started
					</div>
					<div class="text-[var(--color-text)]">
						[2024-01-15 10:30:45] Processing compliance data...
					</div>
					<div class="text-[var(--color-text)]">[2024-01-15 10:31:20] Generating PDF output...</div>
					<div class="text-[var(--color-success)]">
						[2024-01-15 10:31:45] Report generation completed successfully
					</div>
				</div>
			{/snippet}
		</TerminalWindow>
	</PageSection>
</PageLayout>
```

## Best Practices

1. **Import only what you need**: Import specific components rather than the entire library
2. **Use TypeScript**: Leverage the provided types for better development experience
3. **Consistent spacing**: Use the provided spacing utilities for consistent layouts
4. **Responsive design**: Always consider mobile-first responsive design
5. **Accessibility**: Ensure proper labels and ARIA attributes
6. **Error handling**: Implement proper error states and loading indicators
7. **Performance**: Use Svelte's reactivity efficiently with computed values
