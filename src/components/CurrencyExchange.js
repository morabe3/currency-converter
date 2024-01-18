import { Container, Row, Col, Form } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react'

export const CurrencyExchange = ({ currencies }) => {
    const [onClick, setOnClick] = useState(false)

    const calculateResult = ({ Amount, currency }) => {
        const result = `https://blockchain.info/tobtc?currency=${currency}&value=${Amount}`
    }

    return (
        <Container className='m-5'>
            <Row className='p-2'>
                <Col className='d-flex justify-content-center'>
                    <span className='exchange-title'>Convert To Bitcoin</span>
                </Col>
            </Row>
            <Form className='p-5 exchange-form'>
                <Form.Group className="mb-3" controlId="amount">
                    <Form.Label>Amount</Form.Label>
                    <Form.Control type="number" placeholder="Enter Amount" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="amount">
                    <Form.Label>Currency</Form.Label>
                    <Form.Select aria-label="Default select example">
                        {currencies.map((currency, index) => (
                            <option key={index} value={currency.symbol}>{currency.symbol}</option>
                        ))}
                    </Form.Select>
                </Form.Group>
            </Form>
        </Container>
    )

}
