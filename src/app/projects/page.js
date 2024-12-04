import React from 'react';
import styles from '../projects/project.module.css';
import Navbar from "../components/Navbar";
import Contact from '../components/Footer';
import projectData from './projectdata';
import Footer from '../components/Footer';

function ProjectCard({ title, description }) {
  return (
    <div className={styles.card}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </div>
  );
}



function Page() {
  return (
  <>
  <Navbar/>
<h1 className={styles.heading}>Here are some of our Projects!!!</h1>

  <div className={styles.root}>
        <div className={styles.container}>
          {projectData.map((project, index) => (
            <ProjectCard key={index} title={project.title} description={project.description} />
          ))}
        </div>
      </div>
  <Footer />
  </>
  );
}

export default Page;
