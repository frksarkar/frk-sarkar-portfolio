import { RxPencil2, RxDesktop, RxReader, RxArrowTopRight, RxLayout, RxBoxModel } from 'react-icons/rx';
import { FreeMode, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

const serviceData = [
	{
		Icon: RxLayout,
		title: 'Frontend Development',
		description: 'Responsive, pixel-perfect UI built with React, TypeScript and Tailwind CSS',
	},
	{
		Icon: RxDesktop,
		title: 'React & Next.js Applications',
		description: 'Building dynamic and interactive web applications using React, Next.js',
	},
	{
		Icon: RxPencil2,
		title: 'Backend & API Development',
		description: 'Creating secure and scalable REST APIs using Node.js, Express, and MongoDB ',
	},
	{
		Icon: RxReader,
		title: 'Backend Development',
		description: 'Scalable backend systems built with Node.js and Express.js and MongoDB database',
	},
	{
		Icon: RxBoxModel,
		title: 'Full-Stack Project Development',
		description: 'End-to-end web apps from concept to deployment using React, Next.js, Node.js',
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
					slidesPerView: 3,
					spaceBetween: 15,
				},
			}}
			pagination={{
				clickable: true,
			}}
			modules={[FreeMode, Pagination]}
			freeMode
			className="h-[240px] sm:h-[340px]"
		>
			{serviceData.map((item, i) => (
				<SwiperSlide key={i}>
					<div className="bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300">
						{/* icon */}
						<div className="text-4xl text-accent mb-4">
							<item.Icon aria-hidden />
						</div>

						{/* title & description */}
						<div className="mb-8">
							<div className="mb-2 text-lg">{item.title}</div>
							<p className="max-w-[350px] leading-normal">{item.description}</p>
						</div>

						{/* arrow */}
						<div className="text-3xl">
							<RxArrowTopRight className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300" aria-hidden />
						</div>
					</div>
				</SwiperSlide>
			))}
		</Swiper>
	);
};

export default ServiceSlider;
