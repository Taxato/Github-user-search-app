import { useEffect } from "react";
import { useState } from "react";

export default function ThemeToggle() {
	const [darkMode, setDarkMode] = useState(
		() => localStorage.getItem("darkMode") === "true",
	);

	useEffect(() => {
		document.documentElement.classList.toggle("dark", darkMode);
		localStorage.setItem("darkMode", darkMode);
	}, [darkMode]);

	return (
		<button
			onClick={() => setDarkMode(prevMode => !prevMode)}
			className="flex content-center gap-2 align-middle text-secondary dark:text-text-primary-dark"
		>
			<span className="self-center font-bold tracking-widest">
				{darkMode ? "LIGHT" : "DARK"}
			</span>

			<img
				className="self-center"
				src={`./src/assets/icon-${darkMode ? "sun" : "moon"}.svg`}
			/>
		</button>
	);
}
