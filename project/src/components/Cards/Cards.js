import React, { useEffect, useState} from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Cards.css';

const Cards = () => {

    const [loading, setLoading] = useState(true);
    const [features, setFeatures] = useState([]);

    useEffect(() => {
        const fetchFeatures = async () =>{
          setLoading(true);
          try {
            const {data: response} = await axios.get('https://mocki.io/v1/b9c63035-97c5-40a0-b45c-2abdf5261bdf');
            setFeatures(response);
          } catch (error) {
            console.error(error.message);
          }
          setLoading(false);
        }
    
        fetchFeatures();
      }, []);

  return (
    <Container>
        {loading && <div>Loading</div>}
        {!loading && (
        <Row>
        <ul className='container__cards-ul'>
            {features.slice(0,6).map(item => (
            <Col>
            <li className='container__cards-li'>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <button>{item.button.text}</button>
            </li>
            </Col>
            ))} 
        </ul>
        </Row>
    )}
    </Container>
  )
};

export default Cards;
