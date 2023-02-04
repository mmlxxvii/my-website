import verifiedIcon from "@/assets/Verified_icon.svg"
import Image from "next/image"

export default function Verified(){
    return (
        <Image src={verifiedIcon} height={15} width={15} alt="icon" title="very important person" style={{marginLeft: 2}}/>
    )
}