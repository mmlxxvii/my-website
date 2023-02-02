import styles from "@/styles/card.module.css"

export default function Card() {
    return (
        <div className={styles.container}>
            <div>
                <p className={styles.updatedAt}>updated at 22/10/2022</p>
                <p className={styles.title}>burn-my-reddit-account</p>
            </div>
            <div>
                <p className={styles.arrow}>arrow</p>
            </div>
        </div>
    )
}