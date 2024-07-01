import Image from "next/image";
import icon1 from "../../public/icons/blackboard.svg";
import icon2 from "../../public/icons/telescope.svg";
import styles from "../../styles/packages.module.scss";
import { FaArrowRight } from "react-icons/fa";

const ApprodablePackages = () => {
  return (
    <div className={styles.package}>
      <div>
        <hr />
        <h2>Approdable Packages</h2>
        <p>
          Problems trying to resolve the conflict <br /> between the two major
          realms of Classical physics: <br /> Newtonian mechanics{" "}
        </p>
        <button>
          Jonin Us
          <FaArrowRight
            id="move"
            style={{ marginLeft: "8px", marginBottom: "-2px" }}
          />
        </button>
      </div>
      <div className={styles.card}>
        <div className={styles.card1}>
          <div className={styles.icard}>
            <div>
              <Image src={icon1} width={32} height={32} alt="icon1"></Image>
            </div>
            <h4>Certified Teacher</h4>
            <hr />
            <p>The gradual accumulation of information about </p>
          </div>
        </div>
        <div className={styles.card1}>
          <div className={styles.icard}>
            <div>
              <Image src={icon1} width={32} height={32} alt="icon1"></Image>
            </div>
            <h4>Certified Teacher</h4>
            <hr />
            <p>The gradual accumulation of information about </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApprodablePackages;
