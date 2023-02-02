const ping = async (): Promise<any> => {
    try {
        const url: string = "http://localhost:1337"
        const res: Response = await fetch(url)
        const data = await res.json()

        return data

    } catch (error) {
        console.log(error)
        return null

    }
}

export { ping }