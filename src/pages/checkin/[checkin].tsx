import React from 'react'
import { InferGetStaticPropsType } from 'next'
import variables from '../../utils/variables'

function Checkin({checked}:InferGetStaticPropsType<typeof getServerSideProps>){
    return(
        <div>
            <p>{checked}</p>
        </div>
    )
}

export default Checkin

export async function getServerSideProps({params}){
    const res = await fetch(`${variables.urls.url}checkin/${params.checkin}`)
    console.log(res.json)
    const {message} = await res.json()
    return {
        props:{
            checked:message,
        }
    }
}
