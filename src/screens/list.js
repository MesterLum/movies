import * as React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

// Dispatchs
import { dispatchGetMovies } from '../actions/movies'

// Components
import ItemPlay from '../components/item'
import Filter from '../components/filter'
import { getMoviesWithFilters } from '../selectors/filterMovies';

class List extends React.Component {

    componentDidMount = () => {
        if (this.props.movies && this.props.movies.length < 1)
            this.props.getMovies()
    }

    render() {
        const { error, movies } = this.props
        if (error)
            return <div className="alert alert-danger text-center" role="alert">{error} </div>
        return (
            <>
                <Filter />
                <div className="text-center">
                    {
                        movies.length < 1 ?
                            <div style={{ width: '50%', margin: '0 auto' }} className="alert alert-warning text-center" role="alert">No hay peliculas</div>
                            :
                            movies.map((movie, index) => (
                                <ItemPlay
                                    key={index}
                                    movie={movie}
                                />
                            ))
                    }
                </div>
            </>
        )
    }
}

List.propTypes = {
    movies: PropTypes.array.isRequired,
    error: PropTypes.string.isRequired,
    getMovies: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    error: state.movies.error,
    movies: getMoviesWithFilters(state)
})

const mapDispatchToProps = dispatch => ({
    getMovies: () => dispatch(dispatchGetMovies())
})

export default connect(mapStateToProps, mapDispatchToProps)(List)



