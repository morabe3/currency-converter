import './App.scss';
import { Container, Row, Col, Tabs, Tab } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { CurrencyList } from './components/CurrencyList'
import { useEffect, useState } from 'react';

function App() {
	const url = 'https://blockchain.info/ticker'
    const [object, setObject] = useState(0)

    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch (url)
            result.json().then(json => {
                setObject(json)
            })
        }
        fetchData()
    }, [])


    const getCurrencies = () => {
        const currencies = []

        Object.values(object).forEach(item => {
            currencies.push(item)
        })
        return currencies
    }

	return (
		<Container fluid className='p-0'>
			<Row className='m-4'>
				<Col className='d-flex justify-content-center'>
					<h1> Currencies </h1>
				</Col>
			</Row>
			<Tabs
				defaultActiveKey='list'
				id='justify-tab-example'
				className='mb-3'
				justify
			>
				<Tab eventKey='list' title='Currency List'>
					<CurrencyList currencies={getCurrencies()} />
					<button onClick={() => Object.values(object).forEach(item => console.log(item))}>get list</button>
				</Tab>
				<Tab eventKey='exchange' title='Currency Exchange'>
					Currency Exchange
				</Tab>
			</Tabs>
		</Container>
	)
}

export default App
