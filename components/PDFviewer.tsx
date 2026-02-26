import { motion, AnimatePresence } from 'framer-motion';
import { X, Download } from 'lucide-react';

const PDFViewer = ({ isOpen, closeModal }) => {
	return (
		<AnimatePresence>
			{isOpen && (
				<div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
					{/* Backdrop */}
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						onClick={closeModal}
						className="absolute inset-0 bg-lightPrimary/90 dark:bg-[#0a0a1a]/90 backdrop-blur-md transition-colors duration-300"
					/>

					{/* Modal Container */}
					<motion.div
						initial={{ opacity: 0, scale: 0.95, y: 20 }}
						animate={{ opacity: 1, scale: 1, y: 0 }}
						exit={{ opacity: 0, scale: 0.95, y: 20 }}
						transition={{ type: 'spring', damping: 25, stiffness: 300 }}
						className="relative w-full max-w-5xl h-[85vh] sm:h-[90vh] bg-white dark:bg-[#0f0f23] rounded-3xl shadow-2xl overflow-hidden flex flex-col border border-gray-200 dark:border-red-500/20 transition-colors duration-300"
					>
						{/* Header bar */}
						<div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-black/20">
							<h3 className="text-xl font-semibold text-primary dark:text-white flex items-center gap-2">
								<span className="w-1.5 h-6 bg-gradient-to-b from-sky-400 dark:from-red-500 to-sky-600 dark:to-orange-500 rounded-full" />
								Resume / CV
							</h3>
							<div className="flex items-center gap-4">
								<a
									href="/MD.Omar_Faruk_Sarkar-CV.pdf"
									download
									className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-sky-500 dark:bg-red-500 hover:bg-sky-600 dark:hover:bg-red-600 rounded-full transition-colors"
								>
									<Download className="w-4 h-4" />
									<span className="hidden sm:inline">Download</span>
								</a>
								<button
									onClick={closeModal}
									className="p-2 rounded-full bg-gray-200/50 dark:bg-white/10 hover:bg-gray-300 dark:hover:bg-red-500/20 transition-all duration-200 hover:rotate-90 group"
								>
									<X className="w-5 h-5 text-gray-700 dark:text-gray-300 group-hover:text-red-500" />
								</button>
							</div>
						</div>

						{/* PDF Iframe */}
						<div className="flex-1 w-full relative bg-gray-100 dark:bg-gray-900">
							<iframe src="/MD.Omar_Faruk_Sarkar-CV.pdf" className="w-full h-full border-none" title="CV Viewer" />
						</div>
					</motion.div>
				</div>
			)}
		</AnimatePresence>
	);
};

export default PDFViewer;
