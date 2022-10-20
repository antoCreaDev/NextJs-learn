import React from 'react';

export default function Btc(props) {
	console.log(props.dataBtc.bpi.USD.rate);
	return (
		<>
			<h1>BTC - rendu côté serveur</h1>
			<h2>Cours du bitcoin : {props.dataBtc.bpi.USD.rate} USD </h2>
		</>
	);
}
// https://api.coindesk.com/v1/bpi/currentprice.json

// getServerSideProps : données qui ne sont pas statiques et qui ne sont pas générées à la compilation du site (ex: données d'une API)
export async function getServerSideProps(context) {
	const DATA = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
	const dataBtc = await DATA.json();
	console.log(context);
	// context : permet de recuperer les parametres de la requete
	return {
		props: {
			dataBtc,
		},
	};
}
