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
					name: 'E-Commerce Dashboard',
					path: '/thumb1.jpg',
					shortDescription: 'Modern analytics dashboard with real-time data visualization',
					fullDescription:
						'A comprehensive e-commerce analytics dashboard built with Next.js 14. It features real-time sales tracking, inventory management, customer analytics, and automated reporting. The dashboard uses WebSocket connections for live updates and includes role-based access control for team members.',
					techStack: ['Next.js', 'TypeScript', 'Tailwind', 'PostgreSQL', 'Prisma'],
					liveUrl: 'https://dashboard-demo.vercel.app',
					githubUrl: 'https://github.com/frksarkar/Elite-Store',
					image: '/projects/dashboard.jpg',
					features: ['Real-time analytics with WebSocket', 'Dark/Light mode toggle', 'Responsive data tables', 'Export to PDF/Excel', 'Role-based authentication'],
				},
				{
					id: 2,
					name: 'Task Management App',
					path: '/thumb2.jpg',
					shortDescription: 'Collaborative task manager with drag-and-drop interface',
					fullDescription:
						'A Trello-like task management application featuring drag-and-drop kanban boards, real-time collaboration, and team workspaces. Built with modern React patterns and includes features like due date tracking, file attachments, and activity logs.',
					techStack: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'Docker'],
					liveUrl: 'https://taskapp-demo.vercel.app',
					githubUrl: 'https://github.com/frksarkar/Task-Manager',
					features: ['Drag-and-drop kanban boards', 'Real-time collaboration', 'Team workspaces', 'File attachments', 'Activity tracking'],
				},
				{
					id: 3,
					name: 'AI Image Generator',
					path: '/thumb3.jpg',
					shortDescription: 'Generate images using Stable Diffusion API',
					fullDescription:
						'An AI-powered image generation platform that leverages Stable Diffusion models. Users can create custom images from text prompts, save their favorites, and download high-resolution outputs. Includes a gallery system and prompt history.',
					techStack: ['Next.js', 'Python', 'FastAPI', 'AWS', 'PostgreSQL'],
					liveUrl: 'https://ai-image-gen.vercel.app',
					githubUrl: 'https://github.com/frksarkar/AI-Image-Generator',
					features: ['Text-to-image generation', 'Prompt history & favorites', 'High-res downloads', 'Gallery management', 'API rate limiting'],
				},
				{
					id: 4,
					name: 'E-Commerce Dashboard',
					path: '/thumb4.jpg',
					shortDescription: 'Modern analytics dashboard with real-time data visualization',
					fullDescription:
						'powerful analytics dashboard with real-time data visualization and real-time analytics with WebSocket connections for live updates and includes role-based access control for team members.',
					techStack: ['Next.js', 'TypeScript', 'Tailwind', 'PostgreSQL', 'Prisma'],
					liveUrl: 'https://dashboard-demo.vercel.app',
					githubUrl: 'https://github.com/frksarkar/Elite-Store',
					image: '/projects/dashboard.jpg',
					features: ['Real-time analytics with WebSocket', 'Dark/Light mode toggle', 'Responsive data tables', 'Export to PDF/Excel', 'Role-based authentication'],
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
			className="h-[560px] sm:h-[480px]"
		>
			{workSlides.slides.map((slide, i) => (
				<SwiperSlide key={i}>
					<div className="grid grid-cols-1 sm:grid-cols-2 grid-rows-4 sm:grid-rows-2 gap-4">
						{slide.images.map((image, imageI) => (
							<React.Fragment key={imageI}>
								<div className="relative rounded-lg overflow-hidden flex items-center justify-center group" key={imageI}>
									<div className="flex items-center justify-center relative overflow-hidden group">
										{/* image */}
										<Image src={image.path} alt={image.name} width={500} height={300} />

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
