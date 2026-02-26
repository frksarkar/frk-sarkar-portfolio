import Link from 'next/link';
import { usePathname } from 'next/navigation';

// icons
import { HiHome, HiUser, HiViewColumns, HiRectangleGroup, HiChatBubbleBottomCenterText, HiEnvelope, HiUserPlus } from 'react-icons/hi2';

// nav data
export const navData = [
	{ name: 'home', path: '/', Icon: HiHome },
	{ name: 'about', path: '/about', Icon: HiUser },
	{ name: 'services', path: '/services', Icon: HiRectangleGroup },
	{ name: 'work', path: '/work', Icon: HiViewColumns },
	//   {
	//     name: "testimonials",
	//     path: "/testimonials",
	//     Icon: HiChatBubbleBottomCenterText,
	//   },
	{
		name: 'Hire Me',
		path: '/contact',
		Icon: HiUserPlus,
	},
];

const Nav = () => {
	const pathname = usePathname();

	const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
		// Calculate the center X position of the clicked nav item
		const rect = e.currentTarget.getBoundingClientRect();
		const xPos = rect.left + rect.width / 2;
		const xPercent = (xPos / window.innerWidth) * 100;
		// Set it as a CSS variable for the transition animation to use
		document.documentElement.style.setProperty('--click-x', `${xPercent}%`);
	};

	return (
		<nav className="flex flex-col items-center xl:justify-center gap-y-4 fixed h-max bottom-0 mt-auto xl:right-[2%] z-50 top-0 w-full xl:w-16 xl:max-w-md xl:h-screen">
			<div className="flex w-full xl:flex-col items-center justify-between xl:justify-center gap-y-10 px-4 md:px-40 xl:px-0 h-[80px] xl:h-max py-8 bg-white/90 dark:bg-white/10 border border-slate-200 dark:border-transparent shadow-xl shadow-slate-200/50 dark:shadow-none backdrop-blur-md text-slate-600 dark:text-white text-3xl xl:text-xl xl:rounded-full transition-colors duration-300">
				{navData.map((link, i) => (
					<Link
						className={`${link.path === pathname ? 'text-accent' : ''} relative flex items-center group hover:text-accent transition-all duration-300`}
						href={link.path}
						key={i}
						onClick={handleNavClick}
					>
						{/* tooltip */}
						<div role="tooltip" className="absolute pr-14 right-0 hidden xl:group-hover:flex">
							<div className="bg-slate-800 dark:bg-white relative flex text-white dark:text-primary items-center p-[6px] rounded-[3px] shadow-lg dark:shadow-none">
								<div className="text-[12px] leading-none font-semibold capitalize whitespace-nowrap">{link.name}</div>

								{/* triangle */}
								<div
									className="border-solid border-l-slate-800 dark:border-l-white border-l-8 border-y-transparent border-y-[6px] border-r-0 absolute -right-2"
									aria-hidden
								/>
							</div>
						</div>

						{/* icon */}
						<div>
							<link.Icon aria-hidden />
						</div>
					</Link>
				))}
			</div>
		</nav>
	);
};

export default Nav;
