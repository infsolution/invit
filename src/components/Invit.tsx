import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import  styles from '../styles/components/Invit.module.css'
import {Grid, Row,Col} from 'react-styled-flexboxgrid'
import 'bootstrap/dist/css/bootstrap.min.css';
export function Invit({data}){

      const [modal, setModal] = useState(false);

      const toggle = () => setModal(!modal);
    return(
        <Grid>
            <div>
                <Modal isOpen={modal} toggle={toggle} className={styles.invitContainer}>
                <ModalHeader toggle={toggle}>Seu convite {data.invited.name}</ModalHeader>
                    <ModalBody>
                    <img src="/convite-gloria.jpg" alt="" width="340px" height="530px"/>
                    </ModalBody>
                </Modal>
            </div>
            <Row>
                <Col xs={12} sm={12} md={12} lg={12}>
                <h1>Convite para {data.invited.name}</h1>
                </Col>
            </Row>
            <Row>
                <Col xs={12} sm={12} md={12} lg={12}>
                    <div className={styles.invitContainer}>
                        <div>
                            <img src="/convite-gloria.jpg" alt="" onClick={toggle}/>
                        </div>
                    </div>
                    </Col>
            </Row>
        </Grid>
    )
}
