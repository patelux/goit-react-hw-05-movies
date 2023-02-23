import {  Section,  Container,  BtnBackToPrevious,  GeneralsectionTitle,  GridItem,  CastGrid,} from 'components';
import {MovieInfo} from '../components/MovieInfo/MovieInfo';
import Loader from '../components/Loader/Loader';

import { useEffect, useState } from 'react';
import { NavLink, Outlet, useLocation, useParams } from 'react-router-dom';

import { fetchMovieById } from 'service/api';

export default function MovieDetails() {
  const [details, setDetails] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const location = useLocation();

  const goBackLink = location?.state?.from ?? '/';

  const { movieId } = useParams();

  useEffect(() => {
    setIsLoading(true);
    fetchMovieById(movieId)
      .then(setDetails)
      .catch(error => {
        setError(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [movieId]);

  return (
    <Section>
      <Container>
        {isLoading && <Loader />}
        
          <div
            style={{
              marginBottom: '60px',
              color: '#000',
              letterSpacing: '0.06em',
              textDecoration: 'underline',
              borderColor: 'gray',
            }}
          >
            <NavLink to={goBackLink}>
              <BtnBackToPrevious type="button">
                ← Back to previous
              </BtnBackToPrevious>
            </NavLink>
          </div>

          <MovieInfo
            key={details.id}
            title={details.title}
            poster={details.poster_path}
            date={details.release_date}
            userScore={details.vote_average}
            overview={details.overview}
            genres={details.genres}
          />
        
        {Boolean(error) && <p>Error: {error.message}</p>}
      </Container>
      <Container>
        <GeneralsectionTitle>Additional information</GeneralsectionTitle>

        <div class='addition'>
        <CastGrid>
          <GridItem>
            <NavLink state={location.state} to={`/movies/${movieId}/cast`}>
              Cast
            </NavLink>
          </GridItem>
          <GridItem>
            <NavLink state={location.state} to={`/movies/${movieId}/reviews`}>
              Reviews
            </NavLink>
          </GridItem>
        </CastGrid>

      </div>            
      </Container>
    <Outlet />      
      <Container>
            <NavLink to="/">
        <BtnBackToPrevious>Back to home</BtnBackToPrevious>
        </NavLink>
      </Container>
    </Section>
  );
};

