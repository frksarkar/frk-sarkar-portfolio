import { useCallback } from 'react';
import { Particles } from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import { useTheme } from 'next-themes';

const ParticlesContainer = () => {
	const { resolvedTheme } = useTheme();

	// Use darker colors for light theme so particles are visible on white background
	const particleColor = resolvedTheme === 'light' ? '#0ea5e9' : '#e68e2e'; // Sky blue for light, Orange for dark
	const linkColor = resolvedTheme === 'light' ? '#38bdf8' : '#f5d393';

	// init
	const particlesInit = useCallback(async (engine: any) => {
		await loadFull(engine);
	}, []);

	const particlesLoaded = useCallback(async () => {}, []);

	return (
		<Particles
			className="w-full h-full absolute translate-z-0"
			id="tsparticles"
			init={particlesInit}
			loaded={particlesLoaded}
			options={{
				fullScreen: { enable: false },
				background: {
					color: {
						value: '',
					},
				},
				fpsLimit: 60,
				interactivity: {
					events: {
						onClick: {
							enable: false,
							mode: 'push',
						},
						onHover: {
							enable: true,
							mode: 'repulse',
						},
						resize: true,
					},
					modes: {
						push: {
							quantity: 90,
						},
						repulse: {
							distance: 200,
							duration: 0.4,
						},
					},
				},
				particles: {
					color: {
						value: particleColor,
					},
					links: {
						color: linkColor,
						distance: 150,
						enable: true,
						opacity: 0.5,
						width: 1,
					},
					collisions: {
						enable: true,
					},
					move: {
						direction: 'none',
						enable: true,
						outModes: {
							default: 'bounce',
						},
						random: false,
						speed: 1,
						straight: false,
					},
					number: {
						density: {
							enable: true,
							area: 1200,
						},
						value: 40,
					},
					opacity: {
						value: 0.5,
					},
					shape: {
						type: 'circle',
					},
					size: {
						value: {
							min: 1,
							max: 5,
						},
					},
				},
				detectRetina: true,
			}}
		/>
	);
};

export default ParticlesContainer;
