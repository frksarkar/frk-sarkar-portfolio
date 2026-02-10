import Image from 'next/image';
import { BsArrowRight } from 'react-icons/bs';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

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
					githubUrl: 'https://github.com/username/dashboard',
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
					githubUrl: 'https://github.com/username/taskapp',
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
					githubUrl: 'https://github.com/username/ai-image-gen',
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
					githubUrl: 'https://github.com/username/dashboard',
					image: '/projects/dashboard.jpg',
					features: ['Real-time analytics with WebSocket', 'Dark/Light mode toggle', 'Responsive data tables', 'Export to PDF/Excel', 'Role-based authentication'],
				},
			],
		},
	],
};

const WorkSlider = ({ handleCardClick }) => {
	return (
		<Swiper
			spaceBetween={10}
			pagination={{
				clickable: true,
			}}
			modules={[Pagination]}
			className="h-[280px] sm:h-[480px]"
		>
			{workSlides.slides.map((slide, i) => (
				<SwiperSlide key={i}>
					<div className="grid grid-cols-2 grid-rows-2 gap-4">
						{slide.images.map((image, imageI) => (
							<>
								<div className="relative rounded-lg overflow-hidden flex items-center justify-center group" key={imageI}>
									<div className="flex items-center justify-center relative overflow-hidden group">
										{/* image */}
										<Image src={image.path} alt={image.name} width={500} height={300} />

										{/* overlay gradient */}
										<div
											className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"
											aria-hidden
										/>

										{/* name */}
										<div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300">
											<button onClick={() => handleCardClick(image)} className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]">
												{/* name part 1 */}
												<div className="delay-100">VIEW</div>
												{/* name part 2 */}
												<div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">PROJECT</div>
												{/* icon */}
												<div className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
													<BsArrowRight aria-hidden />
												</div>
											</button>
										</div>
									</div>
								</div>
							</>
						))}
					</div>
				</SwiperSlide>
			))}
		</Swiper>
	);
};

export default WorkSlider;
