import React from 'react';
import Link from 'next/link';
import { v4 } from 'uuid';
import styles from '../../styles/List.module.css';
export default function List(props) {
	return (
		<>
			<h1>List</h1>
			<div className={styles.container}>
				{props.dataList.map((data) => {
					return (
						// Object.keys() : permet de recuperer les cles d'un objet
						Object.keys(data).map((databis) => {
							return (
								<Link href={`/list/${databis}`} key={v4()}>
									<a>{databis}</a>
								</Link>
							);
						})
					);

					// Object.keys(monObjet)
				})}
			</div>
		</>
	);
}

export async function getStaticProps() {
	const DATA = await import('../../DATA/lists.json');
	const dataList = DATA.englishList;

	return {
		props: { dataList },
	};
}
