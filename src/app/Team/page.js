'use client'
import { useState } from 'react'; // Import useState for managing selected year
import { FaLinkedinIn } from 'react-icons/fa';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import styles from '@/app/Team/team.module.css';
import gsap from 'gsap';
import { useEffect, useRef } from 'react';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
import teamMembers from './team.js';

const Page = () => {
  const [selectedYear, setSelectedYear] = useState('2021-2025');
  const membersRef = useRef([]);
  const [loading, setLoading] = useState({}); // Object to store loading state for each image

  const filterTeamMembersByYear = (year) => {
    return teamMembers.filter(member => member.year === year);
  };

  const filteredTeamMembers = filterTeamMembersByYear(selectedYear);

  const handleYearChange = (e) => {
    setSelectedYear(e.target.value);
  };

  useEffect(() => {
    const validMembers = membersRef.current.filter(member => member !== null);
    if (validMembers.length > 0) {
      
    }
  }, [filteredTeamMembers]);

  const handleLoadingComplete = (name) => {
    setLoading((prev) => ({ ...prev, [name]: false }));
  };

  return (
    <>
      <Navbar />

      <div className={styles.backbeam}>
        <div className={styles.heads}>
          <div className={styles.headerCenter}>
            <div className={styles.teamH}>Our Team</div>
            <div className={styles.dots}>
              {[...Array(12)].map((_, index) => (
                <div key={index} className={styles.dot}></div>
              ))}
            </div>
            <i>
              <b className={styles.b}>
                &quot;Driven by Innovation, Fueled by Passion. Explore the Boundless Horizons of Robotics.&quot;
              </b>
            </i>
          </div>
        </div>

        <center className={styles.yearSelector}>
          <label htmlFor="year">Select Year: </label>
          <select id="year" value={selectedYear} onChange={handleYearChange}>
            <option value="2021-2025">2021-2025</option>
            <option value="2020-2024">2020-2024</option>
            <option value="2019-2023">2019-2023</option>
            <option value="Developer">Developers</option>
          </select>
        </center>

        {filteredTeamMembers.length === 0 ? (
          <div className={styles.nomember}>No data is available</div>
        ) : (
          <div className={styles.members}>
            {filteredTeamMembers.map((member, index) => (
              <div 
                key={index} 
                className={styles.member}
                ref={(el) => membersRef.current[index] = el}
              >
                <div>
                  {/* Show loader while image is loading */}
                  {loading[member.name] && (
                    <div className={styles.loader}>Loading...</div>
                  )}
                  <Image
                    src={member.presentation || '/default.jpg'}
                    alt={member.name}
                    width={300}
                    height={200}
                    quality={100}
                    priority
                    className={styles.photo}
                    onLoadingComplete={() => handleLoadingComplete(member.name)}
                    onLoad={() => setLoading((prev) => ({ ...prev, [member.name]: true }))}
                  />
                </div>
                <div className={styles.details}>
                  <div className={styles.inData}>
                    <p className={styles.name}>{member.name.substring(0, 18)}</p>
                    <p className={styles.position}>{member.position}</p>
                    <div className={styles.icons}>
                      <p className={styles.year}>{member.year}</p>
                      <div>
                        {member.linkedin && (
                          <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                            <FaLinkedinIn className={styles.icon} />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Page;