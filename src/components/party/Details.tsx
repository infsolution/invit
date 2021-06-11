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
    const token = window.localStorage.getItem('token')
    const formData = new FormData()
    try {
        formData.append('img', img.raw)
    const response = await fetch(`${variables.urls.url}client/add-invit/${party.id}`,{
        headers: {
            'Authorization': `Bearer ${token}`
        },
        method: 'PUT',
        body:formData
    })
    if(!response.ok) throw new Error(`Error: ${response.statusText}`)
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
            <p><strong>Presentes:</strong><label>{party.present_store}</label></p>
            <p><strong>Covite:</strong> {
                party.invite_path_image &&
                <Link  href={`${varibles.urls.url}download/img/${party.invite_path_image}`}>
                    <a target="_blank">Imagem do convite</a>
                </Link>
                }
                { !party.invite_path_image && <button onClick={()=>setOpenForm(!openForm)}>Adicionar imagem</button>}
                </p>
            {openForm &&
                <form >
                    <input type="file" name="file" id="" onChange={handleImgChange}/>
                    <button onClick={handleSubmit}>Salvar Convite</button>
                </form>
            }
            <p><strong>Número de convidados:</strong><label>{number_companions}</label></p>
        </div>
}
    </>)
}
