import styles from "../../styles/banner.module.scss";
import image from "../../public/images/hero1.png";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

const Banner = () => {
  return (
    <div style={{ background: "#FDF3F1" }}>
      <div className={styles.banner}>
        <div>
          <h4>Welcome</h4>
          <h1>
            Best Learning <br /> Opportunities
          </h1>
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
          <Image
            className={styles.img}
            src={image}
            width={700}
            height={680}
            alt="image"
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default Banner;
