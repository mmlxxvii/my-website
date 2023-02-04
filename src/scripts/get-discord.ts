import { BotAPI } from "@/@types/bot-api"
import { endpoint } from "discord.config.json"

const getDiscord = async (): Promise<BotAPI | null> => {
    try {
        const res: Response = await fetch(endpoint)
        const data = await res.json()

        return data

    } catch (error) {
        console.log(error)
        return null
    }
}

export { getDiscord }