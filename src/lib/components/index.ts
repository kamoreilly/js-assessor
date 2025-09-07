// Component Library Exports
// This file provides a centralized export for all reusable components

// Layout Components
export { default as AppHeader } from './layout/AppHeader.svelte';
export { default as AppFooter } from './layout/AppFooter.svelte';
export { default as PageLayout } from './layout/PageLayout.svelte';
export { default as PageSection } from './layout/PageSection.svelte';

// UI Components
export { default as TerminalWindow } from './ui/TerminalWindow.svelte';
export { default as TerminalPrompt } from './ui/TerminalPrompt.svelte';
export { default as StatCard } from './ui/StatCard.svelte';
export { default as StatsGrid } from './ui/StatsGrid.svelte';
export { default as StatusBadge } from './ui/StatusBadge.svelte';
export { default as ProgressBar } from './ui/ProgressBar.svelte';

// Form Components
export { default as SearchInput } from './forms/SearchInput.svelte';
export { default as FilterSelect } from './forms/FilterSelect.svelte';
export { default as FilterPanel } from './forms/FilterPanel.svelte';
export { default as AssessmentDialog } from './forms/AssessmentDialog.svelte';

// Auth Components
export { default as LoginForm } from './auth/LoginForm.svelte';

// Button Components
export { default as Button } from './buttons/Button.svelte';
export { default as ButtonGroup } from './buttons/ButtonGroup.svelte';
export { default as ActionButtons } from './buttons/ActionButtons.svelte';

// Data Display Components
export { default as DataCard } from './data/DataCard.svelte';
export { default as DataGrid } from './data/DataGrid.svelte';
export { default as ActivityFeed } from './data/ActivityFeed.svelte';
export { default as ActivityItem } from './data/ActivityItem.svelte';

// App-specific Components
export { default as AppCard } from './app/AppCard.svelte';
export { default as AssessmentCard } from './app/AssessmentCard.svelte';
export { default as ReportCard } from './app/ReportCard.svelte';

// Types - Legacy individual exports (deprecated)
export type { ButtonVariant, ButtonSize } from './buttons/types';
export type { StatCardData } from './ui/types';
export type { ActivityItemData } from './data/types';
export type { FilterOption, NewAssessmentData, AssessmentDialogProps } from './forms/types';

// Types - Comprehensive type definitions
export type * from './types';
