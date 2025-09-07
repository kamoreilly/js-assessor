// Data Display Component Types

export interface ActivityItemData {
	id: string | number;
	title: string;
	description: string;
	timestamp: string;
	status?: 'success' | 'warning' | 'error' | 'info';
	user?: string;
	icon?: string;
}

export interface DataCardProps {
	title: string;
	subtitle?: string;
	status?: string;
	statusVariant?: 'success' | 'warning' | 'error' | 'info';
	progress?: number;
	metadata?: Record<string, unknown>;
	actions?: string[];
	class?: string;
	hoverEffect?: boolean;
}

export interface DataGridProps<T = unknown> {
	items: T[];
	columns?: number | { sm?: number; md?: number; lg?: number; xl?: number };
	gap?: 'sm' | 'md' | 'lg';
	class?: string;
}

export interface TableColumn<T = unknown> {
	key: string;
	label: string;
	sortable?: boolean;
	width?: string;
	align?: 'left' | 'center' | 'right';
	render?: (value: unknown, row: T) => string;
}

export interface DataTableProps<T = unknown> {
	data: T[];
	columns: TableColumn<T>[];
	sortBy?: string;
	sortDirection?: 'asc' | 'desc';
	class?: string;
	responsive?: boolean;
}
