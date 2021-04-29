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
    const result = await res.json()
    return {
        props:{
            checked:result.data,
        }
    }
}