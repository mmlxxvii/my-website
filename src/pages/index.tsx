import { useState, useEffect } from "react"

import styles from "@/styles/main.module.css"

import { BgGradient, BoxShadow, StatusColors } from "@/styles-enums"
import { GitHubAPI } from "@/@types/github-api"
import { BotAPI } from "@/@types/bot-api"
import { ping } from "@/scripts/ping-bot"
import { getGithub } from "@/scripts/get-github"
import { fetchBotApi } from "@/scripts/get-discord"
import { socialMedias } from "@/db"

import SocialIcon from "@/components/SocialIcon"
import Verified from "@/components/Verified"
import Card from "@/components/Card"

export default function Home() {
  const [projects, setProjects] = useState<Array<GitHubAPI> | null>(null);
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

  useEffect(() => {
    (async () => {
      const res = await getGithub()

      if (!res) {
        return
      }

      setProjects(res)

    })()
  }, [])

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
        bg = { background: BgGradient.offline }

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
          {socialMedias.map((e, index) => (
            <SocialIcon alt={e.name} imageSrc={e.imageUrl} url={e.link} key={index} />
          ))}
        </div>
      </div>
      <div style={{ backgroundColor: "black", paddingBlockEnd: 30 }}>
        <div className={styles.margin}>
          <h2 style={{ color: "white", marginBlock: 20 }}>latest projects</h2>
          {projects && projects.map((e, index) => (
            <Card name={e.name} url={e.url} updatedAt={e.updatedAt} key={index} />
          ))}
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
                {socialMedias.map((e, index) => {
                  return e.name !== "email" ? <a href={e.link} key={index} >{e.name}</a> : null
                })}
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