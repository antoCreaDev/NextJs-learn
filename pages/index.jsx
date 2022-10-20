import styles from '../styles/Home.module.css';
import Link from 'next/link';
import Head from 'next/head';
import { v4 } from 'uuid';
export default function Home(props) {
	const id = 'article';
	console.log(props);
	return (
		<>
			<Head>
				<meta http-equiv="X-UA-Compatible" content="IE=edge" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<title>Titre index.js</title>
			</Head>

			<div className={styles.container}>
				<h1>Hello word</h1>
				<a href="https://google.com">Google</a> {/* link externe du site */}
				{/* link interne du site */}
				{/* exemple route dynamique */}
				<Link href={`blog/${id}`}>
					<a>Blog</a>
				</Link>
			</div>

			<h1>Exemple get static props</h1>
			{props.array.map((e) => (
				<p key={v4()}>{e.en + '-> ' + e.fr}</p>
			))}
		</>
	);
}

// les choses à l'interieur de getStaticProps ne sont pas executé coté client
// on utilise getStaticProps pour les données qui ne changent pas souvent et quand la route est statique

export async function getStaticProps() {
	const DATA = await import('../DATA/vocabulary.json');
	const array = DATA.vocabulary;

	if (array.length === 0) {
		return {
			notFound: true,
		};
	}

	return {
		props: {
			array,
		},
	};
}
