import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCast } from 'service/api';

import  Loader  from '../Loader/Loader';
import { Image } from '../MovieInfo/MovieInfo.styled';
import {Container, CastGrid, CastItem, Text} from 'components';

export  default function Cast() {
  const [details, setDetails] = useState([]);
  
  const [status, setStatus] = useState('idle');
    const { movieId } = useParams();
    
    useEffect(() => {
      async function fetchCast() {
        setStatus('LOADING');
        try {
          setStatus('FULFILLED');
          const response = await fetchMovieCast(movieId);
          setDetails([...response.cast]);
        } catch(error) {
          setStatus({ status: 'REJECTED' });
        }
      }
      fetchCast(movieId);
    }, [movieId]);

  console.log('details', details);
  console.log('movieId', movieId);
 

  return (
    <>
    <Container>
      {status === 'LOADING' && <Loader />}
        <CastGrid>
        {Boolean(details) &&
          details.map(el => {
            return (
              <CastItem key={el.id}>
                {Boolean(el.profile_path) && (
                  <Image
                    src={`https://image.tmdb.org/t/p/w500/${el.profile_path} `}
                    alt="{el.name}"
                  />
                )}
                <Text>{el.name}</Text>
                <Text>{el.character}</Text>
              </CastItem>
            );
          })}
          </CastGrid>
  </Container>
   </>
  );
}
