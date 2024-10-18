import { ChangeEvent, useState } from 'react';
import { TextStats } from './TextStats';

export const Form4 = () => {
	const [text, setText] = useState('');
	const [stats, setStats] = useState('hide');

	const handleTextChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
		setText(e.target.value);
	};

	const handleStatsChange = (e: ChangeEvent<HTMLInputElement>) => {
		setStats(e.target.value);
	};

	return (
		<>
			<div>
				<label htmlFor='text'>Text</label>
				<textarea name='text' id='text' value={text} onChange={handleTextChange}></textarea>
			</div>
			<div>
				<label htmlFor='show'>Show stats</label>
				<input
					type='radio'
					name='stats'
					id='show'
					value='show'
					checked={stats === 'show'}
					onChange={handleStatsChange}
				/>
			</div>
			<div>
				<label htmlFor='hide'>Hide stats</label>
				<input
					type='radio'
					name='stats'
					id='hide'
					value='hide'
					checked={stats === 'hide'}
					onChange={handleStatsChange}
				/>
			</div>
			{stats === 'show' && <TextStats text={text} />}
		</>
	);
};
