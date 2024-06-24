import React from 'react'
import styles from "@/app/styles/teamDash.module.css"

const Team = () => {
  return (
    <>
    <div className={styles.team}>OUR TEAM</div>
    <div className={styles.container}>
        <div className={styles.item1}>
            <div className={styles.photoItem1}></div>
            <div className={styles.detailItem1}>
                <div className={styles.dataItem1}>Chandrabhushan Kuamr<br/>3rd Year</div>
                <div className={styles.linksItem1}>
                    <div className={styles.icons}><a href='#' className={styles.icon}><img src='../icon-insta.svg' ></img></a>
                    </div>
                    <div className={styles.icons}><a href='#' className={styles.icon}><img src='../icon-x.svg'></img></a>
                    </div>
                    <div className={styles.icons}><a href='#' className={styles.icon}><img src='../icon-linked-in.svg'></img></a>
                    </div>
                    <div className={styles.icons}><a href='#' className={styles.icon}><img src='../icon-mail.svg'></img></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Team