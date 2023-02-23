import { Routes, Route, Navigate } from 'react-router-dom';

import Header from '../Header/Header';
import Cast from '../Cast/Cast';
import Reviews from '../Reviews/Reviews';
import  Home from '../../pages/Home';
import  Movies from '../../pages/Movies';
import  MovieDetails from '../../pages/MovieDetails';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />} />
        <Route path="/movies/:movieId/cast" element={<Cast />}/>
        <Route path="/movies/:movieId/reviews" element={<Reviews/>} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace={true} />} />
    </Routes>
  );
};
// 
// const LazyHeader = lazy(() => import('../Header/Header'));
// const LazyHome = lazy(() => import('pages'));
// const LazyMovies = lazy(() => import('pages'));
// const LazyMovieDetails = lazy(() => import('pages'));
// const LazyCast = lazy(() => import('../Cast/Cast'));
// const LazyReviews = lazy(() => import('../Reviews/Reviews'));

// export const App = () => {
//   return (
//     <Suspense>
//     <Routes>
//       <Route path="/" element={<LazyHeader />}>
//         <Route index element={<LazyHome />} />
//         <Route path="/movies" element={<LazyMovies />} />
//         <Route path="/movies/:movieId" element={<LazyMovieDetails />} />
//         <Route path="/movies/:movieId/cast" element={<LazyCast />}/>
//         <Route path="/movies/:movieId/reviews" element={<LazyReviews/>} />
//       </Route>
//       <Route path="*" element={<Navigate to="/" replace={true} />} />
//     </Routes>
//     </Suspense>
//   );
// };


