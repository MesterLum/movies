import {
    SET_MOVIES,
    SET_ERROR_MOVIES,
    FILTER_MOVIES,
    SET_MOVIE,
    SET_ERROR_MOVIE
} from '../actions/actionTypes'

const initialState = {
    movies: [],
    error: "",
    titleFilter: "",
    movie: {},
    errorMovie: ""
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_MOVIES: {
            return {
                ...state,
                movies: action.movies,
                error: ""
            }
        }
        case SET_ERROR_MOVIES: {
            return {
                ...state,
                error: action.error
            }
        }
        case SET_MOVIE: {
            return {
                ...state,
                movie: action.movie,
                error: ""
            }
        }
        case SET_ERROR_MOVIE: {
            return {
                ...state,
                errorMovie: action.error
            }
        }
        case FILTER_MOVIES: {
            return {
                ...state,
                titleFilter: action.text
            }
        }
        default: {
            return state
        }
    }
}