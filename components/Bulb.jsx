import Image from 'next/image';

const Bulb = () => {
	return (
		<div className="absolute -left-36 bottom-0 rotate-12 mix-blend-multiply dark:mix-blend-color-dodge opacity-40 dark:opacity-100 animate-pulse duration-75 z-10 w-[200px] xl:w-[260px] select-none pointer-events-none">
			{/* Dark Theme Bulb */}
			<Image src="/bulb.png" alt="bulb dark" width={260} height={200} className="w-full h-full hidden dark:block" />
			{/* Light Theme Bulb */}
			<Image src="/bulb-white.png" alt="bulb light" width={260} height={200} className="w-full h-full block dark:hidden" />
		</div>
	);
};

export default Bulb;
