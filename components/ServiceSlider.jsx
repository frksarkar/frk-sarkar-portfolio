import { Layout, MonitorSmartphone, Code2, Database, Rocket } from 'lucide-react';
import { FreeMode, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ArrowUpRight } from 'lucide-react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

const serviceData = [
	{
		Icon: Layout,
		title: 'UI/UX & Frontend',
		description: 'Responsive, pixel-perfect interfaces built with React, TypeScript and Tailwind CSS.',
	},
	{
		Icon: MonitorSmartphone,
		title: 'Next.js Applications',
		description: 'Building dynamic, SEO-friendly, and blazing-fast web apps using Next.js 14.',
	},
	{
		Icon: Code2,
		title: 'API Development',
		description: 'Creating secure, well-documented, and scalable REST APIs using Node.js & Express.',
	},
	{
		Icon: Database,
		title: 'Backend Systems',
		description: 'Designing robust database architectures utilizing MongoDB and PostgreSQL.',
	},
	{
		Icon: Rocket,
		title: 'Full-Stack Delivery',
		description: 'End-to-end web deployment from concept to production-ready scalable architecture.',
	},
];

const ServiceSlider = () => {
	return (
		<Swiper
			breakpoints={{
				320: {
					slidesPerView: 1,
					spaceBetween: 15,
				},
				640: {
					slidesPerView: 2,
					spaceBetween: 15,
				},
				1024: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
			}}
			pagination={{
				clickable: true,
			}}
			modules={[FreeMode, Pagination]}
			freeMode
			className="h-[340px] sm:h-[380px]"
		>
			{serviceData.map((item, i) => (
				<SwiperSlide key={i} className="pt-4 pb-12">
					<div className="relative h-full bg-[#082f49]/40 dark:bg-black/40 backdrop-blur-sm border border-white/5 hover:border-sky-500/30 dark:hover:border-red-500/30 rounded-2xl p-6 sm:p-8 flex flex-col gap-y-4 group cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(14,165,233,0.15)] dark:hover:shadow-[0_10px_30px_rgba(239,68,68,0.15)] overflow-hidden">
						{/* Ambient Hover Glow */}
						<div className="absolute -inset-full bg-gradient-to-tr from-transparent via-white/5 to-transparent group-hover:animate-[shimmer_1.5s_infinite] pointer-events-none" />

						{/* Top section: Icon and Arrow */}
						<div className="flex justify-between items-start mb-2">
							<div className="p-3 bg-sky-500/10 dark:bg-red-500/10 rounded-xl text-sky-400 dark:text-red-400 group-hover:scale-110 transition-transform duration-300">
								<item.Icon className="w-8 h-8" strokeWidth={1.5} />
							</div>

							<div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center -translate-y-2 translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300 group-hover:bg-sky-500/20 dark:group-hover:bg-red-500/20">
								<ArrowUpRight className="w-5 h-5 text-sky-400 dark:text-red-400 group-hover:rotate-45 transition-transform duration-300" />
							</div>
						</div>

						{/* Bottom section: Title & Description */}
						<div className="flex flex-col mt-auto">
							<h3 className="text-xl font-bold text-white mb-3 group-hover:text-sky-300 dark:group-hover:text-red-300 transition-colors duration-300">
								{item.title}
							</h3>
							<p className="text-sm leading-relaxed text-gray-400 group-hover:text-gray-300 transition-colors duration-300">{item.description}</p>
						</div>

						{/* Animated bottom border */}
						<div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-sky-400 to-blue-500 dark:from-red-500 dark:to-orange-500 group-hover:w-full transition-all duration-500" />
					</div>
				</SwiperSlide>
			))}
		</Swiper>
	);
};

export default ServiceSlider;
