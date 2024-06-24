"use client"
import Image from "next/image"
import styles from "@/app/styles/navbar.module.css"
import Link from "next/link"
import { useRouter } from "next/navigation"

const Navbar = () => {
  const router = useRouter();
  const handleOnclick = () =>{
    router.push('/login')
  }

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
      <div className={styles.projects}><Link href="/Projects">projects</Link></div>
      <div className={styles.achievements}><Link href="/Achievements">achievements</Link></div>
      <div className={styles.events}><Link href="/Events">events</Link></div>
      <div className={styles.team}><Link href="/team">team</Link></div>
      <div className={styles.contacts}><Link href="/Contact">contacts</Link></div>
      <button className={styles.login}>
        <div className={styles.text}
        onClick={handleOnclick}
        
        
        >login</div>
      </button>
    </div>
    <div className={styles.rig}>rig</div>
    </div>
  </>
  )
}


export default Navbar;