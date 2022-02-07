import React from 'react';
import Cards from '../../components/Cards/Cards';
import Row from 'react-bootstrap/Row';
import './Features.css'
import Container from 'react-bootstrap/esm/Container';

const Features = () => {
  return (
    <div className='container__features'>
        <Container>
        <header className='container__features-header'>Experience The Cardo</header>
        </Container>
        <Cards /> 
    </div>
  )
};

export default Features;
