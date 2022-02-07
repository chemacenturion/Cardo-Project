import React from 'react';
import { GridRow, GridColumn } from 'emotion-flex-grid';
import background from '../../images/Background.png'
import card from '../../images/card.png'
import './Landing.css'

const Landing = () => {
  return (
    < div className='container__landing'>
      <GridRow wrap='wrap'>
        <GridColumn width={7} flex='flex'>
          test 
        </GridColumn>
        <GridColumn className='container__desktop' width={5} flex='flex'>
        <div style={{ 
          backgroundImage: `url(${background})`,
          backgroundRepeat: 'no-repeat',
          height: '100vh',
          margin: '0rem 0rem 0rem 11rem'
          }}>
            <div className='container__desktop-card'>
              <img src={card} alt='credit-card' />
            </div>
        </div>
        </GridColumn>
      </GridRow>
    </div>
  )
};

export default Landing;
