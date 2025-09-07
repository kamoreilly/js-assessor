// Auth Component Types

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
	/**
	 * Function to handle login submission
	 * @param formData The login form data
	 * @returns Promise that resolves when login is complete
	 */
	onLogin?: (formData: LoginFormData) => Promise<void>;
	
	/**
	 * Whether the form is in loading state
	 * @default false
	 */
	loading?: boolean;
	
	/**
	 * Error message to display
	 * @default ''
	 */
	error?: string;
	
	/**
	 * Initial email value
	 * @default ''
	 */
	initialEmail?: string;
	
	/**
	 * Whether to show remember me checkbox
	 * @default true
	 */
	showRememberMe?: boolean;
	
	/**
	 * Whether to show forgot password and sign up links
	 * @default true
	 */
	showLinks?: boolean;
}

export interface LoginFormState {
	formData: LoginFormData;
	validationErrors: FormValidationErrors;
	isValid: {
		email: boolean;
		password: boolean;
	};
	focusedField: string;
}

export interface LoginFormEvents {
	/**
	 * Dispatched when login form is submitted
	 * @event login
	 * @property {LoginFormData} detail - The login form data
	 */
	login: LoginFormData;
}

// Validation function types
export type EmailValidator = (email: string) => boolean;
export type PasswordValidator = (password: string) => boolean;
export type FormValidator = () => boolean;

// Error message types
export type ValidationErrorMessage = string;

// Login response types (for integration with auth system)
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

// Login error types
export interface LoginError {
	code: string;
	message: string;
	details?: Record<string, string>;
}

// Common login error codes
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