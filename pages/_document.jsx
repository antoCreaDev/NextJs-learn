import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
	render() {
		return (
			<Html lang="fr">
				<Head />
				<body className="loader-on">
					<Main />
					<NextScript />
					<div className="modal">Hello World</div>
				</body>
			</Html>
		);
	}
}
export default MyDocument;
