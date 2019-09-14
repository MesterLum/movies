import * as React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

// Dispatchs
import { dispatchGetMovies } from '../actions/movies'

// Components
import ItemPlay from '../components/item'

class List extends React.Component {

    state = {
        width: window.innerWidth
    }

    componentDidMount = () => {
        this.props.getMovies()
        window.addEventListener('resize', e => {
            //console.log(this.state.width, window.innerWidth)
           //if (this.state.width > window.innerWidth && window.innerWidth < 750) {
                this.setState({width: window.innerWidth})
            //}
        })
    }


    render() {
        const { error, movies } = this.props
        console.log(movies, window.innerWidth)
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
                                url={this.state.width < 750 ? `${movie.image_base_horizontal}?size=290x163` : `${movie.image_base_horizontal}?size=200x300`}
                                id={movie.id}
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



