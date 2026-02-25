import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next/router';

import Layout from '../components/Layout';
import Transition from '../components/Transition';

import '../styles/globals.css';

import { ThemeProvider } from 'next-themes';

function MyApp({ Component, pageProps }) {
	const router = useRouter();

	return (
		<ThemeProvider attribute="class" defaultTheme="dark">
			<Layout>
				<AnimatePresence mode="wait">
					<motion.div key={router.route} className="flex-1 w-full min-h-screen flex flex-col">
						<Transition />
						<Component {...pageProps} />
					</motion.div>
				</AnimatePresence>
			</Layout>
		</ThemeProvider>
	);
}

export default MyApp;
