const CvButton = ({ openModal }) => {
	return (
		<>
			{/* <!-- Button Container --> */}
			<div class="flex justify-center md:justify-start flex-wrap gap-4 mb-8">
				{/* <!-- View CV Button --> */}
				<button
					onClick={openModal}
					class="group relative inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white font-semibold rounded-full shadow-lg shadow-red-500/30 hover:shadow-red-500/50 hover:-translate-y-1 transition-all duration-300 overflow-hidden"
				>
					<span class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
					<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
						></path>
					</svg>
					<span>View CV</span>
				</button>

				{/* <!-- Download CV Button --> */}
				<a
					href="/MD.Omar_Faruk_Sarkar-CV.pdf"
					download
					class="group relative inline-flex  items-center gap-2 px-6 py-3 bg-transparent text-white font-semibold rounded-full border-2 border-red-500 hover:bg-red-500 hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-red-500/30 overflow-hidden cursor-pointer"
				>
					<svg class="w-5 h-5 group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
					</svg>
					<span>Download CV</span>
				</a>
			</div>
		</>
	);
};

export default CvButton;
