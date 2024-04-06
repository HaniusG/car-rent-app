import React from "react";
import Container from "../../Container";
import styles from "./TripPlanInfo.module.scss";
import InfoBlock from "../../InfoBlock";
import InfoHeader from "../../InfoHeader";

const TripPlanInfo = () => {
  return (
    <Container>
      <div className={styles.planTrip}>
        <InfoHeader>
          <h3>Plan your trip now</h3>
          <h1>Quick & easy car rental</h1>
        </InfoHeader>

        <div className={styles.infoContainer}>
          <InfoBlock column={true}>
            <img src="Car-images/planning-info/img1.png" alt="" />
            <div className="textInfo">
              <h2>Select car</h2>
              <p>
                We offers a big range of vehicles for all your driving needs. We
                have the perfect car to meet your needs
              </p>
            </div>
          </InfoBlock>

          <InfoBlock column={true}>
            <img src="Car-images/planning-info/img2.png" alt="" />
            <div className="aaa">
              <h2>Contact Operator</h2>
              <p>
                Our knowledgeable and friendly operators are always ready to
                help with any questions or concerns
              </p>
            </div>
          </InfoBlock>

          <InfoBlock column={true}>
            <img src="Car-images/planning-info/img3.png" alt="" />
            <div className="aaa">
              <h2>Let's Drive</h2>
              <p>
                Whether you're hitting the open road, we've got you covered with
                our wide range of cars
              </p>
            </div>
          </InfoBlock>
        </div>
      </div>
    </Container>
  );
};

export default TripPlanInfo;
