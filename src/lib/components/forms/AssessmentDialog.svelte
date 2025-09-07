<!--
	AssessmentDialog Component
	
	A modal dialog for creating new assessments.
	Features a terminal-themed form with fields for assessment details.
	
	Props:
	- isOpen: Controls dialog visibility
	- onClose: Function called when dialog should be closed
	- onSave: Function called when form is submitted
-->

<script lang="ts">
	import { Button } from '../index.js';

	interface Props {
		isOpen: boolean;
		onClose: () => void;
		onSave: (assessment: NewAssessmentData) => void;
	}

	export interface NewAssessmentData {
		name: string;
		type: string;
		assignee: string;
		dueDate: string;
	}

	let { isOpen, onClose, onSave }: Props = $props();

	// Form state
	let formData = $state<NewAssessmentData>({
		name: '',
		type: 'Operational Risk',
		assignee: '',
		dueDate: ''
	});

	let isSubmitting = $state(false);

	// Assessment type options
	const typeOptions = [
		'Operational Risk',
		'Conduct Risk',
		'Financial Risk',
		'Governance',
		'Compliance'
	];

	// Reset form when dialog opens/closes
	$effect(() => {
		if (!isOpen) {
			formData = {
				name: '',
				type: 'Operational Risk',
				assignee: '',
				dueDate: ''
			};
			isSubmitting = false;
		}
	});

	function handleSubmit() {
		if (!formData.name.trim() || !formData.assignee.trim() || !formData.dueDate) {
			return;
		}

		isSubmitting = true;
		onSave(formData);
	}

	function handleCancel() {
		onClose();
	}

	// Close on escape key
	function handleKeydown(event: KeyboardEvent) {
		if (event.key === 'Escape') {
			handleCancel();
		}
	}

	// Close on backdrop click
	function handleBackdropClick(event: MouseEvent) {
		if (event.target === event.currentTarget) {
			handleCancel();
		}
	}
</script>

<svelte:window on:keydown={handleKeydown} />

{#if isOpen}
	<!-- Backdrop -->
	<div
		class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4"
		onclick={handleBackdropClick}
		onkeydown={handleKeydown}
		role="dialog"
		tabindex="-1"
		aria-modal="true"
		aria-labelledby="dialog-title"
	>
		<!-- Dialog Content -->
		<div
			class="terminal-window max-h-[90vh] w-full max-w-md overflow-hidden rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)]"
		>
			<!-- Terminal Header -->
			<div class="terminal-header">
				<div class="terminal-dots">
					<div class="terminal-dot terminal-dot-red"></div>
					<div class="terminal-dot terminal-dot-yellow"></div>
					<div class="terminal-dot terminal-dot-green"></div>
				</div>
				<div class="terminal-title">
					<h2 id="dialog-title" class="font-mono text-sm text-[var(--color-text)]">
						~/assessments/new
					</h2>
				</div>
			</div>

			<!-- Dialog Body -->
			<div class="max-h-[calc(90vh-120px)] space-y-4 overflow-y-auto p-6">
				<div class="mb-6">
					<h3 class="mb-2 font-mono text-lg font-bold text-[var(--color-text)]">
						Create New Assessment
					</h3>
					<p class="font-mono text-sm text-[var(--color-text-muted)]">
						Fill in the details for your new FSCA compliance assessment.
					</p>
				</div>

				<!-- Assessment Name -->
				<div>
					<label
						for="assessment-name"
						class="mb-2 block font-mono text-sm text-[var(--color-text)]"
					>
						Assessment Name *
					</label>
					<input
						id="assessment-name"
						type="text"
						bind:value={formData.name}
						placeholder="Enter assessment name..."
						class="w-full rounded border border-[var(--color-border)] bg-[var(--color-surface-light)] px-3 py-2 font-mono text-sm text-[var(--color-text)] placeholder-[var(--color-text-muted)] transition-colors focus:border-[var(--color-accent)] focus:outline-none"
						required
					/>
				</div>

				<!-- Assessment Type -->
				<div>
					<label
						for="assessment-type"
						class="mb-2 block font-mono text-sm text-[var(--color-text)]"
					>
						Assessment Type *
					</label>
					<select
						id="assessment-type"
						bind:value={formData.type}
						class="w-full rounded border border-[var(--color-border)] bg-[var(--color-surface-light)] px-3 py-2 font-mono text-sm text-[var(--color-text)] transition-colors focus:border-[var(--color-accent)] focus:outline-none"
						required
					>
						{#each typeOptions as type (type)}
							<option value={type}>{type}</option>
						{/each}
					</select>
				</div>

				<!-- Assignee -->
				<div>
					<label
						for="assessment-assignee"
						class="mb-2 block font-mono text-sm text-[var(--color-text)]"
					>
						Assignee *
					</label>
					<input
						id="assessment-assignee"
						type="text"
						bind:value={formData.assignee}
						placeholder="Enter assignee name..."
						class="w-full rounded border border-[var(--color-border)] bg-[var(--color-surface-light)] px-3 py-2 font-mono text-sm text-[var(--color-text)] placeholder-[var(--color-text-muted)] transition-colors focus:border-[var(--color-accent)] focus:outline-none"
						required
					/>
				</div>

				<!-- Due Date -->
				<div>
					<label
						for="assessment-due-date"
						class="mb-2 block font-mono text-sm text-[var(--color-text)]"
					>
						Due Date *
					</label>
					<input
						id="assessment-due-date"
						type="date"
						bind:value={formData.dueDate}
						class="w-full rounded border border-[var(--color-border)] bg-[var(--color-surface-light)] px-3 py-2 font-mono text-sm text-[var(--color-text)] transition-colors focus:border-[var(--color-accent)] focus:outline-none"
						required
					/>
				</div>
			</div>

			<!-- Dialog Footer -->
			<div class="flex justify-end gap-3 border-t border-[var(--color-border)] p-4">
				<Button variant="secondary" size="sm" onclick={handleCancel} disabled={isSubmitting}>
					Cancel
				</Button>
				<Button
					variant="primary"
					size="sm"
					onclick={handleSubmit}
					disabled={!formData.name.trim() ||
						!formData.assignee.trim() ||
						!formData.dueDate ||
						isSubmitting}
					loading={isSubmitting}
				>
					Create Assessment
				</Button>
			</div>
		</div>
	</div>
{/if}

<style>
	.terminal-window {
		box-shadow:
			0 20px 25px -5px rgba(0, 0, 0, 0.1),
			0 10px 10px -5px rgba(0, 0, 0, 0.04);
	}

	.terminal-header {
		background: var(--color-surface-light);
		padding: 8px 12px;
		border-bottom: 1px solid var(--color-border);
		display: flex;
		align-items: center;
		gap: 8px;
	}

	.terminal-dots {
		display: flex;
		gap: 6px;
	}

	.terminal-dot {
		width: 12px;
		height: 12px;
		border-radius: 50%;
	}

	.terminal-dot-red {
		background-color: #ff5f57;
	}

	.terminal-dot-yellow {
		background-color: #ffbd2e;
	}

	.terminal-dot-green {
		background-color: #28ca42;
	}

	.terminal-title {
		flex: 1;
		text-align: center;
	}
</style>
