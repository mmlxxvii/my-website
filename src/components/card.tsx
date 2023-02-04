import styles from "@/styles/card.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons"
import { GitHubAPI } from "@/@types/github-api"

export default function Card({ updatedAt, url, name }: GitHubAPI) {
    const formatDate = (d: string): string => {
        // bruh.... i shoud've used 'date'... anyway >:333
        let date: string[] = d.split("T")[0].split("-")
        let newDate: string = ""

        for (let i = date.length - 1; i >= 0; i--) {
            newDate += `${date[i]}/`
        }

        return newDate.substring(0, newDate.length - 1)
    }
    const updated = formatDate(updatedAt)

    return (
        <div className={styles.container}>
            <div>
                <p className={styles.updatedAt}>updated at {updated}</p>
                <p className={styles.title}>{name}</p>
            </div>
            <a className={styles.arrow} href={url} target={"_blank"}>
                <FontAwesomeIcon
                    color="white"
                    icon={faArrowUpRightFromSquare}
                />
            </a>
        </div>
    )
}