import React, { ReactNode } from 'react'
import styles from './GreyContainer.module.scss'

interface GreyContainerProps{
  children: ReactNode;
}

const GreyContainer:React.FC< GreyContainerProps> = ({children}) => {
  return (
    <div className={styles.greyContainer}>{children}</div>
  )
}

export default GreyContainer