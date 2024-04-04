import React from "react";
import styles from './Button.module.scss'

interface ButtonProps {
  children: React.ReactNode;
  version: string; 
}

const Button: React.FC<ButtonProps> = ({ children, version }) => {
  let btnClassName: string = styles.defaultButton;
  
  switch(version){
    case 'black':
      btnClassName += ' ' + styles.blackButton;
      break;
    case 'orange':
      btnClassName += ' ' + styles.orangeButton;
      break;
      case 'blue':
        btnClassName += ' ' + styles.blueButton;
        break;
    default:
      break; 
  }

  return <button className={btnClassName}>{children}</button>;
};

export default Button;