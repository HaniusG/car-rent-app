import React from "react";
import styles from "./RentInfo.module.scss";
import Button from "../../Button";
import { FaRegCheckCircle } from "react-icons/fa";
import Container from "../../Container";

const RentInfo = () => {
  return (
    <Container>
      <div className={styles.rentInfo}>
        <div className={styles.textInfo}>
          <h2>Plan your trip now</h2>
          <h1>
            Save <span>big</span> with our car rental
          </h1>
          <p>
            Rent the car of your dreams. Unbeatable prices, unlimited miles,
            flexible pick-up options and much more.
          </p>
          <div className={styles.rentInfoBtns}>
            <Button version="orange">
              <div className={styles.bookRide}>
                Book ride <FaRegCheckCircle />
              </div>
            </Button>
            <Button version="black">{`Learn more >`}</Button>
          </div>
        </div>
        <img src="Car-images/intro/main-car.png" alt="Car Image" />
      </div>
    </Container>
  );
};

export default RentInfo;
