import styles from './styles/Checkin.module.css'
import {
    Carousel
}from 'react-bootstrap';
export function Checkin(){
    return(
        <>
            <Carousel className={styles.container}>
                <Carousel.Item>
                    <img
                    className={styles.imgSlide}
                    src="/assets/brind800.jpg"
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3>Celebre os grandes momentos</h3>
                    <p>O acontecimentos mais importante de sua vida devem ser celebrados com seus melhores amigos e familiares</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className={styles.imgSlide}
                    src="/assets/baile.jpg"
                    alt="Second slide"
                    />

                    <Carousel.Caption>
                    <h3>Escolha as pessoas que você gosta</h3>
                    <p>E deixe o trabalho duro com a gente, convidaremos todos e diremos quantos irão!</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className={styles.imgSlide}
                    src="/assets/party.jpg"
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>Preocupe-se com o bolo</h3>
                    <p>Os convidados a gente manda!</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    )
}
