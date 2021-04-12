import React from 'react'
import Head from 'next/head'
import  styles  from '../styles/pages/Home.module.css'
import { Invit } from '../components/Invit'



const Home: React.FC = () => {
  return (
    <div className={styles.container} >
      <Head>
        <title>ConFesta - Sua Fábrica de Festas</title>
        <meta name="viewport"content="width=device-width, initial-scale=1.0" />
      </Head>
        <h1 >
          ConFesta {}
        </h1>
        <p></p>
    </div>
  )
}

export default Home
