'use client'

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import styles from "@/app/styles/footer.module.css"
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

// Register ScrollTrigger with GSAP
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const Footer = () => {
  const socialIconsRef = useRef([]);
  const addressRef = useRef(null);
  const linksRef = useRef([]);
  const logoRef = useRef(null);

  // GSAP animations
  useEffect(() => {
    if (logoRef.current) {
      gsap.fromTo(
        logoRef.current,
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1, scale: 1, duration: 0.6, ease: 'power2.out',
          scrollTrigger: {
            trigger: logoRef.current,
            start: 'top 90%',
            toggleActions: 'play none none none',
          },
        }
      );
    }

    if (socialIconsRef.current.length) {
      gsap.fromTo(
        socialIconsRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1, y: 0, stagger: 0.2, duration: 0.5, ease: 'power2.out',
          scrollTrigger: {
            trigger: socialIconsRef.current[0],
            start: 'top 90%',
            toggleActions: 'play none none none',
          },
        }
      );
    }

    if (addressRef.current) {
      gsap.fromTo(
        addressRef.current,
        { opacity: 0, x: -50 },
        {
          opacity: 1, x: 0, duration: 0.8, ease: 'power2.out',
          scrollTrigger: {
            trigger: addressRef.current,
            start: 'top 90%',
            toggleActions: 'play none none none',
          },
        }
      );
    }

    if (linksRef.current.length) {
      gsap.fromTo(
        linksRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1, y: 0, stagger: 0.15, duration: 0.4, ease: 'power2.out',
          scrollTrigger: {
            trigger: linksRef.current[0],
            start: 'top 90%',
            toggleActions: 'play none none none',
          },
        }
      );
    }
  }, []);

  const navigationLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Events', path: '/events' },
    { name: 'Team', path: '/team' },
    { name: 'Contact', path: '/contact' },
    { name: 'Achievements', path: '/achievements' }
  ];

  return (
    <>
    <center><div className={styles.text1}>contact us</div></center>
    <div className={styles.contact}>
        <div className={styles.up}>
            <div className={styles.child1}>
                <span>SOCIAL HANDLES</span>
            </div>
            <div className={styles.child2}>
                    <div className={styles.icons}><a href='#' className={styles.icon}><img src='../insta.svg' ></img></a></div>
                    <div className={styles.icons}><a href='#' className={styles.icon}><img src='../x.svg'></img></a></div>
                    <div className={styles.icons}><a href='#' className={styles.icon}><img src='../linkedin.svg'></img></a></div>
                    <div className={styles.icons}><a href='#' className={styles.icon}><img src='../discord.svg'></img></a></div>
                    <div className={styles.icons}><a href='#' className={styles.icon}><img src='../mail.svg'></img></a></div>
            </div>
        </div>
        <div className={styles.middle}>
            <div className={styles.boxtitle}>
            <   span className={styles.navigate}>NAVIGATION</span>
            </div>
            <div className={styles.boxmenu}>
                <a className={styles.list}>HOME</a>
                <a className={styles.list}>ABOUT US</a>
                <a className={styles.list}>PROJECTS</a>
                <a className={styles.list}>ACHEIVEMENTS</a>
                <a className={styles.list}>EVENTS</a>
                <a className={styles.list}>TEAM</a>
                <a className={styles.list}>CONTACTS</a>
            </div>
        </div>
        <div className={styles.line}></div>
        <div className={styles.down}>
            <div className={styles.add}>
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
            <div className={styles.login}>
                <span className={styles.navigate}>Enter to RIG console</span>
                <div className={styles.loginDetails}>
                    <input type='text' className={styles.rigid} placeholder='RIG ID'></input>
                    <input type='password' className={styles.pass} placeholder='PASSWORD'></input>
                </div>
                <center>
                    <div className={styles.btn}>login</div>
                    <span className={styles.access}><i>*only rig members are allowed</i></span>
                </center>
            </div>
        </div>
    </div>
    </>
  );
};

export default Footer;