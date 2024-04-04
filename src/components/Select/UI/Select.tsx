import React from 'react'
import styles from './Select.module.scss'

export interface SelectProps{
    children: React.ReactNode;
}

const Select:React.FC<SelectProps> = ({children}) => {
  return (
    <div className={styles.select}>{children}</div>
  )
}

export default Select