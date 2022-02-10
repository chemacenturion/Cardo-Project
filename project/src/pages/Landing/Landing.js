import React from 'react';
import { GridRow, GridColumn } from 'emotion-flex-grid';
import background from '../../images/Background.png'
import './Landing.css'
import Navbar from '../../components/Navbar/Navbar';
import starlets from '../../images/starlets.png'
import arrow from '../../images/arrow.png'
import mobileCard from '../../images/mobileCard.png'
import mobileStars from '../../images/mobileStars.png'

const Landing = () => {
  return (
    <>
      <GridRow>
        <GridColumn className='container__landing'>
          <GridColumn className='container__landing-content'>
            <GridColumn p={['s', 'm']}>
              <Navbar />
            </GridColumn>
            <GridColumn p='xl'>
              <GridColumn p={['s', 'm']}>
                <img src={starlets} alt='starlets' />
                <img className='container__landing-stars' src={mobileStars} alt ='mobile-stars' />
              </GridColumn>
              <GridColumn p={['s', 'm']}>
                <span style={{ fontWeight: 300, fontSize: '3rem' }}>All the <span style={{ fontWeight: 500, fontSize: '3.75rem' }}>experience</span> <br/> in the new credit card.</span>
              </GridColumn>
              <GridColumn p={['s', 'm']}>
                <img style={{ width: '6rem' }} src={arrow} alt='arrow' />
              </GridColumn>
              <GridColumn p={['s', 'm']}>
                <p className='landing__paragraph'>Simple transfers, payments for utilities, functional statements, and card settings for which you used to have to go to the branch for are now all accessible with online banking </p>
              </GridColumn>
              <GridColumn p={['s', 'm']}>
                <button style={{
                  borderRadius: '100px',
                  padding: '20px',
                  backgroundColor: 'black',
                  color: 'white',
                  width: '10rem',
                  border: 'none',
                  fontWeight: 500
                }}>Order a card</button><span style={{ marginLeft: '0.5rem', fontWeight: 500 }}>How it works &gt;</span>
              </GridColumn>
              <GridRow className='container__landing-stats'>
                <GridColumn p={['s', 'm']}>
                  <p>Active users</p>
                  <h1>5000+</h1>
                </GridColumn>
                <GridColumn style={{ borderRight: '1px solid lightgrey', borderLeft: '1px solid lightgrey' }} p={['s', 'm']}>
                  <p>Download</p>
                  <h1>30.3k</h1>
                </GridColumn>
                <GridColumn p={['s', 'm']}>
                  <p>Reviews</p>
                  <h1>1200+</h1>
                </GridColumn>
              </GridRow>
              <GridColumn>
                <img className='landing__card' src={mobileCard} alt='mobile-card' />
              </GridColumn>
            </GridColumn>
          </GridColumn>
        </GridColumn>
        <GridColumn className='container__desktop'>
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
