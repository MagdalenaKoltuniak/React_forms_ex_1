import { useEffect, useState } from 'react';
import { useForm } from './hooks/useForm';

type FormValues = {
	wheels: number;
	cabrio: boolean;
	twinExhaust: boolean;
	electricWindows: boolean;
	paint: string;
};

export const Form2 = () => {
	const [cost, setCost] = useState(0);
	const [formState, handleChange] = useForm<FormValues>({
		wheels: 4,
		cabrio: false,
		twinExhaust: false,
		electricWindows: true,
		paint: '',
	});

	const getCost = ({ wheels, cabrio, twinExhaust, electricWindows, paint }: FormValues) => {
		let amount = 0;
		amount += wheels * 150;
		amount += cabrio ? 1000 : 0;
		amount += twinExhaust ? 3000 : 0;
		amount += electricWindows ? 0 : 5000;

		switch (paint) {
			case 'metallic': {
				amount += 100;
				break;
			}
			case 'pearl': {
				amount += 10000;
				break;
			}
			case 'mat': {
				amount += 1000;
				break;
			}
			default:
				break;
		}

		return amount;
	};

	useEffect(() => {
		setCost(getCost(formState));
	}, [formState]);

	return (
		<>
			<p>Sumaryczny koszt: {cost}</p>
			<form>
				<div>
					<label htmlFor='wheels'>Ilość kół</label>
					<input id='wheels' name='wheels' type='number' value={formState.wheels} onChange={handleChange} />
				</div>
				<div>
					<label htmlFor='cabrio'>Otwierany dach</label>
					<input id='cabrio' name='cabrio' type='checkbox' checked={formState.cabrio} onChange={handleChange} />
				</div>
				<div>
					<label htmlFor='twinExhaust'>Podwójny wydech</label>
					<input
						id='twinExhaust'
						name='twinExhaust'
						type='checkbox'
						checked={formState.twinExhaust}
						onChange={handleChange}
					/>
				</div>
				<div>
					<label htmlFor='electricWindows'>Elektryczne szyby</label>
					<input
						id='electricWindows'
						name='electricWindows'
						type='checkbox'
						checked={formState.electricWindows}
						onChange={handleChange}
					/>
				</div>
				<div>
					<label htmlFor='paint'>Rodzaj lakieru</label>
					<select id='paint' name='paint' value={formState.paint} onChange={handleChange}>
						{!formState.paint && <option value=''>Wybierz lakier</option>}
						<option value='pearl'>Perłowy</option>
						<option value='metallic'>Metalik</option>
						<option value='mat'>Matowy</option>
					</select>
				</div>
			</form>
		</>
	);
};
