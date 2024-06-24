import React from 'react'
import styles from '../styles/cards.module.css'



const Card = () => {
  return (
    <>
    <div className={styles.member}>
          <div ><img className={styles.photo} src='../CB.png'></img></div>
          <div className={styles.details}>
            <div className={styles.inData}>
            <p className={styles.name}>Chandrabhushan Kumar</p>
            <p className={styles.position}>Designer</p>
            <p className={styles.mobileNo}>+91 9876543210</p>
            </div>
            <div className={styles.icons}>
            <a href='#'><FaLinkedinIn className={styles.icon}/></a>
            <a href='#'><IoLogoInstagram className={styles.icon}/></a>
            <a href='#'><FaXTwitter className={styles.icon}/></a>
            <a href='#'><MdMailOutline className={styles.icon}/></a>
            </div>
          </div>
        </div>
    </>
  )};
export default Card;