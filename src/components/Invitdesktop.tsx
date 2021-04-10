import {Invit} from '../components/Invit'
import {Rsvp} from  '../components/Rsvp'
import {Information} from  '../components/Information'
import {Message} from  '../components/Message'
import {Galery} from  '../components/Galery'

export function Invitdesktop(){
  return (
    <div >
        <Invit />
        <Rsvp />
        <Information />
        <Message />
        <Galery />
    </div>
  )
}
