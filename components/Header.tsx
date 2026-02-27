import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

import Socials from '../components/Socials';
import ThemeToggle from '../components/ThemeToggle';

const Header = () => {
	const { resolvedTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	return (
		<header className="fixed top-0 left-0 z-50 w-full flex items-center px-4 sm:px-16 xl:px-0 xl:h-[90px] bg-transparent backdrop-blur-sm border-b border-black/5 dark:border-white/10 transition-colors duration-300">
			<div className="container mx-auto">
				<div className="flex flex-row justify-between items-center gap-y-4 py-4 sm:py-8">
					{/* logo */}
					<Link href="/">
						<div className="w-[150px] sm:w-[220px]">
							{mounted ? (
								<Image src={resolvedTheme === 'light' ? '/logo-white.svg' : '/logo.svg'} alt="logo" width={220} height={48} priority className="w-full h-auto" />
							) : (
								<div style={{ width: 220, height: 48 }} /> // Placeholder to prevent layout shift
							)}
						</div>
					</Link>

					{/* right side: socials + theme toggle */}
					<div className="flex items-center gap-x-4 sm:gap-x-8">
						<div className="hidden sm:flex">
							<Socials />
						</div>
						<ThemeToggle />
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
