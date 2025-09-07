<script lang="ts">
	import {
		PageLayout,
		PageSection,
		StatsGrid,
		FilterPanel,
		SearchInput,
		FilterSelect,
		DataGrid,
		AssessmentCard,
		Button,
		AssessmentDialog
	} from '$lib/components';
	import type { StatCardData, FilterOption, NewAssessmentData } from '$lib/components';

	interface Assessment {
		id: number;
		name: string;
		type: string;
		status: string;
		progress: number;
		lastModified: string;
		dueDate: string;
		assignee: string;
	}

	// Dialog state
	let isDialogOpen = false;

	// Mock assessment data for demonstration (made reactive for adding new assessments)
	let assessments = [
		{
			id: 1,
			name: 'FSCA Joint Standard 1 Assessment',
			type: 'Operational Risk',
			status: 'Completed',
			progress: 100,
			lastModified: '2024-01-15',
			dueDate: '2024-01-20',
			assignee: 'John Smith'
		},
		{
			id: 2,
			name: 'Market Conduct Assessment',
			type: 'Conduct Risk',
			status: 'In Progress',
			progress: 75,
			lastModified: '2024-01-14',
			dueDate: '2024-01-25',
			assignee: 'Sarah Johnson'
		},
		{
			id: 3,
			name: 'Capital Adequacy Review',
			type: 'Financial Risk',
			status: 'Under Review',
			progress: 90,
			lastModified: '2024-01-13',
			dueDate: '2024-01-18',
			assignee: 'Mike Davis'
		},
		{
			id: 4,
			name: 'Governance Framework Assessment',
			type: 'Governance',
			status: 'Draft',
			progress: 25,
			lastModified: '2024-01-12',
			dueDate: '2024-02-01',
			assignee: 'Lisa Chen'
		},
		{
			id: 5,
			name: 'Liquidity Risk Assessment',
			type: 'Financial Risk',
			status: 'In Progress',
			progress: 60,
			lastModified: '2024-01-11',
			dueDate: '2024-01-30',
			assignee: 'David Wilson'
		},
		{
			id: 6,
			name: 'Customer Due Diligence Review',
			type: 'Compliance',
			status: 'Completed',
			progress: 100,
			lastModified: '2024-01-10',
			dueDate: '2024-01-15',
			assignee: 'Emma Brown'
		}
	];

	// Filter and search state
	let searchTerm = '';
	let statusFilter = 'all';
	let typeFilter = 'all';

	// Filter options
	const statusOptions: FilterOption[] = [
		{ value: 'all', label: 'All Statuses' },
		{ value: 'Draft', label: 'Draft' },
		{ value: 'In Progress', label: 'In Progress' },
		{ value: 'Under Review', label: 'Under Review' },
		{ value: 'Completed', label: 'Completed' }
	];

	const typeOptions: FilterOption[] = [
		{ value: 'all', label: 'All Types' },
		{ value: 'Operational Risk', label: 'Operational Risk' },
		{ value: 'Conduct Risk', label: 'Conduct Risk' },
		{ value: 'Financial Risk', label: 'Financial Risk' },
		{ value: 'Governance', label: 'Governance' },
		{ value: 'Compliance', label: 'Compliance' }
	];

	// Computed filtered assessments
	$: filteredAssessments = assessments.filter((assessment) => {
		const matchesSearch =
			assessment.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
			assessment.assignee.toLowerCase().includes(searchTerm.toLowerCase());
		const matchesStatus = statusFilter === 'all' || assessment.status === statusFilter;
		const matchesType = typeFilter === 'all' || assessment.type === typeFilter;

		return matchesSearch && matchesStatus && matchesType;
	});

	// Status summary calculations
	$: statusSummary = {
		total: assessments.length,
		completed: assessments.filter((a) => a.status === 'Completed').length,
		inProgress: assessments.filter((a) => a.status === 'In Progress').length,
		draft: assessments.filter((a) => a.status === 'Draft').length,
		underReview: assessments.filter((a) => a.status === 'Under Review').length
	};

	// Statistics for display
	$: dashboardStats = [
		{ value: statusSummary.total, label: 'Total Assessments', color: 'var(--color-accent)' },
		{ value: statusSummary.completed, label: 'Completed', color: 'var(--color-success)' },
		{ value: statusSummary.inProgress, label: 'In Progress', color: 'var(--color-primary)' },
		{ value: statusSummary.underReview, label: 'Under Review', color: 'var(--color-accent)' },
		{ value: statusSummary.draft, label: 'Draft', color: 'var(--color-text-muted)' }
	];

	// Clear all filters
	function clearFilters() {
		searchTerm = '';
		statusFilter = 'all';
		typeFilter = 'all';
	}

	// Action handlers
	function handleEdit(assessment: Assessment) {
		console.log('Edit assessment:', assessment.id);
	}

	function handleView(assessment: Assessment) {
		console.log('View assessment:', assessment.id);
	}

	function handleDelete(assessment: Assessment) {
		console.log('Delete assessment:', assessment.id);
	}

	function handleExport(assessment: Assessment) {
		console.log('Export assessment:', assessment.id);
	}

	// Dialog handlers
	function openCreateDialog() {
		isDialogOpen = true;
	}

	function closeCreateDialog() {
		isDialogOpen = false;
	}

	function handleCreateAssessment(newAssessment: NewAssessmentData) {
		// Generate a new ID (in a real app this would come from the backend)
		const newId = Math.max(...assessments.map((a) => a.id)) + 1;

		// Create the new assessment object
		const assessment = {
			id: newId,
			name: newAssessment.name,
			type: newAssessment.type,
			status: 'Draft',
			progress: 0,
			lastModified: new Date().toISOString().split('T')[0],
			dueDate: newAssessment.dueDate,
			assignee: newAssessment.assignee
		};

		// Add to assessments array
		assessments = [assessment, ...assessments];

		// Close dialog
		closeCreateDialog();

		console.log('Created new assessment:', assessment);
	}
</script>

<PageLayout
	currentPage="assessments"
	title="Assessment Management - Joint Standards Dashboard"
	description="Create, manage, and track your FSCA compliance assessments from one central location"
	footerPromptPath="~/assessments"
	footerPromptCommand="status --ready-for-compliance"
	footerStatusText="{filteredAssessments.length} assessments loaded"
>
	<!-- Overview Section -->
	<PageSection
		title="Assessment <span class='text-[var(--color-accent)]'>Management</span>"
		subtitle="Create, manage, and track your FSCA compliance assessments from one central location."
		promptPath="~/assessments"
		promptCommand="list --all"
	>
		<!-- Status Summary Cards -->
		<StatsGrid stats={dashboardStats} columns={{ sm: 2, md: 5 }} />
	</PageSection>

	<!-- Assessment Management Section -->
	<PageSection
		title="Assessment Dashboard"
		promptPath="~/assessments"
		promptCommand="manage --interactive"
		background="surface"
	>
		<div class="mb-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
			<h2 class="font-mono text-2xl font-bold text-[var(--color-text)]">Assessment Dashboard</h2>
			<Button variant="primary" size="md" onclick={openCreateDialog}>
				+ Create New Assessment
			</Button>
		</div>

		<!-- Filters and Search -->
		<FilterPanel>
			<SearchInput
				bind:value={searchTerm}
				placeholder="Search by name or assignee..."
				label="Search Assessments"
			/>
			<FilterSelect bind:value={statusFilter} options={statusOptions} label="Filter by Status" />
			<FilterSelect bind:value={typeFilter} options={typeOptions} label="Filter by Type" />

			<Button variant="secondary" size="sm" onclick={clearFilters}>Clear Filters</Button>
		</FilterPanel>

		<!-- Assessment Grid -->
		<DataGrid items={filteredAssessments} columns={{ lg: 2, xl: 3 }}>
			{#snippet children(assessment: Assessment)}
				<AssessmentCard
					{assessment}
					onEdit={() => handleEdit(assessment)}
					onView={() => handleView(assessment)}
					onDelete={() => handleDelete(assessment)}
					onExport={() => handleExport(assessment)}
				/>
			{/snippet}
		</DataGrid>

		<!-- No Results Message -->
		{#if filteredAssessments.length === 0}
			<div class="terminal-window p-12 pt-16 text-center">
				<div class="terminal-dots">
					<div class="terminal-dot terminal-dot-red"></div>
					<div class="terminal-dot terminal-dot-yellow"></div>
					<div class="terminal-dot terminal-dot-green"></div>
				</div>
				<div class="font-mono text-[var(--color-text-muted)]">
					<h3 class="mb-2 text-lg font-semibold">No assessments found</h3>
					<p class="text-sm">Try adjusting your search criteria or create a new assessment.</p>
				</div>
			</div>
		{/if}
	</PageSection>
</PageLayout>

<!-- Assessment Dialog -->
<AssessmentDialog
	isOpen={isDialogOpen}
	onClose={closeCreateDialog}
	onSave={handleCreateAssessment}
/>
