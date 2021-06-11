import React from 'react'
import  styles  from "./styles/Table.module.css";
import Link from 'next/link'
import Input from '../form/Input';
import Button from '../form/Button';
import variables from '../../utils/variables'
import Cookie from 'js-cookie'
import { useRouter } from 'next/router'
import {Grid, Row,Col} from 'react-styled-flexboxgrid'
export function Table({inviteds, party}){
    const [open, setOpen] = React.useState(false)

    const router = useRouter()

    const sendWhatsapp = async event=>{
        event.preventDefault()
        try {
            const resB = await fetch('https://message.confesta.com.br/api/sessaocf/send-file-base64',{
                method: 'POST',
                headers:{
                    'Content-Type':'application/json',
                    Authorization: `Bearer $2b$10$.S7Otf4otlNE6tJyb6oiUOP3DJWBfqDdDrlBvNJ_VJjfPdtYLkM8y`

                },
                body:JSON.stringify({
                    "phone": `55${event.target.alt}`,
                    "base64": `data:image/jpg;base64,${party.base64}`,
                    "isGroup": false
                })
            })
            const res = await fetch('https://message.confesta.com.br/api/sessaocf/send-message',{
                method: 'POST',
                headers:{
                    'Content-Type':'application/json',
                    Authorization: `Bearer $2b$10$.S7Otf4otlNE6tJyb6oiUOP3DJWBfqDdDrlBvNJ_VJjfPdtYLkM8y`

                },
                body:JSON.stringify({
                    "phone": `55${event.target.alt}`,
                    "message": `A ConFesta tem o prazer de convidá-lo para a festa de 15 anos de Glória Kethely! Para acessar o seu convite virtual e confirmar sua presença clique no link: https://www.confesta.com.br/convidado/${event.target.id}`,
                    "isGroup": false
                })
            })
            const {response} = await res.json()
            if(response){
                console.log(response.message)
            }
        } catch (error) {
            console.log(error)
        }
    }

    const sendAllWhatsapp = async event=>{
        event.preventDefault()
        inviteds.map(invited=>{
            console.log(invited.phone)
        })
    }
    const addInvited = async event =>{
        event.preventDefault()
        const body ={
            name: event.target.name.value,
            phone: event.target.phone.value,
            message: event.target.message.value,
            number_companions: event.target.number_companions.value,
            party_id: party.id
        }
        try {
            const token = Cookie.get('token')
            if(!token) throw new Error('Error: Token inválido!')
            const response = await fetch(`${variables.urls.url}client/invited`,{
                method: 'POST',
                headers:{
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                },
                body:JSON.stringify(body)
            })
            if(!response.ok) throw new Error(`Error: ${response.statusText}`)
            const {invited} = await response.json()
            if(invited){
                setOpen(false)
                router.push(`/festa/${party.id}`)
            }
        } catch (error) {
            console.log(error)
        }
    }


 return (
     <div  className={styles.container}>
          <h2>Seus Convidados</h2>

        <Button onClick={()=>setOpen(!open)} style={styles.buttonForm}>Adicionar convidado</Button>

            { open &&
            <div className={styles.containerForm}>
                <h2>Adicionar convidado</h2>
            <form onSubmit={addInvited}>
                <Grid><Row>
                        <Col xs={12} sm={12} md={6} lg={6}>
                            <Input label="Nome" type="text" name="name" style={styles} />
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={6}>
                            <Input label="Telefone" type="text" name="phone" style={styles} />
                        </Col>
                    </Row>
                    <Row>
                        <Col   xs={12} sm={12} md={6} lg={6}>
                            <Input label="Mensagem" type="text" name="message" style={styles} />
                        </Col>
                        <Col   xs={12} sm={12} md={6} lg={6}>
                            <Input label="Número de acompanhantes" type="number" name="number_companions" style={styles} />
                        </Col>
                    </Row>
                    <Row>
                    <button >Adicionar</button>
                    </Row>
                </Grid>
            </form>
            </div>
            }

            { inviteds.length > 0 && <>
                <Button  style={styles.buttonForm} onClick={sendAllWhatsapp}> Enviar para todos </Button>
            <table className={styles.table}>
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Telefone</th>
                    <th>Confirmação</th>
                    <th>Acompanhantes</th>
                    <th></th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody >
                {inviteds  && inviteds.map(invited=>{
                     return(
                        <tr  key={invited.id}>
                        <td><Link href={`/convidado/${invited.id}`}>
                            <a>
                            {invited.name}
                            </a>
                            </Link>
                        </td>
                        <td>{invited.phone}</td>
                        <td>{invited.confirmation}</td>
                        <td>{invited.number_companions}</td>
                        <td  >
                            <button className={styles.button} onClick={sendWhatsapp} >
                                <img className={styles.image} src="/images/icone_whatsapp.jpg" alt={invited.phone} id={invited.id} />
                            </button>
                        </td>
                        <td>{<button className={styles.button}><img className={styles.image} src="/svg/editar.png" alt=""/></button>}</td>
                        <td>{<button className={styles.button}><img className={styles.image} src="/svg/claro.png" alt=""/> </button>}</td>
                    </tr>
                     )
                })}
    </tbody>
    </table>
    </>}
    {inviteds.length == 0 &&
        <div className={styles.containerNotInvited}><p>Voce ainda não adicionou nenhum
             convidado! Clieque <button onClick={()=>setOpen(!open)}>aqui</button> ou em adicionar convidado!</p></div>
    }
    </div>
 )
}
