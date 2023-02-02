import { useState, useEffect } from "react"
import styles from "@/styles/main.module.css"
import { BotAPI } from "@/@types/bot-api"
import { ping } from "@/scripts/ping-bot"
import { fetchBotApi } from "@/scripts/get-data"

import Verified from "@/components/verified"
import SocialIcon from "@/components/SocialIcon"
import Card from "@/components/card"

export default function Home() {
  const [user, setUser] = useState<BotAPI | null>(null)
  const [isBotActive, setIsBotActive] = useState<boolean>(false)
  /* 
    useEffect(() => {
      (async () => {
        const res = await fetchBotApi()
        setUser(res)
      })()
    }, [])
  
    useEffect(() => {
      (async () => {
        const res = await ping()
        setIsBotActive(res == null)
      })()
    }, [])
  
    console.log(user)
    console.log(isBotActive) */

  return (
    <div className={styles.container}>
      <div className={styles.menuContainer}>
        <div className={styles.menuContent}>
          <div className={styles.nav}>
            {/*             <a className={styles.link} href="/">/blog</a>
            <a className={styles.link} href="/">/store</a> */}
          </div>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <a className={styles.logo}>mmlxxvii</a>
            <div style={{ maxWidth: "100px", maxHeight: "100px", overflow: "hidden", marginInline: "5px", display: "flex", alignContent: "center" }}>
              <Verified />
              <Verified />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.activity}>
          <div className={styles.profileBorder}>
            <div className={styles.profile} />
          </div>
          <div className={styles.userActivity}>
            <div className={styles.userActivityWrapper}>
              <div className={styles.songCover} />
              <div>
                <p className={styles.activityTitle}>listening</p>
                <p className={styles.activityName}>Feed the Machine</p>
                <p className={styles.activityTitle}>Poor Man's Poison</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.socialIconsWrapper}>
          <SocialIcon alt="github" url="www.google.com" imageSrc="https://avatars.githubusercontent.com/u/96957399?v=4" />
          <SocialIcon alt="github" url="www.google.com" imageSrc="https://avatars.githubusercontent.com/u/96957399?v=4" />
          <SocialIcon alt="github" url="www.google.com" imageSrc="https://avatars.githubusercontent.com/u/96957399?v=4" />
          <SocialIcon alt="github" url="www.google.com" imageSrc="https://avatars.githubusercontent.com/u/96957399?v=4" />
        </div>
      </div>
      <div style={{backgroundColor: "black", paddingBlock: 20}}>
        <div className={styles.margin}>
          <h2 style={{ color: "white", marginBlock: 20 }}>latest projects</h2>
          <div>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
      <div style={{backgroundColor: "#080808", paddingBlock: 20}}>
        <div className={styles.margin}>
          <h2 style={{ color: "white", marginBlock: 20 }}>send me death threats</h2>
          <form>
            <div style={{ display: "flex" }}>
              <div style={{ display: "flex", flexDirection: "column", flex: 1, marginRight: 10 }}>
                <span style={{ color: "white" }}>name</span>
                <input className={styles.input} />
              </div>
              <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
                <span style={{ color: "white" }}>email</span>
                <input className={styles.input} />
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", flex: 1, marginBlock: 20 }}>
              <span style={{ color: "white" }}>subject</span>
              <input className={styles.input} />
            </div>
            <div style={{ display: "flex", flexDirection: "column", marginBlock: 20 }}>
              <span className={styles.activityTitle}>message</span>
              <textarea className={styles.textArea} />
            </div>
          </form>
          <div className={styles.sendBtn}>
            <span>send</span>
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        <div className={styles.footerWrapper}>
          <div className={styles.footerLinks}>
            <div>
              <p className={styles.smallTitle}>site</p>
              <div className={styles.map}>
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
            <div className={styles.statusCircle} />
          </div>
        </div>
      </div>
    </div>
  )
}