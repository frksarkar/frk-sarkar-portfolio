import { motion } from 'framer-motion';
import { Layers } from 'lucide-react';

import Bulb from '../../components/Bulb';
import Circles from '../../components/Circles';
import ServiceSlider from '../../components/ServiceSlider';
import { fadeIn } from '../../variants';

export const serviceData = [];

const Services = () => {
	return (
		<div className="h-screen bg-lightPrimary dark:bg-primary/30 py-36 flex items-center transition-colors duration-300 relative overflow-hidden">
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
								<Layers className="w-4 h-4" />
								What I Do
							</span>
						</motion.div>

						<motion.h2
							variants={fadeIn('right', 0.3)}
							initial="hidden"
							animate="show"
							exit="hidden"
							className="text-[40px] leading-tight md:text-[54px] md:leading-[1.2] font-bold text-slate-900 dark:text-white mb-6 xl:mt-8"
						>
							My <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-500 dark:from-red-400 dark:to-orange-500">Services</span>.
						</motion.h2>

						<motion.p
							variants={fadeIn('right', 0.4)}
							initial="hidden"
							animate="show"
							exit="hidden"
							className="text-gray-300/80 leading-relaxed font-light text-lg max-w-[450px] mx-auto lg:mx-0"
						>
							I help businesses and startups build fast, responsive, and scalable web applications using modern technologies and clean development practices.
						</motion.p>
					</div>

					{/* slider with glass container */}
					<motion.div variants={fadeIn('left', 0.6)} initial="hidden" animate="show" exit="hidden" className="w-full xl:max-w-[65%] relative">
						<div className="absolute -inset-4 bg-gradient-to-tr from-sky-500/10 to-blue-600/10 dark:from-red-500/10 dark:to-orange-600/10 blur-xl rounded-[40px] z-0 pointer-events-none" />
						<div className="relative z-10 bg-white/5 dark:bg-[#131424]/40 backdrop-blur-md rounded-3xl p-4 sm:p-6 border border-white/10 dark:border-white/5 shadow-2xl">
							<ServiceSlider />
						</div>
					</motion.div>
				</div>
			</div>

			<Bulb />
		</div>
	);
};

export default Services;
