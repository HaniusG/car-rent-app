import React from "react";
import Container from "../../Container";
import { CiMail } from "react-icons/ci";
import { BsFillTelephoneOutboundFill } from "react-icons/bs";
import Button from "../../Button";
import styles from './Footer.module.scss'

const Footer = () => {
  return (
    <footer className={styles.footer}>
			<div className={styles.footerWrapper}>
			<div className={`${styles.footerPart} ${styles.weOffer}`}>
        <h2>CAR Rental</h2>
        <p>
          We offers a big range of vehicles for all your driving needs. We have
          the perfect car to meet your needs.
        </p>
        <ul className={styles.contactInfo}>
          <li>
            <BsFillTelephoneOutboundFill />
						<span>(123)-456-789</span>
          </li>
          <li>
            <CiMail />
            <span>carrental@gmail.com</span>
          </li>
        </ul>
      </div>
      
			<div className={styles.footerPart}>
        <h2>COMPANY</h2>
        <ul>
					<li>New York</li>
					<li>Careers</li>
					<li>Mobile</li>
					<li>Blog</li>
					<li>How we work</li>
				</ul>
      </div>

			<div className={styles.footerPart}>
        <h2>WORKING HOURS</h2>
        <ul className={styles.workingHours}>
					<li>Mon-Fri:9:00AM - 9:00PM</li>
					<li>Careers</li>
					<li>Sat: 9:00AM - 19:00PM</li>
					<li>Sun: Closed</li>
				</ul>
      </div>

			<div className={styles.footerPart}>
        <h2>SUBSCRIPTION</h2>
				<p>Subscribe your Email address for latest news & updates.</p>
        <div className={styles.subscription}>
					<input type="text" placeholder="Enter Email Address"/>
					<Button version='orange'>Submit</Button>
				</div>
      </div>
			</div>
    </footer>
  );
};

export default Footer;
