import styles from "@/styles/socialIcon.module.css"
import Image from "next/image"

type Props = {
    alt: string,
    url: string,
    imageSrc: string
}

export default function SocialIcon({ alt, url, imageSrc }: Props) {
    return (
        <a className={styles.socialIcon} href={url} target={"_blank"}>
            <Image alt={alt} src={imageSrc} height={30} width={30} title={alt}/>
        </a>
    )
}