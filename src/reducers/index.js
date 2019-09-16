import { combineReducers } from 'redux';
import app from './app'
import movies from './movies'
import { reducer as formReducer } from 'redux-form'

export default combineReducers({
    app,
    movies,
    form: formReducer
})