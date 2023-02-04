type BotAPI = {
    username: string,
    avatarUrl: string,
    status: string,
    activities: {
        name: string,
        details: string,
        state: string,
        image: string | null
    } | null
}

export { BotAPI }