import React from 'react'
import styles from './styles/Input.module.css'

function Input({label, type, name, style=styles, onChange=null}){
    return( <div>
                <label htmlFor={name} className={style.label}>{label}</label>
                <input  id={name} name={name} className={style.input} type={type} onChange={onChange}/>
            </div>
    )
}
export default Input
