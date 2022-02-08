import React, { useEffect, useState} from 'react';
import axios from 'axios';
import { GridRow, GridColumn } from 'emotion-flex-grid';
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
    <>
        {loading && <div>Loading</div>}
        {!loading && (
        <GridRow wrap='wrap'>
        <ul className='container__cards-ul'>
            {features.slice(0,6).map(item => (
            <GridColumn width={[12, 6, 4]} flex='flex'>
              <li className='container__cards-li'>
                <h2>{item.title}</h2>
                  <p>{item.description}</p>
                    <button>{item.button.text}</button>
              </li>
            </GridColumn>
            ))} 
        </ul>
        </GridRow>
    )}
    </>
  )
};

export default Cards;
