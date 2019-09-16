import * as React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

// Dispatchs
import { dispatchGetMovies } from '../actions/movies'

// Components
import ItemPlay from '../components/item'

class List extends React.Component {

    componentDidMount = () => {
        this.props.getMovies()
    }


    render() {
        const { error, movies } = this.props
        
        if (error) {
            return <div className="alert alert-danger" role="alert">{error} </div>
        } else if (movies.lenght === 0) {
            return <div className="alert alert-warning" role="alert">No hay peliculas</div>
        }
        return (
            <>
                <div style={{ textAlign: 'center' }}>
                    {
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
    ...state.movies
})

const mapDispatchToProps = dispatch => ({
    getMovies: () => dispatch(dispatchGetMovies())
})

export default connect(mapStateToProps, mapDispatchToProps)(List)



