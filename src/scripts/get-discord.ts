import { BotAPI } from "@/@types/bot-api"

const getDiscord = async (): Promise<BotAPI | null> => {
    try {
        const url: string = "https://api.mmlxxvii.com"
        const res: Response = await fetch(url)
        const data = await res.json()

        return data

    } catch (error) {
        console.log(error)
        return null
    }
}

export { getDiscord }