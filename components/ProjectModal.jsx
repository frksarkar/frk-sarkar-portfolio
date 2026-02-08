'use client';

import { motion } from 'framer-motion';
import { X, ExternalLink, Github, Code2, CheckCircle2, Sparkles } from 'lucide-react';

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
			{/* Backdrop */}
			<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

			{/* Modal Container */}
			<motion.div
				initial={{ opacity: 0, scale: 0.9, y: 20 }}
				animate={{ opacity: 1, scale: 1, y: 0 }}
				exit={{ opacity: 0, scale: 0.9, y: 20 }}
				transition={{ type: 'spring', damping: 25, stiffness: 300 }}
				className="relative w-full max-w-2xl max-h-[90vh] bg-white dark:bg-gray-900 rounded-3xl shadow-2xl overflow-hidden flex flex-col"
			>
				{/* Close Button */}
				<button
					onClick={onClose}
					className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/90 dark:bg-gray-800/90 backdrop-blur-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200 hover:rotate-90 shadow-lg"
				>
					<X className="w-5 h-5 text-gray-600 dark:text-gray-400" />
				</button>

				{/* Hero Image */}
				<div className="relative h-64 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex-shrink-0">
					{project.image ? (
						<img src={project.image} alt={project.name} className="w-full h-full object-cover" />
					) : (
						<div className="w-full h-full flex items-center justify-center">
							<Code2 className="w-24 h-24 text-white/80" />
						</div>
					)}
					<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

					{/* Title Overlay */}
					<div className="absolute bottom-0 left-0 right-0 p-6">
						<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
							<h2 className="text-3xl font-bold text-white mb-2 flex items-center gap-2">
								{project.name}
								<Sparkles className="w-6 h-6 text-yellow-400 animate-pulse" />
							</h2>
							<p className="text-white/90 text-lg">{project.shortDescription}</p>
						</motion.div>
					</div>
				</div>

				<div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-indigo-500 scrollbar-track-transparent hover:scrollbar-thumb-indigo-600 scrollbar-thumb-rounded-full p-6 space-y-6">
					{/* Description */}
					<motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
						<h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
							<span className="w-1 h-6 bg-gradient-to-b from-indigo-500 to-purple-500 rounded-full" />
							About Project
						</h3>
						<p className="text-gray-600 dark:text-gray-400 leading-relaxed">{project.fullDescription}</p>
					</motion.div>

					{/* Features */}
					{project.features && project.features.length > 0 && (
						<motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
							<h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
								<span className="w-1 h-6 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full" />
								Key Features
							</h3>
							<ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
								{project.features.map((feature, index) => (
									<motion.li
										key={index}
										initial={{ opacity: 0, x: -10 }}
										animate={{ opacity: 1, x: 0 }}
										transition={{ delay: 0.3 + index * 0.05 }}
										className="flex items-start gap-2 text-gray-600 dark:text-gray-400 group"
									>
										<CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
										<span className="text-sm group-hover:text-gray-900 dark:group-hover:text-white transition-colors">{feature}</span>
									</motion.li>
								))}
							</ul>
						</motion.div>
					)}

					{/* Tech Stack */}
					<motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
						<h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
							<span className="w-1 h-6 bg-gradient-to-b from-pink-500 to-orange-500 rounded-full" />
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
									className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-gray-100 to-gray-50 dark:from-gray-800 dark:to-gray-700/50 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-indigo-300 dark:hover:border-indigo-500/50 transition-all cursor-default shadow-sm hover:shadow-md"
								>
									<span className="text-xl">{getTechIcon(tech)}</span>
									<span className="text-sm font-medium text-gray-700 dark:text-gray-300">{tech}</span>
								</motion.div>
							))}
						</div>
					</motion.div>

					{/* Stats */}
					<motion.div
						initial={{ opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.5 }}
						className="grid grid-cols-3 gap-4 p-4 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-2xl"
					>
						<div className="text-center">
							<div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">100%</div>
							<div className="text-xs text-gray-600 dark:text-gray-400">Responsive</div>
						</div>
						<div className="text-center border-x border-gray-300 dark:border-gray-700">
							<div className="text-2xl font-bold text-purple-600 dark:text-purple-400">A+</div>
							<div className="text-xs text-gray-600 dark:text-gray-400">Performance</div>
						</div>
						<div className="text-center">
							<div className="text-2xl font-bold text-pink-600 dark:text-pink-400">SEO</div>
							<div className="text-xs text-gray-600 dark:text-gray-400">Optimized</div>
						</div>
					</motion.div>

					{/* Action Buttons */}
					<motion.div
						initial={{ opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.6 }}
						className="pt-4 pb-2 border-t border-gray-200 dark:border-gray-800 flex flex-wrap gap-4"
					>
						{project.liveUrl && (
							<a
								href={project.liveUrl}
								target="_blank"
								rel="noopener noreferrer"
								className="flex-1 min-w-[140px] flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white rounded-xl font-semibold transition-all hover:shadow-lg hover:shadow-indigo-500/30 hover:-translate-y-0.5 active:translate-y-0"
							>
								<ExternalLink className="w-5 h-5" />
								View Live
							</a>
						)}
						{project.githubUrl && (
							<a
								href={project.githubUrl}
								target="_blank"
								rel="noopener noreferrer"
								className="flex-1 min-w-[140px] flex items-center justify-center gap-2 px-6 py-3 bg-gray-900 dark:bg-gray-800 hover:bg-gray-800 dark:hover:bg-gray-700 text-white rounded-xl font-semibold transition-all hover:shadow-lg border border-gray-700 dark:border-gray-600 hover:-translate-y-0.5 active:translate-y-0"
							>
								<Github className="w-5 h-5" />
								Source Code
							</a>
						)}
					</motion.div>
				</div>
			</motion.div>
		</div>
	);
}
