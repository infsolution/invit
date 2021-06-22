import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from '../styles/pages/Landingpage.module.css'
export function Contacts(){
  return (
    <div className={styles.contactContainerBg}>
      <Container className={styles.contactComponent}>
        <Row>
          <Col xs={12} md={6}>
            <h1>CONFESTA</h1>
            <p>
              Lorem ipsum, or lipsum as it is sometimes known.Lorem ipsum, or
              lipsum as it is sometimes known.
            </p>
            <div>
              <span className={`${styles.fa} fa-solid fa-sunglasses`}></span>
              <span className={`${styles.fa} fa-instagram`}></span>
              <span className={`${styles.fa} fa-linkedin-square`}></span>
            </div>
          </Col>
          <Col xs={12} md={3}>
            <b>Links</b>
            <br />
            <br />
            <h6>Overview</h6>
            <h6>Social Media</h6>
            <h6>Contact</h6>
          </Col>
          <Col xs={12} md={3}>
            <b>Company</b>
            <br />
            <br />
            <h6>Overview</h6>
            <h6>Social Media</h6>
            <h6>Contact</h6>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

