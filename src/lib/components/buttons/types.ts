// Button Component Types

export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'success' | 'warning';
export type ButtonSize = 'xs' | 'sm' | 'md' | 'lg';

export interface ButtonProps {
	variant?: ButtonVariant;
	size?: ButtonSize;
	disabled?: boolean;
	loading?: boolean;
	class?: string;
	onclick?: () => void;
}

export interface ActionButtonConfig {
	label: string;
	icon?: string;
	variant?: ButtonVariant;
	size?: ButtonSize;
	disabled?: boolean;
	onclick?: () => void;
	href?: string;
}

export interface ButtonGroupProps {
	buttons: ActionButtonConfig[];
	orientation?: 'horizontal' | 'vertical';
	class?: string;
}
