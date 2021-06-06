import React from 'react'
import { InferGetStaticPropsType } from 'next'

function Checkin({checked}:InferGetStaticPropsType<typeof getServerSideProps>){
    return(
        <div>
            <p>{checked}</p>
        </div>
    )
}

export default Checkin

export async function getServerSideProps({params}){
    const res = await fetch(`http://api.confesta.com.br/v1/checkin/${params.checkin}`)
    console.log(res.json)
    const {message} = await res.json()
    return {
        props:{
            checked:message.data,
        }
    }
}
