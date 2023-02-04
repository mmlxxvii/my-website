import { GitHubAPI } from "@/@types/github-api"


const getGithub = async (): Promise<Array<GitHubAPI> | null> => {
    const url = "https://api.github.com/users/MMLXXVII/repos?sort=updated&direction=desc"
    const res = await fetch(url)
    const data = await res.json()
    const repos: Array<GitHubAPI> = []

    if (!res) {
        return null
    }

    const l = data.length < 5 ? data.length : 5

    for (let i = 0; i < l; i++) {
        repos.push(
            {
                name: data[i].name,
                url: data[i].html_url,
                updatedAt: data[i].updated_at
            }
        )
    }

    return repos
}

export { getGithub }