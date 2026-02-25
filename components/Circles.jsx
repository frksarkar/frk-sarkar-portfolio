import Image from 'next/image';

const Circles = () => {
	return (
		<div className="w-[200px] xl:w-[300px] absolute -right-16 bottom-0 mix-blend-multiply dark:mix-blend-color-dodge opacity-40 dark:opacity-100 animate-pulse duration-75 z-10">
			{/* Dark Theme Circles */}
			<Image src="/circles.png" alt="circles dark" width={260} height={200} className="w-full h-full hidden dark:block" />
			{/* Light Theme Circles */}
			<Image src="/circles-white.png" alt="circles light" width={260} height={200} className="w-full h-full block dark:hidden" />
		</div>
	);
};

export default Circles;
