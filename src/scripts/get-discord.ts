import { BotAPI } from  "@/@types/bot-api"

const getDiscord = async (): Promise<BotAPI | null> => {
    try {
        const url: string   = "http://localhost:1337/api/me"
        const res: Response = await fetch(url)
        const data = await res.json()

        return data

    } catch (error) {
        console.log(error)
        return null
    }
}

export { getDiscord }