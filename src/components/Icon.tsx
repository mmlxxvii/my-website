import styles from "@/styles/icon.module.css"
import Image from "next/image"
import { IconProps } from "@/@types/icon-props"

export default function Icon({ alt, url, imageSrc }: IconProps) {
    return (
        <a className={styles.socialIcon} href={url} target={"_blank"}>
            <Image alt={alt} src={imageSrc} height={30} width={30} title={alt} />
        </a>
    )
}