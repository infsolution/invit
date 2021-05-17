import React from 'react'
import { Footer } from '../components/Footer'
import { FormUser } from '../components/form/FormUser'
import { Navbar } from '../components/Navbar'
import styles from '../styles/pages/Signup.module.css'
function Signup(){
    return(
        <>
        <div className={styles.container}>
        <Navbar />
        <FormUser />
        </div>
        <Footer />
        </>

    )
}

export default Signup
