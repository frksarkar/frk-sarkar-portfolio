import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next/router';

import Layout from '../components/Layout';
import Transition from '../components/Transition';

import '../styles/globals.css';

import { ThemeProvider } from 'next-themes';

import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
	const router = useRouter();

	return (
		<ThemeProvider attribute="class" defaultTheme="light">
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
