'use client';

import { motion } from 'framer-motion';
import { X, ExternalLink, Github, Code2, CheckCircle2, Sparkles, Eye } from 'lucide-react';
import Image from 'next/image';

export default function ProjectModal({ project, onClose }) {
	const getTechIcon = (tech) => {
		const icons = {
			React: '⚛️',
			'Next.js': '▲',
			TypeScript: '📘',
			JavaScript: '🟨',
			'Node.js': '🟩',
			Python: '🐍',
			Tailwind: '🎨',
			MongoDB: '🍃',
			PostgreSQL: '🐘',
			Docker: '🐳',
			AWS: '☁️',
			Firebase: '🔥',
			GraphQL: '◈',
			Redis: '🔴',
			Vue: '💚',
			Angular: '🅰️',
		};
		return icons[tech] || '💻';
	};

	return (
		<div className="fixed inset-0 z-50 flex items-center justify-center p-4">
			{/* Backdrop - Light/Dark */}
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				onClick={onClose}
				className="absolute inset-0 bg-white/80 dark:bg-[#0a0a1a]/90 backdrop-blur-md transition-colors duration-300"
			/>

			{/* Modal Container */}
			<motion.div
				initial={{ opacity: 0, scale: 0.9, y: 20 }}
				animate={{ opacity: 1, scale: 1, y: 0 }}
				exit={{ opacity: 0, scale: 0.9, y: 20 }}
				transition={{ type: 'spring', damping: 25, stiffness: 300 }}
				className="relative w-full max-w-2xl max-h-[90vh] bg-[#0c4a6e] dark:bg-[#0f0f23] rounded-3xl shadow-2xl overflow-hidden flex flex-col border border-sky-400/20 dark:border-red-500/20 transition-colors duration-300"
			>
				{/* Network Background Effect */}
				<div className="absolute inset-0 overflow-hidden pointer-events-none">
					<svg className="absolute top-0 right-0 w-full h-full opacity-20" viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
						<defs>
							<linearGradient id="lineGradDark" x1="0%" y1="0%" x2="100%" y2="100%">
								<stop offset="0%" stopColor="#ff3333" stopOpacity="0.5" />
								<stop offset="100%" stopColor="#ff6666" stopOpacity="0.1" />
							</linearGradient>
							<linearGradient id="lineGradOcean" x1="0%" y1="0%" x2="100%" y2="100%">
								<stop offset="0%" stopColor="#38bdf8" stopOpacity="0.5" />
								<stop offset="100%" stopColor="#7dd3fc" stopOpacity="0.1" />
							</linearGradient>
						</defs>
						<path d="M 100 100 L 300 200 L 500 150 L 700 300" stroke="url(#lineGradOcean)" className="dark:hidden" strokeWidth="1" fill="none" />
						<path d="M 200 400 L 400 300 L 600 400 L 800 200" stroke="url(#lineGradOcean)" className="dark:hidden" strokeWidth="1" fill="none" />
						<circle cx="300" cy="200" r="3" fill="#38bdf8" opacity="0.8" className="dark:hidden" />
						<circle cx="500" cy="150" r="3" fill="#38bdf8" opacity="0.8" className="dark:hidden" />

						<path d="M 100 100 L 300 200 L 500 150 L 700 300" stroke="url(#lineGradDark)" className="hidden dark:block" strokeWidth="1" fill="none" />
						<path d="M 200 400 L 400 300 L 600 400 L 800 200" stroke="url(#lineGradDark)" className="hidden dark:block" strokeWidth="1" fill="none" />
						<circle cx="300" cy="200" r="3" fill="#ff3333" opacity="0.8" className="hidden dark:block" />
						<circle cx="500" cy="150" r="3" fill="#ff3333" opacity="0.8" className="hidden dark:block" />
					</svg>
				</div>

				{/* Close Button */}
				<button
					onClick={onClose}
					className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/40 backdrop-blur-md hover:bg-white/20 transition-all duration-200 hover:rotate-90 border border-white/10"
				>
					<X className="w-5 h-5 text-gray-200 hover:text-white" />
				</button>

				{/* Hero Image */}
				<div className="relative h-64 bg-gradient-to-br from-[#0c4a6e] via-[#0284c7] to-[#082f49] dark:from-red-600 dark:via-red-700 dark:to-orange-800 flex-shrink-0 overflow-hidden transition-colors duration-300">
					{project.image ? (
						<Image src={project.image} alt={project.name} fill className="object-cover opacity-90" />
					) : (
						<div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#082f49] to-[#0c4a6e] dark:from-[#1a0a2e] dark:to-[#0f0f23]">
							<Code2 className="w-24 h-24 text-sky-400/80 dark:text-red-400/80" />
						</div>
					)}
					<div className="absolute inset-0 bg-gradient-to-t from-[#0c4a6e] dark:from-[#0f0f23] via-transparent to-transparent transition-colors duration-300" />

					{/* Title Overlay */}
					<div className="absolute bottom-0 left-0 right-0 p-6">
						<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
							<h2 className="text-3xl font-bold text-white mb-2 flex items-center gap-2">
								{project.name}
								<Sparkles className="w-6 h-6 text-sky-400 dark:text-red-400 animate-pulse" />
							</h2>
							<p className="text-gray-300 text-lg">{project.shortDescription}</p>
						</motion.div>
					</div>
				</div>

				<div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-sky-400 dark:scrollbar-thumb-red-500 scrollbar-track-transparent hover:scrollbar-thumb-sky-300 dark:hover:scrollbar-thumb-red-400 scrollbar-thumb-rounded-full p-6 space-y-6 relative z-10 transition-colors duration-300">
					{/* Description */}
					<motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
						<h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
							<span className="w-1 h-6 bg-gradient-to-b from-sky-400 dark:from-red-500 to-sky-200 dark:to-orange-500 rounded-full" />
							About Project
						</h3>
						<p className="text-white/80 dark:text-gray-400 leading-relaxed">{project.fullDescription}</p>
					</motion.div>

					{/* Features */}
					{project.features && project.features.length > 0 && (
						<motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
							<h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
								<span className="w-1 h-6 bg-gradient-to-b from-sky-300 dark:from-orange-500 to-sky-500 dark:to-red-500 rounded-full" />
								Key Features
							</h3>
							<ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
								{project.features.map((feature, index) => (
									<motion.li
										key={index}
										initial={{ opacity: 0, x: -10 }}
										animate={{ opacity: 1, x: 0 }}
										transition={{ delay: 0.3 + index * 0.05 }}
										className="flex items-start gap-2 text-white/80 dark:text-gray-400 group"
									>
										<CheckCircle2 className="w-5 h-5 text-sky-400 dark:text-red-500 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
										<span className="text-sm group-hover:text-white transition-colors">{feature}</span>
									</motion.li>
								))}
							</ul>
						</motion.div>
					)}

					{/* Tech Stack */}
					<motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
						<h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
							<span className="w-1 h-6 bg-gradient-to-b from-sky-400 dark:from-red-500 to-sky-600 dark:to-pink-500 rounded-full" />
							Tech Stack
						</h3>
						<div className="flex flex-wrap gap-3">
							{project.techStack.map((tech, index) => (
								<motion.div
									key={index}
									initial={{ opacity: 0, scale: 0.8 }}
									animate={{ opacity: 1, scale: 1 }}
									transition={{ delay: 0.4 + index * 0.05 }}
									whileHover={{ scale: 1.05, y: -2 }}
									className="flex items-center gap-2 px-4 py-2 bg-[#1a1a2e] rounded-xl border border-red-500/30 hover:border-red-500/60 transition-all cursor-default shadow-lg shadow-red-500/10 hover:shadow-red-500/20"
								>
									<span className="text-xl">{getTechIcon(tech)}</span>
									<span className="text-sm font-medium text-gray-300">{tech}</span>
								</motion.div>
							))}
						</div>
					</motion.div>

					{/* Stats */}
					<motion.div
						initial={{ opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.5 }}
						className="grid grid-cols-3 gap-4 p-4 bg-gradient-to-r from-sky-500/10 to-blue-500/10 dark:from-red-500/10 dark:to-orange-500/10 rounded-2xl border border-sky-500/20 dark:border-red-500/20"
					>
						<div className="text-center">
							<div className="text-2xl font-bold text-sky-400 dark:text-red-400">100%</div>
							<div className="text-xs text-gray-400">Responsive</div>
						</div>
						<div className="text-center border-x border-sky-500/20 dark:border-red-500/20">
							<div className="text-2xl font-bold text-blue-400 dark:text-orange-400">A+</div>
							<div className="text-xs text-gray-400">Performance</div>
						</div>
						<div className="text-center">
							<div className="text-2xl font-bold text-sky-400 dark:text-red-400">SEO</div>
							<div className="text-xs text-gray-400">Optimized</div>
						</div>
					</motion.div>

					{/* Actions */}
					<motion.div
						initial={{ opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.5 }}
						className="flex gap-4 pt-4 border-t border-sky-400/10 dark:border-red-500/10"
					>
						{project.liveUrl && (
							<a
								href={project.liveUrl}
								target="_blank"
								rel="noopener noreferrer"
								className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-sky-500 hover:bg-sky-600 dark:bg-red-600 dark:hover:bg-red-700 text-white rounded-xl font-medium transition-all duration-200 hover:-translate-y-1 shadow-lg shadow-sky-500/25 dark:shadow-red-500/25"
							>
								<ExternalLink className="w-5 h-5" />
								<span>Live Demo</span>
							</a>
						)}
						{project.githubUrl && (
							<a
								href={project.githubUrl}
								target="_blank"
								rel="noopener noreferrer"
								className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-[#082f49] hover:bg-[#0284c7] dark:bg-[#1a1a2e] dark:hover:bg-[#2a2a3e] text-white rounded-xl font-medium transition-all duration-200 hover:-translate-y-1 border border-sky-400/20 dark:border-red-500/30 shadow-lg"
							>
								<Github className="w-5 h-5" />
								<span>Source Code</span>
							</a>
						)}
					</motion.div>
				</div>
			</motion.div>
		</div>
	);
}
