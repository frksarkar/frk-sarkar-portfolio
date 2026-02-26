import { motion } from 'framer-motion';
import { useState } from 'react';

import dynamic from 'next/dynamic';

const ParticlesContainer = dynamic(() => import('../components/ParticlesContainer'), { ssr: false });
import ProjectsBtn from '../components/ProjectsBtn';
import Avatar from '../components/Avatar';

import { fadeIn } from '../variants';
import CvButton from '../components/CvButton';
import PDFViewer from '../components/PDFviewer';

const Home = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	return (
		<div className="flex-1 w-full min-h-screen xl:h-screen flex flex-col bg-lightPrimary dark:bg-primary/60 transition-colors duration-300 relative overflow-x-hidden xl:overflow-hidden">
			{/* background gradient wrap */}
			<div className="flex-1 w-full flex flex-col bg-gradient-to-r from-lightSecondary/60 via-lightPrimary/40 to-lightPrimary/80 dark:from-primary/10 dark:via-black/30 dark:to-black/10 transition-colors duration-300">
				{/* text content container */}
				<div className="container mx-auto flex-1 flex flex-col justify-center items-center xl:items-start text-center xl:text-left relative z-20 pt-24 pb-16 xl:pt-40">
					{/* title */}
					<motion.h1
						variants={fadeIn('down', 0.2)}
						initial="hidden"
						animate="show"
						exit="hidden"
						className="text-[40px] leading-[1.1] md:text-[60px] md:leading-[1.2] font-semibold text-slate-900 dark:text-white mb-6"
					>
						Full-Stack <br /> Web{' '}
						<span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-500 dark:from-red-400 dark:to-orange-500">Developer</span>
					</motion.h1>
					{/* subtitle */}
					<motion.p
						variants={fadeIn('down', 0.3)}
						initial="hidden"
						animate="show"
						exit="hidden"
						className="max-w-sm xl:max-w-xl text-slate-600 dark:text-gray-300/80 mb-10 xl:mb-16 leading-relaxed"
					>
						I build modern, responsive, and user-focused web applications using React, Next.js, and Node.js. Passionate about clean code, performance, and real-world
						problem solving.
					</motion.p>

					{/* btn for cv */}
					<motion.div variants={fadeIn('down', 0.4)} initial="hidden" animate="show" exit="hidden" className="flex justify-center xl:justify-start mb-10 xl:mb-16">
						<CvButton openModal={() => setIsModalOpen(true)} />
					</motion.div>

					{/* btn */}
					<div className="flex justify-center xl:hidden relative mb-12">
						<ProjectsBtn />
					</div>
					<motion.div variants={fadeIn('down', 0.4)} initial="hidden" animate="show" exit="hidden" className="hidden xl:flex">
						<ProjectsBtn />
					</motion.div>
				</div>
			</div>
			{/* image */}
			<div className="w-[1280px] h-full absolute right-0 bottom-0">
				{/* bg img */}
				<div
					role="img"
					className="bg-none xl:bg-explosionWhite dark:xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-multiply dark:mix-blend-color-dodge translate-z-0 opacity-50 dark:opacity-100 transition-opacity duration-300"
					aria-hidden
				/>

				{/* particles */}
				<ParticlesContainer />

				{/* avatar */}
				<motion.div
					variants={fadeIn('up', 0.5)}
					initial="hidden"
					animate="show"
					exit="hidden"
					transition={{ duration: 0.6, ease: 'easeInOut' }}
					className="w-full h-full max-w-[737px] max-h-[678px] absolute bottom-0 lg:right-[8%]"
				>
					<Avatar />
				</motion.div>
			</div>
			{/* Modal */}
			<PDFViewer isOpen={isModalOpen} closeModal={() => setIsModalOpen(false)} />
		</div>
	);
};

export default Home;
