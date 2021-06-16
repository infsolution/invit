import styles from "./styles/Details.module.css";
import Link from 'next/link'
import varibles from '../../utils/variables'
import { Inviteds } from "../Inviteds";
import React from 'react'
import variables from "../../utils/variables";
//var fs = require('fs');
export function Details({party}){
    const [openForm, setOpenForm] = React.useState(false)
    const [img, setImg] = React.useState({raw:''})
    let number_companions = 0
    party.inviteds.map(invited=>{
        number_companions += invited.number_companions
    })
    number_companions += party.inviteds.length
    function handleImgChange({target}){
        setImg({raw:target.files[0]})
    }
   const handleSubmit = async event=>{
    event.preventDefault()
    try {
        const token = window.localStorage.getItem('token')
        const formData = new FormData()
        formData.append('file', event.target.file.files[0])
        console.log(formData)
    const res = await fetch(`${variables.urls.url}client/add-invit/${party.id}`,{
        method: 'PUT',
        body:JSON.stringify({name:'Cicero'}),
        headers: {
            //'content-type': 'multipart/form-data',
            'content-type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
    })
    console.log(res)
    if(!res.ok) throw new Error(`Error: ${res.statusText}`)
        alert('Imagen salva com sucesso!')
        window.location.reload()
    } catch (error) {
        console.log(error)
    }
   }
    return (<>{ party &&
        <div className={styles.container}>
            <p><strong>Local:</strong><label>{party.local}</label></p>
            <p><strong>Data:</strong><label>{party.date}</label><strong>Hora:</strong><label>{party.hour}</label></p>
            <p><strong>Traje:</strong><label>{party.costume}</label></p>
            {party.present_store && 
            <p><strong>Presentes:</strong><label>{party.present_store}</label></p>
            }
            <p><strong>Covite:</strong> {
                party.invite_path_image &&
                <Link  href={`${varibles.urls.url}download/img/${party.invite_path_image}`}>
                    <a target="_blank">Imagem do convite</a>
                </Link>
                }
                { !party.invite_path_image && <button onClick={()=>setOpenForm(!openForm)}>Adicionar imagem</button>}
                </p>
            {openForm &&
                <form onSubmit={handleSubmit}>
                    <input type="file" name="file" id=""/>
                    <button>Salvar Convite</button>
                </form>
            }
            <p><strong>Número de convidados:</strong><label>{number_companions}</label></p>
        </div>
}
    </>)
}
