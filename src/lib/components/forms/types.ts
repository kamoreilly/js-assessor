// Form Component Types

export interface FilterOption {
	value: string;
	label: string;
}

export interface SearchInputProps {
	value: string;
	placeholder?: string;
	label?: string;
	id?: string;
	class?: string;
	size?: 'sm' | 'md' | 'lg';
}

export interface FilterSelectProps {
	value: string;
	options: FilterOption[];
	label?: string;
	id?: string;
	class?: string;
	size?: 'sm' | 'md' | 'lg';
}

export interface FilterPanelProps {
	class?: string;
	title?: string;
	promptPath?: string;
	promptCommand?: string;
}

export interface NewAssessmentData {
	name: string;
	type: string;
	assignee: string;
	dueDate: string;
}

export interface AssessmentDialogProps {
	isOpen: boolean;
	onClose: () => void;
	onSave: (assessment: NewAssessmentData) => void;
}
