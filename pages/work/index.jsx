import { motion } from 'framer-motion';
import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';

import Bulb from '../../components/Bulb';
import Circles from '../../components/Circles';
import WorkSlider from '../../components/WorkSlider';
import { fadeIn } from '../../variants';
import ProjectModal from '../../components/ProjectModal';

const Work = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [selectedProject, setSelectedProject] = useState(null);
	const handleCardClick = (project) => {
		setSelectedProject(project);
		setIsModalOpen(true);
	};

	return (
		<div className="h-full bg-primary/30 py-36 flex items-center">
			<Circles />
			<div className="container mx-auto">
				<div className="flex flex-col xl:flex-row gap-x-8">
					{/* text */}
					<div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0">
						<motion.h2 variants={fadeIn('up', 0.2)} initial="hidden" animate="show" exit="hidden" className="h2 xl:mt-12">
							My Project <span className="text-accent">.</span>
						</motion.h2>
						<motion.p variants={fadeIn('up', 0.4)} initial="hidden" animate="show" exit="hidden" className="mb-4 max-w-[400px] mx-auto lg:mx-0">
							A collection of real-world projects where I applied modern web technologies to solve practical problems and build scalable applications.
						</motion.p>
					</div>

					{/* slider */}
					<motion.div variants={fadeIn('down', 0.6)} initial="hidden" animate="show" exit="hidden" className="w-full xl:max-w-[65%]">
						<WorkSlider handleCardClick={handleCardClick} />
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
