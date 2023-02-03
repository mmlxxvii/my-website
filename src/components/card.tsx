import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons"
import styles from "@/styles/card.module.css"

export default function Card() {
    return (
        <div className={styles.container}>
            <div>
                <p className={styles.updatedAt}>updated at 22/10/2022</p>
                <p className={styles.title}>burn-my-reddit-account</p>
            </div>
            <div  className={styles.arrow}>
                <FontAwesomeIcon
                    color="white"
                    icon={faArrowUpRightFromSquare}
                />
            </div>
        </div>
    )
}