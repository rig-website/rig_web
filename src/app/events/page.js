import React from 'react';
import styles from "../Events/event.module.css";
import Navbar from "../components/Navbar";

const page = () => {
  return (
    <div className={styles.root}>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.box}>
          <div className={styles.details}>
          </div>
        </div>
        <div className={styles.notification}>coming soon!</div>
      </div>
    </div>
  )
}

export default page