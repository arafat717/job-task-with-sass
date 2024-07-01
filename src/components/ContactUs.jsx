import style from "../../styles/contactus.module.scss";

const ContactUs = () => {
  return (
    <div className={style.contact}>
      <div>
        <h4>Newsletter</h4>
        <h2>Watch our Courses</h2>
        <p>
          Problems trying to resolve the conflict between <br /> the two major
          realms of Classical physics: Newtonian mechanics
        </p>
      </div>
      <div className={style.field}>
        <input type="email" defaultValue="Yout Email" />
        <button>Subscribe</button>
      </div>
    </div>
  );
};

export default ContactUs;
