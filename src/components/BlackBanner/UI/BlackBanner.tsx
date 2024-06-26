import React from 'react'
import Container from '../../Container'
import styles from './BlackBanner.module.scss'

const BlackBanner = () => {
  return (
    <div className={styles.blackBanner}>
      <Container>
        <h1>Save big with our cheap car rental!</h1>
        <h2>Top Airport. Local Suppliers. <span>24/7</span> Support.</h2>
      </Container>
    </div>
  )
}

export default BlackBanner;