import Image from 'next/image';
import { BsArrowRight } from 'react-icons/bs';
import { Pagination } from 'swiper';
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Loader2 } from 'lucide-react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

const workSlides = {
	slides: [
		{
			images: [
				{
					id: 1,
					name: 'Elite Store',
					path: '/elite-store.png',
					shortDescription: 'Modern, feature-rich E-commerce Web App',
					fullDescription:
						'A fully responsive e-commerce application built with React, TypeScript, and Tailwind CSS. It supports dark mode, user authentication, cart & wishlist management, multi-step checkout flow, real-time messaging, and more—all running with LocalStorage persistence.',
					techStack: ['React', 'TypeScript', 'Tailwind', 'Vite', 'Lucide React'],
					liveUrl: 'https://elite-store-nine.vercel.app/',
					githubUrl: 'https://github.com/frksarkar/Elite-Store',
					image: '/elite-store.png',
					features: ['Dark/Light Mode Toggle', 'Shopping Cart & Wishlist', 'Multi-step Checkout Flow', 'In-App Messaging Center', 'Local Storage Persistence'],
				},
				{
					id: 2,
					name: 'URL Shortener App',
					path: '/shortUrl.png',
					shortDescription: 'Modern URL Shortener Frontend Application',
					fullDescription:
						'A scalable URL Shortener Frontend Application built with Next.js (App Router), TypeScript, and Tailwind CSS. It focuses on clean architecture, reusable components, accessibility, and production-ready best practices like React Hook Form with Zod validation.',
					techStack: ['Next.js 16', 'TypeScript', 'React 19', 'Tailwind', 'Radix UI'],
					liveUrl: 'https://url-s-fend-lemon.vercel.app/',
					githubUrl: 'https://github.com/frksarkar/url-shortener-frontend',
					image: '/shortUrl.png',
					features: ['Next.js App Router', 'Accessibility-first UI (Radix)', 'Zod + React Hook Form', 'Theme Management', 'Service Layer Pattern'],
				},
				{
					id: 3,
					name: 'Twitter Clone',
					path: '/twitter-clone.png',
					shortDescription: 'Full-stack Social Media Application',
					fullDescription:
						'A full-stack Twitter clone application built with Node.js, Express, and React.js. Features secure user authentication, MongoDB integration, real-time messaging with Socket.io, file uploads, and a responsive Tailwind CSS interface.',
					techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'Socket.io', 'Tailwind'],
					liveUrl: '',
					githubUrl: 'https://github.com/frksarkar/twitter-clone',
					image: '/twitter-clone.png',
					features: ['Real-Time Messaging (Socket.io)', 'User Authentication (bcrypt)', 'File Uploads (Multer)', 'State Management (Zustand)'],
				},
				{
					id: 4,
					name: 'School Management API',
					path: '/school-api-banner.png',
					shortDescription: 'Robust REST API for School Administration',
					fullDescription:
						'A comprehensive backend REST API built with Node.js, Express, and MongoDB for managing school administration. Handles academic years, class levels, teachers, students, and exam results efficiently.',
					techStack: ['Node.js', 'Express', 'MongoDB', 'REST API', 'JWT'],
					liveUrl: '',
					githubUrl: 'https://github.com/frksarkar/School_REST_Api',
					image: '/school-api-banner.png',
					features: ['Extensive RESTful endpoints', 'MongoDB data modeling', 'JWT Authentication', 'Complete school domain management'],
				},
			],
		},
	],
};

const WorkSlider = ({ handleCardClick }) => {
	const [clickedId, setClickedId] = useState(null);

	const onProjectClick = (image) => {
		setClickedId(image.id);
		// Wait for animation to play before opening modal
		setTimeout(() => {
			handleCardClick(image);
			// Reset state shortly after modal opens so it's ready when closed
			setTimeout(() => setClickedId(null), 500);
		}, 600);
	};

	return (
		<Swiper
			spaceBetween={10}
			pagination={{
				clickable: true,
			}}
			modules={[Pagination]}
			className="h-[800px] sm:h-[480px]"
		>
			{workSlides.slides.map((slide, i) => (
				<SwiperSlide key={i}>
					<div className="grid grid-cols-1 sm:grid-cols-2 grid-rows-4 sm:grid-rows-2 gap-4">
						{slide.images.map((image, imageI) => (
							<React.Fragment key={imageI}>
								<div className="relative rounded-lg overflow-hidden flex items-center justify-center group w-full aspect-[4/3] sm:aspect-video" key={imageI}>
									<div className="relative overflow-hidden w-full h-full flex items-center justify-center group">
										{/* image */}
										<Image src={image.path} alt={image.name} width={500} height={300} className="object-cover w-full h-full" />

										{/* overlay gradient */}
										<div
											className="absolute inset-0 bg-gradient-to-l from-transparent via-[#0ea5e9]/80 to-[#082f49] dark:from-transparent dark:via-[#e838cc]/80 dark:to-[#4a22bd] opacity-0 group-hover:opacity-100 transition-all duration-300"
											aria-hidden
										/>

										{/* name */}
										<div
											className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${clickedId === image.id ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}
										>
											<button
												onClick={() => onProjectClick(image)}
												className={`flex items-center gap-x-2 text-[14px] md:text-[16px] tracking-[0.2em] font-bold transition-all duration-300 transform 
													${
														clickedId === image.id
															? 'bg-white text-sky-600 dark:text-red-500 px-8 py-3 rounded-full translate-y-0 scale-95 shadow-lg shadow-white/20'
															: 'text-white bg-black/20 dark:bg-black/30 px-6 py-3 rounded-full hover:bg-black/50 translate-y-8 group-hover:translate-y-0'
													}`}
											>
												{clickedId === image.id ? (
													<>
														<Loader2 className="w-5 h-5 animate-spin" />
														<span className="animate-in fade-in zoom-in duration-300">OPENING...</span>
													</>
												) : (
													<>
														{/* name part 1 */}
														<div className="delay-100">VIEW</div>
														{/* name part 2 */}
														<div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">PROJECT</div>
														{/* icon */}
														<div className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200">
															<BsArrowRight aria-hidden />
														</div>
													</>
												)}
											</button>
										</div>
									</div>
								</div>
							</React.Fragment>
						))}
					</div>
				</SwiperSlide>
			))}
		</Swiper>
	);
};

export default WorkSlider;
