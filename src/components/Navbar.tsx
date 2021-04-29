import styles from "../styles/components/Navbar.module.css";
import {Grid, Row,Col} from 'react-styled-flexboxgrid'
import Link from 'next/link'
export function Navbar(){
    return(
        <div className={styles.navbarContainer}>
            <Grid>
            <Row>
                <Col xs={12} sm={12} md={2} lg={2}>
                    <Link href="/" >
                        <div className={styles.linkHome}>
                        <a >ConFesta</a>
                        </div>
                    </Link>
                </Col>
                <Col xs={12} sm={12} md={2} lg={2}>
                    <Link href="/presents">
                        <a>Presentes</a>
                    </Link>
                </Col>
                <Col xs={12} sm={12} md={2} lg={2}>
                    <Link href="/inviteds">
                        <a>Convidados</a>
                    </Link>
                    </Col>
                <Col xs={12} sm={12} md={2} lg={2}>
                    <Link href="/party">
                        <a>Festa</a>
                    </Link>
                </Col>
            </Row>
            </Grid>
        </div>
    )
}
