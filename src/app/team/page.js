import React from 'react';
import Navbar from "../components/Navbar";
import styles from '../styles/team.module.css';
import { IoLogoInstagram } from "react-icons/io5";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdMailOutline } from "react-icons/md";

const teamMembers = [
  {
    name: "Chandrabhushan Kumar",
    position: "Designer",
    mobileNo: "+91 9876543210",
    photo: "../CB.png",
    socialLinks: {
      linkedin: "#",
      instagram: "#",
      twitter: "#",
      email: "#"
    }
  },
  {
    name: "Chandrabhushan Kumar",
    position: "Designer",
    mobileNo: "+91 9876543210",
    photo: "../CB.png",
    socialLinks: {
      linkedin: "#",
      instagram: "#",
      twitter: "#",
      email: "#"
    }
  },
  {
    name: "Chandrabhushan Kumar",
    position: "Designer",
    mobileNo: "+91 9876543210",
    photo: "../CB.png",
    socialLinks: {
      linkedin: "#",
      instagram: "#",
      twitter: "#",
      email: "#"
    }
  },
  {
    name: "Chandrabhushan Kumar",
    position: "Designer",
    mobileNo: "+91 9876543210",
    photo: "../CB.png",
    socialLinks: {
      linkedin: "#",
      instagram: "#",
      twitter: "#",
      email: "#"
    }
  },
  {
    name: "Chandrabhushan Kumar",
    position: "Designer",
    mobileNo: "+91 9876543210",
    photo: "../CB.png",
    socialLinks: {
      linkedin: "#",
      instagram: "#",
      twitter: "#",
      email: "#"
    }
  },
  {
    name: "Chandrabhushan Kumar",
    position: "Designer",
    mobileNo: "+91 9876543210",
    photo: "../CB.png",
    socialLinks: {
      linkedin: "#",
      instagram: "#",
      twitter: "#",
      email: "#"
    }
  },
  {
    name: "Chandrabhushan Kumar",
    position: "Designer",
    mobileNo: "+91 9876543210",
    photo: "../CB.png",
    socialLinks: {
      linkedin: "#",
      instagram: "#",
      twitter: "#",
      email: "#"
    }
  },
  {
    name: "Chandrabhushan Kumar",
    position: "Designer",
    mobileNo: "+91 9876543210",
    photo: "../CB.png",
    socialLinks: {
      linkedin: "#",
      instagram: "#",
      twitter: "#",
      email: "#"
    }
  },{
    name: "Chandrabhushan Kumar",
    position: "Designer",
    mobileNo: "+91 9876543210",
    photo: "../CB.png",
    socialLinks: {
      linkedin: "#",
      instagram: "#",
      twitter: "#",
      email: "#"
    }
  },
  {
    name: "Chandrabhushan Kumar",
    position: "Designer",
    mobileNo: "+91 9876543210",
    photo: "../CB.png",
    socialLinks: {
      linkedin: "#",
      instagram: "#",
      twitter: "#",
      email: "#"
    }
  },
  {
    name: "Chandrabhushan Kumar",
    position: "Designer",
    mobileNo: "+91 9876543210",
    photo: "../CB.png",
    socialLinks: {
      linkedin: "#",
      instagram: "#",
      twitter: "#",
      email: "#"
    }
  },
  {
    name: "Chandrabhushan Kumar",
    position: "Designer",
    mobileNo: "+91 9876543210",
    photo: "../CB.png",
    socialLinks: {
      linkedin: "#",
      instagram: "#",
      twitter: "#",
      email: "#"
    }
  },
  // Add more team members here
  {
    name: "Member 2",
    position: "Developer",
    mobileNo: "+91 1234567890",
    photo: "../member2.png",
    socialLinks: {
      linkedin: "#",
      instagram: "#",
      twitter: "#",
      email: "#"
    }
  },
  {
    name: "Member 3",
    position: "Manager",
    mobileNo: "+91 9876543210",
    photo: "../member3.png",
    socialLinks: {
      linkedin: "#",
      instagram: "#",
      twitter: "#",
      email: "#"
    }
  }
];

const Page = () => {
  return (
    <>
      <Navbar />
      <div className={styles.backbeam}>
        <div className={styles.heads}>
          <div className={styles.headerLeft}>Current Members</div>
          <div className={styles.headerCenter}>
            <div className={styles.teamH}>Our Team</div>
            <div className={styles.dots}>
              {[...Array(12)].map((_, index) => (
                <div key={index} className={styles.dot}></div>
              ))}
            </div>
            <i><b className={styles.b}>"Driven by Innovation, Fueled by Passion. Explore the Boundless Horizons of Robotics."</b></i>
          </div>
          <div className={styles.headerRight}>Past Members</div>
        </div>
        
        <div className={styles.members}>
          {teamMembers.map((member, index) => (
            <div key={index} className={styles.member}>
              <div>
                <img className={styles.photo} src={member.photo} alt={member.name} />
              </div>
              <div className={styles.details}>
                <div className={styles.inData}>
                  <p className={styles.name}>{member.name}</p>
                  <p className={styles.position}>{member.position}</p>
                  <p className={styles.mobileNo}>{member.mobileNo}</p>
                </div>
                <div className={styles.icons}>
                  <a href={member.socialLinks.linkedin}><FaLinkedinIn className={styles.icon} /></a>
                  <a href={member.socialLinks.instagram}><IoLogoInstagram className={styles.icon} /></a>
                  <a href={member.socialLinks.twitter}><FaXTwitter className={styles.icon} /></a>
                  <a href={member.socialLinks.email}><MdMailOutline className={styles.icon} /></a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Page;
