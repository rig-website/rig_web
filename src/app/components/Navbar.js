import Image from "next/image"
import styles from "@/app/styles/navbar.module.css"
import Link from "next/link"

const Navbar = () => {
  return (
    <> <div className={styles.navbar}>
    <div className={styles.logo}>
        <Link href="/">
            <Image src="/nitc-logo-white-01.svg" width={200} height={150} />
        </Link>
    </div>
    <div className={styles.links}>
      <div className={styles.home}><Link href="/">home</Link></div>
      <div className={styles.about}><Link href="/About">about</Link></div>
      <div className={styles.projects}><Link href="/Projects">projects</Link></div>
      <div className={styles.achievements}><Link href="/Achievements">achievements</Link></div>
      <div className={styles.events}><Link href="/Events">events</Link></div>
      <div className={styles.team}><Link href="/Team">team</Link></div>
      <div className={styles.contacts}><Link href="/Contact">contacts</Link></div>
      <Link href="/login">
      <button className={styles.login}>
        <div className={styles.text}>login</div>
      </button>
      </Link>
    </div>
    <div className={styles.rig}>rig</div>
    <div className={styles.toggle}>
      <span></span>
      <span></span>
      <span></span>
    </div>
    
  </div>
  </>
  )
}

export default Navbar