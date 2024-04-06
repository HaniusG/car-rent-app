import React, { ReactNode } from 'react'
import styles from './InfoBlock.module.scss'

interface InfoBlockProps {
  children: ReactNode;
  column: boolean;
}

const InfoBlock:React.FC<InfoBlockProps> = ({children, column}) => {
  return (
    <div className={styles.infoBlock}>
      {children}
    </div>
  )
}

export default InfoBlock