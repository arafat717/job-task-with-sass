import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import styles from "../../styles/footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "20px 100px 20px 100px ",
        }}
      >
        <div>
          <ul>
            <p>Company info</p>
            <li>
              <a href="#">About us</a>
            </li>
            <li>
              <a href="#">About us</a>
            </li>
            <li>
              <a href="#">About us</a>
            </li>
            <li>
              <a href="#">About us</a>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <p>Company info</p>
            <li>
              <a href="#">About us</a>
            </li>
            <li>
              <a href="#">About us</a>
            </li>
            <li>
              <a href="#">About us</a>
            </li>
            <li>
              <a href="#">About us</a>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <p>Company info</p>
            <li>
              <a href="#">About us</a>
            </li>
            <li>
              <a href="#">About us</a>
            </li>
            <li>
              <a href="#">About us</a>
            </li>
            <li>
              <a href="#">About us</a>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <p>Company info</p>
            <li>
              <a href="#">About us</a>
            </li>
            <li>
              <a href="#">About us</a>
            </li>
            <li>
              <a href="#">About us</a>
            </li>
            <li>
              <a href="#">About us</a>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <p>Company info</p>
            <li>
              <a href="#">About us</a>
            </li>
            <li>
              <a href="#">About us</a>
            </li>
            <li>
              <a href="#">About us</a>
            </li>
            <li>
              <a href="#">About us</a>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <p>Company info</p>
            <li>
              <a href="#">About us</a>
            </li>
            <li>
              <a href="#">About us</a>
            </li>
            <li>
              <a href="#">About us</a>
            </li>
            <li>
              <a href="#">About us</a>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.lowerfooter}>
        <div>
          <h>Made With Love By Figmaland All Right Reserved</h>
        </div>
        <div>
          <a href="https://facebook.com" rel="noopener noreferrer">
            <FaFacebook />
          </a>
          <a href="https://instagram.com" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://twitter.com" rel="noopener noreferrer">
            <FaTwitter />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
