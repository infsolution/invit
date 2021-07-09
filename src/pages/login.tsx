import React from 'react'
import Head from 'next/head'
import { Contacts } from '../components/Contacts';
import { Footer } from '../components/Footer';
import {FormLogin} from '../components/form/FromLogin'
function Login(){
return(
    <>
     <Head>
        <meta name="viewport"content="width=device-width, initial-scale=1.0" />
        <title>ConFeta - Login</title>
    </Head>
    <FormLogin/>
    <Contacts/>
    <Footer/>
    </>

)
}

export default Login


