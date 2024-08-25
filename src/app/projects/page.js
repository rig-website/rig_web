import React from 'react';
import styles from '../projects/project.module.css';
import Navbar from "../components/Navbar";


// Function to handle rendering descriptions with line breaks
const renderDescriptionWithLineBreaks = (description) => {
  return description.split('<br/>').map((text, index) => (
    <React.Fragment key={index}>
      {text}
      <br/>
      <br/>
    </React.Fragment>
  ));
};

// Component to display project details
const Project = ({ name, description, image, index }) => (
  <div className={styles.project}>
    <div className={styles.projectDetails}>
      <h2 className={styles.projectName}><i>{name}:</i></h2>
      <div className={styles.line1}></div>
      <div className={styles.details}>
        {index % 2 === 1 ? (
          <>
            <div className={styles.text}>{renderDescriptionWithLineBreaks(description)}</div>
            <div className={styles.proPhoto}><img src={image} width={350} alt={name} /></div>
          </>
        ) : (
          <>
            <div className={styles.proPhoto}><img src={image} width={350} alt={name} /></div>
            <div className={styles.text}>{renderDescriptionWithLineBreaks(description)}</div>
          </>
        )}
      </div>
    </div>
  </div>
);

// Main component containing project data and rendering project components
const MyComponent = () => {
  const projects = [
    {
      name: "Swab Testing Robot",
      description: "Amidst the ongoing global pandemic, this initiative aims to significantly contribute to risk mitigation and alleviate the burden on healthcare professionals. The project focuses on developing a fully automated robot specifically designed for conducting nasal and oropharyngeal swab tests. Featuring a 5-degree-of-freedom serial manipulator with a flexible end effector, the robotic system's workflow commences with nose detection utilizing a Kinect camera system, complemented by sophisticated image processing algorithms.<br/>The Kinect device, encompassing an RGB camera, an infrared projector, and detector, facilitates real-time data collection on the nose's position. This information guides the manipulator to precisely position the arm for optimal testing. The incorporation of YOLOv5 enhances nose identification accuracy. Furthermore, the integration of force sensors contributes crucial force feedback, ensuring the robot navigates and operates safely.<br/>This pioneering design is distinguished by its proactive safety measures, eliminating the risk of excessive force exertion—a pivotal enhancement in ensuring the safety of the testing process. The utilization of cutting-edge technology and a comprehensive approach to safety underscores the project's potential impact in the realm of automated testing systems.",
      image: '../card4.jpg',
    },
    
  ];

  return (
    <div>
      {projects.map((project, index) => (
        <Project
          key={index}
          index={index}
          name={project.name}
          description={project.description}
          image={project.image}
        />
      ))}
    </div>
  );
};

// Component for mini projects
const MiniComponent = () => {
  const miniProjects = [
    {
      name: "Holonomic Drive with Mecanum Wheel Base",
      image: '../mcard1.jpg',
      description: `The holonomic drive system is a specialized method of locomotion in robotics that allows for omnidirectional movement. Unlike conventional drives that require turning to change direction, holonomic drives can move in any direction without changing the orientation of the robot. This is achieved through specialized wheel configurations or mechanisms like omni wheels or mecanum wheels. Mecanum wheels are equipped with rollers set at an angle of 45 degrees to the main axis, which enable the wheels to generate forces in multiple directions when rotated, allowing for forward, backward, sideways and diagonal motion without necessitating changes in orientation. The overall movement of the base in any direction and rotation can be controlled simultaneously by controlling the direction and speed of each wheel individually. Present control involves use of 4 NodeMCUs to control the 4 motors. Locomotion can be achieved using both keyboard and joystick control.`,
    },

  ];

  return (
    <div>
      {miniProjects.map((project, index) => (
        <Project
          key={index}
          index={index}
          name={project.name}
          description={project.description}
          image={project.image}
        />
      ))}
    </div>
  );
};

// Main page component
function Page() {
  return (
    <div className={styles.root}>
      <Navbar />
      <div className={styles.backbox}>
        <span className={styles.title}>OUR PROJECTS</span>
        <div className={styles.dots}>
          {[...Array(12)].map((_, index) => (
            <div key={index} className={styles.dot}></div>
          ))}
        </div>
        <i><b className={styles.b}>"Driven by Innovation, Fueled by Passion. Explore the Boundless Horizons of Robotics."</b></i>
        <div className={styles.contain}>
          <span className={styles.rigprojects}>RIG PROJECTS</span>
          <div><img src="../project-robot.png" className={styles.robot} alt="Robot" /></div>
        </div>
      </div>
      <div className={styles.proSect}>
        <h1 className={styles.mjrPro}>MAJOR PROJECTS</h1>
        <div className={styles.divLine}><div className={styles.line}></div></div>
        <MyComponent />
      </div>
      <div className={styles.proSect}>
        <h1 className={styles.mjrPro}>MINI PROJECTS</h1>
        <div className={styles.divLine}><div className={styles.line}></div></div>
        <MiniComponent />
      </div>
    </div>
  );
}

export default Page;
