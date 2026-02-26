'use client';

import Image from 'next/image';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

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
		<div className="hidden xl:flex xl:max-w-none pointer-events-none select-none">
			<Image src={imgSrc} alt="avatar" width={737} height={678} priority={true} className="translate-z-0 w-full h-full" />
		</div>
	);
};

export default Avatar;
