import React from 'react'
import styles from "@/app/styles/contact.module.css"

const Contact = () => {
  return (
    <>
    <center><div className={styles.text1}>contact us</div></center>
    <div className={styles.contact}>
        
        <div className={styles.box1}>
            <div className={styles.up}>
                <div className={styles.child1}>
                    <div className={styles.icons}><a href='#' className={styles.icon}><img src='../icon-insta.svg' ></img></a>
                    <span>@rig_web</span>
                    </div>
                    <div className={styles.icons}><a href='#' className={styles.icon}><img src='../icon-x.svg'></img></a>
                    <span>@rig_web</span>
                    </div>
                    <div className={styles.icons}><a href='#' className={styles.icon}><img src='../icon-linked-in.svg'></img></a>
                    <span>@rig_web</span>
                    </div>
                </div>
                <div className={styles.child2}>
                    <div className={styles.icons}><a href='#' className={styles.icon}><img src='../icon-mail.svg'></img></a>
                    <span>@rig_web</span>
                    </div>
                
                </div>
            </div>
            <div className={styles.down}>
                <div className={styles.address}>ADDRESS</div>
                MECHATRONICS/ROBOTICS LAB
                <br/>
                MECHANICAL ENGINEERING DEPARTMENT
                <br/>
                NATIONAL INSTITUTE OF TECHNOLOGY CALICUT, NITC CAMPUS
                <br/>
                P.O.- KOZHIKODE,KERALA,INDIA
                <br/>
                PIN- 673601
                
            </div>
        </div>
        <div className={styles.box}>
            <div className={styles.boxcont}>
            <span className={styles.navigate}>NAVIGATION</span>
            <a className={styles.list}>HOME</a>
            <a className={styles.list}>ABOUT US</a>
            <a className={styles.list}>PROJECTS</a>
            <a className={styles.list}>ACHEIVEMENTS</a>
            <a className={styles.list}>EVENTS</a>
            <a className={styles.list}>TEAM</a>
            <a className={styles.list}>CONTACTS</a>
            </div>
        </div>
        <div className={styles.login}>
        <span><center>login</center></span>
        <div className={styles.logincont}>
            <span className={styles.navigate}>Enter to RIG console</span>
            <div><input type='text' className={styles.rigid} placeholder='RIG ID'></input></div>
            <div><input type='text' className={styles.email}></input></div>
            <div><input type='password' className={styles.pass}></input></div>
            <center><div className={styles.btn}>login</div></center>
            <span><i>*only rig members are allowed</i></span>
        </div>
        </div>
    </div>
    </>
  )
}

export default Contact