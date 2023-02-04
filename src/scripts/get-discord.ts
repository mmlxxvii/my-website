import { BotAPI } from "@/@types/bot-api"

const getDiscord = async (): Promise<BotAPI | null> => {
    try {
        const res: Response = await fetch("http://localhost:1337/api/me")
        const data = await res.json()

        return data

    } catch (error) {
        console.log(error)
        return null
    }
}

export { getDiscord }