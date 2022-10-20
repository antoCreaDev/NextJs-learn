import { useRouter } from 'next/router'; // permet d'avoir les informations sur la route
import Head from 'next/head';

// Gère les route dynamiquement
export default function Article() {
	const routeur = useRouter();
	console.log(routeur);
	console.log(routeur.route);
	console.log(routeur.asPath);
	console.log(routeur.query);
	const pushFonction = () => {
		routeur.push('/');
	};
	return (
		<>
			<Head>
				<meta http-equiv="X-UA-Compatible" content="IE=edge" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<title> {routeur.query.slug}</title>
			</Head>
			<div>
				<h1>Article : {routeur.query.slug}</h1>
				<button onClick={pushFonction}>GO HOME !</button>
			</div>
		</>
	);
}
