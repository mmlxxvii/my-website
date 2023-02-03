import styles from "@/styles/socialIcon.module.css"
import Image from "next/image"

type Props = {
    alt: string,
    url: string,
    imageSrc: string
}

export default function SocialIcon({ alt, url, imageSrc }: Props) {
    return (
        <a href={url} target="_blank">
            <Image alt={alt} src={imageSrc} height={1} width={1} color="white" className={styles.socialIcon} />
        </a>
    )
}