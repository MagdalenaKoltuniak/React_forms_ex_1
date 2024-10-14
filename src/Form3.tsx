import { FormEvent, useState } from 'react';
import { useForm } from './hooks/useForm';
import { Field } from './Field';
import { Checkbox } from './Checkbox';

type FormValues = {
	login: string;
	password: string;
	rulesAccepted: boolean;
};

type FormErrors = {
	[key in keyof FormValues]: string[];
};

export const Form3 = () => {
	const [formState, handleChange] = useForm<FormValues>({
		login: '',
		password: '',
		rulesAccepted: false,
	});

	const [errors, setErrors] = useState<FormErrors>({
		login: [],
		password: [],
		rulesAccepted: [],
	});

	const [success, setSuccess] = useState(false);

	const { login, password, rulesAccepted } = formState;

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		let isSuccess = true;

		const newErrors: FormErrors = {
			login: [],
			password: [],
			rulesAccepted: [],
		};

		if (!login) {
			newErrors.login.push('To pole jest wymagane!');
			isSuccess = false;
		}
		if (login.length < 3) {
			newErrors.login.push('Login musi mieć przynajmniej 3 znaki!');
			isSuccess = false;
		}
		if (!password) {
			newErrors.password.push('To pole jest wymagane!');
			isSuccess = false;
		}
		if (password.length < 3) {
			newErrors.password.push('Hasło musi mieć przynajmniej 3 znaki!');
			isSuccess = false;
		}

		const regex = new RegExp(/(?=.*[a-z])(?=.*[A-Z])(?=.*\W)/g);

		if (!regex.test(password)) {
			newErrors.password.push('Hasło musi zawierać małą literę, wielką literę i znak specjalny!');
			isSuccess = false;
		}
		if (!rulesAccepted) {
			newErrors.rulesAccepted.push('Akceptacja regulaminu jest wymagana!');
			isSuccess = false;
		}
		setErrors(newErrors);
		setSuccess(isSuccess);
	};

	return (
		<form onSubmit={handleSubmit}>
			{success && <p>Dziękujemy, zostałeś zarejestrowany poprawnie!</p>}
			<Field name='login' type='text' value={login} label='Login' onChange={handleChange} errors={errors.login} />
			<Field
				name='password'
				type='password'
				value={password}
				label='Password'
				onChange={handleChange}
				errors={errors.password}
			/>
			<Checkbox
				name='rulesAccepted'
				checked={rulesAccepted}
				label='I accept the rules'
				onChange={handleChange}
				errors={errors.rulesAccepted}
			/>
			<button type='submit'>Wyślij formularz</button>
		</form>
	);
};
