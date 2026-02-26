import Image from 'next/image';

const TopLeftImg = () => {
	return (
		<div className="absolute left-0 top-0 mix-blend-multiply dark:mix-blend-color-dodge z-10 w-[200px] xl:w-[400px] opacity-20 dark:opacity-50 pointer-events-none select-none">
			{/* Dark Theme Image */}
			<Image src="/top-left-img.png" alt="left cover bg dark" width={400} height={400} priority className="hidden dark:block" />
			{/* Light Theme Image */}
			<Image src="/top-left-img-white.png" alt="left cover bg light" width={400} height={400} priority className="block dark:hidden" />
		</div>
	);
};

export default TopLeftImg;
