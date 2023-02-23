import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieRewievs } from 'service/api';

import  Loader  from '../Loader/Loader';
import { Heading, Text, Grid, GridItem } from 'components';

export default function Reviews() {
  const [details, setDetails] = useState([]);
  const [status, setStatus] = useState('idle');
  const { movieId } = useParams();

  useEffect(() => {
    async function getReviews() {
        setStatus('LOADING');
        try {
          setStatus('FULFILLED');
          const response = await fetchMovieRewievs(movieId);
          setDetails([...response.results]);
        } catch(error) {
          setStatus({ status: 'REJECTED' });
        }
      }
      getReviews(movieId);
    }, [movieId]);

  console.log('Reviewsdetails', details);
  console.log('ReviewsmovieId', movieId);

  return (
    [...details].length > 0 ? (
     <>   
    <div>
    {status === 'LOADING' && <Loader />}
      <div>Reviews</div>;
      <Grid>
        {details.map(el => (
        <GridItem key={el.id}>
        <Heading>Author: {el.author}</Heading>
        <Text>{el.content}</Text>
        </GridItem>
        
        ))}
      </Grid>
    </div>
    </>
    ) : (
    <Heading>No reviews</Heading>    
    )
  );
}
