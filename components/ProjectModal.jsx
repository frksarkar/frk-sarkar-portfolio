'use client';

import { motion } from 'framer-motion';
import { X, ExternalLink, Github, Code2, CheckCircle2, Sparkles, Eye } from 'lucide-react';

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
			{/* Backdrop - Dark with red tint */}
			<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} className="absolute inset-0 bg-[#0a0a1a]/90 backdrop-blur-md" />

			{/* Modal Container */}
			<motion.div
				initial={{ opacity: 0, scale: 0.9, y: 20 }}
				animate={{ opacity: 1, scale: 1, y: 0 }}
				exit={{ opacity: 0, scale: 0.9, y: 20 }}
				transition={{ type: 'spring', damping: 25, stiffness: 300 }}
				className="relative w-full max-w-2xl max-h-[90vh] bg-[#0f0f23] rounded-3xl shadow-2xl shadow-red-500/20 overflow-hidden flex flex-col border border-red-500/20"
			>
				{/* Network Background Effect */}
				<div className="absolute inset-0 overflow-hidden pointer-events-none">
					<svg className="absolute top-0 right-0 w-full h-full opacity-20" viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
						<defs>
							<linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
								<stop offset="0%" stopColor="#ff3333" stopOpacity="0.5" />
								<stop offset="100%" stopColor="#ff6666" stopOpacity="0.1" />
							</linearGradient>
						</defs>
						<path d="M 100 100 L 300 200 L 500 150 L 700 300" stroke="url(#lineGrad)" strokeWidth="1" fill="none" />
						<path d="M 200 400 L 400 300 L 600 400 L 800 200" stroke="url(#lineGrad)" strokeWidth="1" fill="none" />
						<circle cx="300" cy="200" r="3" fill="#ff3333" opacity="0.8" />
						<circle cx="500" cy="150" r="3" fill="#ff3333" opacity="0.8" />
					</svg>
				</div>

				{/* Close Button */}
				<button
					onClick={onClose}
					className="absolute top-4 right-4 z-20 p-2 rounded-full bg-[#1a1a2e]/90 backdrop-blur-md hover:bg-red-500/20 transition-all duration-200 hover:rotate-90 border border-red-500/30 hover:border-red-500"
				>
					<X className="w-5 h-5 text-gray-300 hover:text-red-400" />
				</button>

				{/* Hero Image */}
				<div className="relative h-64 bg-gradient-to-br from-red-600 via-red-700 to-orange-800 flex-shrink-0 overflow-hidden">
					{project.image ? (
						<img src={project.image} alt={project.name} className="w-full h-full object-cover opacity-90" />
					) : (
						<div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#1a0a2e] to-[#0f0f23]">
							<Code2 className="w-24 h-24 text-red-400/80" />
						</div>
					)}
					<div className="absolute inset-0 bg-gradient-to-t from-[#0f0f23] via-transparent to-transparent" />

					{/* Title Overlay */}
					<div className="absolute bottom-0 left-0 right-0 p-6">
						<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
							<h2 className="text-3xl font-bold text-white mb-2 flex items-center gap-2">
								{project.name}
								<Sparkles className="w-6 h-6 text-red-400 animate-pulse" />
							</h2>
							<p className="text-gray-300 text-lg">{project.shortDescription}</p>
						</motion.div>
					</div>
				</div>

				<div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-red-500 scrollbar-track-[#1a1a2e] hover:scrollbar-thumb-red-400 scrollbar-thumb-rounded-full p-6 space-y-6 relative z-10">
					{/* Description */}
					<motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
						<h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
							<span className="w-1 h-6 bg-gradient-to-b from-red-500 to-orange-500 rounded-full" />
							About Project
						</h3>
						<p className="text-gray-400 leading-relaxed">{project.fullDescription}</p>
					</motion.div>

					{/* Features */}
					{project.features && project.features.length > 0 && (
						<motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
							<h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
								<span className="w-1 h-6 bg-gradient-to-b from-orange-500 to-red-500 rounded-full" />
								Key Features
							</h3>
							<ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
								{project.features.map((feature, index) => (
									<motion.li
										key={index}
										initial={{ opacity: 0, x: -10 }}
										animate={{ opacity: 1, x: 0 }}
										transition={{ delay: 0.3 + index * 0.05 }}
										className="flex items-start gap-2 text-gray-400 group"
									>
										<CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
										<span className="text-sm group-hover:text-white transition-colors">{feature}</span>
									</motion.li>
								))}
							</ul>
						</motion.div>
					)}

					{/* Tech Stack */}
					<motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
						<h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
							<span className="w-1 h-6 bg-gradient-to-b from-red-500 to-pink-500 rounded-full" />
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
						className="grid grid-cols-3 gap-4 p-4 bg-gradient-to-r from-red-500/10 to-orange-500/10 rounded-2xl border border-red-500/20"
					>
						<div className="text-center">
							<div className="text-2xl font-bold text-red-400">100%</div>
							<div className="text-xs text-gray-400">Responsive</div>
						</div>
						<div className="text-center border-x border-red-500/20">
							<div className="text-2xl font-bold text-orange-400">A+</div>
							<div className="text-xs text-gray-400">Performance</div>
						</div>
						<div className="text-center">
							<div className="text-2xl font-bold text-red-400">SEO</div>
							<div className="text-xs text-gray-400">Optimized</div>
						</div>
					</motion.div>

					{/* Action Buttons */}
					<motion.div
						initial={{ opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.6 }}
						className="pt-4 pb-2 border-t border-red-500/20 flex flex-wrap gap-4"
					>
						{project.liveUrl && (
							<a
								href={project.liveUrl}
								target="_blank"
								rel="noopener noreferrer"
								className="flex-1 min-w-[140px] flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white rounded-xl font-semibold transition-all hover:shadow-lg hover:shadow-red-500/30 hover:-translate-y-0.5 active:translate-y-0 border border-red-500/50"
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
								className="flex-1 min-w-[140px] flex items-center justify-center gap-2 px-6 py-3 bg-transparent hover:bg-red-500/10 text-white rounded-xl font-semibold transition-all hover:shadow-lg border-2 border-red-500/50 hover:border-red-500 hover:-translate-y-0.5 active:translate-y-0"
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
