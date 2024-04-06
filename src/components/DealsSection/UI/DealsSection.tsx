import React from 'react'
import Container from '../../Container'
import styles from './DealsSection.module.scss'
import InfoHeader from '../../InfoHeader'
import Button from '../../Button'
import InfoBlock from '../../InfoBlock'

const DealsSection = () => {
  return (
    <Container>
      <div className={styles.dealsSection}>
        <img src="Car-images/deals/img1.png" alt="" />
        <div className={styles.dealsInfo}>
          <div className={styles.discoverDet}>
          <InfoHeader>
            <h3>Why Choose Us</h3>
            <h1>Best valued deals you will ever find</h1>
            <p>Discover the best deals you'll ever find with our unbeatable offers. We're dedicated to providing you with the best value for your money, so you can enjoy top-quality services and products without breaking the bank. Our deals are designed to give you the ultimate renting experience, so don't miss out on your chance to save big.</p>
          </InfoHeader>
          <Button version='orange'>{`Find Details >`}</Button>
          </div>

          <div className={styles.infoBockSection}>
            <InfoBlock column = {false}>
                <img src="Car-images/pricing-info/img1.png" alt="" />
                <div className='textInfo'>
                  <h2>Cross Country Drive</h2>
                  <p>Take your driving experience to the next level with our top-notch vehicles for your cross-country adventures.</p>
                </div>
            </InfoBlock>

            <InfoBlock column = {false}>
                <img src="Car-images/pricing-info/img2.png" alt="" />
                <div className='textInfo'>
                  <h2>All Inclusive Pricing</h2>
                  <p>Get everything you need in one convenient, transparent price with our all-inclusive pricing policy.</p>
                </div>
            </InfoBlock>

            <InfoBlock column = {false}>
                <img src="Car-images/pricing-info/img3.png" alt="" />
                <div className='textInfo'>
                  <h2>No Hidden Charges</h2>
                  <p>Enjoy peace of mind with our no hidden charges policy. We believe in transparent and honest pricing.</p>
                </div>
            </InfoBlock>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default DealsSection