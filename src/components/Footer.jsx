import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaPhoneSlash,
  FaMailBulk,
  FaSearchLocation,
} from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import styles from "../../styles/footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.col}>
            <h4>Company Info</h4>
            <ul>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Carrier</a>
              </li>
              <li>
                <a href="#">We are hiring</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Legal</h4>
            <ul>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Carrier</a>
              </li>
              <li>
                <a href="#">We are hiring</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Features</h4>
            <ul>
              <li>
                <a href="#">Business Marketing</a>
              </li>
              <li>
                <a href="#">User Analytic</a>
              </li>
              <li>
                <a href="#">Live Chat</a>
              </li>
              <li>
                <a href="#">Unlimited Support</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Resources</h4>
            <ul>
              <li>
                <a href="#">IOS & Android</a>
              </li>
              <li>
                <a href="#">Watch a Demo</a>
              </li>
              <li>
                <a href="#">Customers</a>
              </li>
              <li>
                <a href="#">API</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Get In Touch</h4>
            <ul>
              <li
                style={{
                  display: "flex",
                  alignContent: "center",
                  color: "#96bb7c",
                  gap: "8px",
                }}
              >
                <FaPhoneAlt
                  style={{
                    fontSize: "24px",
                  }}
                ></FaPhoneAlt>
                <a href="#">(480) 555-0103</a>
              </li>
              <li
                style={{
                  display: "flex",
                  alignContent: "center",
                  color: "#96bb7c",
                  gap: "8px",
                }}
              >
                <IoLocationSharp
                  style={{
                    fontSize: "24px",
                  }}
                ></IoLocationSharp>
                <a href="#">
                  4517 Washington Ave. Manchester, <br /> Kentucky 39495
                </a>
              </li>
              <li
                style={{
                  display: "flex",
                  alignContent: "center",
                  color: "#96bb7c",
                  gap: "8px",
                }}
              >
                <CiMail
                  style={{
                    fontSize: "24px",
                  }}
                ></CiMail>
                <a href="#">debra.holt@example.com</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.bottomfooter}>
        <div className={styles.copyright}>
          <h5>Made With Love By Figmaland All Right Reserved </h5>
        </div>
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
    </footer>
  );
};

export default Footer;
