import React from 'react'
import Head from 'next/head'
import  styles  from '../styles/pages/Home.module.css'
import { useMediaQuery } from 'react-responsive'
import { InferGetStaticPropsType } from 'next'
import { Footer } from '../components/Footer'
import { Navbar } from '../components/Navbar'
import { Banner } from '../components/Banner'

function Home (){
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-device-width: 1224px)'
      })
      const isBigScreen = useMediaQuery({ query: '(min-device-width: 1824px)' })
      const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
      const isTabletOrMobileDevice = useMediaQuery({
        query: '(max-device-width: 1224px)'
      })
      const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
  return (
    <div className={styles.container} >
      <Head>
        <title>ConFesta - Sua Fábrica de Festas</title>
        <meta name="viewport"content="width=device-width, initial-scale=1.0" />
      </Head>
        <Navbar/>
        <Banner />
        <Footer />
    </div>
  )
}

export default Home


/*export const getStaticProps = async()=>{
    const res = await fetch('https://viacep.com.br/ws/65631370/json')
    const cep = await res.json()
    return {
        props:{cep}
    }
}*/
