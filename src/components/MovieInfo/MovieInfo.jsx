import {
  MovieWrapper,
  Poster,
  Image,
  InfoContainer,
  MovieTitle,
  MovieInfoList,
  MovieInfoListEl,
  MovieInfoListItem,
  MovieInfoListValue,
  MovieOverviewTitle,
  MovieOverview,

  
} from './MovieInfo.styled';

export const MovieInfo = ({
  id,
  title,
  poster,
  date,
  userScore=0,
  overview,
  genres = [],
}) => {
  
  const genresArr = genres.map(el => el.name);
  // const userScoreFixed = userScore.toFixed(1);
 
  return (
    
    <MovieWrapper>
      <Poster key={id}>
        <Image src={`https://image.tmdb.org/t/p/w500/${poster}`} alt={title} />
      </Poster>
      <InfoContainer>
        <MovieTitle>
         {title} ({date})
        </MovieTitle>

        <MovieInfoList>
          <MovieInfoListEl>
          <MovieInfoListItem>User Score:</MovieInfoListItem>
          <MovieInfoListValue>
            {userScore.toFixed(0)}%
            </MovieInfoListValue>
        </MovieInfoListEl>
        <MovieInfoListEl>
          <MovieInfoListItem>Genres:</MovieInfoListItem>
          <MovieInfoListValue>
            {[...genresArr].join(', ')}
            </MovieInfoListValue>
        </MovieInfoListEl>
        </MovieInfoList>
        <MovieOverviewTitle>Overview:</MovieOverviewTitle>  
          <MovieOverview>
            {overview}
            </MovieOverview>        
      </InfoContainer>
    </MovieWrapper>
  );
};
