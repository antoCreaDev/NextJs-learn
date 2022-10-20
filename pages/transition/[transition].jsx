import React from 'react';
import { useRouter } from 'next/router';
import styles from '../../styles/Transition.module.css';
import { motion } from 'framer-motion';
export default function Transition() {
	const routeur = useRouter();
	console.log(routeur.query.transition);
	const nameRoot = routeur.query.transition;
	return (
		<main>
			<motion.h1 className={styles.h1} layoutId="header">
				{nameRoot}
			</motion.h1>

			<div className={styles.containerSlug}>
				<motion.img
					className={styles.imgSlug}
					src={`../${nameRoot}.jpeg`}
					layoutId={nameRoot}
				/>
			</div>
		</main>
	);
}
