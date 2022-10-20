import { v4 } from 'uuid';
export default function Isr(props) {
	console.log(props);
	return (
		<>
			<div>contact</div>

			{props.dataQuote.map((item) => (
				<div key={v4()}>
					<p>
						{item.text} - {item.author}
					</p>
				</div>
			))}
		</>
	);
}
// permet de recuperer les donnees du fichier data.json
// et de les passer en props au composant
// ISR : Incremental Static Regeneration

export async function getStaticProps() {
	const DATA = await fetch('https://type.fit/api/quotes');
	const dataQuote = await DATA.json();

	// EREUR : 404
	// if (!dataQuote.quotes) {
	// 	return {
	// 		notFound: true,
	// 	};
	// }

	// REDIRECTION
	if (!dataQuote) {
		return {
			redirect: {
				destination: '/galery',
				permanent: false,
			},
		};
	}

	return {
		props: {
			dataQuote,
		},
		revalidate: 10, // In seconds revalidate the pagen
	};
}
