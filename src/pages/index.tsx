import React from 'react'
import Head from 'next/head'
import  styles  from '../styles/pages/Home.module.css'
const Home: React.FC = () => {
  return (
    <div className={styles.container} >
      <Head>
        <title>Invit - Sua Fábrica de Festas</title>
      </Head>
        <h1 >
          Invit
        </h1>
        <p>Sua fabrica de festas!</p>
    </div>
  )
}

export default Home
