import { FieldErrors } from './FieldErrors';
import { FormChangeEvent } from './types';

type FieldProps = {
	name: string;
	errors: string[];
	value: string;
	label: string;
	type: 'text' | 'password';
	onChange: (e: FormChangeEvent) => void;
};

export const Field = ({ name, errors, label, value, type, onChange }: FieldProps) => {
	return (
		<div>
			<label htmlFor={name}>{label}</label>
			<input type={type} name={name} id={name} value={value} onChange={onChange} />
			<FieldErrors errors={errors} />
		</div>
	);
};
