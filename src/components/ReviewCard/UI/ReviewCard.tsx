import React, { ReactNode } from 'react'
import styles from './ReviewCard.module.scss'

interface ReviewCardProps{
  children: ReactNode;
}

const ReviewCard:React.FC<ReviewCardProps> = ({children}) => {
  return (
    <div className={styles.reviewCard}>{children}</div>
  )
}

export default ReviewCard