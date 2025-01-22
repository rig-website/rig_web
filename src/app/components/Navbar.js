'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from '@/app/styles/navbar.module.css';
import Link from 'next/link';
import gsap from 'gsap';
import { usePathname } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from '@/redux/authSlice';
import { useRouter } from 'next/navigation';

const Navbar = () => {
  const [isSidebarVisible, setSidebarVisible] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const dispatch = useDispatch();
  const isLogin = useSelector((state) => state.auth.isLogin);

  const sidebarLinksRef = useRef([]);
  const desktopLinksRef = useRef([]);
  const logoRef = useRef(null);
  const rigLogoRef = useRef(null);

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  const closeSidebar = () => {
    setSidebarVisible(false);
  };

  useEffect(() => {
    if (!isLogin && pathname == '/login') {
      router.push('/login');
    }
  }, [pathname, isLogin, router]);

  const handleAuth = () => {
    if (isLogin) {
      dispatch(logout());
      router.push('/');
    } else {
      router.push('/login');
    }
  };

  useEffect(() => {
    const isDesktop = window.innerWidth >= 1024;

    if (!isDesktop && sidebarLinksRef.current.length && isSidebarVisible) {
      gsap.fromTo(
        sidebarLinksRef.current,
        { x: '100', opacity: 0 },
        {
          x: '0',
          opacity: 1,
          stagger: 0.1,
          duration: 0.3,
          ease: 'power2.out',
        }
      );
    }
  }, [isSidebarVisible]);

  return (
    <>
      <div className={styles.navbar}>
        {/* Main logo */}
        <div className={styles.logo} ref={logoRef}>
          <Link href="/">
            <Image src="/nitc-logo-white-02.svg" width={280} height={150} alt="Logo" />
          </Link>
        </div>

        {/* Alternate logo */}
        <div className={styles.logonew} ref={rigLogoRef}>
          <Link href="/">
            <Image src="/image.png" width={110} height={60} alt="Logo" />
          </Link>
        </div>

        <div className={styles.links} ref={el => { 
          if (el) desktopLinksRef.current = Array.from(el.querySelectorAll(`.${styles.link}`));
        }}>
          <Link href="/" className={`${styles.sidebarLink} ${pathname === '/' ? styles.active : ''}`}>Home</Link>
          <Link href="/About" className={`${styles.sidebarLink} ${pathname === '/About' ? styles.active : ''}`}>About</Link>
          <Link href="/Projects" className={`${styles.sidebarLink} ${pathname === '/Projects' ? styles.active : ''}`}>Projects</Link>
          <Link href="/Achievements" className={`${styles.sidebarLink} ${pathname === '/Achievements' ? styles.active : ''}`}>Achievements</Link>
          <Link href="/Events" className={`${styles.sidebarLink} ${pathname === '/Events' ? styles.active : ''}`}>Events</Link>
          <Link href="/Team" className={`${styles.sidebarLink} ${pathname === '/Team' ? styles.active : ''}`}>Team</Link>

          {isLogin && (
            <>
              <Link href="/addEvents" className={`${styles.sidebarLink} ${pathname === '/addEvents' ? styles.active : ''}`}>Add-Events</Link>
              <Link href="/addProjects" className={`${styles.sidebarLink} ${pathname === '/addProjects' ? styles.active : ''}`}>Add-Projects</Link>
            </>
          )}

          <Link href="/Contact" className={`${styles.sidebarLink} ${pathname === '/Contact' ? styles.active : ''}`}>Contact</Link>
        </div>

        {/* Desktop Login/Logout Button */}
        <button
          onClick={handleAuth}
          className={styles.authButton} // Desktop version
        >
          {isLogin ? 'Logout' : 'Login'}
        </button>

        <div className={styles.rig}>
          <Link href="/">
            <div className={styles.logo} ref={rigLogoRef}>
              <Link href="/">
                <Image src="/rig logo blue.png" width={95} height={75} alt="Logo" />
              </Link>
            </div>
          </Link>
        </div>

        <button
          className={styles.menuButton}
          onClick={toggleSidebar}
          aria-label="Open Menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" height="42" viewBox="0 96 960 960" width="42">
            <path d="M120 816v-60h720v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z" />
          </svg>
        </button>

        <div
          className={`${styles.sidebar} ${isSidebarVisible ? styles.visible : styles.hidden}`}
          ref={el => { 
            if (el) sidebarLinksRef.current = Array.from(el.querySelectorAll(`.${styles.sidebarLink}`));
          }}
        >
          <button
            className={styles.closeButton}
            onClick={closeSidebar}
            aria-label="Close Menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" height="42" viewBox="0 96 960 960" width="42">
              <path d="m249 849-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z" />
            </svg>
          </button>

          <Link href="/" className={`${styles.sidebarLink} ${pathname === '/' ? styles.active : ''}`}>Home</Link>
          <Link href="/About" className={`${styles.sidebarLink} ${pathname === '/About' ? styles.active : ''}`}>About</Link>
          <Link href="/Projects" className={`${styles.sidebarLink} ${pathname === '/Projects' ? styles.active : ''}`}>Projects</Link>
          <Link href="/Achievements" className={`${styles.sidebarLink} ${pathname === '/Achievements' ? styles.active : ''}`}>Achievements</Link>
          <Link href="/Events" className={`${styles.sidebarLink} ${pathname === '/Events' ? styles.active : ''}`}>Events</Link>
          <Link href="/Team" className={`${styles.sidebarLink} ${pathname === '/Team' ? styles.active : ''}`}>Team</Link>

          {isLogin && (
            <>
              <Link href="/addEvents" className={`${styles.sidebarLink} ${pathname === '/addEvents' ? styles.active : ''}`}>Add-Events</Link>
              <Link href="/addProjects" className={`${styles.sidebarLink} ${pathname === '/addProjects' ? styles.active : ''}`}>Add-Projects</Link>
            </>
          )}

          <Link href="/Contact" className={`${styles.sidebarLink} ${pathname === '/Contact' ? styles.active : ''}`}>Contact</Link>

          {/* Mobile Login/Logout Button */}
          <button
            onClick={handleAuth}
            className={styles.sidebarAuthButton} // Mobile version
          >
            {isLogin ? 'Logout' : 'Login'}
          </button>
        </div>
      </div>
      <div className={styles.box}></div>
    </>
  );
};

export default Navbar;
