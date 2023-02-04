import React from 'react'
import styles from "./input.module.css"
const Input = ({type, ...rest}) => {
  return <input className={styles.input} type={type ? type:"text"} {...rest}/>
}

export default Input