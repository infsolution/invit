import React from 'react'
import styles from './styles/Input.module.css'

function Input({label, type, name}){
    return( <div>
                <label htmlFor={name} className={styles.label}>{label}</label>
                <input  id={name} name={name} className={styles.input} type={type} />
            </div>
    )
}
export default Input
