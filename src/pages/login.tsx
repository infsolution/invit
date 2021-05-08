import React from 'react'
import {Grid, Row,Col} from 'react-styled-flexboxgrid'
import { Footer } from '../components/Footer';
import {FormLogin} from '../components/form/FromLogin'
import { Navbar } from '../components/Navbar';
import styles from '../styles/pages/Login.module.css';
function Login(){
return(
    <>
    <section className={styles.login}>
        <Navbar/>
        <FormLogin/>
    </section>
    <Footer/>
    </>

)
}

export default Login


