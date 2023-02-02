import styles from "@/styles/socialIcon.module.css"

type Props = {
    alt: string,
    url: string,
    imageSrc: string
}

export default function SocialIcon({ alt, url, imageSrc }: Props) {
    return (
        <a href={`${url}`} target="_blank">
            <img alt={alt} src={imageSrc} height={50} width={50} className={styles.socialIcon} />
        </a>
    )
}