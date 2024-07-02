"use client";

import { useForm } from "react-hook-form";
import style from "../../styles/contactus.module.scss";

const ContactUs = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
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
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            id="email"
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Invalid email address",
              },
            })}
          />
          <button type="submit">Submit</button>
          {errors.email && (
            <p style={{ color: "red" }}>{errors.email.message}</p>
          )}
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
