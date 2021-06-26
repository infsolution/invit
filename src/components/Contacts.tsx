import Link from "next/link";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from '../styles/pages/Landingpage.module.css'
export function Contacts(){
  return (
    <div className={styles.contactContainerBg}>
      <Container className={styles.contactComponent}>
        <Row>
          <Col xs={12} md={6}>
            <h1 className={styles.link}>
              <Link href="/">
                <a>
              CONFESTA
                </a>
              </Link>
            </h1>
            <p className={styles.link}>
              Sua Fábrica de Festas! 
              <br/>
              Experimente uma nova forma de convidar e agregue valor e sofisticação a seus eventos.
              <br/>
              <Link href="/" >
                <a >
                Conheça a ConFesta
                </a>
              </Link>
              
            </p>
            <div>
              <span className={`${styles.fa} fa-solid fa-sunglasses`}></span>
            </div>
          </Col>
          <Col xs={12} md={3}>
            <b>Informações</b>
            <br />
            <br />
            <h6 className={styles.link}>
              <Link href="/">
                <a>
                  Sobre a ConFesta
                </a>
              </Link>
            </h6>
            <h6 className={styles.link}>
              <Link href="/">
                <a>
                  Parcerias
                </a>
              </Link>
            </h6>
            <h6 className={styles.link}>
              <Link href="/">
                <a>
                  Contatos
                </a>
              </Link>
            </h6>
          </Col>
          <Col xs={12} md={3}>
            <b>Ajuda</b>
            <br />
            <br />
            <h6 className={styles.link}>
              <Link href="/">
                <a>
                  Como fazer um convite
                </a>
              </Link>
            </h6>
            <h6 className={styles.link}>
              <Link href="/">
                <a>
                  Modelos de convites
                </a>
              </Link>
            </h6>
            <h6 className={styles.link}>
              <Link href="/">
                <a>
                  Perguntas frequentes
                </a>
              </Link>
            </h6>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

