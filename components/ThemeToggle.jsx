import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { BsSun, BsMoon } from 'react-icons/bs';

const ThemeToggle = () => {
	const [mounted, setMounted] = useState(false);
	const { theme, setTheme } = useTheme();

	// useEffect only runs on the client, so now we can safely show the UI
	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return null;
	}

	return (
		<button
			onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
			className="p-2 rounded-full bg-primary/20 hover:bg-primary/40 dark:bg-accent/20 dark:hover:bg-accent/40 transition-all duration-300"
			aria-label="Toggle Dark Mode"
		>
			{theme === 'dark' ? <BsSun className="text-xl text-yellow-400" /> : <BsMoon className="text-xl text-gray-800" />}
		</button>
	);
};

export default ThemeToggle;
