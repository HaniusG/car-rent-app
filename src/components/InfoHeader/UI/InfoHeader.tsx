import React, { ReactNode } from 'react'
import styles from './InfoHeader.module.scss'

interface InfoHeaderProps{
  children: ReactNode;
}

const InfoHeader:React.FC<InfoHeaderProps> = ({children}) => {
  return (
    <div className={styles.infoHeader}>
      {children}
    </div>
  )
}

export default InfoHeader