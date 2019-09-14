import {
    SET_MOVIES,
    SET_ERROR_MOVIES
} from '../actions/actionTypes'

const initialState = {
    movies: [],
    error: ""
}

export default (state = initialState, action) => {
    switch(action.type) {
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
        default: {
            return state
        }
    }
}