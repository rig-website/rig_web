'use client'
import { useState } from 'react'; // Import useState for managing selected year
import { FaLinkedinIn } from 'react-icons/fa';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import styles from '@/app/team/team.module.css';
import gsap from 'gsap';
import { useEffect, useRef } from 'react';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
const teamMembers = [

  {
    name: "Shibin Fazil",
    linkedin: "https://www.linkedin.com/in/shibin-fazil/",
    presentation: "https://drive.google.com/uc?export=view&id=11WCYgS-fWlJtluoJtZz6AwTl0CZZ7Rhx",
    year: "2021-2025",
    position: "Team Member"
  },
  {
    name: "Karthik Jayaraj",
    linkedin: "https://www.linkedin.com/in/karthik-jayaraj-93a903222/",
    presentation: "https://drive.google.com/uc?export=view&id=1dr4W01gyS4llPOgJjkRI2l647jUN1IEP",
    year: "2021-2025",
    position: "Team Member"
  },
  {
    name: "Nikita S",
    linkedin: "https://www.linkedin.com/in/nikitha-saji/",
    presentation: "https://drive.google.com/uc?export=view&id=1qjwhbprZWhIr40Cj7qCc2fu5wlUTyE-W",
    year: "2021-2025",
    position: "Team Member"
  },
  {
    name: "Karthik Manoranjan",
    linkedin: "https://www.linkedin.com/in/karthik-manoranjan",
    presentation: "https://drive.google.com/uc?export=view&id=1DDWoUqwW0aBAe7IazhGnF_hV9WJ_ZFnq",
    year: "2021-2025",
    position: "Team Member"
  },
  {
    name: "Sneha Joe M",
    linkedin: "https://www.linkedin.com/in/sneha-joe-m-electronics-engineer",
    presentation: "https://drive.google.com/uc?export=view&id=1UiciK7sOUlBJRXNgLjR3waMbOWzvCDot",
    year: "2021-2025",
    position: "Team Member"
  },
  {
    name: "Madhav Menon",
    linkedin: "https://www.linkedin.com/in/madhav-menon-",
    presentation: "https://drive.google.com/uc?export=view&id=1QHIXhIFFu5MLFSwJqI8Sde_nnuTN1f4Y",
    year: "2021-2025",
    position: "Team Member"
  },
  {
    name: "Vishakha",
    linkedin: "https://www.linkedin.com/in/vishakha--sharma",
    presentation: "https://drive.google.com/uc?export=view&id=1dA2g3o2zNlgzWnLPRjOiwUd0iRUgk7OG",
    year: "2021-2025",
    position: "Team Member"
  },
   
  {
    name: "Adhyuth Narayan",
    linkedin: "https://www.linkedin.com/in/adhyuth-narayan",
    presentation: "https://drive.google.com/uc?export=view&id=1JbAkmFDPiO79KE_hevZRw_9VlaEZittM",
    year: "2021-2025",
    position: "Team Member"
  },
  {
    name: "Aadhil Noushad",
    linkedin: "https://www.linkedin.com/in/aadhil-noushad-179849316/",
    presentation: "https://drive.google.com/uc?export=view&id=1s_MZj-vYIhYX-89qrz16GkF5QSrvZX0q",
    year: "2021-2025",
    position: "Team Member"
  },
  {
    name: "Pranav Ramesh",
    linkedin: "https://www.linkedin.com/in/pranav-ramesh-36b24b244/",
    presentation: "https://drive.google.com/uc?export=view&id=1dsmuehQ25ktgnI3dNC84ckXA9c8UijUz",
    year: "2021-2025",
    position: "Team Member"
  },
  {
    name: "Krishnaprasad",
    linkedin: "/",
    presentation: "",
    year: "2021-2025",
    position: "Team Member"
  },
  {
    name: "Prudhvi",
    linkedin: "https://www.linkedin.com/in/prudhvi-mallavarapu78/",
    presentation: "https://drive.google.com/uc?export=view&id=1m7BbmAvxUuC0pDvgNs8As2iaesoNKL0I",
    year: "2021-2025",
    position: "Team Member"
  },
  {
    name: "Kathaan Vora",
    linkedin: "https://www.linkedin.com/in/kathaan-vora-845b6b219/",
    presentation: "https://drive.google.com/uc?export=view&id=1QCkm0SS6we6uu2t3QP46rhyHBfoRqIWh",
    year: "2021-2025",
    position: "Team Member"
  },
  {
    name: "Aftaab Ahamed",
    linkedin: "https://www.linkedin.com/in/aftaab-ahamed-058b9b221/",
    presentation: "https://drive.google.com/uc?export=view&id=1lR0sqQr3f1fQthO9xpZI1vWfFu-REfCp",
    year: "2021-2025",
    position: "Team Member"
  },
  {
    name: "Nirmal Fageria",
    linkedin: "https://www.linkedin.com/in/nirmal-fageria-11bab125a",
    presentation: "https://drive.google.com/uc?export=view&id=1lkj_vymKyB0bRnXL49RIT3Izvs-czVXN",
    year: "Developer",
    // position: "Developer"
  },
  {
    name: "Chandarbhusan",
    linkedin: "/",
    presentation: "/CB.png",
    year: "Developer",
    // position: "Developer and Designer"
  },
  {
    name: "Himanshu",
    linkedin: "/",
    presentation: "",
    year: "Developer",
    // position: "Developer"
  }
];


const Page = () => {
  const [selectedYear, setSelectedYear] = useState('2021-2025'); // Default year
  const membersRef = useRef([]); // Create a reference to store all member divs

  // Filter team members by selected year
  const filterTeamMembersByYear = (year) => {
    return teamMembers.filter(member => member.year === year);
  };

  const filteredTeamMembers = filterTeamMembersByYear(selectedYear);

  // Handle year change
  const handleYearChange = (e) => {
    setSelectedYear(e.target.value);
  };

  useEffect(() => {
    const validMembers = membersRef.current.filter(member => member !== null); // Filter out null values
    if (validMembers.length > 0) {
      gsap.fromTo(
        validMembers,
        {
          opacity: 0,
          scale: 1.5,
          y: 100, // start 100px below
          x: -100,
        },
        {
          opacity: 1,
          scale: 1,
          y: 0, // move to original position
          x: 0,
          duration: 1,
          stagger: 0.2, // Stagger the animation by 0.2 seconds for each member
          ease: 'power3.out',
          scrollTrigger: {
            trigger: validMembers,
            start: 'top 80%', // When top of the element reaches 80% of viewport height
            toggleActions: 'play none none none',
          }
        }
      );
    }
  }, [filteredTeamMembers]); // Re-run when the filtered members change

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

        {/* Dropdown to select year */}
        <center className={styles.yearSelector}>
          <label htmlFor="year">Select Year: </label>
          <select id="year" value={selectedYear} onChange={handleYearChange}>
            <option value="2021-2025">2021-2025</option>
            <option value="2020-2024">2020-2024</option>
            <option value="2019-2023">2019-2023</option>
            <option value="Developer">Developers</option>
          </select>
        </center>

        {/* Conditional rendering for team members */}
        {filteredTeamMembers.length === 0 ? (
          <div className={styles.nomember}>No data is available</div>
        ) : (
          <div className={styles.members}>
            {filteredTeamMembers.map((member, index) => (
              <div 
                key={index} 
                className={styles.member}
                ref={(el) => membersRef.current[index] = el}  // Attach the ref to each member
              >
                <div>
                  <Image
                    src={member.presentation || '/default.jpg'}
                    alt={member.name}
                    width={300}
                    height={250}
                    objectFit="scale-down"
                    quality={100}
                    priority
                    className={styles.photo}
                  />
                </div>
                <div className={styles.details}>
                  <div className={styles.inData}>
                    <p className={styles.name}>{member.name}</p>
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