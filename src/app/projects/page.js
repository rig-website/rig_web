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
    {
      name: "Agribot Robot",
      description: `This project is dedicated to the development of an advanced, lightweight, energy-efficient, and fully autonomous agricultural vehicle, designed to perform a range of essential tasks such as tilling, harvesting, threshing, planting, and pesticide spraying. Core objectives encompass the enhancement of a weed detection algorithm to precisely identify weed coordinates and the implementation of a robust 3D-mapping system to detect field irregularities, facilitating detailed mapping. Furthermore, the project incorporates advanced path planning capabilities, enabling the vehicle to autonomously navigate and adeptly avoid obstacles like trees and swampy areas.
                            <br/>
                            To refine precision in navigation, an Inertial Measurement Unit (IMU) is integrated, complementing the GPS-based system for optimal route determination. This holistic approach to autonomous agricultural operations exemplifies the project's dedication to technological innovation and efficiency within the agricultural sector.
                            <br/>
                            In addition to these functionalities, the project addresses critical challenges, such as safeguarding crops against weeds and diseases that can significantly impact yield. The initial phase of treatment involves disease and weed identification, which is traditionally time-consuming and labor-intensive when done manually. To streamline this process, image processing techniques are employed for plant disease recognition and weed detection. This strategic use of technology not only expedites the identification process but also minimizes the need for extensive manual labor and expertise, further enhancing the project's overall effectiveness in agricultural crop protection.`,
      image: '../card2.jpg',
    },
    {
      name: "Riggu Robot",
      description: `Riggu, a creation by the Robotics Interest Group at NIT Calicut, is a semi-humanoid robot designed to revolutionize healthcare practices. The key innovation lies in its utilization of Simultaneous Localization and Mapping (SLAM) technology, enabling Riggu to autonomously navigate through medical spaces. This feature makes it an invaluable asset for medical professionals, providing support through a combination of cutting-edge technology and user-friendly interfaces.
                            <br/>
                            Equipped with a touchscreen interface and an extensive database, Riggu functions as a comprehensive medical assistant. Its role extends beyond mere navigation – it actively aids doctors in patient identification and decision-making processes. The inclusion of facial recognition and conversational abilities serves a dual purpose: fostering a more personalized interaction between medical staff and the technology, and creating an atmosphere of warmth in healthcare settings.
                            <br/>
                            One of Riggu's standout features is its commitment to practical assistance. Through autonomous navigation, Riggu is capable of retrieving essential items such as needles, demonstrating a tangible and hands-on approach to support medical professionals in their daily tasks. This capability adds a layer of efficiency to healthcare settings, allowing doctors to focus more on patient care. As a result, Riggu stands as a promising example of how robotics can enhance and transform the medical field.`,
      image: '../card1.jpg',
    },
    {
      name: "AUV Robot",
      image: '../card5.jpg',
      description: `The AUV Varuna being a pride of our Technical extravaganza is an underwater robot developed with a primary objective of fostering advancements in underwater autonomous systems. Boasting five degrees of freedom, this autonomous vehicle exhibits prowess in executing a spectrum of tasks, including object detection, precise path following, torpedo launching, reconnaissance missions, marker deployment, as well as autonomously undertaking tasks such as ship cleaning and managing small-scale water bodies. AUV is driven through water by propulsion system,controlled by onboard and the body made out of waterproof hull of acrylic.
                            <br/>
                            Computer and manoeuvrable in three dimensions. The given system is equipped with sensors, in this case, to maintain temperature inside the hull, monitor pressure, and prevent any kind of leakage. Mounted with 2 Microsoft LifeCam Cinema HD webcams helps in efficient image data acquisition from the environment which is used to do various tasks such as object detection, manipulation...etc. 
                            <br/>
                            AUVs are of great help for mapping underwater which is out of the reach of humans. 
                            This technical marvel is poised to play a pivotal role in shaping the future landscape of underwater robotics research and development.`
    },
    {
      name: "Multi Robot UAV Robot",
      image: '../card3.jpg',
      description: `According to the report of United Nations global production must be increased by at least 70% to feed a growing population. ’Smart Farming’ -the term refers to the practice of farming more efficiently with the assistance of advanced technology that has been successful in increasing the overall production.
      <br/>The soil parameters like fertility, moisture etc.. can be monitored by collecting data from the soil using Unmanned Aerial Vehicles(UAVs). The major disadvantage of conventional UAVsused in smart farming is that their rotational and translational dynamics are coupled and hence they cannot directly interact with the crops. This limitation can be solved by introducing fully/over-actuated multi-rotor UAVs. This can be achieved by using fixed rotors at different orientations or actively tilting the rotors by separate actuation. Thus, the UAVs can collect data from the soil, collect uninterrupted continuous images of the field, and do airborne manipulations. However, existing fully actuated UAVs are not optimised for usage in agricultural fields. They have very less flight time and low payload capacity. This project aims the development of a fully actuated multi-rotor UAV for soil map generation through on-the-go soil data collection. The main objective of this project is to generate a soil map by soil data collection using a separate sensor-based measurement system using a fully actuated multi-rotor UAV.`
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
