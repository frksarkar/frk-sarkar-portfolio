import { useState } from 'react';
import { CheckCircle2, Loader2, Eye } from 'lucide-react';

const CvButton = ({ openModal }) => {
	const [isDownloaded, setIsDownloaded] = useState(false);
	const [isViewing, setIsViewing] = useState(false);

	const handleViewClick = () => {
		setIsViewing(true);
		setTimeout(() => openModal(), 300); // Small delay to let the animation play before modal blocks the screen

		setTimeout(() => {
			setIsViewing(false);
		}, 1500); // Revert back shortly after opening
	};

	const handleDownloadClick = () => {
		setIsDownloaded(true);

		setTimeout(() => {
			setIsDownloaded(false);
		}, 3000); // Revert back to normal after 3 seconds
	};

	return (
		<>
			{/* <!-- Button Container --> */}
			<div className="flex justify-center md:justify-start flex-wrap gap-4 mb-8">
				{/* <!-- View CV Button --> */}
				<button
					onClick={handleViewClick}
					className={`group relative inline-flex items-center gap-2 px-6 py-3 font-semibold rounded-full transition-all duration-300 shadow-lg overflow-hidden ${
						isViewing
							? 'bg-white text-red-500 shadow-white/30 scale-95 border border-red-100'
							: 'bg-gradient-to-r from-red-500 to-red-600 text-white shadow-red-500/30 hover:shadow-red-500/50 hover:-translate-y-1'
					}`}
				>
					{!isViewing && (
						<span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
					)}

					{isViewing ? (
						<>
							<Loader2 className="w-5 h-5 animate-spin" />
							<span className="animate-in fade-in duration-300">Opening...</span>
						</>
					) : (
						<>
							<Eye className="w-5 h-5" />
							<span>View CV</span>
						</>
					)}
				</button>

				{/* <!-- Download CV Button --> */}
				<a
					href="/MD.Omar_Faruk_Sarkar-CV.pdf"
					download
					onClick={handleDownloadClick}
					className={`group relative inline-flex items-center gap-2 px-6 py-3 font-semibold rounded-full transition-all duration-300 shadow-lg overflow-hidden cursor-pointer ${
						isDownloaded
							? 'bg-emerald-500 text-white border-2 border-emerald-500 shadow-emerald-500/30'
							: 'bg-transparent text-white border-2 border-red-500 hover:bg-red-500 hover:-translate-y-1 hover:shadow-red-500/30'
					}`}
				>
					{isDownloaded ? (
						<>
							<CheckCircle2 className="w-5 h-5 animate-in zoom-in duration-300" />
							<span className="animate-in fade-in duration-300">Downloaded!</span>
						</>
					) : (
						<>
							<svg className="w-5 h-5 group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
							</svg>
							<span>Download CV</span>
						</>
					)}
				</a>
			</div>
		</>
	);
};

export default CvButton;
