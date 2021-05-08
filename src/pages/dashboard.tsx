import React, {useEffect} from 'react'
import {GetServerSideProps} from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import  styles  from '../styles/pages/Dashboard.module.css'
import {Invit} from '../components/Invit'

import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import { Table } from "../components/Table";

import Link from 'next/link'
import { Inviteds } from '../components/Inviteds'
import { InferGetStaticPropsType } from 'next'
import varibles from '../utils/variables'
import  withAuth from '../utils/withAuth'
import Cookie from 'js-cookie'
function Dashboard({parties}){
    const router = useRouter()
    useEffect(()=>{
        const token = Cookie.get('token')
        if(!token){
            router.replace('/login')
        }
    },[])
  return (
    <div className={styles.container} >
            <Head>
                <meta name="viewport"content="width=device-width, initial-scale=1.0" />
                <title>Suas Festas - ConFesta</title>
            </Head>
            <Navbar />
            <Table data={parties}/>
            <Footer/>

    </div>
  )
}

export default withAuth(Dashboard)


export  const getServerSideProps: GetServerSideProps = async ({ req }) => {
    const { token } = req.cookies
    if(!token){
        return{
            redirect:{
                destination: '/login',
                permanent: false
            }
        }
    }
    const res = await fetch(`${varibles.urls.url}client/party`,{
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        method: 'GET'
    })

    const parties = await res.json()

    return{
        props:{
            parties:parties.parties
        }
    }
}



