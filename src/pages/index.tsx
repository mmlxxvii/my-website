import styles from "../styles/main.module.css"

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.menuContainer}>
        <div className={styles.menuContent}>
          <div className={styles.nav}>
            <a className={styles.link} href="/">/blog</a>
            <a className={styles.link} href="/">/store</a>
          </div>
          <a className={styles.logo}>mmlxxvii</a>
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
            <div className={styles.progressBar} />
          </div>
        </div>
        {/* <p className={styles.activityTitle}>Poor Man's Poison</p> */}
      </div>
      <div className={styles.footer}>
        <div className={styles.footerWrapper}>
          {/* <div className={styles.footerLinks}>
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
          </div> */}
          <div className={styles.status}>
            <span>bot status</span>
            <div className={styles.statusCircle} />
          </div>
        </div>
      </div>
    </div>
  )
}