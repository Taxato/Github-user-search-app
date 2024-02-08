import { useState } from "react";

export default function Search() {
	const [query, setQuery] = useState("");

	function handleSearch(e) {
		e.preventDefault();

		// const res = fetch("https://www.github.com", { headers: "" });
	}

	return (
		<form className="flex h-16 w-full justify-between rounded-2xl bg-background-secondary p-2 drop-shadow-xl dark:bg-background-secondary-dark">
			<img
				className=" mx-4 self-center"
				src="./src/assets/icon-search.svg"
			/>
			<input
				className="m-2 flex-grow bg-background-secondary text-lg text-text-secondary outline-none placeholder:text-text-secondary dark:bg-background-secondary-dark dark:text-white dark:placeholder:text-white"
				type="text"
				name="search"
				placeholder="Search GitHub username..."
				value={query}
				onChange={e => setQuery(e.target.value)}
			/>

			<button
				className="mx-1 self-center rounded-lg bg-primary px-4 py-3 text-white"
				onClick={handleSearch}
			>
				Search
			</button>
		</form>
	);
}
