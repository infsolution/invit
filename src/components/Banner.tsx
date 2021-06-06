import React from 'react'
import styles from '../styles/components/Banner.module.css'

export function Banner(){

    return(
        <div className={styles.containerBanner}>
            <img src="banner.jpg" alt=""/>
            <div>
            <h1>ConFesta</h1>
            <p>ConFesta é uma plataforma de envio de convites e confirmação pelos convidados </p>
            <p>Crie uma conta gratis e envie convites especiais online para seus convidados</p>
            </div>

        </div>
    )
}
