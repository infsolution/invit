import React from 'react'
import { InferGetStaticPropsType } from 'next'
import variables from '../../utils/variables'
import Checked from '../../components/Checked'

function Checkin({checked}:InferGetStaticPropsType<typeof getServerSideProps>){
    return(
        <div>
            <Checked checked={checked}/>
        </div>
    )
}

export default Checkin

export async function getServerSideProps({params}){
    const res = await fetch(`${variables.urls.url}checkin/${params.checkin}`)
    const {message} = await res.json()
    return {
        props:{
            checked:message,
        }
    }
}
