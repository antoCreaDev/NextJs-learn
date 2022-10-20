import '../styles/globals.css';
import Container from '../containers/Container/Container.jsx';
import { LayoutGroup } from 'framer-motion';

// Component : génère les pages
// pageProps : données des pages
function MyApp({ Component, pageProps }) {
	return (
		<LayoutGroup>
			<Container>
				<Component {...pageProps} />
			</Container>
		</LayoutGroup>
	);
}

export default MyApp;
