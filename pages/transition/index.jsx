import Link from 'next/link';
import React from 'react';
import { v4 } from 'uuid';
import { motion } from 'framer-motion';
import styles from '../../styles/Transition.module.css';
export default function Index() {
	return (
		<main>
			<motion.h1 layoutId="header" className={styles.h1}>
				Les images
			</motion.h1>
			<div className={styles.container}>
				{['img1', 'img2', 'img3'].map((img) => {
					return (
						<Link key={v4()} href={`transition/${img}`}>
							<a>
								<motion.img
									className={styles.img}
									src={`${img}.jpeg`}
									alt=""
									animate={{ scale: 1.1 }}
									layoutId={img}
								/>
							</a>
						</Link>
					);
				})}
			</div>
		</main>
	);
}
