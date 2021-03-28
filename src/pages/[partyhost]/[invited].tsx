import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import  styles  from '../../styles/pages/Invited.module.css'
import {Invit} from '../../components/Invit'
import {Rsvp} from  '../../components/Rsvp'
import {Information} from  '../../components/Information'
import {Message} from  '../../components/Message'
import {Galery} from  '../../components/Galery'
import {Footer} from '../../components/Footer'
const Invited: React.FC = () => {
    const router = useRouter()
    const { invited } = router.query
  return (
    <div className={styles.container} >
      <Head>
        <title>Convite para {invited}!</title>
      </Head>
        <h1>
          Para {invited}
        </h1>
        <Invit />
        <Rsvp />
        <Information/>
        <Message />
        <Galery />
        <Footer />

    </div>
  )
}

export default Invited
