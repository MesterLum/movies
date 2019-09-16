import {
    SET_MOVIES,
    SET_ERROR_MOVIES,
    FILTER_MOVIES
} from '../actions/actionTypes'

const initialState = {
    movies: [],
    error: "",
    titleFilter: ""
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