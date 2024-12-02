import React from "react";
import Container from "../../Container";
import styles from "./Header.module.scss";
import Button from "../../Button";

import { BsList } from "react-icons/bs";
import { FaCar } from "react-icons/fa";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <FaCar />
        <div className={styles.logoName}>
          <h1>CAR</h1>
          <span>Rental</span>
        </div>
      </div>
      <nav className={styles.navigation}>
        <div className={styles.openMenu}>
          <BsList />
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Vechicle Models</a>
              </li>
              <li>
                <a href="#">Testimonials</a>
              </li>
              <li>
                <a href="#">Our Team</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
            <div className={styles.authButtons}>
                <Button version="black">Sign In</Button>
                <Button version="orange">Register</Button>
            </div>
        </div>
      </nav>

      <div className={styles.authButtons}>
        <Button version="black">Sign In</Button>
        <Button version="orange">Register</Button>
      </div>
    </header>
  );
};

export default Header;
