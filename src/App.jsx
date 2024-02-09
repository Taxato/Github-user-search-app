import { useEffect, useState } from "react";

import { getUser } from "./githubApi";

import Header from "./components/Header";
import Search from "./components/Search";
import User from "./components/User";

export default function App() {
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
		<div className="m-auto flex w-[730px] flex-col gap-4">
			<Header />
			<Search onSearch={handleSearch} error={error} />

			<User user={user} />
		</div>
	);
}
