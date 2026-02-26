import { motion, Variants } from 'framer-motion';

const Transition = () => {
	// Mobile: Expanding Circular Ripple
	const getMobileVariants = (delayAnimate: number, delayExit: number): Variants => ({
		initial: {
			clipPath: 'circle(150vh at var(--click-x, 50%) 100%)',
		},
		animate: {
			clipPath: 'circle(0% at var(--click-x, 50%) 100%)',
			transition: { delay: delayAnimate, duration: 0.8, ease: [0.76, 0, 0.24, 1] },
		},
		exit: {
			clipPath: ['circle(0% at var(--click-x, 50%) 100%)', 'circle(150vh at var(--click-x, 50%) 100%)'],
			transition: { delay: delayExit, duration: 0.8, ease: [0.76, 0, 0.24, 1] },
		},
	});

	// Desktop: Left-to-Right Wipe
	const transitionVariantsDesktop = {
		initial: {
			x: '100%',
			width: '100%',
		},
		animate: {
			x: '0%',
			width: '0%',
		},
		exit: {
			x: ['0%', '100%'],
			width: ['0%', '100%'],
		},
	};

	return (
		<>
			{/* Desktop Transitions (hidden on mobile) */}
			<motion.div
				className="hidden md:block fixed top-0 bottom-0 right-full w-screen h-screen z-[100] bg-slate-200 dark:bg-[#2e2257]"
				variants={transitionVariantsDesktop}
				initial="initial"
				animate="animate"
				exit="exit"
				transition={{ delay: 0.2, duration: 0.4, ease: 'easeInOut' }}
				aria-hidden={true}
			/>
			<motion.div
				className="hidden md:block fixed top-0 bottom-0 right-full w-screen h-screen z-[90] bg-slate-300 dark:bg-[#3b2d71]"
				variants={transitionVariantsDesktop}
				initial="initial"
				animate="animate"
				exit="exit"
				transition={{ delay: 0.4, duration: 0.4, ease: 'easeInOut' }}
				aria-hidden={true}
			/>
			<motion.div
				className="hidden md:block fixed top-0 bottom-0 right-full w-screen h-screen z-[80] bg-white dark:bg-[#4b3792]"
				variants={transitionVariantsDesktop}
				initial="initial"
				animate="animate"
				exit="exit"
				transition={{ delay: 0.6, duration: 0.4, ease: 'easeInOut' }}
				aria-hidden={true}
			/>

			{/* Mobile Transitions (hidden on desktop) */}
			<motion.div
				className="md:hidden fixed top-0 bottom-0 left-0 w-screen h-screen z-[100] bg-slate-200 dark:bg-[#2e2257]"
				variants={getMobileVariants(0, 0.4)}
				initial="initial"
				animate="animate"
				exit="exit"
				aria-hidden={true}
			/>
			<motion.div
				className="md:hidden fixed top-0 bottom-0 left-0 w-screen h-screen z-[90] bg-slate-300 dark:bg-[#3b2d71]"
				variants={getMobileVariants(0.2, 0.2)}
				initial="initial"
				animate="animate"
				exit="exit"
				aria-hidden={true}
			/>
			<motion.div
				className="md:hidden fixed top-0 bottom-0 left-0 w-screen h-screen z-[80] bg-white dark:bg-[#4b3792]"
				variants={getMobileVariants(0.4, 0)}
				initial="initial"
				animate="animate"
				exit="exit"
				aria-hidden={true}
			/>
		</>
	);
};

export default Transition;
