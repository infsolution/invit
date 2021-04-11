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
import {Navbar} from '../../components/Navbar'
import {Invitdesktop} from '../../components/Invitdesktop'
import { useMediaQuery } from 'react-responsive'
import {Grid, Row,Col} from 'react-styled-flexboxgrid'

const Invited: React.FC = () => {
    const isDesktopOrLaptop = useMediaQuery({query: '(min-width: 1224px)'})
    const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
    const router = useRouter()
    const { invited } = router.query
    const api_key =  process.env.GOOGLE_API_KEY
    const palce = 'place_id:ChIJZ5XRTng3jgcRhlHxGhe8E60'
    const url_google_maps = `https://www.google.com/maps/embed/v1/place?q=${palce}&key=${api_key}`
  return (
    <div className={styles.containerInvited} >
        <Head>
            <meta name="viewport"content="width=device-width, initial-scale=1.0" />
            <title>Convite para {invited}!</title>
        </Head>
        <Navbar />
        <Invit name={invited}/>
        <Rsvp />
        <Information />
        <Galery/>
        <Message />
        <Footer/>
    </div>
  )
}

export default Invited
