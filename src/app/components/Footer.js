'use client'
import React, { useState } from 'react';
import styles from "@/app/styles/footer.module.css";
import Link from "next/link";

const Contact = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <>
      <div className={styles.contact}>
        <div className={styles.box}>
          <div className={styles.boxcont}>
            <div className={styles.list}><Link href="/">Home</Link></div>
            <div className={styles.list}><Link href="/About">About</Link></div>
            <div className={styles.list}><Link href="/projects">Projects</Link></div>
            <div className={styles.list}><Link href="/events">Events</Link></div>
            <div className={styles.list}><Link href="/Team">Team</Link></div>
            <div className={styles.list}><Link href="/contact">Contacts</Link></div>
            <div className={styles.list}><Link href="/achievements">Achievements</Link></div>
          </div>
        </div>
        <div className={styles.login}>
          <div className={styles.logincont}>
            <span className={styles.navigate}>Enter to RIG console</span>
            <div className={styles.allow}><i>*only rig members are allowed</i></div>
            <div><input type='text' className={styles.rigid} placeholder='RIG ID' autoFocus={true}></input></div>
            <div className={styles.passwordWrapper}>
              <input 
                type={passwordVisible ? 'text' : 'password'} 
                className={styles.rigid} 
                placeholder='RIG PASS'
              />
              <button 
                type="button" 
                onClick={togglePasswordVisibility} 
                className={styles.toggleBtn}
              >
                {passwordVisible ? 'Hide' : 'Show'}
              </button>
            </div>
            <center><div className={styles.btn}>Enter</div></center>
          </div>
        </div> 
        <div className={styles.box1}>
          <div className={styles.up}>
            <div className={styles.child1}>
              <div><a href='#' className={styles.icon}><img src='../icon-insta.svg' alt='Instagram'></img></a></div>
              <div><a href='#' className={styles.icon}><img src='../icon-x.svg' alt='X'></img></a></div>
            </div>
            <div className={styles.child2}>
              <div><a href='#' className={styles.icon}><img src='../icon-linked-in.svg' alt='LinkedIn'></img></a></div>
              <div><a href='#' className={styles.icon}><img src='../icon-mail.svg' alt='Mail'></img></a></div>
            </div>
          </div>
          <div className={styles.down}>
            <div className={styles.address}>ADDRESS</div>
            <div className={styles.addresscont}>
              MECHATRONICS/ROBOTICS LAB
              <br/>
              MECHANICAL ENGINEERING DEPARTMENT
              <br/>
              NATIONAL INSTITUTE OF TECHNOLOGY CALICUT
              <br/>
              P.O.- KOZHIKODE, KERALA, INDIA
              <br/>
              PIN- 673601
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
