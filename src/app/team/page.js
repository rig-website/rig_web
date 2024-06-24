import React from 'react'
import axios from 'axios';
import Card from '../components/Card';
import Navbar from '../components/Navbar';
import styles from './style.module.css'

export async function fetchTeamData() {
  try {
    const res = await axios.get('/api/teams');
  const cardData =res.data;
  return {
    props: {
      cardData
    }
  };
    
  } catch (error) {

    console.error('Error fetching card Data :', error);
    return {
      props: {
        cardData:[]
      }
    };
    
    
  }
} 


const teamsPage = ({ cardData }) => {
  return (
    <div>
       <Navbar />
    <div className={styles.backbeam}>
      
      <div className={styles.heads}>
        <div className={styles.headerLeft}>Current Members</div>
        <div className={styles.headerCenter}>
            <div className={styles.teamH}>Our Team
            </div>
            <div className={styles.dots}>
                          <div className={styles.dot}></div>
                          <div className={styles.dot}></div>
                          <div className={styles.dot}></div>
                          <div className={styles.dot}></div>
                          <div className={styles.dot}></div>
                          <div className={styles.dot}></div>
                          <div className={styles.dot}></div>
                          <div className={styles.dot}></div>
                          <div className={styles.dot}></div>
                          <div className={styles.dot}></div>
                          <div className={styles.dot}></div>
                          <div className={styles.dot}></div>
            </div>
            <i><b className={styles.b}>"Driven by Innovation, Fueled by Passion. Explore the Boundless Horizons of Robotics."</b></i>
        </div>
        <div className={styles.headerRight}>Past Members</div>
      </div>
      <div style={{display:"flex",gap:'15px'}}>
        {cardData.map((card,index) => (
          <Card
          key={index}
          name={card.name}
          image={card.image}
          linked={card.linked}
          insta={card.insta}
          tweet={card.tweet}
          mail={card.mail}
          />
        ))}
      </div>
      
    </div>
    </div>
  );
};

export default teamsPage;