const PDFViewer = ({ isOpen, closeModal }) => {
	return (
		<>
			{/* <!-- Simple Modal for PDF Viewer --> */}
			<div id="cvModal" className={`${isOpen ? 'block' : 'hidden'} fixed inset-0 z-50 bg-black/90 backdrop-blur-sm`}>
				<div className="flex items-center justify-center min-h-screen p-4">
					<div className="relative w-full max-w-4xl h-[80vh] bg-gray-900 rounded-2xl border border-red-500/30 overflow-hidden">
						<button onClick={closeModal} className="absolute top-4 right-4 text-white hover:text-red-500 transition-colors z-10">
							<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
							</svg>
						</button>
						<iframe src="/MD.Omar_Faruk_Sarkar-CV.pdf" class="w-full h-full" type="application/pdf"></iframe>
					</div>
				</div>
			</div>
		</>
	);
};

export default PDFViewer;
