import { useState } from "react";

export default function Search({ onSearch, error }) {
	const [query, setQuery] = useState("");

	function handleSearch(e) {
		e.preventDefault();

		onSearch(query);
	}

	return (
		<form className="flex h-16 w-full items-center justify-between rounded-2xl bg-background-secondary p-2 drop-shadow-xl dark:bg-background-secondary-dark">
			<img className="mx-1 md:mx-4" src="./icon-search.svg" />
			<input
				className="m-2 grow bg-background-secondary text-sm text-text-primary outline-none placeholder:text-text-secondary dark:bg-background-secondary-dark dark:text-white dark:placeholder:text-white md:text-lg"
				type="text"
				name="search"
				placeholder="Search GitHub username..."
				value={query}
				onChange={e => setQuery(e.target.value)}
			/>

			{error && (
				<p className="float-end mr-4 font-bold text-error">{error}</p>
			)}

			<button
				className="rounded-xl bg-primary px-4 py-3 text-white hover:bg-[#60ABFF] focus:bg-[#60ABFF] md:mx-1 md:py-2"
				onClick={handleSearch}
			>
				Search
			</button>
		</form>
	);
}
