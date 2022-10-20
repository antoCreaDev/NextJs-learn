import React from 'react';
import { v4 } from 'uuid';
import { useRouter } from 'next/router';

export default function List(props) {
	const key = Object.keys(props.found_data)[0];
	// console.log(props.found_data);
	// console.log(props.found_data[key]);
	const data = props.found_data[key];

	const router = useRouter();
	const nameRoute = router.query.list;

	const dataAlternatif = props.found_data[nameRoute];
	return (
		<>
			<h1>{nameRoute}</h1>
			{data.map((e) => {
				return <p key={v4()}>{e.en + ' -> ' + e.fr}</p>;
			})}
			<h1>---------AUTRE MÉTHODE----------</h1>
			{dataAlternatif.map((e) => {
				return <p key={v4()}>{e.en + ' -> ' + e.fr}</p>;
			})}
		</>
	);
}

export async function getStaticProps(context) {
	// context.params.list will be the slug
	console.log(context);
	const slug = context.params.list;
	const DATA = await import('../../DATA/lists.json');
	const listeEnCours = context.params.list;
	// find the list in the json file
	const found_data = DATA.englishList.find((data) => data[listeEnCours]);

	return {
		props: { found_data: found_data },
	};
}

// getStaticPaths is required for dynamic routes

export async function getStaticPaths() {
	const DATA = await import('../../DATA/lists.json');
	const englishList = DATA.englishList;

	const paths = englishList.map((data) => {
		const key = Object.keys(data)[0];
		return { params: { list: key } };
	});

	return {
		// paths: [
		// 	// String variant:
		// 	'/list/words',
		// 	// Object variant:
		// 	{ params: { list: 'adjectives' } },
		// ],
		paths: paths,
		fallback: false,
		// fallback: false if page not exist -> 404

		// fallback: true if page not exist -> loading ( use for page with lots of content and not all pages are created Example: e-commerce site -> page to create the most liked articles in static, server side for other articles )

		// fallback: server-side rendering if page not exist -> loading (not recommended)
	};
}
