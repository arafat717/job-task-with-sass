import Image from "next/image";
import img1 from "../../public/images/person1.jpg";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import styles from "../../styles/OurTeachers.module.scss";

const OurTeachers = () => {
  return (
    <div className={styles.team}>
      <div className={styles.dev1}>
        <h4>Team</h4>
        <h1>Get Quality Education</h1>
        <p>
          Problems trying to resolve the conflict between <br /> the two major
          realms of Classical physics: Newtonian mechanics{" "}
        </p>
      </div>
      <div className={styles.dev2}>
        <div className={styles.card}>
          <div>
            <Image
              className={styles.img}
              src={img1}
              width={241}
              height={231}
              alt="image1"
            ></Image>
          </div>
          <div className={styles.cardbody}>
            <h2>Julian Jameson</h2>
            <p>Profession</p>
            <div className={styles.social}>
              <a href="https://facebook.com" rel="noopener noreferrer">
                <FaFacebook className={styles.icon} />
              </a>
              <a href="https://instagram.com" rel="noopener noreferrer">
                <FaInstagram className={styles.icon} />
              </a>
              <a href="https://twitter.com" rel="noopener noreferrer">
                <FaTwitter className={styles.icon} />
              </a>
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <div>
            <Image
              className={styles.img}
              src={img1}
              width={241}
              height={231}
              alt="image1"
            ></Image>
          </div>
          <div className={styles.cardbody}>
            <h2>Julian Jameson</h2>
            <p>Profession</p>
            <div className={styles.social}>
              <a href="https://facebook.com" rel="noopener noreferrer">
                <FaFacebook className={styles.icon} />
              </a>
              <a href="https://instagram.com" rel="noopener noreferrer">
                <FaInstagram className={styles.icon} />
              </a>
              <a href="https://twitter.com" rel="noopener noreferrer">
                <FaTwitter className={styles.icon} />
              </a>
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <div>
            <Image
              className={styles.img}
              src={img1}
              width={241}
              height={231}
              alt="image1"
            ></Image>
          </div>
          <div className={styles.cardbody}>
            <h2>Julian Jameson</h2>
            <p>Profession</p>
            <div className={styles.social}>
              <a href="https://facebook.com" rel="noopener noreferrer">
                <FaFacebook className={styles.icon} />
              </a>
              <a href="https://instagram.com" rel="noopener noreferrer">
                <FaInstagram className={styles.icon} />
              </a>
              <a href="https://twitter.com" rel="noopener noreferrer">
                <FaTwitter className={styles.icon} />
              </a>
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <div>
            <Image
              className={styles.img}
              src={img1}
              width={241}
              height={231}
              alt="image1"
            ></Image>
          </div>
          <div className={styles.cardbody}>
            <h2>Julian Jameson</h2>
            <p>Profession</p>
            <div className={styles.social}>
              <a href="https://facebook.com" rel="noopener noreferrer">
                <FaFacebook className={styles.icon} />
              </a>
              <a href="https://instagram.com" rel="noopener noreferrer">
                <FaInstagram className={styles.icon} />
              </a>
              <a href="https://twitter.com" rel="noopener noreferrer">
                <FaTwitter className={styles.icon} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeachers;
