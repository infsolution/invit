import React from 'react'
import styles from './styles/Button.module.css'

function Button({children, style=styles.button, ...props }){
    return(
        <button {...props} className={style}>
            {children}
        </button>
    )
}
export default Button
