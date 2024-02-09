import { useState } from "react";

export default function Search({ onSearch, error }) {
	const [query, setQuery] = useState("");

	function handleSearch(e) {
		e.preventDefault();

		onSearch(query);
	}

	return (
		<form className="flex h-16 w-full items-center justify-between rounded-2xl bg-background-secondary p-2 drop-shadow-xl dark:bg-background-secondary-dark">
			<img className=" mx-4" src="./src/assets/icon-search.svg" />
			<input
				className="m-2 flex-grow bg-background-secondary text-lg text-text-primary outline-none placeholder:text-text-secondary dark:bg-background-secondary-dark dark:text-white dark:placeholder:text-white"
				type="text"
				name="search"
				placeholder="Search GitHub username..."
				value={query}
				onChange={e => setQuery(e.target.value)}
			/>

			{error && (
				<p className="text-error float-end mr-4 font-bold">{error}</p>
			)}

			<button
				className="mx-1 rounded-lg bg-primary px-4 py-2 text-white hover:bg-[#60ABFF] focus:bg-[#60ABFF]"
				onClick={handleSearch}
			>
				Search
			</button>
		</form>
	);
}
