import { Octokit } from "@octokit/rest";

const octokit = new Octokit({
	auth: "",
});

const res = await octokit.request("GET /users/{username}", {
	username: "taxato",
	headers: {
		"X-GitHub-Api-Version": "2022-11-28",
	},
});

console.log(res);
