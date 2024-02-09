export default function User({ user }) {
	if (!user) return null;

	const {
		avatar_url: img,
		followers,
		following,
		bio,
		blog,
		company,
		location,
		name,
		login,
		public_repos: repos,
		twitter_username: twitter,
		created_at,
	} = user;

	const joinedAt = Intl.DateTimeFormat("en-uk", {
		dateStyle: "medium",
	}).format(new Date(created_at));

	return (
		<section className="flex w-full justify-between gap-8 rounded-2xl bg-background-secondary p-6 drop-shadow-xl dark:bg-background-secondary-dark">
			<img className="h-28 w-28 rounded-full" src={img} alt="avatar" />

			<div className="flex grow flex-col gap-10">
				<div className="flex grow flex-col gap-2">
					<div className="flex justify-between">
						<div className="flex flex-col gap-1">
							<h2 className="text-2xl font-bold text-text-primary dark:text-white">
								{name || login}
							</h2>
							<h3 className="text-primary">@{login}</h3>
						</div>
						<p className="text-text-secondary dark:text-white">
							Joined {joinedAt}
						</p>
					</div>
					<p
						className={`max-w-[32rem] break-words text-text-secondary dark:text-white ${bio ? "" : "opacity-75"}`}
					>
						{bio || "This profile has no bio"}
					</p>
				</div>

				<div className="mr-6 flex gap-24 rounded-lg bg-background px-6 py-4 dark:bg-background-secondary-dark">
					<div className="flex flex-col">
						<span className="text-xs text-text-secondary dark:text-white">
							Repos
						</span>
						<span className="text-xl font-bold text-text-primary dark:text-white">
							{repos}
						</span>
					</div>
					<div className="flex flex-col">
						<span className="text-xs text-text-secondary dark:text-white">
							Followers
						</span>
						<span className="text-xl font-bold text-text-primary dark:text-white">
							{followers}
						</span>
					</div>
					<div className="flex flex-col">
						<span className="text-xs text-text-secondary dark:text-white">
							Following
						</span>
						<span className="text-xl font-bold text-text-primary dark:text-white">
							{following}
						</span>
					</div>
				</div>

				<ul className="grid grid-cols-2 gap-x-8 gap-y-4 text-text-secondary dark:text-white">
					<li className="flex gap-4">
						<img
							className="h-full"
							src="./src/assets/icon-location.svg"
						/>
						<p className={`${location ? "" : "opacity-50"}`}>
							{location || "Not available"}
						</p>
					</li>
					<li className="flex gap-4">
						<img
							className="h-full"
							src="./src/assets/icon-twitter.svg"
						/>
						<p className={`${twitter ? "" : "opacity-50"}`}>
							{twitter || "Not available"}
						</p>
					</li>
					<li className="flex gap-4">
						<img
							className="h-full"
							src="./src/assets/icon-website.svg"
						/>

						{blog ? (
							<a
								className="overflow-hidden text-nowrap hover:underline"
								href={`//${blog}`}
							>
								{blog}
							</a>
						) : (
							<p className="opacity-50">Not available</p>
						)}
					</li>
					<li className="flex gap-4">
						<img
							className="h-full"
							src="./src/assets/icon-company.svg"
						/>
						<p className={`${company ? "" : "opacity-50"}`}>
							{company || "Not available"}
						</p>
					</li>
				</ul>
			</div>
		</section>
	);
}
