import styles from "../styles/components/Navbar.module.css";
import {Grid, Row,Col} from 'react-styled-flexboxgrid'
export function NavMob(){
    return(
        <div className={styles.navbarContainer}>
            <Grid>
            <Row>
                <Col xs={12} sm={12} md={12} lg={12}>
                        <a href="https://confesta.com.br">ConFesta- mobile</a>
                </Col>
            </Row>
            </Grid>
        </div>
    )
}
