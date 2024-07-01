import styles from "../../styles/banner.module.scss";
import image from "../../public/images/hero1.png";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";

const Banner = () => {
  return (
    <div style={{ background: "#FDF3F1" }}>
      <div className={styles.navbar}>
        <div>
          <h1>Brandname</h1>
        </div>
        <nav>
          <ul>
            <li className={styles.tittle}>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="about">Product</a>
            </li>
            <li>
              <a href="shop">Pricing</a>
            </li>
            <li>
              <a href="contact">Contact</a>
            </li>
          </ul>
        </nav>
        <div
          style={{
            display: "flex",
            gap: "40px",
            color: "#96ba7b",
            cursor: "pointer",
          }}
        >
          <p>Login</p>
          <button>
            Jonin Us
            <FaArrowRight style={{ marginLeft: "8px", marginBottom: "-2px" }} />
          </button>
        </div>
      </div>
      <div className={styles.banner}>
        <div>
          <h4>Welcome</h4>
          <h1>Best Learning Opportunities</h1>
          <p>Our goal is to make online education work for everyone</p>
          <div style={{ display: "flex", gap: "10px" }}>
            <button className={styles.btnfilled}>
              Jonin Us
              <FaArrowRight
                style={{ marginLeft: "8px", marginBottom: "-2px" }}
              />
            </button>
            <button className={styles.btnoutline}>Learn more</button>
          </div>
        </div>
        <div>
          <Image src={image} width={500} height={500} alt="image"></Image>
        </div>
      </div>
    </div>
  );
};

export default Banner;
