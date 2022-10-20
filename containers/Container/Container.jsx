import React from 'react';
import Navbar from '../Navbaros/Navbar';
// les props les données des enfants
export default function Container(props) {
	return (
		<>
			<Navbar />
			{props.children} {/* données des parents */}
		</>
	);
}
