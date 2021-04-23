import React from 'react'
import Head from 'next/head'
import  styles  from '../styles/pages/Home.module.css'
import { Invit } from '../components/Invit'
import { InferGetStaticPropsType } from 'next'

function Home ({cep}:InferGetStaticPropsType<typeof getStaticProps>){
  return (
    <div className={styles.container} >
      <Head>
        <title>ConFesta - Sua Fábrica de Festas</title>
        <meta name="viewport"content="width=device-width, initial-scale=1.0" />
      </Head>
        <h1 >
          ConFesta
        </h1>
        <p></p>

    </div>
  )
}

export default Home


export const getStaticProps = async()=>{
    const res = await fetch('https://viacep.com.br/ws/65631370/json')
    const cep = await res.json()
    return {
        props:{cep}
    }
}
