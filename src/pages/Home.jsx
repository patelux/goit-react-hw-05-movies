import { Container, MovieList, Section } from 'components';
import { fetchMovies } from 'service/api';
import { useEffect, useState } from 'react';


export const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    fetchMovies().then((data) => {
      setMovies(data.results);
    })
    .catch(error => {setError(error.message);})
    .finally(() => {
      setIsLoading(false);
    });
  }, [])
console.log(movies);


  return (
    <Section>
      <Container>
        {isLoading && <Loader />}
        <MovieList movies={movies} />
        {error && <p>Error: {error.message}</p>}
      </Container>
    </Section>
  );
};
