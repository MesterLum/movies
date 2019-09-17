import sweetalert2 from 'sweetalert2'

import {
    SET_MOVIES,
    SET_ERROR_MOVIES,
    FILTER_MOVIES,
    SET_ERROR_MOVIE,
    SET_MOVIE
} from './actionTypes'

import {
    actionLoading
} from './app'

const actionSetMovies = movies => ({
    type: SET_MOVIES,
    movies
})

const actionSetErrorMovies = error => ({
    type: SET_ERROR_MOVIES,
    error
})
const actionSetMovie = movie => ({
    type: SET_MOVIE,
    movie
})

const actionSetErrorMovie = error => ({
    type: SET_ERROR_MOVIE,
    error
})

export const actionFilterMovies = text => ({ type: FILTER_MOVIES, text })

export const dispatchGetMovies = () => dispatch => {
    dispatch(actionLoading())
    fetch(`${process.env.REACT_APP_API_URL}/services/content/list?quantity=2000&order_way=DESC&order_id=200&level_id=GPS&from=0&node_id=43861&region=mexico&api_version=v5.86&authpn=webclient&authpt=tfg1h3j4k6fd7&format=json&region=mexico&device_id=web&device_category=web&device_model=web&device_type=web&device_manufacturer=generic&HKS=9s5hqq76r3g6sg4jb90l38us52`)
        .then(response => response.json())
        .then(data => {
            dispatch(actionLoading())
            if (data.status === "1") {
                sweetalert2.fire('Tenemos un problema!', "No pudimos traer la información del servidor", "error")
                dispatch(actionSetErrorMovies("Algo ha ido mal"))
            } else if (data.status === "0") {
                dispatch(actionSetMovies(data.response.groups))
            }

        })
        .catch(error => {
            dispatch(actionLoading())
            sweetalert2.fire('Error interno!', "Error intentando traer la información, por favor intente mas tarde", "error")
            dispatch(actionSetErrorMovies("Error de conexión"))
        })
}

export const dispatchGetMovie = groupId => dispatch => {
    dispatch(actionLoading())
    fetch(`${process.env.REACT_APP_API_URL}/services/content/data?device_id=web&device_category=web&device_model=web&device_type=%20web&format=json&device_manufacturer=generic&authpn=webclient&authpt=tfg1h3j4k6fd7&api_version=v5.86&region=mexico&HKS%20=9s5hqq76r3g6sg4jb90l38us52&user_id=22822863&group_id=${groupId}`)
        .then(response => response.json())
        .then(data => {
            dispatch(actionLoading())
            if (data.status === "1") {
                sweetalert2.fire('Tenemos un problema!', "No pudimos traer la información del servidor", "error")
                dispatch(actionSetErrorMovie("Algo ha ido mal"))
            } else if (data.status === "0") {
                dispatch(actionSetMovie(data.response.group))
            }

        })
        .catch(error => {
            dispatch(actionLoading())
            sweetalert2.fire('Error interno!', "Error intentando traer la información, por favor intente mas tarde", "error")
            dispatch(actionSetErrorMovie("Error de conexión"))
        })
}