import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import  styles  from '../styles/pages/Dashboard.module.css'
import {Invit} from '../components/Invit'
import { Navbar } from '../components/Navbar'
import Link from 'next/link'
const Host: React.FC = () => {
    const router = useRouter()
    //const { partyhost } = router.query
  return (
    <div className={styles.container} >
      <Head>
        <meta name="viewport"content="width=device-width, initial-scale=1.0" />
        <title>Convites da</title>
      </Head>
      <Navbar/>

    </div>
  )
}

export default Host
