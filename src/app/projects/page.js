import React from 'react';
import styles from '../Projects/project.module.css';
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
    {
      name: "Rubber Tamping Machine",
      image: '../mcard2.jpg',
      description: `In a groundbreaking development for the rubber tapping industry, our latest product introduces an Automatic Tapping Machine with a focus on unparalleled precision and efficiency. At the core of this innovation is an automatic tapper, meticulously engineered to tap rubber with the utmost accuracy, ensuring optimal productivity while safeguarding the tree's cambium through an integrated mechanical sensor. This cutting-edge technology, driven by rack and pinion mechanisms, orchestrates seamless up-and-down and to-and-fro motions. Complementing the automatic tapper is a robust mobile base, featuring a caterpillar track that enables smooth navigation across rough terrains in plantations. Equipped with camera and object sensors, the mobile base ensures the machine moves along a predetermined track from tree to tree, revolutionizing the rubber tapping process with a perfect blend of precision, sustainability, and adaptability to various terrains.`,
    },
    {
      name: "Avibot Robot",
      image: '../mcard3.jpg',
      description: `The designed farming robot serves the purpose of efficient floor egg collection in indoor free-range poultry farms, addressing challenges such as hays and dust. Equipped with advanced sensors and software, the robot employs a novel and gentle end effector—balloon grippers—to pick up eggs without causing impact. The end effector is intricately designed for delicate handling of eggs in a challenging environment. The robot's chassis is constructed from robust aluminum extrusions, providing durability essential for navigating rough terrains commonly found in farms. Its three-wheel configuration allows for tight turns, enhancing maneuverability. The locomotion system is powered by high-torque motors and larger wheels, ensuring the robot can traverse difficult farm conditions effectively. For accurate egg detection, the robot initially employs the Single Shot Detector (SSD) algorithm, a proven method for object detection. This algorithm, integrated into the robot's software, enables precise identification and localization of eggs within the farm environment. The combination of advanced hardware, gentle end effector design, and sophisticated object detection algorithms makes this farming robot an efficient and reliable solution for indoor free-range poultry farms with challenging conditions.`
    },
    {
      name: "Hospital Bed",
      image: '../mcard4.jpg',
      description: `The innovative bed repositioning system is engineered to combat bedsores in bedridden individuals by facilitating controlled movements in both the sagittal and transverse planes. A single motor orchestrates gentle turning on both sides along the sagittal plane, while independent motors manage precise upper and lower body movements in the transverse plane. The system is operated through a user-friendly remote, providing both caretakers and patients with efficient control over adjustments. Notably, the bed's design incorporates customizable link lengths at revolute joints, allowing for adaptation to different patient heights, thus optimizing comfort during repositioning. What sets this solution apart is its cost-effective design, utilizing only three actuators, ensuring affordability and accessibility for a wider population. In essence, this technologically advanced bed repositioning system represents a significant leap in patient care, offering a holistic, customizable, and affordable approach to enhancing the well-being of bedridden individuals while effectively preventing the development of bedsores.`
    },
    {
      name: "Origami bot",
      image: '../mcard5.jpg',
      description: `The soldier's kit utilizes origami techniques for a strong, lightweight, and portable design that transforms into four utilities: boat, tent, shield, and carrying bag. This innovative approach ensures durability while meeting the soldier's diverse needs in the field—offering quick water transportation, a deployable shelter, portable defense capabilities, and convenient transportation when not in use. The kit's technical efficiency underscores its adaptability to the dynamic requirements of military operations.`
    },
    {
      name: "Patient transfer Bed",
      image: '../mcard6.jpg',
      description: `In the pursuit of advancing patient care, our project introduces an innovative Patient Transfer System that seamlessly integrates cutting-edge technology with a mobile base. The system's intelligent design allows for effortless transformations between bed, intermediate, and chair positions, facilitated by a top and bottom rotation mechanism utilizing a lead screw for smooth conversion. A crucial feature is the lifting mechanism powered by an electric car jack, providing an adjustable bed with a height range from 0.55 to 1 meter. The mobile base, equipped with two active wheels at the center and four passive castor wheels at the corners, ensures stability and precise maneuverability. Electronic circuits govern the entire system, employing Cytrone dual-channel motor drivers, an Arduino AtMega, limit switches, and a user-friendly controller with DPST switches and an Arduino joystick dual-axis module. This breakthrough system not only enhances patient comfort during transfers but also prioritizes efficiency, safety, and adaptability, promising to redefine standards in patient care.`
    },
    {
      name: "Quadruped",
      image: '../mcard7.jpg',
      description: `This project embarks on an innovative exploration in robotics, drawing inspiration from the biomechanics of large mammals, particularly elephants. The initiative stems from a meticulous study of elephant locomotion patterns, leading to the adoption of an ample gait for stability—a characteristic feature seen in heavy-weight animals. The chosen gait pattern, distributed weight-bearing, and three-link leg structure contribute significantly to the robot’s stability, diverging from the conventional two-legged models optimized for speed. Moreover, the exploration extends beyond limb mechanics, envisioning a trunk system inspired by snake-like robots, enhancing the robot's manipulation capabilities. This project delve into multidisciplinary aspects of robotics, from theoretical modeling to practical fabrication and control
                            <br/>
                            Future works :-
                            <br/>
                            Perform Fabrication of the Robot (Initial task)
                            <br/>
                            Optimize the timing and trajectory of the gait pattern for maximizing stability and minimizing the energy usage Using the torque calculated using MATLAB a joint torque controller of ROS needs to be implemented Control the leg pattern using RNN
                            <br/>
                            ADAMS model for the entire robot including the trunk`
    }
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
