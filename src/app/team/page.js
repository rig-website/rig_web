'use client'
import { useState } from 'react'; // Import useState for managing selected year
import { FaLinkedinIn } from 'react-icons/fa';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import styles from '@/app/team/team.module.css';

const teamMembers = [
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
    linkedin: "#",
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



// Function to filter members by year
const filterTeamMembersByYear = (year) => {
  return teamMembers.filter(member => member.year === year);
};

const Page = () => {
  const [selectedYear, setSelectedYear] = useState('2021-2025'); // Default year

  // Handle year change
  const handleYearChange = (e) => {
    setSelectedYear(e.target.value);
  };

  const filteredTeamMembers = filterTeamMembersByYear(selectedYear);

  return (
    <>
      <Navbar />

      <div className={styles.backbeam}>
        <div className={styles.heads}>
          {/* <div className={styles.headerLeft}>Current Members</div> */}
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
          {/* <div className={styles.headerRight}>Past Members</div> */}
        </div>

        {/* Dropdown to select year */}
        <div className={styles.yearSelector}>
          <label htmlFor="year">Select Year: </label>
          <select id="year" value={selectedYear} onChange={handleYearChange}>
            <option value="2021-2025">2021-2025</option>
            <option value="2020-2024">2017-2021</option>
            <option value="2019-2023">2013-2017</option>
            <option value="Developer">Developers</option>
            {/* Add more options as needed */}
          </select>
      
        </div>
          {/* Conditional rendering for team members */}
          {filteredTeamMembers.length === 0 ? (
          <div className={styles.nomember}>No data is available</div>
        ) : (
          <div className={styles.members}>
            {filteredTeamMembers.map((member, index) => (
              <div key={index} className={styles.member}>
                <div>
                <Image
  src={member.presentation || '/default.jpg'}
  alt={member.name}
  width={300}
  height={250}
  object-fit= "scale-down"
  quality={100}  // Set image quality to 100
  priority  // Ensures this image is prioritized during page load
  className={styles.photo}
/>


                </div>
                <div className={styles.details}>
                  <div className={styles.inData}>
                    <p className={styles.name}>{member.name}</p>
                    <p className={styles.position}>{member.position}</p>
                    <p className={styles.year}>{member.year}</p>
                  </div>
                  <div className={styles.icons}>
                    {member.linkedin && <a href={member.linkedin} target="_blank" rel="noopener noreferrer"><FaLinkedinIn className={styles.icon} /></a>}
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