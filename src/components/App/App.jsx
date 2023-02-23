import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';

const LazyHeader = lazy(() => import('../Header/Header'));
const LazyHome = lazy(() => import('../../pages/Home'));
const LazyMovies = lazy(() => import('../../pages/Movies'));
const LazyMovieDetails = lazy(() => import('../../pages/MovieDetails'));
const LazyCast = lazy(() => import('../Cast/Cast'));
const LazyReviews = lazy(() => import('../Reviews/Reviews'));

export const App = () => {
  return (
    <Suspense>
    <Routes>
      <Route path="/" element={<LazyHeader />}>
        <Route index element={<LazyHome />} />
        <Route path="/movies" element={<LazyMovies />} />
        <Route path="/movies/:movieId" element={<LazyMovieDetails />}>

        <Route path="/movies/:movieId/cast" element={<LazyCast />}/>
        <Route path="/movies/:movieId/reviews" element={<LazyReviews/>} />
        </Route>
      </Route>
      <Route path="*" element={<Navigate to="/" replace={true} />} />
    </Routes>
    </Suspense>
  );
};

