import Image from 'next/image';
import Link from 'next/link';

import Socials from '../components/Socials';

import ThemeToggle from '../components/ThemeToggle';

const Header = () => {
	return (
		<header className="absolute z-30 w-full flex items-center px-4 sm:px-16 xl:px-0 xl:h-[90px]">
			<div className="container mx-auto">
				<div className="flex flex-row justify-between items-center gap-y-4 py-4 sm:py-8">
					{/* logo */}
					<Link href="/">
						<div className="w-[150px] sm:w-[220px]">
							<Image src="/logo.svg" alt="logo" width={220} height={48} priority className="w-full h-auto" />
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
