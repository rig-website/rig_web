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
    <footer className={styles.contact}>
      <div className={styles.linksContainer}>
        <div className={styles.links}>
          {navigationLinks.map((link, index) => (
            <div className={styles.list} key={index} ref={(el) => (linksRef.current[index] = el)}>
              <Link href={link.path}>{link.name}</Link>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.socialContainer}>
        <div className={styles.socialIcons}>
          {['icon-insta', 'icon-x', 'icon-linked-in'].map((icon, index) => (
            <a 
              href="#" 
              key={index} 
              ref={(el) => (socialIconsRef.current[index] = el)} 
              className={styles.icon}
            >
              <img src={`/${icon}.svg`} alt={icon} width={35} height={35} />
            </a>
          ))}
        </div>
        <div className={styles.address} ref={addressRef}>
          <p>RIG Club</p>
          <p>Indiranagar</p>
          <p>Bangalore</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;