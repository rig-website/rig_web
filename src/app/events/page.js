import styles from "../events/event.module.css";
import Navbar from "../components/Navbar";
import eventData from '../events/eventData'; 
import Footer from "../components/Footer";

const Page = () => {
  return (
    <div className={styles.root}>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.box}>
          <div className={styles.details}>
            <h1 className={styles.heading}>{eventData.title}</h1>
            <p className={styles.description}>{eventData.description}</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Page;
