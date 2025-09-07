// UI Component Types

export interface StatCardData {
	value: string | number;
	label: string;
	color?: string;
	icon?: string;
}

export interface TerminalWindowProps {
	class?: string;
	padding?: 'sm' | 'md' | 'lg';
	showDots?: boolean;
}

export interface StatusBadgeProps {
	status: string;
	variant?: 'default' | 'success' | 'warning' | 'error' | 'info';
	size?: 'sm' | 'md' | 'lg';
}

export interface ProgressBarProps {
	value: number;
	max?: number;
	color?: string;
	size?: 'sm' | 'md' | 'lg';
	showLabel?: boolean;
}
