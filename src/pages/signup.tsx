import React from 'react'
import { Contacts } from '../components/Contacts'
import { Footer } from '../components/Footer'
import { FormUser } from '../components/form/FormUser'
import styles from '../styles/pages/Signup.module.css'
function Signup(){
    return(
        <>

        <FormUser />

        <Contacts/>
        <Footer/>
        </>

    )
}

export default Signup
