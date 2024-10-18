type TextStatsProps = {
	text: string;
};

export const TextStats = ({ text }: TextStatsProps) => {
	const charsCount: {
		[key: string]: number;
	} = {};

	const normalizedText = text.toLocaleLowerCase().trim();

	[...normalizedText]
		.filter(el => el !== ' ')
		.forEach(letter => {
			if (!charsCount[letter]) {
				charsCount[letter] = 0;
			}
			charsCount[letter]++;
		});

	console.log(charsCount);

	return (
		<div>
			<p>Text length: {text.length}</p>
			<ul>
				{Object.keys(charsCount).map(letter => (
					<li key={letter}>
						{letter}: {charsCount[letter]}
					</li>
				))}
			</ul>
		</div>
	);
};
