import { motion } from 'framer-motion';
import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';

import Bulb from '../../components/Bulb';
import Circles from '../../components/Circles';
import WorkSlider from '../../components/WorkSlider';
import { fadeIn } from '../../variants';
import ProjectModal from '../../components/ProjectModal';
import { LayoutGrid } from 'lucide-react';

const Work = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [selectedProject, setSelectedProject] = useState(null);

	const handleCardClick = (project) => {
		setSelectedProject(project);
		setIsModalOpen(true);
	};

	return (
		<div className="min-h-screen bg-lightPrimary dark:bg-primary/30 py-36 flex items-center transition-colors duration-300 relative overflow-x-hidden">
			<Circles />

			{/* Ambient background glow */}
			<div className="absolute top-1/4 -right-1/4 w-[500px] h-[500px] bg-sky-500/10 dark:bg-red-500/10 rounded-full blur-[120px] pointer-events-none" />
			<div className="absolute bottom-1/4 -left-1/4 w-[400px] h-[400px] bg-blue-500/10 dark:bg-orange-500/10 rounded-full blur-[100px] pointer-events-none" />

			<div className="container mx-auto relative z-10">
				<div className="flex flex-col xl:flex-row gap-x-12 items-center">
					{/* text */}
					<div className="text-center flex xl:w-[35vw] flex-col lg:text-left mb-8 xl:mb-0 xl:pr-8">
						<motion.div
							variants={fadeIn('right', 0.2)}
							initial="hidden"
							animate="show"
							exit="hidden"
							className="inline-flex items-center justify-center lg:justify-start gap-2 mb-6"
						>
							<span className="w-8 h-[2px] bg-sky-500 dark:bg-red-500 rounded-full" />
							<span className="text-sky-500 dark:text-red-500 font-medium tracking-wider uppercase text-sm flex items-center gap-2">
								<LayoutGrid className="w-4 h-4" />
								Portfolio
							</span>
						</motion.div>

						<motion.h2
							variants={fadeIn('right', 0.3)}
							initial="hidden"
							animate="show"
							exit="hidden"
							className="text-[40px] leading-tight md:text-[54px] md:leading-[1.2] font-bold text-white mb-6 xl:mt-8"
						>
							My <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-500 dark:from-red-400 dark:to-orange-500">Projects</span>.
						</motion.h2>

						<motion.p
							variants={fadeIn('right', 0.4)}
							initial="hidden"
							animate="show"
							exit="hidden"
							className="text-gray-300/80 leading-relaxed font-light text-lg max-w-[450px] mx-auto lg:mx-0"
						>
							A curated collection of real-world projects where I applied modern web technologies to solve practical problems, build scalable applications, and
							deliver premium user experiences.
						</motion.p>
					</div>

					{/* slider with glass container */}
					<motion.div variants={fadeIn('left', 0.6)} initial="hidden" animate="show" exit="hidden" className="w-full xl:max-w-[65%] relative">
						<div className="absolute -inset-4 bg-gradient-to-tr from-sky-500/10 to-blue-600/10 dark:from-red-500/10 dark:to-orange-600/10 blur-xl rounded-[40px] z-0 pointer-events-none" />
						<div className="relative z-10 bg-white/5 dark:bg-[#131424]/40 backdrop-blur-md rounded-3xl p-4 sm:p-6 border border-white/10 dark:border-white/5 shadow-2xl">
							<WorkSlider handleCardClick={handleCardClick} />
						</div>
					</motion.div>
				</div>
			</div>

			<Bulb />

			{/* Modal */}
			<AnimatePresence>{isModalOpen && <ProjectModal project={selectedProject} onClose={() => setIsModalOpen(false)} />}</AnimatePresence>
		</div>
	);
};

export default Work;
