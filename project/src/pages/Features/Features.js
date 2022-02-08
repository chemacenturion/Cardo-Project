import { GridWrap } from 'emotion-flex-grid';
import React from 'react';
import Cards from '../../components/Cards/Cards';
import './Features.css'

const Features = () => {
  return (
    <div className='container__features'>
      <GridWrap maxWidth={1216}>
        <header className='container__features-header'>Experience The Cardo</header>
        <Cards />
      </GridWrap>
    </div>
  )
};

export default Features;
