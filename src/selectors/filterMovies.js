import { createSelector } from 'reselect'

const getMovies = state =>
    state.movies.movies

const getFilterText = state =>
    state.movies.titleFilter


export const getMoviesWithFilters = createSelector(
    [getMovies, getFilterText],
    (movies, filterText) => {
        let regex = new RegExp(`${filterText}.*`, "i");
        let moviesFiltered = movies.filter(movie => regex.test(movie.title));
        return moviesFiltered
    }
)