import Link from 'next/link';
export default function index() {
	const article1 = 'IUT di corsica';
	const article2 = "Faire une affiche à partir d'une citaion ?";
	return (
		<>
			<div>index</div>
			<Link href={`blog/${article1}`}>
				<a> {article1}</a>
			</Link>
			<br />
			<Link href={`blog/${article2}`}>
				<a> {article2}</a>
			</Link>
		</>
	);
}
