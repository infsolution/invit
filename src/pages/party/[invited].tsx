import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import  styles  from '../../styles/pages/Invited.module.css'
import {Invit} from '../../components/Invit'
import {Rsvp} from  '../../components/Rsvp'
import {Information} from  '../../components/Information'
import {Galery} from  '../../components/Galery'
import {Footer} from '../../components/Footer'
import {Navbar} from '../../components/Navbar'
import { useMediaQuery } from 'react-responsive'
import { InferGetStaticPropsType } from 'next'
const address = require('../address')


function Invited({data, invited_name}:InferGetStaticPropsType<typeof getServerSideProps>) {
    const isDesktopOrLaptop = useMediaQuery({query: '(min-width: 1224px)'})
    const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
    const router = useRouter()
    //const { invited } = router.query
    const api_key =  process.env.GOOGLE_API_KEY
    const palce = 'place_id:ChIJZ5XRTng3jgcRhlHxGhe8E60'
    const url_google_maps = `https://www.google.com/maps/embed/v1/place?q=${palce}&key=${api_key}`
  return (
    <div className={styles.containerInvited} >
        <Head>
            <meta name="viewport"content="width=device-width, initial-scale=1.0" />
            <title>Convite para {invited_name}!</title>
        </Head>
        <Navbar />
        <Invit data={data}/>
        <Rsvp data={data}/>
        <Information data={data}/>
        <Galery data={data}/>
        <Footer/>
    </div>
  )
}

export default Invited

  export async function getServerSideProps({params}){
    const res = await fetch(`${address.remote}party/${params.invited}`)
    //const res = await fetch(`http://api.confesta.com.br/v1/party/${params.invited}`)
    const invited = await res.json()
    if (invited.data===null) {
        return {
          notFound: true,
        }
      }
    return {
        props:{
            data:invited.data,
            invited_name:invited.data.invited.name
        }
    }
  }
