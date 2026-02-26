import { Sora } from 'next/font/google';
import Head from 'next/head';

import Header from '../components/Header';
import Nav from '../components/Nav';
import TopLeftImg from '../components/TopLeftImg';

// setup font
const sora = Sora({
	subsets: ['latin'],
	variable: '--font-sora',
	weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
});

const Layout = ({
	children,
	title = 'frk-sarkar | Portfolio',
	description = 'Omar Faruk Sarkar is a Full-stack web developer who builds modern, responsive, and user-focused web applications.',
}) => {
	return (
		<main className={`page bg-lightPrimary dark:bg-site text-slate-800 dark:text-white bg-cover bg-no-repeat ${sora.variable} font-sora relative`}>
			{/* metadata */}
			<Head>
				<title>{title}</title>
				<meta name="description" content={description} />
				<meta name="keywords" content="react, next, nextjs, html, css, javascript, js, modern-ui, modern-ux, portfolio, framer-motion, 3d-website, particle-effect" />
				<meta name="author" content="Omar Faruk Sarkar" />
				<meta name="theme-color" content="#f13024" />
			</Head>

			<TopLeftImg />
			<Nav />
			<Header />

			{/* main content */}
			{children}
		</main>
	);
};

export default Layout;
