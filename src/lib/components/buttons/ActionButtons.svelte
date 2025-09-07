<!--
	ActionButtons Component
	
	Pre-configured button groups for common actions like Edit/View/Delete.
	Provides consistent action patterns across the application.
	
	Props:
	- actions: Array of action names or custom action configs
	- onEdit: Edit action handler
	- onView: View action handler
	- onDelete: Delete action handler
	- onDownload: Download action handler
	- onShare: Share action handler
	- onExport: Export action handler
	- layout: Button layout ('grid' | 'inline' | 'vertical')
	- size: Button size
	- class: Additional CSS classes
-->

<script lang="ts">
	import Button from './Button.svelte';
	import ButtonGroup from './ButtonGroup.svelte';
	import type { ActionButtonConfig, ButtonSize } from './types.js';

	interface Props {
		actions?: string[] | ActionButtonConfig[];
		onEdit?: () => void;
		onView?: () => void;
		onDelete?: () => void;
		onDownload?: () => void;
		onShare?: () => void;
		onExport?: () => void;
		layout?: 'grid' | 'inline' | 'vertical';
		size?: ButtonSize;
		class?: string;
	}

	let {
		actions = ['edit', 'view', 'delete'],
		onEdit,
		onView,
		onDelete,
		onDownload,
		onShare,
		onExport,
		layout = 'grid',
		size = 'sm',
		class: className = ''
	}: Props = $props();

	// Default action configurations
	const defaultActions: Record<string, ActionButtonConfig> = {
		edit: { label: 'Edit', variant: 'secondary', onclick: onEdit },
		view: { label: 'View', variant: 'secondary', onclick: onView },
		delete: { label: 'Delete', variant: 'danger', onclick: onDelete },
		download: { label: 'Download', variant: 'primary', onclick: onDownload },
		share: { label: 'Share', variant: 'secondary', onclick: onShare },
		export: { label: 'Export', variant: 'secondary', onclick: onExport }
	};

	// Build button configurations
	const buttonConfigs: ActionButtonConfig[] = actions.map((action) => {
		if (typeof action === 'string') {
			return { ...defaultActions[action], size };
		}
		return { ...action, size: action.size || size };
	});

	const layoutClasses = {
		grid: 'grid grid-cols-2 gap-2',
		inline: '',
		vertical: ''
	};

	const orientation = layout === 'vertical' ? 'vertical' : 'horizontal';
</script>

{#if layout === 'grid'}
	<div class="{layoutClasses.grid} {className}">
		{#each buttonConfigs as button, i (i)}
			<Button
				variant={button.variant}
				size={button.size}
				disabled={button.disabled}
				onclick={button.onclick}
				href={button.href}
			>
				{button.label}
			</Button>
		{/each}
	</div>
{:else}
	<ButtonGroup buttons={buttonConfigs} {orientation} class={className} />
{/if}
