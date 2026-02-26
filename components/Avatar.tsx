'use client';

import Image from 'next/image';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Avatar = () => {
	const [mounted, setMounted] = useState(false);
	const { resolvedTheme } = useTheme();

	// useEffect only runs on the client, so now we can safely show the UI
	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		// Return a transparent placeholder of the same size during SSR to prevent layout shift
		return (
			<div className="hidden xl:flex xl:max-w-none pointer-events-none select-none">
				<div style={{ width: 737, height: 678 }} />
			</div>
		);
	}

	const imgSrc = resolvedTheme === 'light' ? '/avatar-white.png' : '/avatar.png';

	return (
		<motion.div
			className="hidden xl:flex xl:max-w-none pointer-events-none select-none"
			// Subtle floating animation so it feels alive
			animate={{
				y: [0, -15, 0],
			}}
			transition={{
				y: {
					duration: 6,
					repeat: Infinity,
					ease: 'easeInOut',
				},
			}}
		>
			<Image
				src={imgSrc}
				alt="avatar"
				width={737}
				height={678}
				priority={true}
				// mix-blend modes to absorb background colors
				className="translate-z-0 w-full h-full mix-blend-multiply dark:mix-blend-luminosity opacity-90 dark:opacity-80"
				// CSS Mask to slowly fade out the bottom of the image into the background
				style={{
					maskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)',
					WebkitMaskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)',
				}}
			/>
		</motion.div>
	);
};

export default Avatar;
