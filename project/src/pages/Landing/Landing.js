import React from 'react';
import { GridRow, GridColumn, GridWrap } from 'emotion-flex-grid';
import background from '../../images/Background.png'
import './Landing.css'
import Navbar from '../../components/Navbar/Navbar';
import starlets from '../../images/starlets.png'
import arrow from '../../images/arrow.png'

const Landing = () => {
  return (
    <>
      <GridRow>
        <GridColumn className='container__landing' width={[12, 7]} flex='flex'>
        <GridWrap maxWidth={600}>
          <GridRow>
            <Navbar />
          </GridRow>
            <GridColumn p='xl'>
          <GridRow>
            <img src={starlets} alt='starlets' />
          </GridRow>
          <GridRow>
            <span style={{fontWeight: 300, fontSize: '3.75rem'}}>All the <span style={{fontWeight: 500, fontSize: '4rem'}}>experience</span> in the new credit card.</span>
          </GridRow>
          <GridRow>
            <img style={{width: '6rem'}} src={arrow} alt='arrow' />
          </GridRow>
          <GridRow>
            <p style={{width: '22rem', fontSize: '1.30rem'}}>Simple transfers, payments for utilities, functional statements, and card settings for which you used to have to go to the branch for are now all accessible with online banking </p>
          </GridRow>
          <GridRow>
            <button style={{
              borderRadius: '100px', 
              padding:'20px', 
              backgroundColor: 'black',
              color: 'white',
              width: '200px',
              border: 'none'
              }}>Order a card</button><span style={{margin: '2rem'}}>How it works &gt;</span>
          </GridRow>
          <GridRow>
            <GridColumn style={{borderRight: '1px solid lightgrey'}} p={['s', 'm', 'l', 'xl']}>
              <p>Active users</p>
              <h1>5000+</h1>
            </GridColumn>
            <GridColumn style={{borderRight: '1px solid lightgrey'}} p={['s', 'm', 'l', 'xl']}>
              <p>Download</p>
              <h1>30.3k</h1>
            </GridColumn>
            <GridColumn p={['s', 'm', 'l', 'xl']}>
              <p>Reviews</p>
              <h1>1200+</h1>
            </GridColumn>
          </GridRow>
          </GridColumn>
          </GridWrap>
        </GridColumn>
        <GridColumn className='container__desktop' width={[0, 5]} flex='flex'>
        <div style={{ 
          backgroundImage: `url(${background})`,
          backgroundRepeat: 'no-repeat',
          height: '100%',
          }}>
        </div>
        </GridColumn>
      </GridRow>
    </>
  )
};

export default Landing;
