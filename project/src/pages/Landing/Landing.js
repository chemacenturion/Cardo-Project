import React from 'react';
import { GridRow, GridColumn, GridWrap } from 'emotion-flex-grid';
import background from '../../images/Background.png'
import card from '../../images/card.png'
import './Landing.css'
import Navbar from '../../components/Navbar/Navbar';
import starlets from '../../images/starlets.png'
import arrow from '../../images/arrow.png'

const Landing = () => {
  return (
    < div className='container__landing'>
      <GridRow wrap='wrap'>
        <GridColumn width={7} flex='flex'>
          <GridRow>
            <Navbar />
          </GridRow>
          <GridWrap maxWidth={900}>
            <GridColumn p='xl'>
          <GridRow>
            <img src={starlets} alt='starlets' />
          </GridRow>
          <GridRow>
            <span style={{fontWeight: 300, fontSize: '6rem'}}>All the <span style={{fontWeight: 500, fontSize: '5rem'}}>experience</span> in the new credit card.</span>
          </GridRow>
          <GridRow>
            <img src={arrow} alt='arrow' />
          </GridRow>
          <GridRow>
            <p style={{width: '30vw', fontSize: '1.25rem'}}>Simple transfers, payments for utilities, functional statements, and card settings for which you used to have to go to the branch for are now all accessible with online banking </p>
          </GridRow>
          <GridRow>
            <button style={{
              borderRadius: '5rem', 
              padding:'1rem', 
              backgroundColor: 'black',
              color: 'white',
              width: '10rem',
              border: 'none'
              }}>Order a card</button><span style={{margin: '2rem'}}>How it works &gt;</span>
          </GridRow>
          <GridRow>
            <GridColumn style={{borderRight: '1px solid lightgrey'}}>
              <p>Active users</p>
              <h1>5000+</h1>
            </GridColumn>
            <GridColumn style={{borderRight: '1px solid lightgrey', paddingLeft: '5rem'}}>
              <p>Download</p>
              <h1>30.3k</h1>
            </GridColumn>
            <GridColumn style={{paddingLeft: '5rem'}}>
              <p>Reviews</p>
              <h1>1200+</h1>
            </GridColumn>
          </GridRow>
          </GridColumn>
          </GridWrap>
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
