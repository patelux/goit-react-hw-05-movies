import { Grid, GridItem } from 'components';

export const MovieList = ({ movies }) => {
  return (
    <Grid>
      { movies !== undefined && movies.map(({id, title, name}) =>  { return (
        <GridItem key={id}>
          {Boolean(title) ? <span>{title}</span> : <span>{name}</span>}          
        </GridItem>
      )})}
    </Grid>
  );
};

