import { Grid, GridItem } from 'components';
import { NavLink, Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function MovieList({ movies }) {
  return (
    <>
    <Grid>
      { movies !== undefined && movies.map(({ id, title}) => {return (
        <GridItem>
        <NavLink to={`/movies/${id}`} key={id}>{title.toUpperCase()}</NavLink>
        <Outlet />
        </GridItem>       
      )})}
    </Grid>  
    </>
  );
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string,
    })
  ),
};