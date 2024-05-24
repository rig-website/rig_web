import styles from "@/app/styles/landing.module.css"
import Image from "next/image"

export const Landing = () => {
  return (
    <> 
    <div className={styles.landing}>
    <div className={styles.box}></div>
    <div className={styles.hero}>
        <div className={styles.img}>
        <Image src="/landing.jpg" layout='fill'  />
        </div>
        
      <div className={styles.right}>
          <div className={styles.text}>latest news....
          <hr></hr>
          </div>
          
      </div>
    </div>
      
    
  </div>
  </>
  )
}
export default Landing
