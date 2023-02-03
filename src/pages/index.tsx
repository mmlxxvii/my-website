import { useState, useEffect } from "react"

import styles from "@/styles/main.module.css"

import { BotAPI } from "@/@types/bot-api"
import { ping } from "@/scripts/ping-bot"
import { fetchBotApi } from "@/scripts/get-data"

import defaultAvatar from "@/assets/black.jpg"
import Verified from "@/components/verified"
import SocialIcon from "@/components/SocialIcon"
import Card from "@/components/card"

enum StatusColors {
  offline = "rgb(66, 66, 66)",
  online = "rgb(0, 255, 64)",
  idle = "rgb(255, 145, 0)",
  dnd = "rgb(255, 0, 43)",
}

enum BgGradient {
  offline = "radial-gradient(rgba(255, 255, 255, 0.034), rgb(0, 0, 0))",
  online = "radial-gradient(rgba(0, 255, 64, 0.034), rgb(0, 0, 0))",
  idle = "radial-gradient(rgba(255, 145, 0, 0.034), rgb(0, 0, 0))",
  dnd = "radial-gradient(rgba(255, 0, 13, 0.034), rgb(0, 0, 0))",
}

enum BoxShadow {
  offline = "0px 0px 20px rgba(167, 167, 167, 0.151)",
  online = "0px 0px 20px rgba(0, 255, 64, 0.301)",
  idle = "0px 0px 20px rgba(255, 145, 0, 0.151)",
  dnd = "0px 0px 20px rgba(255, 0, 13, 0.151)"
}

export default function Home() {
  const [isBotOnline, setIsBotOnline] = useState<boolean>(false)
  const [avatarBorder, setAvatarBorder] = useState(
    {
      backgroundColor: StatusColors.offline,
      boxShadow: BoxShadow.offline
    }
  )
  const [avatarImage, setAvatarImage] = useState(
    {
      backgroundSize: "cover",
      backgroundImage: `radial-gradient(rgb(0, 0, 0), rgb(0, 0, 0))`,
    }
  )
  const [backgroundGradient, setBackgroundGradient] = useState({ background: BgGradient.offline })
  const socialMedias = [
    {
      name: "github",
      link: "https://github.com/MMLXXVII",
      imageUrl: require("@/assets/github.svg"),
    },
    {
      name: "discord",
      link: "https://github.com/MMLXXVII",
      imageUrl: require("@/assets/discord.svg"),
    },
    {
      name: "linkedin",
      link: "https://github.com/MMLXXVII",
      imageUrl: require("@/assets/linkedin.svg"),
    },
    {
      name: "email",
      link: "https://github.com/MMLXXVII",
      imageUrl: require("@/assets/envelope-solid.svg"),
    }
  ]

  useEffect(() => {
    (async () => {
      const res: BotAPI | null = await fetchBotApi()
      let bg
      let avtrBrdr

      if (res === null) {
        return
      }

      if (res?.status === "online") {
        avtrBrdr = {
          backgroundColor: StatusColors.online,
          boxShadow: BoxShadow.online
        }
        bg = { background: BgGradient.online }

      } else if (res?.status === "dnd") {
        avtrBrdr = {
          backgroundColor: StatusColors.dnd,
          boxShadow: BoxShadow.dnd
        }
        bg = { background: BgGradient.dnd }

      } else if (res?.status === "idle") {
        avtrBrdr = {
          backgroundColor: StatusColors.idle,
          boxShadow: BoxShadow.idle
        }
        bg = { background: BgGradient.idle }

      } else {
        avtrBrdr = {
          backgroundColor: StatusColors.offline,
          boxShadow: BoxShadow.offline
        }
        bg = { background: BgGradient.online }

      }

      setBackgroundGradient(bg)
      setAvatarBorder(avtrBrdr)
      setAvatarImage(
        {
          backgroundSize: "contain",
          backgroundImage: `url(${res.avatarUrl})`,
        }
      )

    })()
  }, [])

  useEffect(() => {
    (async () => {
      const res = await ping()
      setIsBotOnline(res !== null)

    })()
  }, [])

  return (
    <div className={styles.container}>
      <div className={styles.navContainer}>
        <div className={styles.navContent}>
          <a className={styles.title}>mmlxxvii</a>
          <Verified />
          <Verified />
        </div>
      </div>
      <div className={`${styles.content} ${styles.alignCenter}`} style={backgroundGradient}>
        <div className={`${styles.avatarBorder} ${styles.alignCenter}`} style={avatarBorder}>
          <div className={styles.avatar} style={avatarImage} />
        </div>
        <div className={`${styles.socialIconsContainer} ${styles.alignCenter}`}>
          {
            socialMedias && socialMedias.map((e) => (
              <SocialIcon alt={e.name} imageSrc={e.imageUrl} url={e.link} />
            ))
          }
        </div>
      </div>
      <div style={{ backgroundColor: "black", paddingBlockEnd: 30 }}>
        <div className={styles.margin}>
          <h2 style={{ color: "white", marginBlock: 20 }}>latest projects</h2>
          <Card />
          <Card />
          <Card />
        </div>
      </div>
      <div className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerLinks}>
            <div>
              <p className={styles.smallTitle}>site</p>
              <div className={styles.social}>
                <a href="/">blog</a>
                <a href="/">store</a>
              </div>
            </div>
            <div>
              <p className={styles.smallTitle}>social</p>
              <div className={styles.social}>
                <a href="/">github</a>
                <a href="/">twitter</a>
                <a href="/">discord</a>
                <a href="/">linkedin</a>
              </div>
            </div>
          </div>
          <div className={styles.status}>
            <span>bot status</span>
            <div className={`${styles.botStatus} ${isBotOnline ? styles.statusOnline : styles.statusOffline}`} />
          </div>
        </div>
        <div className={`${styles.createdBy} ${styles.alignCenter}`}>
          <span>at least i tried</span>
        </div>
      </div>
    </div>
  )
}