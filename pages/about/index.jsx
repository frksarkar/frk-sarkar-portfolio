import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import CountUp from 'react-countup';
import { BiCodeAlt } from 'react-icons/bi';
import { AiOutlineBug } from 'react-icons/ai';
import { UserCircle, TerminalSquare } from 'lucide-react';
import {
	SiCss3,
	SiDocker,
	SiExpress,
	SiFirebase,
	SiGit,
	SiGithub,
	SiHtml5,
	SiJavascript,
	SiMongodb,
	SiNextdotjs,
	SiNodedotjs,
	SiPython,
	SiReact,
	SiSocketdotio,
	SiTailwindcss,
	SiTypescript,
} from 'react-icons/si';

import Avatar from '../../components/Avatar';
import Circles from '../../components/Circles';
import { fadeIn } from '../../variants';

// data
export const aboutData = [
	{
		title: 'skills',
		info: [
			{
				title: 'Languages',
				icons: [SiJavascript, SiTypescript, SiPython],
			},
			{
				title: 'Frontend Development',
				icons: [SiHtml5, SiCss3, SiTailwindcss, SiReact, SiNextdotjs],
			},
			{
				title: 'Backend Development',
				icons: [SiNodedotjs, SiExpress, SiMongodb],
			},
			{
				title: 'Tools & Platforms',
				icons: [SiGit, SiGithub, SiDocker, SiFirebase, SiSocketdotio],
			},
			{
				title: 'Other Skills',
				icons: [BiCodeAlt, AiOutlineBug],
			},
		],
	},
	{
		title: 'Achievements',
		info: [{ title: 'Completed multiple real-world projects' }, { title: 'Built full-stack applications independently' }, { title: 'Contributed to open-source projects' }],
	},
	{
		title: 'Experience',
		info: [
			{ title: 'Personal & open-source projects' },
			{ title: 'Practice-based development using real-world scenarios' },
			{ title: 'Collaborative learning through GitHub' },
		],
	},
	{
		title: 'Credentials',
		info: [{ title: 'Full-Stack Web Developer' }, { title: 'Strong foundation in React & Next.js' }, { title: 'Comfortable with REST APIs & Git workflow' }],
	},
];

const About = () => {
	const [index, setIndex] = useState(0);

	return (
		<div className="min-h-screen bg-lightPrimary dark:bg-primary/30 py-32 flex items-center transition-colors duration-300 relative overflow-x-hidden">
			<Circles />

			{/* Ambient background glow */}
			<div className="absolute top-1/4 -right-1/4 w-[500px] h-[500px] bg-sky-500/10 dark:bg-red-500/10 rounded-full blur-[120px] pointer-events-none" />
			<div className="absolute bottom-1/4 -left-1/4 w-[400px] h-[400px] bg-blue-500/10 dark:bg-orange-500/10 rounded-full blur-[100px] pointer-events-none" />

			{/* avatar img */}
			<motion.div
				variants={fadeIn('right', 0.2)}
				initial="hidden"
				animate="show"
				exit="hidden"
				className="hidden xl:flex absolute bottom-0 -left-[370px] z-10 w-full h-full max-w-[737px] max-h-[678px]"
			>
				<Avatar />
			</motion.div>

			<div className="container mx-auto relative z-20 flex flex-col items-center xl:flex-row gap-x-12 mt-12 xl:mt-0">
				{/* text column */}
				<div className="flex-1 flex flex-col justify-center text-center xl:text-left mb-12 xl:mb-0">
					<motion.div
						variants={fadeIn('right', 0.2)}
						initial="hidden"
						animate="show"
						exit="hidden"
						className="inline-flex items-center justify-center xl:justify-start gap-2 mb-6"
					>
						<span className="w-8 h-[2px] bg-sky-500 dark:bg-red-500 rounded-full" />
						<span className="text-sky-500 dark:text-red-500 font-medium tracking-wider uppercase text-sm flex items-center gap-2">
							<TerminalSquare className="w-4 h-4" />
							About Me
						</span>
					</motion.div>

					<motion.h2
						variants={fadeIn('right', 0.3)}
						initial="hidden"
						animate="show"
						exit="hidden"
						className="text-[40px] leading-tight md:text-[54px] md:leading-[1.2] font-bold text-slate-900 dark:text-white mb-6"
					>
						Captivating <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-500 dark:from-red-400 dark:to-orange-500">stories</span>{' '}
						birth magnificent designs.
					</motion.h2>

					<motion.p
						variants={fadeIn('right', 0.4)}
						initial="hidden"
						animate="show"
						className="text-gray-300/80 leading-relaxed font-light text-lg max-w-[500px] mx-auto xl:mx-0 mb-8 px-2 xl:px-0"
					>
						I’m a passionate Full-Stack Web Developer focused on building responsive, scalable, and user-friendly web applications using modern technologies. I enjoy
						solving real-world problems and continuously improving my skills through hands-on projects.
					</motion.p>

					{/* counters glass card */}
					<motion.div
						variants={fadeIn('right', 0.6)}
						initial="hidden"
						animate="show"
						className="hidden md:flex bg-white/5 dark:bg-[#131424]/40 backdrop-blur-md rounded-2xl p-6 border border-white/10 dark:border-white/5 shadow-xl md:max-w-xl xl:max-w-none mx-auto xl:mx-0"
					>
						<div className="flex flex-1 xl:gap-x-8">
							{/* projects */}
							<div className="relative flex-1 group">
								<div className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-500 dark:from-red-400 dark:to-orange-500 mb-2 drop-shadow-sm group-hover:scale-110 transition-transform duration-300">
									<CountUp start={0} end={15} duration={5} />+
								</div>
								<div className="text-xs uppercase tracking-[1px] leading-[1.4] text-gray-400 font-medium">Projects Built</div>
								<div className="absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-12 bg-gray-600/30" />
							</div>

							{/* clients */}
							<div className="relative flex-1 group">
								<div className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-500 dark:from-red-400 dark:to-orange-500 mb-2 drop-shadow-sm group-hover:scale-110 transition-transform duration-300">
									<CountUp start={0} end={8} duration={5} />+
								</div>
								<div className="text-xs uppercase tracking-[1px] leading-[1.4] text-gray-400 font-medium">Tech Used</div>
								<div className="absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-12 bg-gray-600/30" />
							</div>

							{/* experience */}
							<div className="relative flex-1 group">
								<div className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-500 dark:from-red-400 dark:to-orange-500 mb-2 drop-shadow-sm group-hover:scale-110 transition-transform duration-300">
									<CountUp start={0} end={1} duration={5} />+
								</div>
								<div className="text-xs uppercase tracking-[1px] leading-[1.4] text-gray-400 font-medium">Years Exp.</div>
								<div className="absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-12 bg-gray-600/30 xl:hidden" />
							</div>

							{/* mindset */}
							<div className="relative flex-1 group hidden xl:block">
								<div className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-500 dark:from-red-400 dark:to-orange-500 mb-2 drop-shadow-sm group-hover:scale-110 transition-transform duration-300">
									∞
								</div>
								<div className="text-xs uppercase tracking-[1px] leading-[1.4] text-gray-400 font-medium">Learning</div>
							</div>
						</div>
					</motion.div>
				</div>

				{/* info column glass card */}
				<motion.div variants={fadeIn('left', 0.4)} initial="hidden" animate="show" exit="hidden" className="flex flex-col w-full xl:max-w-[48%] h-auto min-h-[480px]">
					{/* Tabs */}
					<div className="flex flex-wrap gap-3 xl:gap-4 mx-auto xl:mx-0 mb-8 justify-center xl:justify-start">
						{aboutData.map((item, itemI) => (
							<button
								key={itemI}
								onClick={() => setIndex(itemI)}
								className={`relative px-5 py-2.5 rounded-xl capitalize font-medium transition-all duration-300 overflow-hidden ${
									index === itemI
										? 'text-sky-600 dark:text-white bg-sky-500/10 dark:bg-red-500/20 border border-sky-400/50 dark:border-red-500/50 shadow-[0_0_15px_rgba(14,165,233,0.1)] dark:shadow-[0_0_15px_rgba(239,68,68,0.2)]'
										: 'text-slate-600 dark:text-gray-400 bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5 hover:bg-black/10 hover:dark:bg-white/10 hover:text-slate-900 dark:hover:text-white'
								}`}
							>
								{item.title}
								{index === itemI && (
									<motion.div
										layoutId="activeTab"
										className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-sky-400 to-blue-500 dark:from-red-500 dark:to-orange-500"
									/>
								)}
							</button>
						))}
					</div>

					{/* Tab Content inside Frosted Glass Pane */}
					<div className="relative p-6 sm:p-8 bg-white/5 dark:bg-[#131424]/40 backdrop-blur-md rounded-3xl border border-white/10 dark:border-white/5 shadow-2xl flex-1">
						<div className="absolute top-0 right-0 p-4 opacity-10">
							<UserCircle className="w-24 h-24 text-sky-400 dark:text-red-400" />
						</div>

						<AnimatePresence mode="wait">
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 10 }}
								animate={{ opacity: 1, y: 0 }}
								exit={{ opacity: 0, y: -10 }}
								transition={{ duration: 0.2 }}
								className="flex flex-col gap-y-4 xl:gap-y-6 relative z-10"
							>
								{aboutData[index].info.map((item, itemI) => (
									<div
										key={itemI}
										className="group relative flex flex-col md:flex-row gap-y-2 md:gap-y-0 justify-between items-start md:items-center text-slate-700 dark:text-white/80 p-4 rounded-xl hover:bg-black/5 dark:hover:bg-white/5 border border-transparent hover:border-black/10 dark:hover:border-white/10 transition-colors duration-300"
									>
										{/* title & description */}
										<div className="font-semibold text-slate-800 dark:text-gray-200 group-hover:text-sky-600 dark:group-hover:text-white transition-colors flex items-center gap-3">
											<span className="w-2 h-2 rounded-full bg-sky-500 dark:bg-red-500 group-hover:scale-150 transition-transform" />
											{item.title}
										</div>

										<div className="flex gap-x-4 items-center">
											{/* icons */}
											{item.icons?.map((Icon, iconI) => (
												<div
													key={iconI}
													className="text-2xl text-gray-400 group-hover:text-sky-400 dark:group-hover:text-red-400 transition-colors duration-300 transform group-hover:-translate-y-1"
												>
													<Icon />
												</div>
											))}
										</div>
									</div>
								))}
							</motion.div>
						</AnimatePresence>
					</div>
				</motion.div>
			</div>
		</div>
	);
};

export default About;
