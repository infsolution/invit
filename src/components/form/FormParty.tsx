import React from 'react'
import Button from './Button'
import  Input  from './Input'
import styles from './styles/FormParty.module.css'
import Cookie from 'js-cookie'
import variables from '../../utils/variables'
import { useRouter } from 'next/router'
export function FormParty(){
    //const [image, setImage] = React.useState(null);
  //const [createObjectURL, setCreateObjectURL] = React.useState(null);
    const router = useRouter()

    /*const uploadToClient =(event)=>{
        if (event.target.files && event.target.files[0]) {
            const i = event.target.files[0];

            setImage(i);
            setCreateObjectURL(URL.createObjectURL(i));
          }
    }*/

    const handleSubmite = async event =>{
        event.preventDefault()
        const addressBody ={
            zipcode: event.target.zipcode.value,
            street: event.target.street.value,
            number: event.target.number.value,
            district: event.target.district.value,
            city: event.target.city.value,
            state: event.target.state.value,
            country: event.target.country.value
        }
        const partyBody = {
            date: event.target.dia.value,
            local: event.target.local.value,
            hour: event.target.hour.value,
            costume: event.target.costume.value,
            present_store: event.target.present_store.value,
            address_id: null
        }
        try {
            const token = Cookie.get('token')
            if(!token) throw new Error('Error: Token inválido!')
            const addressRes = await fetch(`${variables.urls.url}client/address`,{
                method: 'POST',
                headers:{
                    'Content-Type': 'application/json',
                    Authorization:`Bearer ${token}`
                },
                body:JSON.stringify(addressBody)
            })
            if(!addressRes.ok) throw new Error(`Error: ${addressRes.statusText}`)
            const {address} = await addressRes.json()
            partyBody.address_id= address.id
            //data.append('address_id', address.id)

            const partyRes = await fetch(`${variables.urls.url}client/party`,{
                method: 'POST',
                headers:{
                    'Content-Type': 'application/json',
                    Authorization:`Bearer ${token}`
                },
                body:JSON.stringify(partyBody)
               // body:data
            })
            if(!partyRes.ok) throw new Error(`Error: ${partyRes.statusText}`)
            router.push('/dashboard')
        } catch (error) {
            console.log(error)
        }
    }


    return(
        <div className={styles.containerForm}>
            <div className={styles.backForm}>
                <h1>Criar uma nova festa</h1>
                <form className={styles.form} onSubmit={handleSubmite}>
                    <section>
                        <Input label="Local" type="text" name="local" style={styles}/>
                        <Input label="Data" type="date" name="dia" style={styles}/>
                        <Input label="Hora" type="time " name="hour" style={styles}/>
                        <Input label="Traje" type="text" name="costume" style={styles}/>
                        <Input label="Lista de Presentes" type="text" name="present_store" style={styles}/>
                        {/*<Input label="Convite" type="file" name="file" style={styles}  />*/}
                    </section>
                    <section>
                        <Input label="CEP" type="text" name="zipcode" style={styles}/>
                        <Input label="Rua" type="text" name="street" style={styles}/>
                        <Input label="Número" type="text" name="number" style={styles}/>
                        <Input label="Bairro" type="text" name="district" style={styles}/>
                        <Input label="Cidade" type="text" name="city" style={styles}/>
                        <Input label="Estado" type="text" name="state" style={styles}/>
                        <Input label="País" type="text" name="country" style={styles}/>
                        <button>Criar festa </button>
                    </section>

                </form>
            </div>
        </div>
    )
}
