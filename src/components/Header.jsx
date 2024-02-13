import ThemeToggle from "./ThemeToggle";

export default function Header() {
	return (
		<header className="mb-4 flex h-10 w-full content-center justify-between">
			<h2 className="self-center text-2xl font-bold text-text-primary dark:text-text-primary-dark">
				devfinder
			</h2>
			<ThemeToggle />
		</header>
	);
}
