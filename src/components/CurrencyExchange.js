import { Container, Row, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

export const CurrencyExchange = ({ currencies }) => {
    return (
        <Container className='m-5'>
            <Row className='p-2'>
                <Col className='d-flex justify-content-center'>
                    <span className='exchange-title'>Convert To Bitcoin</span>
                </Col>
            </Row>
        </Container>
    )

}
