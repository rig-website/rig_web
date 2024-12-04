import styles from '../contact/contact.module.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Contact = () => {
  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.header}>
          <h1>Contact Us</h1>
          <p>Get in touch with us for any queries or information.</p>
        </div>

        <div className={styles.downmain}>
          <div className={styles.contactInfo}>
            <h2>Contact Information</h2>
            <div className={styles.infoItem}>
              <h3>Phone</h3>
              <p>0495 228 6444</p>
            </div>
            <div className={styles.infoItem}>
              <h3>RIG Official Mail ID</h3>
              <p>rig@nitc.ac.in</p>
            </div>
            <div className={styles.infoItem}>
              <h3>Address</h3>
              <p>8WCP+PC5, Central Workshop Rd, Inside NIT Calicut Campus, Kattangal, Kerala 673601</p>
            </div>
            <div className={styles.infoItem}>
              <h3>Team Captain: Karthik Jayaraj</h3>
              <p>Email: <a href="mailto:karthikjayarajkrply@gmail.com">karthikjayarajkrply@gmail.com</a></p>
              <p>Phone: 9778532290</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
