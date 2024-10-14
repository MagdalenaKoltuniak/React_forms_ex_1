type FieldErrorsProps = {
	errors: string[];
};

export const FieldErrors = ({ errors }: FieldErrorsProps) => {
	return (
		<ul>
			{errors.map((error, index) => (
				<li key={index}>{error}</li>
			))}
		</ul>
	);
};
