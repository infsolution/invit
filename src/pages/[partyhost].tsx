import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import  styles  from '../styles/pages/Home.module.css'
import {Invit} from '../components/Invit'
const Host: React.FC = () => {
    const router = useRouter()
    const { partyhost } = router.query
  return (
    <div className={styles.container} >
      <Head>
        <meta name="viewport"content="width=device-width, initial-scale=1.0" />
        <title>Convites da {partyhost}</title>
      </Head>
        <h1 >
          Bem Vinda {partyhost}!
        </h1>
        <p>O Site do Taurus</p>
    </div>
  )
}

export default Host
