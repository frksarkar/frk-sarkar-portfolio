import PDFviewer from '../../components/PDFviewer';
import CvButton from '../../components/CvButton';
import { useState } from 'react';

const FuturePage = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	return (
		<div>
			<h1>Future Page</h1>
			<p>This page is under construction. Stay tuned for updates!</p>
			<PDFviewer isOpen={isModalOpen} closeModal={() => setIsModalOpen(false)} />
			<CvButton openModal={() => setIsModalOpen(true)} />
		</div>
	);
};

export default FuturePage;
