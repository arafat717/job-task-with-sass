"use client";

import React, { useState } from "react";
import { FaArrowRight, FaBars, FaTimes } from "react-icons/fa";
import styles from "../../styles/navbar.module.scss";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.navbar}>
      <div className={styles.brand}>
        <h1>Brandname</h1>
        <div className={styles.menuIcon} onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
      <nav className={`${styles.navLinks} ${isOpen ? styles.show : ""}`}>
        <ul>
          <li className={styles.title}>
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
      <div className={styles.authButtons}>
        <p className={styles.buttonwobr}>Login</p>
        <button>
          Join Us
          <FaArrowRight style={{ marginLeft: "8px", marginBottom: "-2px" }} />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
