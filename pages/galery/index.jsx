import React from 'react';
import Image from 'next/image';
import img1 from '../../public/img1.jpeg';
import img2 from '../../public/img2.jpeg';
import img3 from '../../public/img3.jpeg';
import styles from '../../styles/Galery.module.css';
import { v4 } from 'uuid';
export default function galery() {
	const DATA = [
		{
			id: 1,
			name: 'anto',
		},
		{
			id: 2,
			name: 'med',
		},
	];
	return (
		<>
			<main className={styles.container}>
				{
					// ----- Affiche 5 fois expression dans le return
					[...Array(5)].map(() => {
						return <h1 key={v4()}>Gallery</h1>;
					})
				}
				{
					// Cas pratique avec des donnees JSON
					DATA.map((data, index) => {
						return <h1 key={index}>{data.name}</h1>;
					})
				}

				<div>
					<Image layout="responsive" src={img1} width="2879" height="4318" />
				</div>

				<div>
					<Image layout="responsive" src={img2} width="2879" height="4319" />
				</div>

				<div>
					<Image layout="responsive" src={img3} width="2776" height="4165" />
				</div>

				{/* <img src="/img1.jpeg" alt="" />
    <img src="/img2.jpeg" alt="" />
    <img src="/img3.jpeg" alt="" /> */}
			</main>
		</>
	);
}
/*
avec l'utilisation de la balise img classique vs composant Image : 
taille des images : 
                      - 849 kb -> 167kb
                      - 2.9 mb -> 1.1 mb
                      - 1.1 mb -> 294kb 2624 × 3936
*/
// pour que layout reposnive fonctionne il faut un parent avec une taille définit
// https://www.youtube.com/watch?v=k_70E6DsIVA
