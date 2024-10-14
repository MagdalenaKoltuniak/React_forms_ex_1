import { FieldErrors } from './FieldErrors';
import { FormChangeEvent } from './types';

type CheckboxProps = {
	name: string;
	errors: string[];
	checked: boolean;
	label: string;
	onChange: (e: FormChangeEvent) => void;
};

export const Checkbox = ({ name, errors, label, checked, onChange }: CheckboxProps) => {
	return (
		<div>
			<label htmlFor={name}>{label}</label>
			<input type='checkbox' name={name} id={name} checked={checked} onChange={onChange} />
			<FieldErrors errors={errors} />
		</div>
	);
};
