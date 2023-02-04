import Image from "next/image"
import verifiedIcon from "@/assets/Verified_icon.svg"

export default function Verified() {
    return (
        <Image
            src={verifiedIcon}
            height={15} width={15}
            alt="icon"
            title="very important person"
            style={{ marginLeft: 2 }}
        />
    )
}