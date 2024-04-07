import React from "react";
import GreyContainer from "../../GreyContainer";
import Container from "../../Container";
import InfoHeader from "../../InfoHeader";
import styles from "./Testimonials.module.scss";
import ReviewCard from "../../ReviewCard";
import revstyles from "../../ReviewCard/UI/ReviewCard.module.scss";

const Testimonials = () => {
  return (
    <GreyContainer>
      <Container>
        <InfoHeader>
          <h3>Reviewed by People</h3>
          <h1>Client's Testimonials</h1>
          <p>
            Discover the positive impact we've made on the our clients by
            reading through their testimonials. Our clients have experienced our
            service and results, and they're eager to share their positive
            experiences with you.
          </p>
        </InfoHeader>

        <div className={styles.reviewCardWrapper}>
          <ReviewCard>
            <p>
              "We rented a car from this website and had an amazing experience!
              The booking was easy and the rental rates were very affordable. "
            </p>

            <div className={revstyles.reviewerInfo}>
              <div className={revstyles.imgDiv}>
                <img src="Car-images/reviews/img1.jpg" alt="" />
                <div>
                  <h4>Parry Hotter</h4>
                  <h5>Yerevan</h5>
                </div>
              </div>
            </div>
          </ReviewCard>

          <ReviewCard>
            <p>
            "The car was in great condition and made our trip even better. Highly recommend for this car rental website!"
            </p>

            <div className={revstyles.reviewerInfo}>
              <div className={revstyles.imgDiv}>
                <img src="Car-images/reviews/img2.jpg" alt="" />
                <div>
                  <h4>Ron Rizzly</h4>
                  <h5>Ashtarak</h5>
                </div>
              </div>
            </div>
          </ReviewCard>
        </div>
      </Container>
    </GreyContainer>
  );
};

export default Testimonials;
