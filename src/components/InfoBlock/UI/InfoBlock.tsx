import React, { ReactNode } from 'react'
import styles from './InfoBlock.module.scss'

interface InfoBlockProps {
  children: ReactNode;
  column: boolean;
}

const InfoBlock:React.FC<InfoBlockProps> = ({children, column}) => {
  let infoBlockClassName: string = styles.infoBlock;

  if (!column) {
    infoBlockClassName += ' ' + styles.horizontal;
  }
  return (
    <div className={infoBlockClassName}>
      {children}
    </div>
  )
}

export default InfoBlock