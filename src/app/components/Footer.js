'use client';
import React, { useState, useEffect, useRef } from 'react';
import styles from "@/app/styles/footer.module.css";
import Link from "next/link";
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

// Register ScrollTrigger with GSAP
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const Footer = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  // Refs for elements to animate
  const socialIconsRef = useRef([]);
  const addressRef = useRef(null);
  const loginRef = useRef(null);
  const linksRef = useRef([]);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  // GSAP animations when component mounts
  useEffect(() => {
    // Animate social icons on scroll
    if (socialIconsRef.current.length) {
      gsap.fromTo(
        socialIconsRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1, y: 0, stagger: 0.2, duration: 0.5, ease: 'power2.out',
          scrollTrigger: {
            trigger: socialIconsRef.current[0],
            start: 'top 80%', // Start animation when the top of the element is 80% from the top of the viewport
            toggleActions: 'play none none none', // Only play the animation once
          },
        }
      );
    }

    // Animate address block on scroll
    if (addressRef.current) {
      gsap.fromTo(
        addressRef.current,
        { opacity: 0, x: -100 },
        {
          opacity: 1, x: 0, duration: 0.8, ease: 'power2.out', delay: 0.2,
          scrollTrigger: {
            trigger: addressRef.current,
            // start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    }

    // Animate login form on scroll
    if (loginRef.current) {
      gsap.fromTo(
        loginRef.current,
        { opacity: 0, y: -50 },
        {
          opacity: 1, y: 0, duration: 0.6, ease: 'power2.out', delay: 0.4,
          scrollTrigger: {
            trigger: loginRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    }

    // Animate navigation links
    if (linksRef.current.length) {
      gsap.fromTo(
        linksRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1, y: 0, stagger: 0.15, duration: 0.4, ease: 'power2.out',
          scrollTrigger: {
            trigger: linksRef.current[0],
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    }
  }, []);

  return (
    <>
      <div className={styles.contact}>
        <div className={styles.box}>
          <div className={styles.boxcont}>
            <div className={styles.list} ref={el => linksRef.current[0] = el}><Link href="/">Home</Link></div>
            <div className={styles.list} ref={el => linksRef.current[1] = el}><Link href="/About">About</Link></div>
            <div className={styles.list} ref={el => linksRef.current[2] = el}><Link href="/Projects">Projects</Link></div>
            <div className={styles.list} ref={el => linksRef.current[3] = el}><Link href="/Events">Events</Link></div>
            <div className={styles.list} ref={el => linksRef.current[4] = el}><Link href="/Team">Team</Link></div>
            <div className={styles.list} ref={el => linksRef.current[5] = el}><Link href="/Contact">Contacts</Link></div>
            <div className={styles.list} ref={el => linksRef.current[6] = el}><Link href="/Achievements">Achievements</Link></div>
          </div>
        </div>
        
        {/* Login Form */}
        <div className={styles.login} ref={loginRef}>
          <div className={styles.logincont}>
            <span className={styles.navigate}>Enter to RIG console</span>
            <div className={styles.navigate}><i>*only rig members are allowed</i></div>
            <div>
              <input type='text' className={styles.rigid} placeholder='RIG ID' autoFocus={true} />
            </div>
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
                {passwordVisible ? (
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
                    <path d="M480-320q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-72q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 192q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200Zm0-300Zm0 220q113 0 207.5-59.5T832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280Z"/>
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
                    <path d="M792-56 624-222q-35 11-70.5 16.5T480-200q-151 0-269-83.5T40-500q21-53 53-98.5t73-81.5L56-792l56-56 736 736-56 56ZM480-320q11 0 20.5-1t20.5-4L305-541q-3 11-4 20.5t-1 20.5q0 75 52.5 127.5T480-320Zm292 18L645-428q7-17 11-34.5t4-37.5q0-75-52.5-127.5T480-680q-20 0-37.5 4T408-664L306-766q41-17 84-25.5t90-8.5q151 0 269 83.5T920-500q-23 59-60.5 109.5T772-302ZM587-486 467-606q28-5 51.5 4.5T559-574q17 18 24.5 41.5T587-486Z"/>
                  </svg>
                )}
              </button>
            </div>
            <center><div className={styles.btn}>Enter</div></center>
          </div>
        </div> 
        
        {/* Social Icons and Address */}
        <div className={styles.box1}>
          <div className={styles.up}>
            <div className={styles.child1}>
              <div ref={el => socialIconsRef.current[0] = el}>
                <a href='#' className={styles.icon}>
                  <Image width={35} height={35} src='../icon-insta.svg' alt='Instagram' />
                </a>
              </div>
              <div ref={el => socialIconsRef.current[1] = el}>
                <a href='#' className={styles.icon}>
                  <Image width={35} height={35} src='../icon-x.svg' alt='X' />
                </a>
              </div>
            </div>
            <div className={styles.child2}>
              <div ref={el => socialIconsRef.current[2] = el}>
                <a href='#' className={styles.icon}>
                  <Image width={35} height={35} src='../icon-linked-in.svg' alt='LinkedIn' />
                </a>
              </div>
              <div ref={el => socialIconsRef.current[3] = el}>
                <a href='#' className={styles.icon}>
                  <Image width={35} height={35} src='../icon-mail.svg' alt='Mail' />
                </a>
              </div>
            </div>
          </div>

          {/* Address Block */}
          <div className={styles.down} ref={addressRef}>
            <div className={styles.address}>ADDRESS</div>
            <div className={styles.addresscont}>
              MECHATRONICS/ROBOTICS LAB
              <br />
              MECHANICAL ENGINEERING DEPARTMENT
              <br />
              NATIONAL INSTITUTE OF TECHNOLOGY CALICUT
              <br />
              P.O.- KOZHIKODE, KERALA, INDIA
              <br />
              PIN- 673601
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
