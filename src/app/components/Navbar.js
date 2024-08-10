import Image from "next/image"
import styles from "@/app/styles/navbar.module.css"
import Link from "next/link"

const Navbar = () => {
  return (
    <> <div className={styles.navbar}>
    <div className={styles.logo}>
        <Link href="/">
            <Image src="/nitc-logo-white-02.svg" width={280} height={150} />
        </Link>
    </div>

    <div className={styles.links}>
      <div className={styles.home}><Link href="/">home</Link></div>
      <div className={styles.about}><Link href="/About">about</Link></div>
      <div className={styles.projects}><Link href="/projects">projects</Link></div>
      <div className={styles.achievements}><Link href="/achievements">achievements</Link></div>
      <div className={styles.events}><Link href="/events">events</Link></div>
      <div className={styles.team}><Link href="/team">team</Link></div>
      <div className={styles.contacts}><Link href="/contact">contacts</Link></div>

    </div>
    <div className={styles.rig}><Link href="/">RIG</Link></div>
    
  </div>
  <div className={styles.box}></div>
  </>
  )
}

export default Navbar