import React from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';
export default function Navbar() {
	return (
		<nav className={styles.nav}>
			<Link href="/">
				<a> Home</a>
			</Link>
			<Link href="/blog">
				<a>Blog</a>
			</Link>
			<Link href="/isr">
				<a>ISR</a>
			</Link>
			<Link href="/galery">
				<a>Galery</a>
			</Link>
			<Link href="/anim">
				<a>Animation js</a>
			</Link>
			<Link href="/list">
				<a>list</a>
			</Link>

			<Link href="/btc">
				<a>btc</a>
			</Link>
			<Link href="/transition">
				<a>Transition</a>
			</Link>
		</nav>
	);
}
