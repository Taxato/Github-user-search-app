import { Octokit } from "@octokit/rest";

const octokit = new Octokit();

export async function getUser(username) {
	try {
		const res = await octokit.request("GET /users/{username}", {
			username,
			headers: {
				"X-GitHub-Api-Version": "2022-11-28",
			},
		});

		const { data } = res;
		return data;
	} catch {
		return null;
	}
}
