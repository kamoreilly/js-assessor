/**
 * TypeScript type definitions for the Joint Standards Dashboard component library
 */

import type { Snippet } from 'svelte';

// ============================================================================
// Base Types
// ============================================================================

export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';
export type ActivityType = 'success' | 'info' | 'warning' | 'error';
export type BackgroundVariant = 'default' | 'surface';

// ============================================================================
// Layout Component Types
// ============================================================================

export interface PageLayoutProps {
	currentPage: string;
	title: string;
	description: string;
	footerPromptPath: string;
	footerPromptCommand: string;
	footerStatusText?: string;
	children?: Snippet;
}

export interface PageSectionProps {
	title?: string;
	subtitle?: string;
	promptPath?: string;
	promptCommand?: string;
	background?: BackgroundVariant;
	children?: Snippet;
}

// ============================================================================
// UI Component Types
// ============================================================================

export interface TerminalWindowProps {
	showDots?: boolean;
	padding?: string;
	children?: Snippet;
}

export interface StatCardData {
	value: string | number;
	label: string;
	color: string;
	icon?: string;
}

export interface ResponsiveColumns {
	sm?: number;
	md?: number;
	lg?: number;
	xl?: number;
}

export interface StatsGridProps {
	stats: StatCardData[];
	columns?: ResponsiveColumns;
}

// ============================================================================
// Form Component Types
// ============================================================================

export interface SearchInputProps {
	value: string;
	placeholder?: string;
	label?: string;
	onInput?: (value: string) => void;
}

export interface FilterOption {
	value: string;
	label: string;
	disabled?: boolean;
}

export interface FilterSelectProps {
	value: string;
	options: FilterOption[];
	label?: string;
	onChange?: (value: string) => void;
}

export interface FilterPanelProps {
	children?: Snippet;
}

// ============================================================================
// Auth Component Types
// ============================================================================

export interface LoginFormData {
	email: string;
	password: string;
	rememberMe: boolean;
}

export interface FormValidationErrors {
	email: string;
	password: string;
}

export interface LoginFormProps {
	onLogin?: (formData: LoginFormData) => Promise<void>;
	loading?: boolean;
	error?: string;
	initialEmail?: string;
	showRememberMe?: boolean;
	showLinks?: boolean;
}

export interface LoginFormEvents {
	login: LoginFormData;
}

export interface LoginResponse {
	success: boolean;
	token?: string;
	user?: {
		id: string;
		email: string;
		name: string;
		role: string;
	};
	error?: string;
	message?: string;
}

export interface LoginError {
	code: string;
	message: string;
	details?: Record<string, string>;
}

export const LoginErrorCodes = {
	INVALID_CREDENTIALS: 'INVALID_CREDENTIALS',
	ACCOUNT_LOCKED: 'ACCOUNT_LOCKED',
	ACCOUNT_DISABLED: 'ACCOUNT_DISABLED',
	EMAIL_NOT_VERIFIED: 'EMAIL_NOT_VERIFIED',
	NETWORK_ERROR: 'NETWORK_ERROR',
	SERVER_ERROR: 'SERVER_ERROR',
	UNKNOWN_ERROR: 'UNKNOWN_ERROR'
} as const;

export type LoginErrorCode = keyof typeof LoginErrorCodes;

// ============================================================================
// Button Component Types
// ============================================================================

export interface ButtonProps {
	variant?: ButtonVariant;
	size?: ButtonSize;
	disabled?: boolean;
	onclick?: () => void;
	children?: Snippet;
	type?: 'button' | 'submit' | 'reset';
	class?: string;
}

export interface ButtonGroupProps {
	children?: Snippet;
	orientation?: 'horizontal' | 'vertical';
}

export interface ActionButtonsProps {
	onEdit?: () => void;
	onView?: () => void;
	onDelete?: () => void;
	onExport?: () => void;
	onDownload?: () => void;
	onRegenerate?: () => void;
	showEdit?: boolean;
	showView?: boolean;
	showDelete?: boolean;
	showExport?: boolean;
	showDownload?: boolean;
	showRegenerate?: boolean;
	size?: ButtonSize;
}

// ============================================================================
// Data Display Component Types
// ============================================================================

export interface DataGridProps<T = any> {
	items: T[];
	columns?: ResponsiveColumns;
	children: Snippet<[T]>;
}

export interface DataCardProps {
	title: string;
	subtitle?: string;
	children?: Snippet;
	onclick?: () => void;
}

// ============================================================================
// App-Specific Component Types
// ============================================================================

export interface AppCardProps {
	title: string;
	description: string;
	icon: string;
	statusText: string;
	statusColor: string;
	href: string;
	onclick?: () => void;
}

export interface AssessmentCardProps {
	name: string;
	type: string;
	status: string;
	progress: number;
	assignee: string;
	lastModified: string;
	dueDate: string;
	onEdit?: () => void;
	onView?: () => void;
	onDelete?: () => void;
	onExport?: () => void;
}

export interface ReportCardProps {
	name: string;
	type: string;
	status: string;
	generatedDate: string;
	fileSize: string;
	format: string;
	downloadCount: number;
	generatedBy: string;
	onDownload?: () => void;
	onView?: () => void;
	onDelete?: () => void;
	onRegenerate?: () => void;
	onShare?: () => void;
}

export interface ActivityItem {
	id: string;
	title: string;
	description: string;
	timestamp: string;
	type: ActivityType;
	user?: string;
	metadata?: Record<string, any>;
}

export interface ActivityFeedProps {
	activities: ActivityItem[];
	title?: string;
	maxItems?: number;
}

export interface ActivityItemProps {
	title: string;
	description: string;
	timestamp: string;
	type: ActivityType;
	user?: string;
}

// ============================================================================
// Data Models
// ============================================================================

export interface Application {
	id: string;
	title: string;
	description: string;
	icon: string;
	status: string;
	statusColor: string;
	href: string;
	lastAccessed?: string;
	version?: string;
}

export interface Assessment {
	id: string;
	name: string;
	type: string;
	status: string;
	progress: number;
	assignee: string;
	lastModified: string;
	dueDate: string;
	priority?: 'low' | 'medium' | 'high';
	tags?: string[];
}

export interface Report {
	id: string;
	name: string;
	type: string;
	status: string;
	generatedDate: string;
	fileSize: string;
	format: string;
	downloadCount: number;
	generatedBy: string;
	description?: string;
	tags?: string[];
}

// ============================================================================
// Utility Types
// ============================================================================

export interface NavigationItem {
	label: string;
	href: string;
	icon?: string;
	active?: boolean;
}

export interface StatusConfig {
	[key: string]: {
		color: string;
		label: string;
		icon?: string;
	};
}

// ============================================================================
// Event Handler Types
// ============================================================================

export type ClickHandler = () => void;
export type InputHandler = (value: string) => void;
export type SelectHandler = (value: string) => void;
export type SubmitHandler = (event: SubmitEvent) => void;

// ============================================================================
// Component State Types
// ============================================================================

export interface FilterState {
	search: string;
	status: string;
	type: string;
	dateRange?: {
		start: string;
		end: string;
	};
}

export interface SortState {
	field: string;
	direction: 'asc' | 'desc';
}

export interface PaginationState {
	page: number;
	pageSize: number;
	total: number;
}

// ============================================================================
// Theme Types
// ============================================================================

export interface ThemeColors {
	primary: string;
	secondary: string;
	accent: string;
	success: string;
	warning: string;
	error: string;
	text: string;
	textSecondary: string;
	textMuted: string;
	background: string;
	surface: string;
	surfaceLight: string;
	border: string;
}

// ============================================================================
// Export all types for easy importing
// ============================================================================

export type {
	// Re-export Svelte types
	Snippet
};
