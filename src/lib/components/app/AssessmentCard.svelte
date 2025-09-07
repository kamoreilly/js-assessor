<!--
	AssessmentCard Component
	
	A specialized card component for displaying assessment information.
	Used specifically for the assessments page.
	
	Props:
	- assessment: Assessment data object
	- onEdit: Edit action handler
	- onView: View action handler
	- onDelete: Delete action handler
	- onExport: Export action handler
	- class: Additional CSS classes
-->

<script lang="ts">
	import DataCard from '../data/DataCard.svelte';
	
	interface AssessmentData {
		id: number;
		name: string;
		type: string;
		status: string;
		progress: number;
		lastModified: string;
		dueDate: string;
		assignee: string;
	}
	
	interface Props {
		assessment: AssessmentData;
		onEdit?: () => void;
		onView?: () => void;
		onDelete?: () => void;
		onExport?: () => void;
		class?: string;
	}
	
	let {
		assessment,
		onEdit,
		onView,
		onDelete,
		onExport,
		class: className = ''
	}: Props = $props();
	
	// Map assessment status to status variant
	function getStatusVariant(status: string) {
		switch (status) {
			case 'Completed': return 'success';
			case 'In Progress': return 'info';
			case 'Under Review': return 'warning';
			case 'Draft': return 'default';
			default: return 'default';
		}
	}
	
	// Build metadata object
	const metadata = {
		'Assignee': assessment.assignee,
		'Due Date': assessment.dueDate,
		'Modified': assessment.lastModified
	};
</script>

<DataCard
	title={assessment.name}
	subtitle={assessment.type}
	status={assessment.status}
	statusVariant={getStatusVariant(assessment.status)}
	progress={assessment.progress}
	{metadata}
	actions={['edit', 'view', 'export', 'delete']}
	{onEdit}
	{onView}
	{onDelete}
	{onExport}
	class={className}
/>
