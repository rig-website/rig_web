import React from 'react';
import styles from "../achievements/achieve.module.css";
import Navbar from "../components/Navbar";
import Image from "next/image";

export default function AchievementReport() {
  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.header}>
        <p className={styles.headerTitle}>Achievements</p>
        <div>
          <Image
            src='/Robo.png'
            width={400}
            height={400}
            className={styles.image}
            style={{ objectFit: "contain" }}
            alt="Robo Image" 
          />
        </div>
      </div>
      <main className={styles.main}>
        <h1 className={styles.title}>ROBOTICS INTEREST GROUP (RIG) Annual Achievement Report</h1>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Origin Workshop</h2>
          <p className={styles.sectionContent}>
            Conducted a two-day hands-on workshop introducing robotics for B23 students of NIT Calicut.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Robocon&apos;23</h2> {/* Escaped single quote */}
          <p className={styles.sectionContent}>
            Took part in Robocon&apos;23, an international robotics competition, and secured among the top position defeating all other NITs or IITs.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>IInvenTiv mega R&D fair</h2>
          <p className={styles.sectionContent}>
            IITs, NITs, IISERs, IIITs, and other top 50 ranked NIRF Institutions in the country are coming together to showcase the R&D happening there. Two projects were selected from NIT, out of which one was from RIG. This project was presented in front of the Hon&apos;ble education minister of India. {/* Escaped single quote */}
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Eyanthra&apos;23</h2> {/* Escaped single quote */}
          <p className={styles.sectionContent}>
            Two teams from RIG participated in the Eyanthra&apos;23 robotics competition organized by IIT Bombay. One team successfully completed all the assigned tasks, while the other team secured the top position in all India levels.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>ISRO Rover Challenge</h2>
          <p className={styles.sectionContent}>
            Selection Qualified for the second round of the ISRO Rover Challenge competition, which is currently underway, with submissions for the second round due on May 15th.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>UL space club lecture</h2>
          <p className={styles.sectionContent}>
            Conducted a one-day lecture on robotics followed by a mini expo for school students in UL Cyber Park.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Patent granted</h2>
          <p className={styles.sectionContent}>
            A patent was awarded for one of RIG&apos;s significant projects, the Hospital Bed, specifically designed to assist physically challenged patients. {/* Escaped single quote */}
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Robocon&apos;24</h2> {/* Escaped single quote */}
          <p className={styles.sectionContent}>
            Advanced to the second round of Robocon&apos;24, international robotics competition, and currently engaged in the second stage of submissions.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>KTX Expo</h2>
          <p className={styles.sectionContent}>
            Showcased AVIBOT, one of RIG&apos;s flagship projects, at the KTX Global, with the aim of attracting industry partnerships to make the product market-ready. {/* Escaped single quote */}
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Disha Expo</h2>
          <p className={styles.sectionContent}>
            Represented NIT Calicut at Disha Expo&apos;23, where we showcased few RIG projects to higher secondary school students. {/* Escaped single quote */}
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Lab Visits</h2>
          <p className={styles.sectionContent}>
            Several lab visits for school students were held to explore our robotics lab, where we showcased robotic technologies and ongoing projects in RIG.
          </p>
        </section>
      </main>
    </div>
  );
}
