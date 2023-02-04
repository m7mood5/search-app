import React from 'react'
import styles from "./container.module.css"
const container = ({children}) => {
  return (
    <div className={styles.container}>{children}</div>
  )
}

export default container