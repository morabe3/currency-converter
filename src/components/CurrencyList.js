import { Container, Row, Col, } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

export const CurrencyList = ({ currencies }) => {
    return (
        <Container className='m-5'>
            <Row className='list-heading p-2'>
                <Col>
                    <span className='list-title'>Currency</span>
                </Col>
                <Col>
                    <span className='list-title'>Market Value</span>
                </Col>
            </Row>
            {currencies.map((currency, index) => (
                <Row key={index} className='p-2 list-item'>
                    <Col>
                        {currency.symbol}
                    </Col>
                    <Col>
                        {currency.last}
                    </Col>
                </Row>
            ))}
        </Container>
    )
}
