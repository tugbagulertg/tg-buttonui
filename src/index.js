import React from 'react'
import styles from './styles.module.css'

export const Button = (props) => {
  return (
    <button {...props} className={`${styles.btn} ${styles[props.type]} ${styles[props.color]}`}>
      {props.text}
    </button>
  )
}
