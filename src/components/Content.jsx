import { useEffect, useState } from "react";

import { getUser } from "../githubApi";

import Header from "./Header";
import Search from "./Search";
import User from "./User";

export default function Content() {
	const [user, setUser] = useState(null);
	const [error, setError] = useState("");

	useEffect(() => {
		(async () => {
			const defaultUser = await getUser("taxato");
			setUser(defaultUser);
		})();
	}, []);

	async function handleSearch(query) {
		const user = await getUser(query);

		// ERROR
		if (user === null) {
			setError("No results");
		} else {
			setUser(user);
			setError("");
		}
	}

	return (
		<div className="mx-4 flex flex-col gap-4 md:w-[min(80%,730px)]">
			<Header />
			<Search onSearch={handleSearch} error={error} />
			<User user={user} />
		</div>
	);
}
